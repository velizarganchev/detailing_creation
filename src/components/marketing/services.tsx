import {
  Armchair,
  ArrowDownRight,
  CircleGauge,
  Droplets,
  Eye,
  ScanSearch,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

type Service = {
  icon: LucideIcon;
  number: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Droplets,
  },
  {
    number: "02",
    icon: Armchair,
  },
  {
    number: "03",
    icon: Sparkles,
  },
  {
    number: "04",
    icon: Shield,
  },
  {
    number: "05",
    icon: CircleGauge,
  },
  {
    number: "06",
    icon: Eye,
  },
  {
    number: "07",
    icon: ScanSearch,
  },
];

export function Services({ copy }: { copy: Dictionary["services"] }) {
  return (
    <section id="services" className="bg-background py-22 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
          />
          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground lg:justify-self-end lg:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-14 grid border-l border-t md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const content = copy.items[index];
            return (
              <article
                key={content.title}
                className="group flex min-h-[27rem] flex-col border-b border-r bg-card p-7 transition-colors hover:bg-white sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {service.number}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="mt-16 text-xl font-semibold tracking-[-0.035em]">
                  {content.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {content.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border/80 pt-5">
                  {content.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-5 text-foreground/78"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {copy.requestService}
                  <ArrowDownRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted-foreground">
          {copy.note}
        </p>
      </div>
    </section>
  );
}
