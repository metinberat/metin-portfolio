import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/home/section-label";
import absoluteShot from "@/public/evidence/absolute/absolute-ai-2026-09-21.png";
import formShot from "@/public/evidence/form-3d/form-3d-rig-2026-10-03.webp";

type Project = {
  number: string;
  title: string;
  tag: string;
  summary: string;
  href: string;
  caption: string;
  visual: ReactNode;
};

// Real lines from core/akashi_persona.py in the customized Mark XXXIX project.
const personaLines = [
  "You respond in the user's language.",
  "If the user is casual, respond naturally.",
  "If the user gives a task, execute directly."
];

function PersonaVisual() {
  return (
    <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c0e]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-titanium-500">core/akashi_persona.py</span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-5 font-mono text-[0.8rem] leading-7 text-titanium-300 sm:px-10 sm:text-base sm:leading-9">
        <p className="text-titanium-50">You are A.K.A.S.H.I.</p>
        {personaLines.map((line) => (
          <p key={line}>
            <span className="text-titanium-500">- </span>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    number: "01",
    title: "Absolute AI",
    tag: "Independent · In development",
    summary:
      "My own AI system. One backend connects AI models, memory, web research and tools, and a Windows agent runs approved actions. Research and memory work; computer control and voice are still experimental.",
    href: "/projects/absolute-ai",
    caption: "Real app screenshot, 21 Sep 2026, with AI-generated background art. The voice error is real.",
    visual: (
      <Image
        alt="The Absolute AI Windows app with its AI-generated background art, activity log, system monitor, quick actions and a voice-worker error message"
        className="h-auto w-full rounded-2xl border border-white/10"
        placeholder="blur"
        quality={90}
        sizes="(min-width: 1024px) 640px, 100vw"
        src={absoluteShot}
      />
    )
  },
  {
    number: "02",
    title: "FORM 3D",
    tag: "Separate app · Prototype",
    summary:
      "A desktop app that builds 3D characters in Blender: body, clothes, a 57-joint skeleton and export. The prototype works on synthetic test data, and artistic quality is still limited.",
    href: "/projects/form-3d",
    caption: "Real screenshot: a rigged test character, 3 Oct 2026.",
    visual: (
      <Image
        alt="FORM Character Studio showing a Blender-built test character with its skeleton in the 3D viewer"
        className="h-auto w-full rounded-2xl border border-white/10"
        placeholder="blur"
        sizes="(min-width: 1024px) 640px, 100vw"
        src={formShot}
      />
    )
  },
  {
    number: "03",
    title: "Akashi Persona",
    tag: "Based on FatihMakes' Mark XXXIX",
    summary:
      "A customized version of Mark XXXIX, an assistant created by FatihMakes. I didn't build the original. I rewrote its personality and speaking style, restyled the interface and improved startup error handling.",
    href: "/projects/akashi-persona",
    caption: "Lines from my persona prompt.",
    visual: <PersonaVisual />
  }
];

export function SelectedWork() {
  return (
    <section
      aria-labelledby="work-title"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
      id="work"
    >
      <SectionLabel label="Selected work" number="02" />
      <h2 className="sr-only" id="work-title">
        Selected work
      </h2>

      <div className="mt-10 divide-y divide-white/10">
        {projects.map((project, index) => (
          <article
            className="grid items-center gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
            key={project.title}
          >
            <figure
              className={`group lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.55)] transition duration-500 motion-safe:group-hover:-translate-y-1">
                {project.visual}
              </div>
              <figcaption className="mt-3 text-xs text-titanium-500">
                {project.caption}
              </figcaption>
            </figure>

            <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-mono text-sm text-titanium-500">{project.number}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-titanium-50 sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-titanium-300">
                {project.tag}
              </p>
              <p className="mt-5 text-base leading-8 text-titanium-200">{project.summary}</p>
              <Link
                className="mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold text-titanium-50 transition hover:border-white hover:text-white"
                href={project.href}
              >
                View project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
