import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteConfig.indexable
      ? {
          userAgent: "*",
          allow: "/",
          disallow: "/api/",
        }
      : {
          userAgent: "*",
          disallow: "/",
        },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
