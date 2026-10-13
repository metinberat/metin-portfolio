import {
  ChapterClosing,
  ChapterHeader,
  FactRow,
  ProjectChapter
} from "@/components/projects/chapter";
import {
  DiagramConnector,
  DiagramFigure,
  DiagramLayer,
  DiagramNode
} from "@/components/projects/diagram";
import { MediaFrame } from "@/components/showcase/media-frame";
import {
  BulletList,
  Reflection,
  StatusBadge,
  SubHeading
} from "@/components/showcase/ui";
import { VideoShowcase } from "@/components/showcase/video-showcase";

// Everything in this chapter is a plan. Nothing here is a verified result.
const stages = [
  {
    name: "Goal",
    caption: "A high-level creative brief",
    detail:
      "Read a short brief, such as a scene description, and turn it into clear targets: objects, mood, camera and output format."
  },
  {
    name: "Plan",
    caption: "Scene, assets and steps",
    detail:
      "Break the work into ordered steps: build or import assets, set up materials and lighting, place the camera, and choose render settings."
  },
  {
    name: "Create",
    caption: "Blender and other apps",
    detail:
      "Carry out each step inside the application. For Blender, this would go through its Python API, with a checkpoint after each step."
  },
  {
    name: "Review",
    caption: "Check the render, then improve",
    detail:
      "Render a preview, compare it with the targets, and decide what to fix. Then plan again, until the result is good enough or a limit is reached."
  }
];

const plannedCapabilities = [
  "Planning a scene from a high-level goal",
  "Controlling Blender step by step",
  "Checking the final render",
  "Using feedback to improve the result",
  "Working across more creative applications than Blender"
];

const plannedDemos = [
  "A Blender scene built from a short written goal",
  "The review loop improving a render step by step",
  "A final render together with its scene file"
];

