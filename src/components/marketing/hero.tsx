import { ArrowDownRight, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { AircraftVisual } from "@/components/marketing/aircraft-visual";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type HeroProps = {
  copy: Dictionary["hero"];
  visualCopy: Dictionary["aircraftVisual"];
};

export function Hero({ copy, visualCopy }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-[#07141d] text-white">
      <div className="absolute -left-64 top-32 size-[520px] rounded-full bg-[#183d4f]/28 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-18 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/58">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2">
              <MapPin className="size-3.5 text-[#d59b65]" /> {copy.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2">
              <ShieldCheck className="size-3.5 text-[#d59b65]" />{" "}
              {copy.category}
            </span>
          </div>

          <h1 className="max-w-3xl text-balance text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/62 sm:text-xl">
            {copy.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              {copy.primaryCta}
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="#services"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/12 py-6">
            {copy.signals.map((signal) => (
              <div key={signal.label} className="border-r border-white/12 px-3 first:pl-0 last:border-r-0 sm:px-6">
                <dt className="text-[0.68rem] leading-4 text-white/42 sm:text-xs">
                  {signal.label}
                </dt>
                <dd className="mb-1 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                  {signal.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <AircraftVisual copy={visualCopy} />
      </div>
    </section>
  );
}
