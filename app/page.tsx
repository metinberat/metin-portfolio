import { Contact } from "@/components/home/contact";
import { Football } from "@/components/home/football";
import { Hardware } from "@/components/home/hardware";
import { Intro } from "@/components/home/intro";
import { SelectedWork } from "@/components/home/selected-work";
import { SiteHeader } from "@/components/home/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <Intro />
        <SelectedWork />
        <Football />
        <Hardware />
        <Contact />
      </main>
    </>
  );
}
