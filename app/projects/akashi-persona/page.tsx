import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { PersonaExtension } from "@/components/projects/persona-extension";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "Akashi Persona",
  description:
    "Akashi Persona: Metin Berat Dönmez's customization of Mark XXXIX by FatihMakes, with a new personality, speaking style and interface.",
  alternates: { canonical: "/projects/akashi-persona" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/akashi-persona",
    title: "Akashi Persona | Metin Berat Dönmez",
    description:
      "Akashi Persona: Metin Berat Dönmez's customization of Mark XXXIX by FatihMakes, with a new personality, speaking style and interface."
  }
};

export default function AkashiPersonaPage() {
  return (
    <ProjectPage current="/projects/akashi-persona">
      <PersonaExtension />
    </ProjectPage>
  );
}
