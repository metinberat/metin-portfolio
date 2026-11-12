import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { AbsoluteAkashi } from "@/components/projects/absolute-akashi";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "Absolute AI",
  description:
    "Absolute AI by Metin Berat Dönmez: an independently developed AI system with a FastAPI backend, memory, research and a Windows agent. Built, experimental and planned parts are marked.",
  alternates: { canonical: "/projects/absolute-ai" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/absolute-ai",
    title: "Absolute AI | Metin Berat Dönmez",
    description:
      "Absolute AI by Metin Berat Dönmez: an independently developed AI system with a FastAPI backend, memory, research and a Windows agent. Built, experimental and planned parts are marked."
  }
};

export default function AbsoluteAIPage() {
  return (
    <ProjectPage current="/projects/absolute-ai">
      <AbsoluteAkashi />
    </ProjectPage>
  );
}
