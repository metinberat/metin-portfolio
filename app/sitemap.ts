import type { MetadataRoute } from "next";
import { PROJECT_PAGES, SITE_URL } from "@/lib/site";

// Update this date when page content changes.
const LAST_UPDATED = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    ...PROJECT_PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
