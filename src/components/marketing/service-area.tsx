import { MapPin, Navigation, Plane } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

export function ServiceArea({ copy }: { copy: Dictionary["serviceArea"] }) {
  return (
    <section id="service-area" className="bg-[#dfe8e9] py-22 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 px-4 py-2 text-sm text-primary">
              <MapPin className="size-4" /> {copy.base}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 px-4 py-2 text-sm text-primary">
              <Navigation className="size-4" /> {copy.radius}
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 bg-[#b9ced3]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78)_0_2px,transparent_3px)] bg-[size:28px_28px] opacity-45" />
          <div className="absolute left-1/2 top-1/2 size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/35" />
          <div className="absolute left-1/2 top-1/2 size-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/18" />
          <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-white shadow-2xl">
            <Plane className="size-8 -rotate-12" strokeWidth={1.5} />
          </div>
          <span className="absolute bottom-6 left-6 rounded-md bg-white/80 px-3 py-2 font-mono text-xs text-primary backdrop-blur">
            59597 / NRW
          </span>
        </div>
      </div>
    </section>
  );
}
