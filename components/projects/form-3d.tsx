import Image from "next/image";
import {
  ChapterClosing,
  ChapterHeader,
  FactRow,
  ProjectChapter
} from "@/components/projects/chapter";
import { MediaFrame } from "@/components/showcase/media-frame";
import {
  BulletList,
  ProjectLink,
  Reflection,
  StatusBadge,
  SubHeading
} from "@/components/showcase/ui";
import { VideoShowcase } from "@/components/showcase/video-showcase";
import rigShot from "@/public/evidence/form-3d/form-3d-rig-2026-10-03.webp";
import studioShot from "@/public/evidence/form-3d/form-3d-studio-2026-10-03.webp";

const SOURCE = "https://github.com/metinberat/akashi-ai/tree/cloud-source-latest/products/form";
const REPORT =
  "https://github.com/metinberat/akashi-ai/blob/cloud-source-latest/products/form/validation.md";

// Summarised from products/form/validation.md (3 Oct 2026) on the public
// cloud-source-latest branch. All 3D test assets in that report were synthetic.
const results: { label: string; tone: "works" | "partial" | "failed"; items: string[] }[] = [
  {
    label: "Works on test data",
    tone: "works",
    items: [
      "The packaged app creates a project, runs a real Blender build, saves it, exports it and restores it after a restart",
      "A 57-joint skeleton with finger and pose checks, simple animation and GLB export — not a full professional rig",
      "Planning, reference measurement and visual comparison without any AI model",
      "A local Ollama model (qwen3:8b) wrote a valid design proposal (text only, no vision)"
    ]
  },
  {
    label: "Partial",
    tone: "partial",
    items: [
      "Appearance works technically, but the body still looks segmented and stylized",
      "A learned 3D shape model made a clean test mesh, but without a rig or textures"
    ]
  },
  {
    label: "Did not work",
    tone: "failed",
    items: [
      "Rebuilding a character from an earlier 2D artwork: the mesh looked wrong. A new check now rejects such images before building."
    ]
  }
];

const stages = [
  { name: "Goal", caption: "A high-level creative brief" },
  { name: "Plan", caption: "Scene, assets and steps" },
  { name: "Create", caption: "Blender and other apps" },
  { name: "Review", caption: "Check the render, then improve" }
];

const plannedDemos = [
  "Building a character from a short brief",
  "Skeleton and pose checks in the 3D viewer",
  "Exporting a project and opening it again"
];

