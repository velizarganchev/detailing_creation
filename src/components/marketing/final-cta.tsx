import { Camera, ClipboardCheck, Mail } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

const requestIcons = [ClipboardCheck, Camera, Mail];

type FinalCtaProps = {
  copy: Dictionary["cta"];
  locale: Locale;
};

export function FinalCta({ copy, locale }: FinalCtaProps) {
  return (
    <section id="contact" className="bg-background py-22 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-xl bg-[#0a1b25] text-white">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
                light
              />
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                {copy.assessmentTitle}
              </p>
              <ul className="mt-7 space-y-6">
                {copy.items.map((item, index) => {
                  const Icon = requestIcons[index];
                  return (
                    <li key={item} className="flex items-center gap-4">
                      <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/8">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-white/85">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-9 border-t border-white/16 pt-6 text-xs leading-5 text-white/60">
                {copy.contactNotice}
              </p>
            </div>
            <div className="border-t border-primary/10 bg-[#f4f1ea] p-6 text-foreground sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <InquiryForm copy={copy.form} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
