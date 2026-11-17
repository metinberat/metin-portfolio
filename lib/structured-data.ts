import { PERSON_DESCRIPTION, PERSON_NAME, SAME_AS, SITE_TITLE, SITE_URL } from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// ISO 8601 date-times with a time zone (Google rejects date-only values here).
// dateCreated = first commit of the portfolio; update dateModified when the homepage changes.
const PROFILE_CREATED = "2026-06-16T19:14:45+03:00";
const PROFILE_MODIFIED = "2026-11-17T00:00:00+03:00";

// Facts only: no birth date, school or awards that are not verified on the site.
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: `${PERSON_NAME} Portfolio`,
      alternateName: PERSON_NAME,
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
      dateCreated: PROFILE_CREATED,
      dateModified: PROFILE_MODIFIED
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

// Compact reference to the same Person, repeated on each project page so the
// page is understandable on its own.
const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  url: SITE_URL
};

/** Breadcrumb + project entity for a project case-study page. */
export function projectStructuredData({
  path,
  name,
  description,
  codeRepository,
  programmingLanguage,
  isBasedOn
}: {
  path: string;
  name: string;
  description: string;
  codeRepository?: string;
  programmingLanguage?: string[];
  isBasedOn?: { name: string; codeRepository: string };
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: PERSON_NAME, item: SITE_URL },
          { "@type": "ListItem", position: 2, name, item: url }
        ]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${url}#project`,
        name,
        description,
        url,
        author: personRef,
        ...(codeRepository ? { codeRepository } : {}),
        ...(programmingLanguage ? { programmingLanguage } : {}),
        ...(isBasedOn ? { isBasedOn: { "@type": "SoftwareSourceCode", ...isBasedOn } } : {})
      }
    ]
  };
}
