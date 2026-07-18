import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import {
  getDictionary,
  hasLocale,
  locales,
} from "@/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

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
    applicationName: siteConfig.name,
    title: {
      default: metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: metadata.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    robots: {
      index: siteConfig.indexable,
      follow: siteConfig.indexable,
    },
    openGraph: {
      title: metadata.title,
      siteName: siteConfig.name,
      description: metadata.openGraphDescription,
      url: `/${lang}`,
      locale: lang === "de" ? "de_DE" : "en_GB",
      alternateLocale: lang === "de" ? ["en_GB"] : ["de_DE"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.openGraphDescription,
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
