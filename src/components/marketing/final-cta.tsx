import { ArrowUpRight, Camera, ClipboardCheck, Mail } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

const requestIcons = [ClipboardCheck, Camera, Mail];

export function FinalCta({ copy }: { copy: Dictionary["cta"] }) {
  return (
    <section id="contact" className="bg-background py-22 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-xl bg-[#a95f2e] text-white">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
                light
              />
              <div className="mt-9 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#52280f] opacity-75">
                {copy.formNotice}
                <ArrowUpRight className="size-4" />
              </div>
            </div>
            <div className="border-t border-white/18 bg-[#88451f] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                {copy.assessmentTitle}
              </p>
              <ul className="mt-7 space-y-6">
                {copy.items.map((item, index) => {
                  const Icon = requestIcons[index];
                  return (
                    <li key={item} className="flex items-center gap-4">
                      <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/8">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-sm text-white/82">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-9 border-t border-white/16 pt-6 text-xs leading-5 text-white/45">
                {copy.contactNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
