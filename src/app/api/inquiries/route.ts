import { getSupabaseAdmin } from "@/lib/supabase-admin";

const MAX_REQUEST_BYTES = 4 * 1024 * 1024;
const MAX_FILE_BYTES = 1_200_000;
const MAX_TOTAL_FILE_BYTES = 3_200_000;
const MAX_FILES = 3;
const STORAGE_BUCKET = "inquiry-uploads";

const allowedFileTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

type AllowedFileType = "image/jpeg" | "image/png" | "image/webp";

const allowedLocales = new Set(["de", "en"]);
const allowedContactPreferences = new Set(["email", "phone"]);
const allowedServices = new Set([
  "exterior-detailing",
  "interior-detailing",
  "paint-correction",
  "surface-protection",
  "brightwork",
  "window-care",
  "assessment",
]);

type ErrorCode =
  | "INVALID_REQUEST"
  | "INVALID_FIELDS"
  | "FILES_TOO_LARGE"
  | "INVALID_FILES"
  | "NOT_CONFIGURED"
  | "SUBMISSION_FAILED";

function jsonError(code: ErrorCode, status: number) {
  return Response.json(
    { ok: false, code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

function readText(
  formData: FormData,
  name: string,
  maximumLength: number,
): string | null {
  const value = formData.get(name);

  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length <= maximumLength ? trimmed : null;
}

function getExtension(fileType: AllowedFileType): string {
  if (fileType === "image/png") return "png";
  if (fileType === "image/webp") return "webp";
  return "jpg";
}

async function detectImageType(file: File): Promise<AllowedFileType | null> {
  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());

  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return "image/jpeg";
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }

  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }

  return null;
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const contentType = request.headers.get("content-type");

  if (!contentType?.toLowerCase().startsWith("multipart/form-data")) {
    return jsonError("INVALID_REQUEST", 415);
  }

  if (origin) {
    try {
      if (new URL(origin).host !== requestUrl.host) {
        return jsonError("INVALID_REQUEST", 403);
      }
    } catch {
      return jsonError("INVALID_REQUEST", 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonError("FILES_TOO_LARGE", 413);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonError("INVALID_REQUEST", 400);
  }

  const website = readText(formData, "website", 200);
  if (website) {
    return Response.json(
      { ok: true, code: "SUBMITTED" },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const locale = readText(formData, "locale", 2);
  const fullName = readText(formData, "fullName", 120);
  const company = readText(formData, "company", 160);
  const email = readText(formData, "email", 254);
  const phone = readText(formData, "phone", 50);
  const aircraft = readText(formData, "aircraft", 160);
  const location = readText(formData, "location", 160);
  const service = readText(formData, "service", 60);
  const contactPreference = readText(formData, "contactPreference", 10);
  const message = readText(formData, "message", 3000);
  const consent = formData.get("consent");

  const validEmail =
    email !== null && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasPreferredContact =
    contactPreference === "email" || Boolean(phone?.length);

  if (
    !locale ||
    !allowedLocales.has(locale) ||
    !fullName ||
    !validEmail ||
    company === null ||
    phone === null ||
    !aircraft ||
    !location ||
    !service ||
    !allowedServices.has(service) ||
    !contactPreference ||
    !allowedContactPreferences.has(contactPreference) ||
    !hasPreferredContact ||
    !message ||
    message.length < 20 ||
    consent !== "on"
  ) {
    return jsonError("INVALID_FIELDS", 422);
  }

  const files = formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);
  const totalFileBytes = files.reduce((total, file) => total + file.size, 0);

  if (
    files.length > MAX_FILES ||
    files.some((file) => file.size > MAX_FILE_BYTES) ||
    totalFileBytes > MAX_TOTAL_FILE_BYTES
  ) {
    return jsonError("FILES_TOO_LARGE", 413);
  }

  if (files.some((file) => !allowedFileTypes.has(file.type))) {
    return jsonError("INVALID_FILES", 415);
  }

  const detectedFileTypes = await Promise.all(files.map(detectImageType));
  if (
    detectedFileTypes.some(
      (detectedType, index) =>
        detectedType === null || detectedType !== files[index].type,
    )
  ) {
    return jsonError("INVALID_FILES", 415);
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return jsonError("NOT_CONFIGURED", 503);
  }

  const inquiryId = crypto.randomUUID();
  const uploadedPaths: string[] = [];

  try {
    for (const [index, file] of files.entries()) {
      const fileType = detectedFileTypes[index] as AllowedFileType;
      const path = `${inquiryId}/${crypto.randomUUID()}.${getExtension(fileType)}`;
      const { error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(path, file, {
          cacheControl: "3600",
          contentType: fileType,
          upsert: false,
        });

      if (error) {
        throw error;
      }

      uploadedPaths.push(path);
    }

    const { error } = await supabase.from("inquiries").insert({
      id: inquiryId,
      locale,
      full_name: fullName,
      company: company || null,
      email,
      phone: phone || null,
      aircraft,
      location,
      service,
      contact_preference: contactPreference,
      message,
      photo_paths: uploadedPaths,
      status: "new",
      consent_given_at: new Date().toISOString(),
    });

    if (error) {
      throw error;
    }

    return Response.json(
      { ok: true, code: "SUBMITTED" },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Inquiry submission failed", error);

    if (uploadedPaths.length > 0) {
      await supabase.storage.from(STORAGE_BUCKET).remove(uploadedPaths);
    }

    return jsonError("SUBMISSION_FAILED", 500);
  }
}
