import "server-only";

export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

const dictionaries = {
  de: {
    metadata: {
      title: "Detailing Creation | Aircraft Detailing in 59597",
      description:
        "Professionelle Pflege, Aufbereitung und Schutz für Privat- und Geschäftsflugzeuge im Raum 59597.",
      openGraphDescription:
        "Präzise Flugzeugpflege für Werterhalt, Schutz und einen professionellen Auftritt.",
    },
    navigation: {
      services: "Leistungen",
      process: "Ablauf",
      serviceArea: "Einsatzgebiet",
      contact: "Kontakt",
      requestQuote: "Angebot anfragen",
      mainLabel: "Hauptnavigation",
      homeLabel: "Detailing Creation – Startseite",
      languageLabel: "Sprache wechseln",
    },
    hero: {
      location: "59597 · Deutschland",
      category: "Aircraft Care",
      title: "Werterhalt beginnt mit Präzision am Boden.",
      description:
        "Professionelle Pflege, Aufbereitung und Schutz für Privat- und Geschäftsflugzeuge – individuell geplant für Zustand, Material und Einsatzprofil.",
      primaryCta: "Individuelle Anfrage",
      secondaryCta: "Leistungen ansehen",
      signals: [
        { value: "5+", label: "Jahre Erfahrung im Team" },
        { value: "100 km", label: "geplanter Aktionsradius" },
        { value: "1:1", label: "individuelle Bewertung" },
      ],
    },
    aircraftVisual: {
      analysis: "Oberflächenanalyse",
      focus: "Fokus",
      details: "Zustand · Material · Schutz",
    },
    services: {
      eyebrow: "Leistungssystem",
      title: "Pflege entlang des tatsächlichen Zustands.",
      description:
        "Keine pauschalen Pakete für jedes Luftfahrzeug. Der sinnvolle Leistungsumfang wird nach Oberfläche, Nutzung, Standort und Ziel definiert.",
      items: [
        {
          title: "Exterior Care",
          description:
            "Materialgerechte Reinigung und Aufbereitung von Rumpf, Flächen und schwer zugänglichen Bereichen.",
        },
        {
          title: "Paint Correction",
          description:
            "Geplante Korrektur verwitterter oder oxidierter Oberflächen nach vorheriger Zustandsbewertung.",
        },
        {
          title: "Surface Protection",
          description:
            "Schutzkonzepte für lackierte und empfindliche Oberflächen – abgestimmt auf Nutzung und Abstellung.",
        },
        {
          title: "Interior Care",
          description:
            "Sorgfältige Pflege von Leder, Textilien und Innenraumoberflächen mit Blick auf Materialverträglichkeit.",
        },
        {
          title: "Brightwork & Windows",
          description:
            "Gezielte Pflege von Metall, Plexiglas und weiteren spezialisierten Sicht- und Zierflächen.",
        },
        {
          title: "Aircraft Assessment",
          description:
            "Individuelle Bestandsaufnahme als Grundlage für Umfang, Ablauf und belastbare Angebotserstellung.",
        },
      ],
      note: "Der finale Leistungsumfang wird vor Veröffentlichung gemeinsam bestätigt. Aircraft Painting und Reparaturen sind derzeit nicht als aktive Leistungen dargestellt.",
    },
    process: {
      eyebrow: "Vorgesehener Ablauf",
      title: "Klar definiert. Vom ersten Bild bis zur Übergabe.",
      description:
        "Der Ablauf reduziert Unklarheiten vor Ort und schafft eine belastbare Grundlage für Umfang und Angebot.",
      steps: [
        {
          title: "Anfrage",
          text: "Luftfahrzeug, Standort, gewünschte Leistung und erste Fotos übermitteln.",
        },
        {
          title: "Bewertung",
          text: "Zustand, Materialien, Zugänglichkeit und sinnvollen Umfang abstimmen.",
        },
        {
          title: "Ausführung",
          text: "Arbeiten nach vereinbartem Umfang und passend zur Situation vor Ort durchführen.",
        },
        {
          title: "Übergabe",
          text: "Ergebnis gemeinsam prüfen und Empfehlungen für die weitere Pflege festhalten.",
        },
      ],
    },
    serviceArea: {
      eyebrow: "Einsatzgebiet",
      title: "Regional gestartet. Verlässlich geplant.",
      description:
        "Der Start ist rund um 59597 mit einem vorläufigen Radius von etwa 100 Kilometern vorgesehen. Konkrete Flugplätze und Zugangsbedingungen werden noch bestätigt.",
      base: "Basis 59597",
      radius: "ca. 100 km geplant",
    },
    cta: {
      eyebrow: "Individuelle Anfrage",
      title: "Zeigen Sie uns, worum es geht.",
      description:
        "Mit wenigen Angaben und aktuellen Fotos lässt sich der nächste sinnvolle Schritt schneller einordnen.",
      formNotice: "Anfrageformular folgt im nächsten Schritt",
      assessmentTitle: "Für eine erste Einschätzung",
      items: [
        "Gewünschte Leistung",
        "Fotos vom aktuellen Zustand",
        "Bevorzugter Kontaktweg",
      ],
      contactNotice:
        "E-Mail, Telefon und Geschäftszeiten werden ergänzt, sobald die offiziellen Kontaktdaten feststehen.",
    },
    footer: {
      description:
        "Aircraft Detailing für Privat- und Geschäftsflugzeuge im Raum 59597 und Umgebung.",
      navigation: "Navigation",
      legal: "Rechtliches",
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt",
      imprint: "Impressum folgt",
      privacy: "Datenschutz folgt",
      conceptPhase: "Konzeptphase.",
    },
  },
  en: {
    metadata: {
      title: "Detailing Creation | Aircraft Detailing near 59597",
      description:
        "Professional care, restoration and protection for private and business aircraft in the 59597 region.",
      openGraphDescription:
        "Precision aircraft care focused on value retention, protection and a professional appearance.",
    },
    navigation: {
      services: "Services",
      process: "Process",
      serviceArea: "Service area",
      contact: "Contact",
      requestQuote: "Request a quote",
      mainLabel: "Main navigation",
      homeLabel: "Detailing Creation – Home",
      languageLabel: "Switch language",
    },
    hero: {
      location: "59597 · Germany",
      category: "Aircraft Care",
      title: "Value retention starts with precision on the ground.",
      description:
        "Professional care, restoration and protection for private and business aircraft – individually planned around condition, material and operating profile.",
      primaryCta: "Request an assessment",
      secondaryCta: "Explore services",
      signals: [
        { value: "5+", label: "years of team experience" },
        { value: "100 km", label: "planned service radius" },
        { value: "1:1", label: "individual assessment" },
      ],
    },
    aircraftVisual: {
      analysis: "Surface analysis",
      focus: "Focus",
      details: "Condition · Material · Protection",
    },
    services: {
      eyebrow: "Service system",
      title: "Care shaped by the aircraft’s actual condition.",
      description:
        "No one-size-fits-all packages. The right scope is defined by the surface, usage, location and desired outcome.",
      items: [
        {
          title: "Exterior Care",
          description:
            "Material-appropriate cleaning and detailing for the fuselage, wings and hard-to-reach areas.",
        },
        {
          title: "Paint Correction",
          description:
            "Planned correction of weathered or oxidised surfaces following an initial condition assessment.",
        },
        {
          title: "Surface Protection",
          description:
            "Protection concepts for painted and sensitive surfaces, aligned with operation and storage.",
        },
        {
          title: "Interior Care",
          description:
            "Careful treatment of leather, textiles and cabin surfaces with material compatibility in mind.",
        },
        {
          title: "Brightwork & Windows",
          description:
            "Targeted care for metal, acrylic glazing and other specialised transparent and decorative surfaces.",
        },
        {
          title: "Aircraft Assessment",
          description:
            "An individual condition review providing the basis for scope, process and a reliable quotation.",
        },
      ],
      note: "The final service scope will be confirmed together before publication. Aircraft painting and repairs are not currently presented as active services.",
    },
    process: {
      eyebrow: "Proposed process",
      title: "Clearly defined. From the first image to handover.",
      description:
        "The process reduces uncertainty on site and creates a reliable basis for scope and quotation.",
      steps: [
        {
          title: "Request",
          text: "Share the aircraft, location, required service and initial photographs.",
        },
        {
          title: "Assessment",
          text: "Align on condition, materials, access and the appropriate scope of work.",
        },
        {
          title: "Execution",
          text: "Complete the agreed work in line with the aircraft and the situation on site.",
        },
        {
          title: "Handover",
          text: "Review the result together and record recommendations for continued care.",
        },
      ],
    },
    serviceArea: {
      eyebrow: "Service area",
      title: "Locally launched. Reliably planned.",
      description:
        "The initial service area is planned around 59597 with a preliminary radius of approximately 100 kilometres. Specific airfields and access requirements are still being confirmed.",
      base: "Base 59597",
      radius: "approx. 100 km planned",
    },
    cta: {
      eyebrow: "Individual request",
      title: "Show us what needs attention.",
      description:
        "A few key details and current photographs help us identify the most appropriate next step.",
      formNotice: "Request form coming in the next step",
      assessmentTitle: "For an initial assessment",
      items: [
        "Required service",
        "Photographs of the current condition",
        "Preferred contact method",
      ],
      contactNotice:
        "Email, telephone and business hours will be added as soon as the official contact details are confirmed.",
    },
    footer: {
      description:
        "Aircraft detailing for private and business aircraft in the 59597 region and surrounding area.",
      navigation: "Navigation",
      legal: "Legal",
      services: "Services",
      process: "Process",
      contact: "Contact",
      imprint: "Imprint to follow",
      privacy: "Privacy policy to follow",
      conceptPhase: "Concept phase.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}
