const configuredSiteUrl = process.env.SITE_URL?.trim();

export const siteConfig = {
  name: "Aircraft Detailing Creation",
  url: (configuredSiteUrl || "http://localhost:3000").replace(/\/$/, ""),
  indexable: process.env.SITE_INDEXABLE === "true",
  location: {
    latitude: 51.61175,
    longitude: 8.33631,
    radiusMeters: 100_000,
  },
} as const;
