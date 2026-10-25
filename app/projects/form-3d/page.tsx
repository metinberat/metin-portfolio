import type { Metadata } from "next";
import { Form3D } from "@/components/projects/form-3d";
import { ProjectPage } from "@/components/projects/project-page";

export const metadata: Metadata = {
  title: "FORM 3D | Metin Berat Dönmez",
  description:
    "Case study of FORM 3D, a prototype app that builds rigged 3D characters in Blender, with its real validation status."
};

export default function Form3DPage() {
  return (
    <ProjectPage current="/projects/form-3d">
      <Form3D />
    </ProjectPage>
  );
}
