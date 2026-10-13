import { SectionHeader } from "@/components/section-header";
import { AbsoluteAkashi } from "@/components/projects/absolute-akashi";
import { CGIAgent } from "@/components/projects/cgi-agent";
import { PersonaExtension } from "@/components/projects/persona-extension";
import { Eyebrow, TextLink } from "@/components/showcase/ui";

export function FeaturedProjectsV3() {
  return (
    <section
      aria-labelledby="featured-projects-title"
      className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="projects"
    >
      <div id="featured-projects-title">
        <SectionHeader
          description="Three separate projects. I make it clear what I built myself, what I adapted from someone else, and what is still research. Every feature is marked as Built, Experimental, or Planned."
          eyebrow="Featured Projects"
          title="From customized assistants to independent AI systems."
        />
      </div>
      {/* Three full-width chapters, one per row: never side by side. */}
      <div className="space-y-8 lg:space-y-10">
        <AbsoluteAkashi />
        <CGIAgent />
        <PersonaExtension />
        <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.045] px-5 py-2 sm:px-7">
          <div className="pb-1 pt-4">
            <Eyebrow>Additional work</Eyebrow>
          </div>
          <ul className="divide-y divide-white/10">
            <li className="grid gap-2 py-4 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-6">
              <h3 className="text-lg font-semibold text-white">Metin Portfolio</h3>
              <p className="text-sm leading-6 text-zinc-400">
                Live. This website, built with Next.js and Tailwind CSS and
                deployed on Vercel.
              </p>
              <TextLink href="https://github.com/metinberat/metin-portfolio">
                Website source
              </TextLink>
            </li>
            <li className="grid gap-2 py-4 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-6">
              <h3 className="text-lg font-semibold text-white">Hardware Build Log</h3>
              <p className="text-sm leading-6 text-zinc-400">
                A log of my hardware choices, benchmarks, troubleshooting,
                and PC performance tests.
              </p>
              <span className="text-xs text-zinc-500">Planned</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
