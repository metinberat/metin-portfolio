import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { Form3D } from "@/components/projects/form-3d";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "FORM 3D",
  description:
    "FORM 3D by Metin Berat Dönmez: a prototype desktop app that builds rigged 3D characters in Blender, shown with its real validation status.",
  alternates: { canonical: "/projects/form-3d" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/form-3d",
    title: "FORM 3D | Metin Berat Dönmez",
    description:
      "FORM 3D by Metin Berat Dönmez: a prototype desktop app that builds rigged 3D characters in Blender, shown with its real validation status."
  }
};

export default function Form3DPage() {
  return (
    <ProjectPage current="/projects/form-3d">
      <Form3D />
    </ProjectPage>
  );
}
