"use client";

import { ArrowUpRight, CheckCircle2, ImagePlus, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

type InquiryFormProps = {
  copy: Dictionary["cta"]["form"];
  locale: Locale;
};

type FormStatus = {
  kind: "idle" | "success" | "error";
  message: string;
};

const fieldClassName =
  "min-h-12 w-full rounded-md border border-primary/15 bg-white px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent focus:ring-3 focus:ring-accent/15";

export function InquiryForm({ copy, locale }: InquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    kind: "idle",
    message: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        code?: string;
      };

      if (response.ok && result.ok) {
        formRef.current?.reset();
        setSelectedFiles([]);
        setStatus({ kind: "success", message: copy.success });
        return;
      }

      const message =
        result.code === "NOT_CONFIGURED"
          ? copy.notConfigured
          : result.code === "FILES_TOO_LARGE"
            ? copy.filesTooLarge
            : result.code === "INVALID_FILES"
              ? copy.invalidFiles
              : result.code === "INVALID_FIELDS"
                ? copy.invalidFields
                : copy.error;

      setStatus({ kind: "error", message });
    } catch {
      setStatus({ kind: "error", message: copy.error });
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="locale" value={locale} />
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">{copy.website}</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a5f31]">
            {copy.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            {copy.title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">{copy.required}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.fullName} *</span>
          <input
            className={fieldClassName}
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.company}</span>
          <input
            className={fieldClassName}
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.email} *</span>
          <input
            className={fieldClassName}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.phone}</span>
          <input
            className={fieldClassName}
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.aircraft} *</span>
          <input
            className={fieldClassName}
            name="aircraft"
            type="text"
            maxLength={160}
            placeholder={copy.aircraftPlaceholder}
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>{copy.location} *</span>
          <input
            className={fieldClassName}
            name="location"
            type="text"
            maxLength={160}
            placeholder={copy.locationPlaceholder}
            required
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium">
        <span>{copy.service} *</span>
        <select
          className={fieldClassName}
          name="service"
          defaultValue=""
          required
        >
          <option value="" disabled>
            {copy.servicePlaceholder}
          </option>
          {copy.services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="text-sm font-medium">
          {copy.contactPreference} *
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {copy.contactOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm"
            >
              <input
                name="contactPreference"
                type="radio"
                value={option.value}
                defaultChecked={option.value === "email"}
                required
                className="accent-[#c88b54]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-2 text-sm font-medium">
        <span>{copy.message} *</span>
        <textarea
          className={`${fieldClassName} min-h-36 resize-y py-3`}
          name="message"
          minLength={20}
          maxLength={3000}
          placeholder={copy.messagePlaceholder}
          required
        />
      </label>

      <label className="block cursor-pointer rounded-lg border border-dashed border-primary/20 bg-white/60 p-5 transition hover:border-accent">
        <span className="flex items-center gap-3 text-sm font-semibold">
          <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
            <ImagePlus className="size-5" aria-hidden="true" />
          </span>
          {copy.photos}
        </span>
        <span className="mt-2 block pl-13 text-xs leading-5 text-muted-foreground">
          {copy.photosHelp}
        </span>
        <input
          className="sr-only"
          name="photos"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(event) => {
            const files = Array.from(event.currentTarget.files ?? []);
            setSelectedFiles(files.map((file) => file.name));
          }}
        />
        {selectedFiles.length > 0 ? (
          <span className="mt-3 block pl-13 text-xs text-primary">
            {selectedFiles.slice(0, 3).join(" · ")}
          </span>
        ) : null}
      </label>

      <label className="flex items-start gap-3 text-xs leading-5 text-muted-foreground">
        <input
          className="mt-1 size-4 shrink-0 accent-[#c88b54]"
          name="consent"
          type="checkbox"
          required
        />
        <span>
          {copy.privacyAcknowledgementBefore}{" "}
          <Link
            href={`/${locale}/datenschutz`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline decoration-primary/35 underline-offset-3 hover:decoration-accent"
          >
            {copy.privacyPolicy}
          </Link>
          {copy.privacyAcknowledgementAfter}
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="size-4" aria-hidden="true" />
          )}
          {pending ? copy.pending : copy.submit}
        </Button>
        <p
          className={
            status.kind === "success"
              ? "flex items-center gap-2 text-sm text-emerald-700"
              : "text-sm text-red-700"
          }
          aria-live="polite"
        >
          {status.kind === "success" ? (
            <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          ) : null}
          {status.message}
        </p>
      </div>
    </form>
  );
}
