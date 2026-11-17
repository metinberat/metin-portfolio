import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { PersonaExtension } from "@/components/projects/persona-extension";
import { ProjectPage } from "@/components/projects/project-page";
import { JsonLd } from "@/components/seo/json-ld";
import { projectStructuredData } from "@/lib/structured-data";

const DESCRIPTION =
  "Akashi Persona: Metin Berat Dönmez's customization of Mark XXXIX by FatihMakes, with a new personality, speaking style and interface.";

export const metadata: Metadata = {
  title: "Akashi Persona",
  description: DESCRIPTION,
  alternates: { canonical: "/projects/akashi-persona" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/akashi-persona",
    title: "Akashi Persona | Metin Berat Dönmez",
    description: DESCRIPTION
  }
};

const structuredData = projectStructuredData({
  path: "/projects/akashi-persona",
  name: "Akashi Persona",
  description: DESCRIPTION,
  programmingLanguage: ["Python"],
  isBasedOn: { name: "Mark XXXIX", codeRepository: "https://github.com/FatihMakes/Mark-XXXIX" }
});

export default function AkashiPersonaPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectPage current="/projects/akashi-persona">
        <PersonaExtension />
      </ProjectPage>
    </>
  );
}
