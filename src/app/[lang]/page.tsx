import { notFound } from "next/navigation";

import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { Pricing } from "@/components/marketing/pricing";
import { Process } from "@/components/marketing/process";
import { ServiceArea } from "@/components/marketing/service-area";
import { Services } from "@/components/marketing/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <>
      <SiteHeader locale={lang} copy={dictionary.navigation} />
      <main>
        <Hero copy={dictionary.hero} visualCopy={dictionary.aircraftVisual} />
        <Services copy={dictionary.services} />
        <Pricing copy={dictionary.pricing} />
        <Process copy={dictionary.process} />
        <ServiceArea copy={dictionary.serviceArea} locale={lang} />
        <FinalCta copy={dictionary.cta} locale={lang} />
      </main>
      <SiteFooter locale={lang} copy={dictionary.footer} />
    </>
  );
}
