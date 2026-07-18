import { ArrowLeft, ExternalLink, FileWarning } from "lucide-react";
import Link from "next/link";

import type { LegalDocument as LegalDocumentData } from "@/i18n/legal-dictionaries";
import type { Locale } from "@/i18n/dictionaries";

type LegalDocumentProps = {
  document: LegalDocumentData;
  locale: Locale;
};

export function LegalDocument({ document, locale }: LegalDocumentProps) {
  return (
    <main className="bg-background">
      <section className="border-b border-primary/10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {document.backHome}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#e0a66f]">
            {document.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
            {document.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            {document.description}
          </p>
          <p className="mt-7 text-xs uppercase tracking-[0.14em] text-white/45">
            {document.updatedLabel}: {document.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <aside className="flex gap-4 rounded-lg border border-amber-500/30 bg-amber-50 p-5 text-amber-950 sm:p-6">
          <FileWarning className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <h2 className="font-semibold">{document.draftTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-amber-950/75">
              {document.draftDescription}
            </p>
          </div>
        </aside>

        <article className="mt-10 space-y-6">
          {document.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-primary/10 bg-card p-6 shadow-[0_14px_40px_rgba(10,39,56,0.05)] sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/80 sm:text-base">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className={
                        item.includes("[")
                          ? "rounded-md border border-dashed border-amber-500/35 bg-amber-50/70 px-3 py-2 text-amber-950"
                          : ""
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.reviewNote ? (
                <p className="mt-5 rounded-md border-l-2 border-accent bg-secondary/60 px-4 py-3 text-xs leading-5 text-primary/75 sm:text-sm">
                  {section.reviewNote}
                </p>
              ) : null}

              {section.links ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-accent"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
