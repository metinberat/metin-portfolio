import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { AbsoluteAkashi } from "@/components/projects/absolute-akashi";
import { ProjectPage } from "@/components/projects/project-page";
import { JsonLd } from "@/components/seo/json-ld";
import { projectStructuredData } from "@/lib/structured-data";

const DESCRIPTION =
  "Absolute AI by Metin Berat Dönmez: an independently developed AI system with a FastAPI backend, memory, research and a Windows agent. Built, experimental and planned parts are marked.";

export const metadata: Metadata = {
  title: "Absolute AI",
  description: DESCRIPTION,
  alternates: { canonical: "/projects/absolute-ai" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/absolute-ai",
    title: "Absolute AI | Metin Berat Dönmez",
    description: DESCRIPTION
  }
};

const structuredData = projectStructuredData({
  path: "/projects/absolute-ai",
  name: "Absolute AI",
  description: DESCRIPTION,
  codeRepository: "https://github.com/metinberat/akashi-ai",
  programmingLanguage: ["Python", "TypeScript"]
});

export default function AbsoluteAIPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectPage current="/projects/absolute-ai">
        <AbsoluteAkashi />
      </ProjectPage>
    </>
  );
}
