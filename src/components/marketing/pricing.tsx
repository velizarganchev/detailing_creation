import { ArrowDownRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";

export function Pricing({ copy }: { copy: Dictionary["pricing"] }) {
  return (
    <section id="pricing" className="bg-[#0a1b25] py-22 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            light
          />
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-pretty text-base leading-7 text-white/60 lg:text-lg">
              {copy.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d59b65]/35 bg-[#d59b65]/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0aa76]">
              <span className="size-1.5 rounded-full bg-[#d59b65]" />
              {copy.conceptLabel}
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden border border-white/12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[48rem] border-collapse text-left">
              <caption className="sr-only">{copy.tableCaption}</caption>
              <thead>
                <tr className="border-b border-white/12 bg-white/[0.035]">
                  <th
                    scope="col"
                    className="w-[25%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/45"
                  >
                    {copy.aircraftClass}
                  </th>
                  <th
                    scope="col"
                    className="w-[25%] border-l border-white/12 px-6 py-5 text-sm font-semibold"
                  >
                    {copy.exteriorWash}
                  </th>
                  <th
                    scope="col"
                    className="w-[25%] border-l border-white/12 px-6 py-5 text-sm font-semibold"
                  >
                    {copy.completeCare}
                  </th>
                  <th
                    scope="col"
                    className="w-[25%] border-l border-white/12 px-6 py-5 text-sm font-semibold"
                  >
                    {copy.interiorDetail}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.tiers.map((tier) => (
                  <tr
                    key={tier.label}
                    className="border-b border-white/12 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-5 text-sm font-medium text-white/72"
                    >
                      {tier.label}
                    </th>
                    {[tier.exterior, tier.complete, tier.interior].map(
                      (price) => (
                        <td
                          key={price}
                          className="border-l border-white/12 px-6 py-5"
                        >
                          <span className="mr-1.5 text-xs text-white/38">
                            {copy.from}
                          </span>
                          <span className="font-mono text-lg text-[#e0aa76]">
                            {price}
                          </span>
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-px bg-white/12 lg:grid-cols-[1fr_1fr]">
          <div className="bg-[#0a1b25] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d59b65]">
              {copy.completeCareLabel}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">
              {copy.completeCareTitle}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {copy.completeCareItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-5 text-white/58"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#d59b65]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1b25] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d59b65]">
              {copy.customLabel}
            </p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {copy.customTitle}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/58">
                  {copy.customDescription}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#e0aa76] underline-offset-4 hover:underline"
              >
                {copy.requestAssessment}
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-2 text-xs leading-5 text-white/38 sm:grid-cols-2">
          <p>{copy.travelNote}</p>
          <p className="sm:text-right">{copy.conceptNote}</p>
        </div>
      </div>
    </section>
  );
}
