import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Update this date when page content changes.
const LAST_UPDATED = new Date("2026-11-17");

// Real images that appear on each page (served from /public).
const pages: { path: string; priority: number; images: string[] }[] = [
  {
    path: "",
    priority: 1,
    images: ["/photos/paris.jpg", "/photos/rome.jpg", "/photos/football-team.jpg", "/photos/pc-setup.jpg"]
  },
  { path: "/projects/absolute-ai", priority: 0.8, images: ["/evidence/absolute/showcase-composite.webp"] },
  { path: "/projects/form-3d", priority: 0.8, images: ["/evidence/form-3d/form-3d-rig-2026-10-03.webp"] },
  { path: "/projects/akashi-persona", priority: 0.8, images: ["/evidence/persona/akashi-persona-2026-06-18.png"] }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: page.priority,
    images: page.images.map((image) => `${SITE_URL}${image}`)
  }));
}
