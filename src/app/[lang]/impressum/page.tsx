import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/legal-document";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import { getLegalDictionary } from "@/i18n/legal-dictionaries";

type LegalPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const document = getLegalDictionary(lang).imprint;

  return {
    title: document.title,
    description: document.description,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${lang}/impressum`,
      languages: {
        de: "/de/impressum",
        en: "/en/impressum",
      },
    },
  };
}

export default async function ImprintPage({ params }: LegalPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const document = getLegalDictionary(lang).imprint;

  return (
    <>
      <SiteHeader locale={lang} copy={dictionary.navigation} />
      <LegalDocument locale={lang} document={document} />
      <SiteFooter locale={lang} copy={dictionary.footer} />
    </>
  );
}
