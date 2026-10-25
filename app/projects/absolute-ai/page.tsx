import type { Metadata } from "next";
import { AbsoluteAkashi } from "@/components/projects/absolute-akashi";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "Absolute AI | Metin Berat Dönmez",
  description:
    "Case study of Absolute AI: architecture, test evidence, and what is built, experimental and planned."
};

export default function AbsoluteAIPage() {
  return (
    <ProjectPage current="/projects/absolute-ai">
      <AbsoluteAkashi />
    </ProjectPage>
  );
}
