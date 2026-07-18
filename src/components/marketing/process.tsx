import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

export function Process({ copy }: { copy: Dictionary["process"] }) {
  return (
    <section id="process" className="bg-[#0a1b25] py-22 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          light
        />

        <ol className="mt-14 grid border-l border-t border-white/12 md:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => (
            <li
              key={step.title}
              className="min-h-64 border-b border-r border-white/12 p-7 sm:p-8"
            >
              <span className="font-mono text-xs text-[#d59b65]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/52">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