function ConceptLoop() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-4 pt-10 sm:px-10 sm:pt-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(225,228,236,0.11),transparent_60%)]" />
      <ol className="relative grid grid-cols-4 items-stretch gap-2 sm:gap-5 lg:gap-8">
        {stages.map((stage, index) => (
          <li className="relative flex" key={stage.name}>
            <div className="flex w-full flex-col rounded-lg border border-white/20 bg-black/45 p-2 sm:min-h-[8rem] sm:rounded-2xl sm:p-5 lg:min-h-[11rem] lg:p-6">
              <span className="font-mono text-[0.55rem] text-zinc-500 sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-zinc-100 sm:mt-5 sm:text-lg sm:tracking-[0.2em]">
                {stage.name}
              </span>
              <span className="mt-auto hidden pt-3 text-xs leading-5 text-zinc-400 sm:block lg:text-sm">
                {stage.caption}
              </span>
            </div>
            {index < stages.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-[0.6rem] text-zinc-400 sm:-right-4 sm:text-base lg:-right-6"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="relative mx-[12.5%] mt-2 sm:mt-5">
        <div className="ml-[33.3%] h-3 rounded-b-xl border-x border-b border-dashed border-white/30 sm:h-8" />
        <p className="mt-1.5 text-center text-[0.55rem] uppercase tracking-[0.16em] text-zinc-500 sm:mt-3 sm:text-xs">
          Review → plan again
        </p>
      </div>
    </div>
  );
}

const toneStyle = {
  works: "bg-zinc-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]",
  partial: "bg-zinc-400",
  failed: "border border-zinc-400 bg-transparent"
};

export function Form3D() {
  return (
    <ProjectChapter id="form-3d">
      <ChapterHeader
        actions={
          <>
            <ProjectLink href={SOURCE}>Source code</ProjectLink>
            <ProjectLink href={REPORT}>Validation report</ProjectLink>
          </>
        }
        aside={
          <>
            <FactRow
              detail="The character skeleton, checked in Blender and exported as GLB."
              label="Joints in the rig"
              value="57"
            />
            <FactRow
              detail="The app was tested with a real Blender 5.2 installation."
              label="Blender builds"
              value="Real"
            />
            <FactRow
              detail="No professional 3D asset was used; all 3D tests were synthetic."
              label="Professional assets"
              value="0"
            />
          </>
        }
        chips={["Blender", "Python", "Electron", "Ollama"]}
        id="form-3d"
        intro={
          <>
            <p>
              A desktop app that builds a 3D character in Blender from a short
              design: body, face, clothes, a skeleton, simple animation and
              export. It runs as its own app with its own local runtime, but it
              reuses some engine code from the Absolute AI repository.
            </p>
            <p>
              It is a working prototype, tested only on synthetic data. The
              results are technically correct, but they do not look
              professional yet. My long-term goal is a creative agent that can
              plan and work across several creative apps.
            </p>
          </>
        }
        label="Creative AI · Separate app"
        number="02"
        status="Prototype"
        title="FORM 3D"
      />

      <MediaFrame
        caption="Real screenshot of FORM Character Studio (3 Oct 2026): a Blender-built test character with its skeleton in the 3D viewer. The app itself marks artistic quality as unmeasured."
        kind="Real screenshots"
      >
        <Image
          alt="FORM Character Studio 3D view with a rigged test character and its skeleton"
          className="absolute inset-0 h-full w-full object-cover"
          placeholder="blur"
          sizes="(min-width: 1280px) 1100px, 100vw"
          src={rigShot}
        />
      </MediaFrame>

      <div>
        <SubHeading
          label="Prototype status"
          title="What works today, and what does not"
          aside={
            <a
              className="text-xs font-semibold text-zinc-300 underline decoration-white/30 underline-offset-4 hover:text-white"
              href={REPORT}
              rel="noopener noreferrer"
              target="_blank"
            >
              From the validation report, 3 Oct 2026 ↗
            </a>
          }
        />
        <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_1fr]">
          {results.map((group) => (
            <div
              className="rounded-[1.1rem] border border-white/15 bg-black/25 p-4 sm:p-5"
              key={group.label}
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${toneStyle[group.tone]}`} />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  {group.label}
                </p>
              </div>
              <div className="mt-3">
                <BulletList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <figure className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-[1.25rem] border border-white/15">
          <Image
            alt="FORM Character Studio workspace with the Blender render, version history and production controls"
            className="h-auto w-full"
            placeholder="blur"
            sizes="(min-width: 1024px) 600px, 100vw"
            src={studioShot}
          />
        </div>
        <figcaption className="text-sm leading-7 text-zinc-300">
          <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Studio view · real screenshot
          </span>
          The same test project in the Studio view: the Blender render, the
          version history (&ldquo;completed partial&rdquo;) and the production
          controls. The history lists 11 receipts for this build.
        </figcaption>
      </figure>

      <div>
        <SubHeading
          aside={<StatusBadge status="Planned" />}
          label="Long-term goal"
          title="From character studio to creative agent"
        />
        <MediaFrame
          caption="Concept diagram of the planned agent loop. It is not a real render or a product screenshot."
          kind="Concept"
        >
          <ConceptLoop />
        </MediaFrame>
      </div>

      <ChapterClosing
        evidence={
          // Real recordings go in /public/demos/form-3d/ and are passed as `video`.
          <VideoShowcase planned={plannedDemos} />
        }
        evidenceLabel="Demonstration"
        reflection={
          <Reflection>
            <p>
              I don&apos;t want to make another tool that turns one prompt into
              one image. I want an agent that actually works inside creative
              apps, step by step. I will only show results here when they are
              real and tested.
            </p>
          </Reflection>
        }
      />
    </ProjectChapter>
  );
}
