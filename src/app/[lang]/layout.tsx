import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import {
  getDictionary,
  hasLocale,
  locales,
} from "@/i18n/dictionaries";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const { metadata } = await getDictionary(lang);

  return {
    applicationName: "Detailing Creation",
    title: {
      default: metadata.title,
      template: "%s | Detailing Creation",
    },
    description: metadata.description,
    metadataBase: new URL("https://detailing-creation.de"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      title: "Detailing Creation",
      siteName: "Detailing Creation",
      description: metadata.openGraphDescription,
      locale: lang === "de" ? "de_DE" : "en_GB",
      alternateLocale: lang === "de" ? ["en_GB"] : ["de_DE"],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
