import { Contact } from "@/components/home/contact";
import { Football } from "@/components/home/football";
import { Hardware } from "@/components/home/hardware";
import { Intro } from "@/components/home/intro";
import { Science } from "@/components/home/science";
import { SelectedWork } from "@/components/home/selected-work";
import { SiteHeader } from "@/components/home/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { homeStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <SiteHeader />
      <main className="overflow-hidden">
        <Intro />
        <SelectedWork />
        <Science />
        <Football />
        <Hardware />
        <Contact />
      </main>
    </>
  );
}
