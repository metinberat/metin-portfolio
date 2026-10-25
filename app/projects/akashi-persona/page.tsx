import type { Metadata } from "next";
import { PersonaExtension } from "@/components/projects/persona-extension";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "Akashi Persona | Metin Berat Dönmez",
  description:
    "Case study of Akashi Persona, my customization of Mark XXXIX by FatihMakes."
};

export default function AkashiPersonaPage() {
  return (
    <ProjectPage current="/projects/akashi-persona">
      <PersonaExtension />
    </ProjectPage>
  );
}
