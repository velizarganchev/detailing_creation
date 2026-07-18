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
      pricing: "Preise",
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
        "Mobile Flugzeugpflege für Privat- und Geschäftsflugzeuge im Raum 59597. Der sinnvolle Leistungsumfang wird nach Zustand, Material, Nutzung und Standort individuell geplant.",
      requestService: "Diese Leistung anfragen",
      items: [
        {
          title: "Exterior Aircraft Detailing",
          description:
            "Sorgfältige Außenpflege für einen professionellen Auftritt und den langfristigen Werterhalt des Luftfahrzeugs.",
          includes: [
            "Rumpf, Tragflächen und Leitwerk",
            "Unterseiten und zugängliche Detailbereiche",
            "Materialgerechte Reinigungsverfahren",
          ],
        },
        {
          title: "Interior Aircraft Detailing",
          description:
            "Abgestimmte Pflege der Kabine mit besonderem Augenmerk auf hochwertige und empfindliche Materialien.",
          includes: [
            "Leder-, Textil- und Kunststoffpflege",
            "Kabinen- und Oberflächenreinigung",
            "Materialverträgliche Produktauswahl",
          ],
        },
        {
          title: "Paint Correction & Polishing",
          description:
            "Geplante Aufbereitung geeigneter Lackoberflächen bei Glanzverlust, Verwitterung oder sichtbarer Oxidation.",
          includes: [
            "Vorherige Zustands- und Lackbewertung",
            "Abgestimmte Politur und Glanzoptimierung",
            "Testbereich vor umfangreichen Arbeiten",
          ],
        },
        {
          title: "Surface Protection",
          description:
            "Individuell gewählter Oberflächenschutz, abgestimmt auf Lack, Nutzung, Abstellung und Pflegeziel.",
          includes: [
            "Schutz für geeignete lackierte Oberflächen",
            "Auswahl nach Einsatz- und Abstellprofil",
            "Empfehlungen für die weitere Pflege",
          ],
        },
        {
          title: "Brightwork & Metal Polishing",
          description:
            "Gezielte Aufbereitung geeigneter Metall- und Zierflächen für ein sauberes, gleichmäßiges Finish.",
          includes: [
            "Bewertung der jeweiligen Metalloberfläche",
            "Entfernung geeigneter Oxidationsspuren",
            "Politur und abgestimmter Finish-Schutz",
          ],
        },
        {
          title: "Aircraft Window Care",
          description:
            "Schonende Reinigung transparenter Luftfahrzeugflächen mit Fokus auf Materialverträglichkeit und kratzarmes Arbeiten.",
          includes: [
            "Pflege von Acryl- und Plexiglasflächen",
            "Geeignete Reiniger und weiche Werkzeuge",
            "Kontrollierte, kratzarme Arbeitsweise",
          ],
        },
        {
          title: "Aircraft Assessment & Custom Care Plan",
          description:
            "Die strukturierte Bestandsaufnahme schafft die Grundlage für einen passenden Pflegeplan und ein belastbares Angebot.",
          includes: [
            "Bewertung anhand von Fotos oder vor Ort",
            "Abstimmung von Material, Zugang und Ziel",
            "Individueller Leistungsplan und Angebot",
          ],
        },
      ],
      note: "Alle Arbeiten werden vorab auf Luftfahrzeug, Material und Zugänglichkeit abgestimmt. Aircraft Painting, strukturelle oder technische Reparaturen und Wartungsarbeiten sind nicht Bestandteil des Angebots.",
    },
    pricing: {
      eyebrow: "Preisorientierung",
      title: "Transparent starten. Präzise nach Zustand kalkulieren.",
      description:
        "Die Einstiegspreise geben eine belastbare erste Orientierung für leichte Flugzeuge. Das finale Angebot berücksichtigt MTOW, Zustand, Zugänglichkeit und den tatsächlichen Leistungsumfang.",
      conceptLabel: "Orientierungswerte zur Markteinführung",
      tableCaption:
        "Orientierende Einstiegspreise nach MTOW und Leistungspaket",
      aircraftClass: "Luftfahrzeugklasse",
      exteriorWash: "Exterior Wash",
      completeCare: "Complete Care",
      interiorDetail: "Interior Detail",
      from: "ab",
      tiers: [
        {
          label: "bis 600 kg MTOW",
          exterior: "279 €",
          complete: "399 €",
          interior: "199 €",
        },
        {
          label: "600–800 kg MTOW",
          exterior: "329 €",
          complete: "479 €",
          interior: "239 €",
        },
        {
          label: "800–1.800 kg MTOW",
          exterior: "429 €",
          complete: "619 €",
          interior: "299 €",
        },
        {
          label: "1.800–3.500 kg MTOW",
          exterior: "599 €",
          complete: "769 €",
          interior: "399 €",
        },
      ],
      completeCareLabel: "Paketlogik",
      completeCareTitle: "Complete Care verbindet die wichtigsten Grundlagen.",
      completeCareItems: [
        "Materialgerechte Außenwäsche",
        "Quick Protection",
        "Basis-Innenreinigung",
      ],
      customLabel: "Individuelle Kalkulation",
      customTitle: "Correction, Protection & Brightwork",
      customDescription:
        "Paint Correction, längerfristiger Oberflächenschutz, Brightwork und besondere Zustände werden erst nach Foto- oder Vor-Ort-Bewertung kalkuliert.",
      requestAssessment: "Bewertung anfragen",
      travelNote:
        "Anfahrt, Flugplatzzugang und besondere Arbeitsbedingungen werden vor der Buchung transparent bestätigt.",
      conceptNote:
        "Konzeptpreise – finale Preis- und Steuerdarstellung folgt vor Veröffentlichung.",
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
      map: {
        ariaLabel: "Interaktive Karte des geplanten Einsatzgebiets",
        consentTitle: "Google Maps erst nach Ihrer Zustimmung",
        consentDescription:
          "Beim Aktivieren wird eine Verbindung zu Google hergestellt.",
        privacyLink: "Mehr zum Datenschutz",
        loadButton: "Karte laden",
        loading: "Karte wird geladen …",
        missingKey:
          "Die Karte ist vorbereitet. Der Google-Maps-Schlüssel muss noch eingerichtet werden.",
        error:
          "Die Karte konnte nicht geladen werden. Bitte versuchen Sie es erneut.",
        openExternal: "In Google Maps öffnen",
      },
    },
    cta: {
      eyebrow: "Individuelle Anfrage",
      title: "Zeigen Sie uns, worum es geht.",
      description:
        "Mit wenigen Angaben und aktuellen Fotos lässt sich der nächste sinnvolle Schritt schneller einordnen.",
      assessmentTitle: "Für eine erste Einschätzung",
      items: [
        "Luftfahrzeug, Standort und gewünschte Leistung",
        "Bis zu drei aktuelle Zustandsfotos",
        "Bevorzugter Kontaktweg für die Rückmeldung",
      ],
      contactNotice:
        "E-Mail, Telefon und Geschäftszeiten werden ergänzt, sobald die offiziellen Kontaktdaten feststehen.",
      form: {
        eyebrow: "Anfrageformular",
        title: "Erste Einschätzung anfragen",
        required: "* Pflichtfelder",
        website: "Website",
        fullName: "Name",
        company: "Unternehmen",
        email: "E-Mail",
        phone: "Telefon",
        aircraft: "Luftfahrzeug",
        aircraftPlaceholder: "Hersteller und Modell",
        location: "Standort",
        locationPlaceholder: "Flugplatz oder Postleitzahl",
        service: "Gewünschte Leistung",
        servicePlaceholder: "Leistung auswählen",
        services: [
          {
            value: "exterior-detailing",
            label: "Exterior Aircraft Detailing",
          },
          {
            value: "interior-detailing",
            label: "Interior Aircraft Detailing",
          },
          {
            value: "paint-correction",
            label: "Paint Correction & Polishing",
          },
          {
            value: "surface-protection",
            label: "Surface Protection",
          },
          {
            value: "brightwork",
            label: "Brightwork & Metal Polishing",
          },
          {
            value: "window-care",
            label: "Aircraft Window Care",
          },
          {
            value: "assessment",
            label: "Aircraft Assessment & Custom Care Plan",
          },
        ],
        contactPreference: "Bevorzugter Kontaktweg",
        contactOptions: [
          { value: "email", label: "E-Mail" },
          { value: "phone", label: "Telefon" },
        ],
        message: "Beschreibung",
        messagePlaceholder:
          "Was soll behandelt werden? Beschreiben Sie bitte den aktuellen Zustand und das gewünschte Ergebnis.",
        photos: "Aktuelle Fotos hinzufügen",
        photosHelp:
          "Optional: maximal 3 JPG-, PNG- oder WebP-Dateien, jeweils bis 1,2 MB.",
        privacyAcknowledgementBefore: "Ich habe die",
        privacyPolicy: "Datenschutzerklärung",
        privacyAcknowledgementAfter: " zur Kenntnis genommen.",
        submit: "Anfrage senden",
        pending: "Wird gesendet …",
        success:
          "Vielen Dank. Ihre Anfrage wurde übermittelt und wird geprüft.",
        notConfigured:
          "Das sichere Versenden wird gerade eingerichtet. Bitte versuchen Sie es später erneut.",
        invalidFields:
          "Bitte prüfen Sie die Pflichtfelder und Ihre Kontaktdaten.",
        filesTooLarge:
          "Die Fotos sind zu groß. Bitte wählen Sie bis zu 3 Dateien mit jeweils maximal 1,2 MB.",
        invalidFiles:
          "Bitte verwenden Sie ausschließlich JPG-, PNG- oder WebP-Fotos.",
        error:
          "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
    },
    footer: {
      description:
        "Aircraft Detailing für Privat- und Geschäftsflugzeuge im Raum 59597 und Umgebung.",
      navigation: "Navigation",
      legal: "Rechtliches",
      services: "Leistungen",
      pricing: "Preise",
      process: "Ablauf",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutzerklärung",
      homeLabel: "Detailing Creation – Startseite",
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
      pricing: "Pricing",
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
        "Mobile aircraft care for private and business aircraft around 59597. The appropriate scope is planned individually around condition, material, operation and location.",
      requestService: "Request this service",
      items: [
        {
          title: "Exterior Aircraft Detailing",
          description:
            "Careful exterior detailing focused on a professional appearance and the aircraft’s long-term value.",
          includes: [
            "Fuselage, wings and empennage",
            "Undersides and accessible detail areas",
            "Material-appropriate cleaning methods",
          ],
        },
        {
          title: "Interior Aircraft Detailing",
          description:
            "Considered cabin care with particular attention to high-quality and sensitive materials.",
          includes: [
            "Leather, textile and plastic care",
            "Cabin and interior surface cleaning",
            "Material-compatible product selection",
          ],
        },
        {
          title: "Paint Correction & Polishing",
          description:
            "Planned treatment of suitable painted surfaces affected by fading, weathering or visible oxidation.",
          includes: [
            "Initial condition and paint assessment",
            "Tailored polishing and gloss refinement",
            "Test area before extensive correction",
          ],
        },
        {
          title: "Surface Protection",
          description:
            "Individually selected surface protection aligned with the paint, operation, storage and care objective.",
          includes: [
            "Protection for suitable painted surfaces",
            "Selection based on operation and storage",
            "Recommendations for continued care",
          ],
        },
        {
          title: "Brightwork & Metal Polishing",
          description:
            "Targeted refinement of suitable metal and decorative surfaces for a clean, consistent finish.",
          includes: [
            "Assessment of the individual metal surface",
            "Removal of suitable oxidation marks",
            "Polishing and an appropriate finish protection",
          ],
        },
        {
          title: "Aircraft Window Care",
          description:
            "Gentle cleaning of transparent aircraft surfaces with a focus on material compatibility and scratch-conscious handling.",
          includes: [
            "Care for acrylic and Plexiglas surfaces",
            "Suitable cleaners and soft tools",
            "Controlled, scratch-conscious technique",
          ],
        },
        {
          title: "Aircraft Assessment & Custom Care Plan",
          description:
            "A structured condition review providing the basis for an appropriate care plan and a reliable quotation.",
          includes: [
            "Assessment from photographs or on site",
            "Alignment on material, access and objective",
            "Individual service plan and quotation",
          ],
        },
      ],
      note: "All work is aligned with the aircraft, material and access requirements in advance. Aircraft painting, structural or technical repairs and maintenance are not included in the service offering.",
    },
    pricing: {
      eyebrow: "Price guidance",
      title: "Transparent from the start. Precise after assessment.",
      description:
        "These starting prices provide a reliable first indication for light aircraft. The final quotation reflects MTOW, condition, access and the actual scope of work.",
      conceptLabel: "Launch price guidance",
      tableCaption:
        "Indicative starting prices by MTOW and service package",
      aircraftClass: "Aircraft class",
      exteriorWash: "Exterior Wash",
      completeCare: "Complete Care",
      interiorDetail: "Interior Detail",
      from: "from",
      tiers: [
        {
          label: "up to 600 kg MTOW",
          exterior: "€279",
          complete: "€399",
          interior: "€199",
        },
        {
          label: "600–800 kg MTOW",
          exterior: "€329",
          complete: "€479",
          interior: "€239",
        },
        {
          label: "800–1,800 kg MTOW",
          exterior: "€429",
          complete: "€619",
          interior: "€299",
        },
        {
          label: "1,800–3,500 kg MTOW",
          exterior: "€599",
          complete: "€769",
          interior: "€399",
        },
      ],
      completeCareLabel: "Package logic",
      completeCareTitle: "Complete Care combines the essential foundations.",
      completeCareItems: [
        "Material-appropriate exterior wash",
        "Quick protection",
        "Basic interior cleaning",
      ],
      customLabel: "Individually quoted",
      customTitle: "Correction, Protection & Brightwork",
      customDescription:
        "Paint correction, longer-term surface protection, brightwork and exceptional conditions are quoted after a photographic or on-site assessment.",
      requestAssessment: "Request an assessment",
      travelNote:
        "Travel, airfield access and special working conditions are confirmed transparently before booking.",
      conceptNote:
        "Concept pricing – final price and tax presentation will be confirmed before publication.",
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
      map: {
        ariaLabel: "Interactive map of the planned service area",
        consentTitle: "Google Maps only with your consent",
        consentDescription:
          "Activating the map establishes a connection to Google.",
        privacyLink: "Read the privacy details",
        loadButton: "Load map",
        loading: "Loading map …",
        missingKey:
          "The map is ready. The Google Maps key still needs to be configured.",
        error: "The map could not be loaded. Please try again.",
        openExternal: "Open in Google Maps",
      },
    },
    cta: {
      eyebrow: "Individual request",
      title: "Show us what needs attention.",
      description:
        "A few key details and current photographs help us identify the most appropriate next step.",
      assessmentTitle: "For an initial assessment",
      items: [
        "Aircraft, location and required service",
        "Up to three current condition photographs",
        "Preferred contact method for our response",
      ],
      contactNotice:
        "Email, telephone and business hours will be added as soon as the official contact details are confirmed.",
      form: {
        eyebrow: "Request form",
        title: "Request an initial assessment",
        required: "* Required fields",
        website: "Website",
        fullName: "Name",
        company: "Company",
        email: "Email",
        phone: "Telephone",
        aircraft: "Aircraft",
        aircraftPlaceholder: "Manufacturer and model",
        location: "Location",
        locationPlaceholder: "Airfield or postcode",
        service: "Required service",
        servicePlaceholder: "Select a service",
        services: [
          {
            value: "exterior-detailing",
            label: "Exterior Aircraft Detailing",
          },
          {
            value: "interior-detailing",
            label: "Interior Aircraft Detailing",
          },
          {
            value: "paint-correction",
            label: "Paint Correction & Polishing",
          },
          {
            value: "surface-protection",
            label: "Surface Protection",
          },
          {
            value: "brightwork",
            label: "Brightwork & Metal Polishing",
          },
          {
            value: "window-care",
            label: "Aircraft Window Care",
          },
          {
            value: "assessment",
            label: "Aircraft Assessment & Custom Care Plan",
          },
        ],
        contactPreference: "Preferred contact method",
        contactOptions: [
          { value: "email", label: "Email" },
          { value: "phone", label: "Telephone" },
        ],
        message: "Description",
        messagePlaceholder:
          "What needs attention? Please describe the current condition and the result you would like to achieve.",
        photos: "Add current photographs",
        photosHelp:
          "Optional: up to 3 JPG, PNG or WebP files, maximum 1.2 MB each.",
        privacyAcknowledgementBefore: "I have read the",
        privacyPolicy: "privacy policy",
        privacyAcknowledgementAfter: ".",
        submit: "Send request",
        pending: "Sending …",
        success:
          "Thank you. Your request has been submitted and will be reviewed.",
        notConfigured:
          "Secure submission is currently being set up. Please try again later.",
        invalidFields:
          "Please check the required fields and your contact details.",
        filesTooLarge:
          "The photographs are too large. Please select up to 3 files with a maximum of 1.2 MB each.",
        invalidFiles:
          "Please use JPG, PNG or WebP photographs only.",
        error:
          "Your request could not be sent. Please try again later.",
      },
    },
    footer: {
      description:
        "Aircraft detailing for private and business aircraft in the 59597 region and surrounding area.",
      navigation: "Navigation",
      legal: "Legal",
      services: "Services",
      pricing: "Pricing",
      process: "Process",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy policy",
      homeLabel: "Detailing Creation – Home",
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
