import type { Locale } from "@/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

type StructuredDataProps = {
  description: string;
  locale: Locale;
};

export function StructuredData({
  description,
  locale,
}: StructuredDataProps) {
  const organizationId = `${siteConfig.url}/#organization`;
  const serviceId = `${siteConfig.url}/#aircraft-detailing-service`;
  const pageUrl = `${siteConfig.url}/${locale}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name:
          locale === "de"
            ? "Mobile Flugzeugaufbereitung"
            : "Mobile aircraft detailing",
        description,
        url: pageUrl,
        serviceType: "Aircraft detailing",
        provider: {
          "@id": organizationId,
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.location.latitude,
            longitude: siteConfig.location.longitude,
          },
          geoRadius: siteConfig.location.radiusMeters,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
