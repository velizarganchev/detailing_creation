import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { LanguageSwitcher } from "@/components/language-switcher";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  copy: Dictionary["navigation"];
};

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const navigation = [
    { href: "#services", label: copy.services },
    { href: "#process", label: copy.process },
    { href: "#service-area", label: copy.serviceArea },
    { href: "#contact", label: copy.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07141d]/92 text-white backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#top" aria-label={copy.homeLabel}>
          <BrandMark />
        </Link>

        <nav
          aria-label={copy.mainLabel}
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/68 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-10 sm:inline-flex",
            )}
          >
            {copy.requestQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
