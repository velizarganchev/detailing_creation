"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({
  locale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalizedPath(targetLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <div
      aria-label={label}
      className="flex h-9 items-center rounded-md border border-white/18 bg-white/5 p-0.5 text-[0.65rem] font-semibold tracking-[0.08em]"
    >
      {(["de", "en"] as const).map((targetLocale) =>
        targetLocale === locale ? (
          <span
            key={targetLocale}
            aria-current="page"
            className="grid h-7 min-w-8 place-items-center rounded-sm bg-white text-[#07141d]"
          >
            {targetLocale.toUpperCase()}
          </span>
        ) : (
          <Link
            key={targetLocale}
            href={getLocalizedPath(targetLocale)}
            hrefLang={targetLocale}
            className={cn(
              "grid h-7 min-w-8 place-items-center rounded-sm text-white/55 transition-colors",
              "hover:bg-white/8 hover:text-white",
            )}
          >
            {targetLocale.toUpperCase()}
          </Link>
        ),
      )}
    </div>
  );
}
