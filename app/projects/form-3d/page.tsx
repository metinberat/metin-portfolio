import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";
import { Form3D } from "@/components/projects/form-3d";
import { ProjectPage } from "@/components/projects/project-page";
import { JsonLd } from "@/components/seo/json-ld";
import { projectStructuredData } from "@/lib/structured-data";

const DESCRIPTION =
  "FORM 3D by Metin Berat Dönmez: a prototype desktop app that builds rigged 3D characters in Blender, shown with its real validation status.";

export const metadata: Metadata = {
  title: "FORM 3D",
  description: DESCRIPTION,
  alternates: { canonical: "/projects/form-3d" },
  openGraph: {
    type: "article",
    images: [SHARE_IMAGE],
    url: "/projects/form-3d",
    title: "FORM 3D | Metin Berat Dönmez",
    description: DESCRIPTION
  }
};

const structuredData = projectStructuredData({
  path: "/projects/form-3d",
  name: "FORM 3D",
  description: DESCRIPTION,
  codeRepository: "https://github.com/metinberat/akashi-ai/tree/cloud-source-latest/products/form"
});

export default function Form3DPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectPage current="/projects/form-3d">
        <Form3D />
      </ProjectPage>
    </>
  );
}
