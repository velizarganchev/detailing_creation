import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import type { Dictionary } from "@/i18n/dictionaries";

export function SiteFooter({ copy }: { copy: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-white/10 bg-[#061017] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:px-10">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
            {copy.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end">
          <div className="flex flex-col gap-3 text-white/60">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {copy.navigation}
            </span>
            <Link href="#services">{copy.services}</Link>
            <Link href="#process">{copy.process}</Link>
            <Link href="#contact">{copy.contact}</Link>
          </div>
          <div className="flex flex-col gap-3 text-white/60">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {copy.legal}
            </span>
            <span>{copy.imprint}</span>
            <span>{copy.privacy}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-white/38">
        © {new Date().getFullYear()} Detailing Creation. {copy.conceptPhase}
      </div>
    </footer>
  );
}
