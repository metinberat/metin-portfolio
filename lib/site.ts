// Single source of truth for site identity and SEO.
// Only verified facts and profiles belong here.

export const SITE_URL = "https://metin-portfolio.vercel.app";

export const PERSON_NAME = "Metin Berat Dönmez";

export const SITE_TITLE = `${PERSON_NAME} — AI & Software Developer Portfolio`;

export const PERSON_DESCRIPTION =
  "High school student and independent AI/software developer based in Istanbul, Türkiye, exploring artificial intelligence, software engineering, 3D technologies, and interdisciplinary problem-solving.";

export const GITHUB_URL = "https://github.com/metinberat";

// Official Turkish Football Federation player record (checked 11 Nov 2026).
export const TFF_RECORD_URL = "https://www.tff.org/Default.aspx?pageId=30&kisiID=2630292";

// Public profiles that are verified to belong to Metin.
export const SAME_AS = [GITHUB_URL, TFF_RECORD_URL];

export const PROJECT_PAGES = [
  { path: "/projects/absolute-ai", name: "Absolute AI" },
  { path: "/projects/form-3d", name: "FORM 3D" },
  { path: "/projects/akashi-persona", name: "Akashi Persona" }
] as const;

// Child pages that set their own openGraph must list the image again,
// because Next.js replaces (not merges) the openGraph object.
export const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Metin Berat Dönmez — AI & Software Developer Portfolio"
};