function ConceptLoop() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-4 pt-10 sm:px-10 sm:pt-8 lg:px-16">
      <p className="relative mb-3 hidden text-center text-xs uppercase tracking-[0.2em] text-zinc-500 sm:block lg:mb-6">
        Input: a high-level creative idea
      </p>
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(225,228,236,0.11),transparent_60%)]" />
      <ol className="relative grid grid-cols-4 items-stretch gap-2 sm:gap-5 lg:gap-8">
        {stages.map((stage, index) => (
          <li className="relative flex" key={stage.name}>
            <div className="flex w-full flex-col rounded-lg border border-white/20 bg-black/45 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[9rem] sm:rounded-2xl sm:p-5 lg:min-h-[14rem] lg:p-7">
              <span className="font-mono text-[0.55rem] text-zinc-500 sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-zinc-100 sm:mt-6 sm:text-lg sm:tracking-[0.2em] lg:text-xl">
                {stage.name}
              </span>
              <span className="mt-auto hidden pt-3 text-xs leading-5 text-zinc-400 sm:block lg:text-sm lg:leading-6">
                {stage.caption}
              </span>
            </div>
            {index < stages.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-[0.6rem] text-zinc-400 sm:-right-4 sm:text-base lg:-right-6 lg:text-lg"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      {/* Feedback loop from Review back to Plan */}
      <div aria-hidden="true" className="relative mx-[12.5%] mt-2 sm:mt-5">
        <div className="ml-[33.3%] h-3 rounded-b-xl border-x border-b border-dashed border-white/30 sm:h-8" />
        <p className="mt-1.5 text-center text-[0.55rem] uppercase tracking-[0.16em] text-zinc-500 sm:mt-3 sm:text-xs">
          Review → plan again
        </p>
      </div>
      <p className="relative mt-3 hidden text-center text-xs uppercase tracking-[0.2em] text-zinc-500 sm:block lg:mt-6">
        Output: a final 3D / CGI result
      </p>
    </div>
  );
}

function ProposedArchitecture() {
  return (
    <DiagramFigure
      ariaLabel="Proposed architecture of the autonomous 3D/CGI agent"
      label="Proposed architecture"
      note="A design plan — none of these parts is built or verified yet"
    >
      <div className="mt-5 grid items-stretch lg:grid-cols-[minmax(0,0.8fr)_auto_minmax(0,1.4fr)_auto_minmax(0,1fr)]">
        <DiagramLayer label="Input">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <DiagramNode caption="Short scene description" muted title="Creative brief" />
            <DiagramNode caption="Optional images" muted title="References" />
          </div>
        </DiagramLayer>

        <DiagramConnector label="Targets" />

        <DiagramLayer label="Agent core — planned">
          <div className="grid grid-cols-2 gap-2">
            <DiagramNode caption="Goal → ordered steps" muted title="Planner" />
            <DiagramNode caption="Compares render with targets" muted title="Reviewer" />
            <DiagramNode caption="What worked, what failed" muted title="Attempt memory" />
            <DiagramNode caption="Step limits, saved checkpoints" muted title="Safety & limits" />
          </div>
        </DiagramLayer>

        <DiagramConnector label="Tool calls" />

        <DiagramLayer label="Applications & output">
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            <DiagramNode caption="Through its Python API" muted title="Blender" />
            <DiagramNode caption="Later stage" muted title="Other creative apps" />
            <DiagramNode caption="Preview, final render, scene file" muted title="Output" />
          </div>
        </DiagramLayer>
      </div>
    </DiagramFigure>
  );
}

export function CGIAgent() {
  return (
    <ProjectChapter id="cgi-agent">
      <ChapterHeader
        aside={
          <>
            <FactRow
              detail="No CGI result has been verified yet, so none is shown."
              label="Verified outputs"
              value="0"
            />
            <FactRow
              detail="Goal → Plan → Create → Review, with a loop back from Review."
              label="Planned stages"
              value="4"
            />
            <FactRow
              detail="No public repository is linked yet. It will be added when there is code to show."
              label="Public code"
              value="—"
            />
          </>
        }
        chips={["Blender", "Agent planning", "Tool use", "Visual review"]}
        id="cgi-agent"
        intro={
          <>
            <p>
              A separate research project. The vision is a general-purpose
              creative agent: it takes a high-level idea, plans the work, uses
              creative applications such as Blender, and reviews and improves
              the result until it reaches a final 3D or CGI output.
            </p>
            <p>
              It is not a preset animation generator or a one-prompt image
              tool, and it is not part of Absolute Akashi AI. The project is at
              the research and planning stage.
            </p>
          </>
        }
        label="Research project · Independent creative agent"
        number="02"
        status="Research stage"
        title="Autonomous AI 3D / CGI Agent"
      />

      <MediaFrame
        caption="Concept diagram of the planned agent loop. It is not a real render or a product screenshot."
        kind="Concept"
      >
        <ConceptLoop />
      </MediaFrame>

      <ProposedArchitecture />

      <div>
        <SubHeading
          aside={<StatusBadge status="Planned" />}
          label="Planned workflow"
          title="What each stage should do"
        />
        <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <li
              className="rounded-[1.1rem] border border-dashed border-white/20 bg-black/20 p-4"
              key={stage.name}
            >
              <span className="font-mono text-xs text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-white">
                {stage.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{stage.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <SubHeading label="Status" title="What exists today, and what is planned" />
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="rounded-[1.1rem] border border-white/15 bg-black/25 p-4">
            <StatusBadge status="Built" />
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Nothing yet. No CGI output has been verified, and no part of the
              agent is presented as working.
            </p>
          </div>
          <div className="rounded-[1.1rem] border border-dashed border-white/20 p-4">
            <StatusBadge status="Planned" />
            <div className="mt-3">
              <BulletList items={plannedCapabilities} />
            </div>
          </div>
        </div>
      </div>

      <ChapterClosing
        evidence={
          // Real recordings go in /public/demos/cgi-agent/ and are passed as `video`.
          <VideoShowcase planned={plannedDemos} />
        }
        evidenceLabel="Future demonstration"
        reflection={
          <Reflection>
            <p>
              I don&apos;t want to make another tool that turns one prompt into
              one image. I want an agent that actually works inside creative
              apps, step by step. I will only show results here when I have
              working demos.
            </p>
          </Reflection>
        }
      />
    </ProjectChapter>
  );
}
