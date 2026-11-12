import { PERSON_DESCRIPTION, PERSON_NAME, SAME_AS, SITE_TITLE, SITE_URL } from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Facts only: no birth date, school or awards that are not verified on the site.
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: `${PERSON_NAME} Portfolio`,
      inLanguage: "en",
      author: { "@id": PERSON_ID }
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      dateModified: "2026-11-11"
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON_NAME,
      alternateName: "Metin Berat Donmez",
      givenName: "Metin Berat",
      familyName: "Dönmez",
      url: SITE_URL,
      image: `${SITE_URL}/photos/paris.jpg`,
      description: PERSON_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressCountry: "TR"
      },
      knowsAbout: [
        "Artificial intelligence",
        "Software engineering",
        "3D technologies",
        "Computer hardware"
      ],
      sameAs: SAME_AS
    }
  ]
};
