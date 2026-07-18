import { MapPin, Navigation } from "lucide-react";

import { GoogleServiceMap } from "@/components/marketing/google-service-map";
import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

type ServiceAreaProps = {
  copy: Dictionary["serviceArea"];
  locale: Locale;
};

export function ServiceArea({ copy, locale }: ServiceAreaProps) {
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

        <GoogleServiceMap copy={copy.map} locale={locale} />
      </div>
    </section>
  );
}
