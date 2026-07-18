import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const lastModified = new Date("2026-07-18");
const languages = {
  de: `${siteConfig.url}/de`,
  en: `${siteConfig.url}/en`,
  "x-default": `${siteConfig.url}/de`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/de`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
