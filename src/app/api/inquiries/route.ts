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
  return Response.json({ ok: false, code }, { status });
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

function getExtension(file: File): string {
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";
  return "jpg";
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");

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
    return Response.json({ ok: true, code: "SUBMITTED" });
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

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return jsonError("NOT_CONFIGURED", 503);
  }

  const inquiryId = crypto.randomUUID();
  const uploadedPaths: string[] = [];

  try {
    for (const file of files) {
      const path = `${inquiryId}/${crypto.randomUUID()}.${getExtension(file)}`;
      const { error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(path, file, {
          cacheControl: "3600",
          contentType: file.type,
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

    return Response.json({ ok: true, code: "SUBMITTED" }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission failed", error);

    if (uploadedPaths.length > 0) {
      await supabase.storage.from(STORAGE_BUCKET).remove(uploadedPaths);
    }

    return jsonError("SUBMISSION_FAILED", 500);
  }
}
