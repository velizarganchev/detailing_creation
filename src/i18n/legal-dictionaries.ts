import "server-only";

import type { Locale } from "@/i18n/dictionaries";

export type LegalLink = {
  href: string;
  label: string;
};

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  links?: readonly LegalLink[];
  reviewNote?: string;
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  description: string;
  updatedLabel: string;
  updated: string;
  draftTitle: string;
  draftDescription: string;
  backHome: string;
  sections: readonly LegalSection[];
};

type LegalDictionary = {
  imprint: LegalDocument;
  privacy: LegalDocument;
};

const legalDictionaries: Record<Locale, LegalDictionary> = {
  de: {
    imprint: {
      eyebrow: "Rechtliche Angaben",
      title: "Impressum",
      description: "Anbieterkennzeichnung gemäß § 5 DDG.",
      updatedLabel: "Stand",
      updated: "18. Juli 2026",
      draftTitle: "Entwurf – vor Veröffentlichung vervollständigen",
      draftDescription:
        "Die Pflichtangaben in eckigen Klammern müssen mit den endgültigen Unternehmensdaten ersetzt und anschließend rechtlich geprüft werden. Diese Seite bleibt bis dahin von Suchmaschinen ausgeschlossen.",
      backHome: "Zurück zur Startseite",
      sections: [
        {
          title: "Angaben zum Anbieter",
          items: [
            "Aircraft Detailing Creation",
            "[Vor- und Nachname des Inhabers]",
            "[Rechtsform bestätigen, voraussichtlich Einzelunternehmen]",
            "[Straße und Hausnummer]",
            "59597 [Ort]",
            "Deutschland",
          ],
        },
        {
          title: "Kontakt",
          items: [
            "E-Mail: [geschäftliche E-Mail-Adresse]",
            "Telefon: [Geschäftsnummer]",
          ],
          reviewNote:
            "Für das Impressum wird eine schnell erreichbare elektronische Kontaktmöglichkeit benötigt. Die geschäftliche E-Mail-Adresse und Telefonnummer vor dem Livegang eintragen.",
        },
        {
          title: "Register und Kennnummern",
          items: [
            "Handelsregister: [nur angeben, falls eine Eintragung besteht]",
            "Registergericht und Registernummer: [falls zutreffend]",
            "Umsatzsteuer-Identifikationsnummer oder Wirtschafts-Identifikationsnummer: [nur falls vorhanden]",
          ],
          reviewNote:
            "Die persönliche Steuernummer gehört nicht in das öffentliche Impressum. Der Kleinunternehmerstatus allein ersetzt oder erzeugt keine Umsatzsteuer-Identifikationsnummer.",
        },
        {
          title: "Verbraucherstreitbeilegung",
          paragraphs: [
            "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
          reviewNote:
            "Diese Erklärung vor Veröffentlichung als bewusste Unternehmensentscheidung bestätigen. Der frühere Link zur EU-Online-Streitbeilegungsplattform wird nicht aufgenommen, da die Plattform eingestellt wurde.",
        },
        {
          title: "Rechtsgrundlagen",
          paragraphs: [
            "Die Anbieterkennzeichnung richtet sich insbesondere nach § 5 des Digitale-Dienste-Gesetzes. Informationen zur Verbraucherstreitbeilegung richten sich nach §§ 36 und 37 VSBG.",
          ],
          links: [
            {
              label: "§ 5 DDG",
              href: "https://www.gesetze-im-internet.de/ddg/__5.html",
            },
            {
              label: "§ 36 VSBG",
              href: "https://www.gesetze-im-internet.de/vsbg/__36.html",
            },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Datenschutz",
      title: "Datenschutzerklärung",
      description:
        "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
      updatedLabel: "Stand",
      updated: "18. Juli 2026",
      draftTitle: "Entwurf – technische und geschäftliche Angaben bestätigen",
      draftDescription:
        "Der Text bildet den aktuellen Entwicklungsstand einschließlich Kontaktformular, Supabase-Speicherung und zustimmungspflichtiger Google-Maps-Karte ab. Verantwortliche Stelle, Hosting-Vertrag, Auftragsverarbeitungsverträge und Löschfrist müssen vor Veröffentlichung abschließend bestätigt werden.",
      backHome: "Zurück zur Startseite",
      sections: [
        {
          title: "1. Verantwortlicher",
          paragraphs: [
            "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):",
          ],
          items: [
            "Aircraft Detailing Creation",
            "[Vor- und Nachname des Inhabers]",
            "[Straße und Hausnummer], 59597 [Ort], Deutschland",
            "E-Mail: [geschäftliche Datenschutz-Kontaktadresse]",
            "Telefon: [Geschäftsnummer]",
          ],
        },
        {
          title: "2. Allgemeine Grundsätze",
          paragraphs: [
            "Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb der Website, die Bearbeitung von Anfragen, vorvertragliche Maßnahmen oder die Wahrung berechtigter Interessen erforderlich ist. Eine Verarbeitung zu anderen Zwecken erfolgt nur, wenn dafür eine gesetzliche Grundlage besteht.",
          ],
        },
        {
          title: "3. Aufruf der Website und Hosting",
          paragraphs: [
            "Für die geplante Veröffentlichung ist Vercel als Hosting-Anbieter vorgesehen. Beim Aufruf der Website können technisch erforderliche Verbindungsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene URL, Referrer, Browser- und Geräteinformationen sowie HTTP-Status. Die Verarbeitung dient der sicheren, stabilen und fehlerfreien Bereitstellung der Website.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb des Internetangebots.",
          ],
          reviewNote:
            "Vor dem Livegang den tatsächlichen Vercel-Tarif, den Vertrag zur Auftragsverarbeitung, die Unterauftragnehmer und die konkrete Protokoll-Aufbewahrung prüfen.",
          links: [
            {
              label: "Datenschutzhinweise von Vercel",
              href: "https://vercel.com/legal/privacy-notice",
            },
          ],
        },
        {
          title: "4. Kontakt- und Angebotsanfragen",
          paragraphs: [
            "Wenn Sie das Anfrageformular verwenden oder uns direkt kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben. Dazu können Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Angaben zum Luftfahrzeug und Standort, gewünschte Leistung, Kontaktpräferenz, Nachricht sowie optionale Fotos gehören.",
            "Die Verarbeitung erfolgt zur Beantwortung Ihrer Anfrage, zur Einschätzung des Leistungsumfangs und zur Vorbereitung eines möglichen Vertrags. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Bei allgemeinen Mitteilungen ohne Vertragsanbahnung ist Art. 6 Abs. 1 lit. f DSGVO die Rechtsgrundlage; unser berechtigtes Interesse liegt in der sachgerechten Kommunikation.",
            "Die im Formular verlangte Bestätigung dokumentiert, dass Sie diese Datenschutzerklärung zur Kenntnis genommen haben. Sie ist keine Einwilligung als Rechtsgrundlage für die Bearbeitung Ihrer Anfrage.",
          ],
        },
        {
          title: "5. Speicherung bei Supabase",
          paragraphs: [
            "Formularanfragen werden in unserem Supabase-Projekt gespeichert. Die primäre Projektregion ist eu-north-1 (Stockholm). Optionale Fotos werden in einem nicht öffentlichen Speicherbereich abgelegt und sind nicht über eine öffentliche Dateiadresse abrufbar.",
            "Supabase Pte. Ltd. ist als technischer Dienstleister vorgesehen. Abhängig von Support, Unterauftragnehmern und Vertragsgestaltung kann eine Verarbeitung außerhalb des Europäischen Wirtschaftsraums stattfinden. In diesem Fall sind die nach der DSGVO erforderlichen Garantien, insbesondere Angemessenheitsbeschlüsse oder EU-Standardvertragsklauseln, zu verwenden.",
          ],
          reviewNote:
            "Vor dem Livegang den aktuellen Supabase-Auftragsverarbeitungsvertrag abschließen beziehungsweise bestätigen und die Unterauftragnehmerliste dokumentieren.",
          links: [
            {
              label: "Supabase-Regionen",
              href: "https://supabase.com/docs/guides/platform/regions",
            },
            {
              label: "Supabase Data Processing Addendum",
              href: "https://supabase.com/downloads/docs/Supabase%2BDPA%2B260601.pdf",
            },
          ],
        },
        {
          title: "6. Google Maps",
          paragraphs: [
            "Im Bereich „Einsatzgebiet“ kann eine interaktive Karte von Google Maps geladen werden. Die Karte bleibt zunächst deaktiviert. Erst wenn Sie die Schaltfläche „Karte laden“ betätigen, wird eine Verbindung zu Google hergestellt und die Karteninhalte werden für den aktuellen Seitenaufruf geladen.",
            "Beim Laden können insbesondere Ihre IP-Adresse, Browser- und Geräteinformationen, Datum und Uhrzeit, die aufgerufene Seite, Referrer-Informationen sowie Ihre Interaktionen mit der Karte an Google übermittelt werden. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Verarbeitung durch Google LLC in den USA oder weitere Empfänger außerhalb des Europäischen Wirtschaftsraums kann nicht ausgeschlossen werden.",
            "Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ohne Ihre Aktivierung findet über diese Kartenfunktion keine Verbindung zu Google statt. Die Entscheidung wird nicht in einem Cookie oder im lokalen Speicher dauerhaft hinterlegt. Sie können eine erneute Verbindung verhindern, indem Sie die Seite neu laden und die Karte nicht erneut aktivieren. Die Rechtmäßigkeit einer bereits erfolgten Verarbeitung bleibt unberührt.",
          ],
          reviewNote:
            "Die konkrete Google-Maps-Konfiguration, Vertrags- und Transfergrundlagen sowie die Formulierung zur Einwilligung vor dem Livegang rechtlich prüfen.",
          links: [
            {
              label: "Datenschutzerklärung von Google",
              href: "https://policies.google.com/privacy?hl=de",
            },
            {
              label: "Nutzungsbedingungen für Google Maps",
              href: "https://www.google.com/intl/de/help/terms_maps/",
            },
          ],
        },
        {
          title: "7. Optionale Fotos",
          paragraphs: [
            "Das Hochladen von Fotos ist freiwillig und dient ausschließlich der ersten fachlichen Einschätzung. Bitte laden Sie möglichst keine Personen, Kennzeichen, Ausweisdokumente, Zugangsdaten oder sonstige nicht erforderliche personenbezogene beziehungsweise vertrauliche Informationen hoch.",
          ],
        },
        {
          title: "8. Speicherdauer",
          paragraphs: [
            "Wir speichern Anfragen und zugehörige Fotos nur so lange, wie dies für Bearbeitung, Angebotserstellung, Nachfragen und gegebenenfalls die Durchführung des Vertrags erforderlich ist. Danach werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder Ansprüche eine längere Speicherung erfordern.",
          ],
          reviewNote:
            "Vor Veröffentlichung eine feste Löschroutine technisch und organisatorisch einführen. Als Arbeitswert sind sechs Monate nach Abschluss einer nicht beauftragten Anfrage vorgesehen; dieser Zeitraum muss noch bestätigt werden.",
        },
        {
          title: "9. Empfänger und Auftragsverarbeiter",
          paragraphs: [
            "Zugriff erhalten nur die für die Bearbeitung zuständigen Personen sowie erforderliche technische Dienstleister. Eine Weitergabe an andere Empfänger erfolgt nur, wenn sie für die Anfrage oder Vertragserfüllung erforderlich ist, eine gesetzliche Pflicht besteht oder eine andere zulässige Rechtsgrundlage vorliegt.",
          ],
        },
        {
          title: "10. Cookies, Analyse und Marketing",
          paragraphs: [
            "In der aktuellen Website-Version setzen wir keine Analyse-, Marketing- oder Profiling-Dienste und keine dafür bestimmten Cookies ein. Google Maps wird ausschließlich nach der oben beschriebenen Aktivierung geladen; die Entscheidung wird von dieser Website nicht dauerhaft gespeichert. Sollte sich der Einsatz externer Dienste ändern, wird diese Datenschutzerklärung vorab angepasst und – soweit erforderlich – eine Einwilligung eingeholt.",
          ],
        },
        {
          title: "11. Pflichtangaben und automatisierte Entscheidungen",
          paragraphs: [
            "Die als Pflichtfeld gekennzeichneten Angaben werden benötigt, um Ihre Anfrage sinnvoll zu bearbeiten. Ohne diese Angaben kann das Formular nicht übermittelt werden. Optionale Angaben und Fotos sind freiwillig. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
          ],
        },
        {
          title: "12. Ihre Rechte",
          paragraphs: [
            "Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Sie können einer Verarbeitung auf Grundlage berechtigter Interessen widersprechen. Besteht die Verarbeitung ausnahmsweise auf einer Einwilligung, kann diese mit Wirkung für die Zukunft widerrufen werden.",
            "Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte Datenschutz-Kontaktadresse.",
          ],
        },
        {
          title: "13. Beschwerderecht",
          paragraphs: [
            "Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für den Sitz in Nordrhein-Westfalen ist insbesondere die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen erreichbar:",
          ],
          items: [
            "Kavalleriestraße 2–4, 40213 Düsseldorf",
            "Telefon: +49 211 38424-0",
            "E-Mail: poststelle@ldi.nrw.de",
          ],
          links: [
            {
              label: "Landesbeauftragte für Datenschutz und Informationsfreiheit NRW",
              href: "https://www.ldi.nrw.de/",
            },
          ],
        },
        {
          title: "14. Sicherheit und Aktualisierung",
          paragraphs: [
            "Die veröffentlichte Website soll verschlüsselt über HTTPS übertragen werden. Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten zu schützen.",
            "Wir passen diese Datenschutzerklärung an, wenn sich Rechtslage, eingesetzte Dienste oder Verarbeitungsvorgänge ändern. Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung.",
          ],
        },
      ],
    },
  },
  en: {
    imprint: {
      eyebrow: "Legal information",
      title: "Imprint",
      description: "Provider identification pursuant to Section 5 DDG.",
      updatedLabel: "Last updated",
      updated: "18 July 2026",
      draftTitle: "Draft – complete before publication",
      draftDescription:
        "The mandatory information in square brackets must be replaced with the final business details and then legally reviewed. Until then, this page remains excluded from search engine indexing.",
      backHome: "Back to the home page",
      sections: [
        {
          title: "Provider information",
          items: [
            "Aircraft Detailing Creation",
            "[Owner’s full legal name]",
            "[Confirm legal form, expected to be a sole proprietorship]",
            "[Street and house number]",
            "59597 [Town]",
            "Germany",
          ],
        },
        {
          title: "Contact",
          items: [
            "Email: [business email address]",
            "Telephone: [business telephone number]",
          ],
          reviewNote:
            "A readily accessible electronic contact method is required. Add the business email address and telephone number before launch.",
        },
        {
          title: "Registers and identification numbers",
          items: [
            "Commercial register: [only if registered]",
            "Register court and registration number: [if applicable]",
            "VAT identification number or German business identification number: [only if available]",
          ],
          reviewNote:
            "Do not publish the owner’s personal German tax number. Small-business VAT treatment neither replaces nor automatically creates a VAT identification number.",
        },
        {
          title: "Consumer dispute resolution",
          paragraphs: [
            "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
          reviewNote:
            "Confirm this statement as a conscious business decision before publication. The former EU online dispute resolution platform is not linked because the platform has been discontinued.",
        },
        {
          title: "Legal bases",
          paragraphs: [
            "Provider identification is governed in particular by Section 5 of the German Digital Services Act. Consumer dispute resolution information is governed by Sections 36 and 37 VSBG.",
          ],
          links: [
            {
              label: "Section 5 DDG",
              href: "https://www.gesetze-im-internet.de/ddg/__5.html",
            },
            {
              label: "Section 36 VSBG",
              href: "https://www.gesetze-im-internet.de/vsbg/__36.html",
            },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Data protection",
      title: "Privacy policy",
      description:
        "Information about the processing of personal data on this website.",
      updatedLabel: "Last updated",
      updated: "18 July 2026",
      draftTitle: "Draft – confirm technical and business details",
      draftDescription:
        "This text reflects the current development state, including the enquiry form, Supabase storage and consent-gated Google Maps integration. The controller, hosting contract, data processing agreements and deletion period must be confirmed before publication.",
      backHome: "Back to the home page",
      sections: [
        {
          title: "1. Controller",
          paragraphs: [
            "The controller within the meaning of the General Data Protection Regulation (GDPR) is:",
          ],
          items: [
            "Aircraft Detailing Creation",
            "[Owner’s full legal name]",
            "[Street and house number], 59597 [Town], Germany",
            "Email: [business privacy contact address]",
            "Telephone: [business telephone number]",
          ],
        },
        {
          title: "2. General principles",
          paragraphs: [
            "We process personal data only to the extent necessary to operate the website, handle enquiries, take pre-contractual steps or safeguard legitimate interests. Processing for other purposes takes place only where a legal basis permits it.",
          ],
        },
        {
          title: "3. Website access and hosting",
          paragraphs: [
            "Vercel is intended to host the published website. When you access the website, technically necessary connection data may be processed, in particular the IP address, date and time, requested URL, referrer, browser and device information, and HTTP status. This processing is used to provide the website securely, reliably and without errors.",
            "The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is the secure and reliable operation of the website.",
          ],
          reviewNote:
            "Before launch, verify the actual Vercel plan, data processing agreement, subprocessors and the specific retention period for logs.",
          links: [
            {
              label: "Vercel Privacy Notice",
              href: "https://vercel.com/legal/privacy-notice",
            },
          ],
        },
        {
          title: "4. Contact and quotation enquiries",
          paragraphs: [
            "If you use the enquiry form or contact us directly, we process the information you provide. This may include your name, company, email address, telephone number, aircraft and location details, requested service, contact preference, message and optional photographs.",
            "We process this information to respond to your enquiry, assess the scope of work and prepare a possible contract. The legal basis is Article 6(1)(b) GDPR. For general messages that are not aimed at entering into a contract, the legal basis is Article 6(1)(f) GDPR; our legitimate interest is appropriate business communication.",
            "The required confirmation in the form records that you have read this privacy policy. It is not consent used as the legal basis for handling your enquiry.",
          ],
        },
        {
          title: "5. Storage with Supabase",
          paragraphs: [
            "Form enquiries are stored in our Supabase project. The primary project region is eu-north-1 (Stockholm). Optional photographs are stored in a non-public storage area and cannot be accessed through a public file URL.",
            "Supabase Pte. Ltd. is intended to act as a technical service provider. Depending on support, subprocessors and the contractual arrangement, processing outside the European Economic Area may take place. Where this occurs, the safeguards required by the GDPR, in particular adequacy decisions or the EU Standard Contractual Clauses, must be used.",
          ],
          reviewNote:
            "Before launch, enter into or confirm the current Supabase data processing agreement and document the subprocessor list.",
          links: [
            {
              label: "Supabase regions",
              href: "https://supabase.com/docs/guides/platform/regions",
            },
            {
              label: "Supabase Data Processing Addendum",
              href: "https://supabase.com/downloads/docs/Supabase%2BDPA%2B260601.pdf",
            },
          ],
        },
        {
          title: "6. Google Maps",
          paragraphs: [
            "An interactive Google Maps map can be loaded in the “Service area” section. The map is initially disabled. A connection to Google is established and the map content is loaded for the current page view only after you select “Load map”.",
            "When the map is loaded, data including your IP address, browser and device information, date and time, the requested page, referrer information and your interactions with the map may be sent to Google. The provider for users in the European Economic Area is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Processing by Google LLC in the United States or other recipients outside the European Economic Area cannot be ruled out.",
            "The legal basis for loading the map is your consent under Article 6(1)(a) GDPR. This map feature does not connect to Google unless you activate it. Your decision is not stored permanently in a cookie or local storage. You can prevent a new connection by reloading the page and not activating the map again. This does not affect the lawfulness of processing that has already taken place.",
          ],
          reviewNote:
            "Before launch, obtain legal review of the specific Google Maps configuration, contractual and transfer safeguards, and the consent wording.",
          links: [
            {
              label: "Google Privacy Policy",
              href: "https://policies.google.com/privacy?hl=en",
            },
            {
              label: "Google Maps terms of service",
              href: "https://www.google.com/help/terms_maps/",
            },
          ],
        },
        {
          title: "7. Optional photographs",
          paragraphs: [
            "Uploading photographs is voluntary and serves only to support an initial professional assessment. Wherever possible, do not upload people, registration plates, identity documents, access credentials or other unnecessary personal or confidential information.",
          ],
        },
        {
          title: "8. Retention period",
          paragraphs: [
            "We retain enquiries and related photographs only for as long as necessary to handle the enquiry, prepare a quotation, answer follow-up questions and, where applicable, perform the contract. The data is then deleted unless statutory retention duties or legal claims require longer storage.",
          ],
          reviewNote:
            "Before publication, implement a fixed technical and organisational deletion routine. Six months after closing an enquiry that does not result in an order is the current working value and still needs to be confirmed.",
        },
        {
          title: "9. Recipients and processors",
          paragraphs: [
            "Access is limited to the people responsible for handling the enquiry and the technical service providers that are required for operation. Data is disclosed to other recipients only where necessary for the enquiry or performance of a contract, required by law or permitted by another legal basis.",
          ],
        },
        {
          title: "10. Cookies, analytics and marketing",
          paragraphs: [
            "The current version of the website does not use analytics, marketing or profiling services, nor cookies intended for those purposes. Google Maps is loaded only after the activation described above, and this website does not store that decision permanently. If the use of external services changes, this policy will be updated in advance and consent will be obtained where required.",
          ],
        },
        {
          title: "11. Required information and automated decisions",
          paragraphs: [
            "Fields marked as required are needed to handle your enquiry meaningfully. The form cannot be submitted without them. Optional information and photographs are voluntary. We do not use automated decision-making, including profiling.",
          ],
        },
        {
          title: "12. Your rights",
          paragraphs: [
            "Subject to the statutory conditions, you have rights of access, rectification, erasure, restriction of processing and data portability. You may object to processing based on legitimate interests. Where processing is exceptionally based on consent, you may withdraw it at any time with effect for the future.",
            "To exercise your rights, contact the privacy contact address stated above.",
          ],
        },
        {
          title: "13. Right to lodge a complaint",
          paragraphs: [
            "You may lodge a complaint with a data protection supervisory authority. For a controller established in North Rhine-Westphalia, the State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia can be contacted at:",
          ],
          items: [
            "Kavalleriestraße 2–4, 40213 Düsseldorf, Germany",
            "Telephone: +49 211 38424-0",
            "Email: poststelle@ldi.nrw.de",
          ],
          links: [
            {
              label: "State Commissioner for Data Protection and Freedom of Information NRW",
              href: "https://www.ldi.nrw.de/",
            },
          ],
        },
        {
          title: "14. Security and updates",
          paragraphs: [
            "The published website is intended to be transmitted over encrypted HTTPS connections. We take appropriate technical and organisational measures to protect personal data.",
            "We update this privacy policy when the law, the services we use or our processing activities change. The version published on this page is the applicable version.",
          ],
        },
      ],
    },
  },
};

export function getLegalDictionary(locale: Locale): LegalDictionary {
  return legalDictionaries[locale];
}
