import {
  ChapterClosing,
  ChapterHeader,
  FactRow,
  ProjectChapter
} from "@/components/projects/chapter";
import { MediaFrame, PendingMedia } from "@/components/showcase/media-frame";
import {
  BulletList,
  Eyebrow,
  ProjectLink,
  Reflection,
  StatusBadge,
  SubHeading,
  type Status
} from "@/components/showcase/ui";

const MARK_XXXIX = "https://github.com/FatihMakes/Mark-XXXIX";

// Features of the original project, taken from the Mark XXXIX README.
const original = [
  "Real-time voice conversation",
  "Computer and application control",
  "Screen and file understanding",
  "Memory and the original interface"
];

// Verified by comparing my version with the original Mark XXXIX code
// (upstream commit d3e8504, 2 May 2026).
const changes: { title: string; status: Status; detail: string }[] = [
  {
    title: "Personality & speaking style",
    status: "Built",
    detail:
      "A rewritten system prompt with the Akashi identity: calm, direct answers, fewer filler words, and rules for telling casual conversation apart from real tasks."
  },
  {
    title: "Interface customization",
    status: "Built",
    detail:
      "The original JARVIS identity is replaced in system messages and logs, and the interface is restyled into a monochrome A.K.A.S.H.I. theme."
  },
  {
    title: "Startup error handling",
    status: "Built",
    detail:
      "Extra error handling and logging around startup, so problems are easier to find."
  },
  {
    title: "Model routing",
    status: "Experimental",
    detail:
      "A text router that picks between OpenAI, OpenRouter and Gemini by keywords. Tested only from a separate script; not connected to the main assistant."
  }
];

const evidence: { item: string; done: boolean }[] = [
  { item: "Original project and creator credited", done: true },
  { item: "My code compared with the original (2 May 2026 version)", done: true },
  { item: "Screenshot without third-party artwork", done: false },
  { item: "Short recording of a conversation in the Akashi style", done: false }
];

export function PersonaExtension() {
  return (
    <ProjectChapter id="persona-extension">
      <ChapterHeader
        actions={<ProjectLink href={MARK_XXXIX}>Original repository</ProjectLink>}
        aside={
          <>
            <Eyebrow>Original project</Eyebrow>
            <p className="mt-3 text-lg font-semibold text-white">
              Mark XXXIX by FatihMakes
            </p>
            <p className="mt-1 text-sm leading-6 text-zinc-400">
              All credit for the original assistant goes to its creator.
            </p>
            <div className="mt-4 border-t border-white/10 pt-4">
              <FactRow
                detail="Personality, interface, startup error handling and model routing."
                label="Areas I changed"
                value="4"
              />
              <FactRow
                detail="Compared with the original code from 2 May 2026."
                label="Changes checked"
                value="✓"
              />
            </div>
          </>
        }
        chips={["Python", "Prompt design", "UI theming"]}
        id="persona-extension"
        intro={
          <>
            <p>
              My customized version of Mark XXXIX, a personal AI assistant
              created by FatihMakes. I did not build the original system: its
              voice conversation, computer control, tools and interface are
              FatihMakes&apos; work.
            </p>
            <p>
              My changes focus on personality, speaking style, dialogue and
              behavior. This project is separate from Absolute AI.
            </p>
          </>
        }
        label="Customization project · Based on Mark XXXIX"
        number="03"
        status="Modified existing project"
        title="Akashi Persona"
      />

      <MediaFrame
        caption="The old screenshot used copyrighted artwork, so it was removed. A new, authentic screenshot will be added later."
        kind="In preparation"
      >
        <PendingMedia
          detail="Screenshot or recording of my customized version, without third-party artwork."
          items={[
            "A conversation in the Akashi speaking style",
            "Casual chat compared with a real task request",
            "The monochrome A.K.A.S.H.I. interface"
          ]}
          title="Evidence in preparation"
        />
      </MediaFrame>

      <div>
        <SubHeading label="Technical details" title="What came from the original, and what I changed" />
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
          <div className="rounded-[1.1rem] border border-white/15 bg-black/25 p-4 sm:p-5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              From the original — FatihMakes
            </p>
            <div className="mt-3">
              <BulletList items={original} />
            </div>
          </div>
          <div className="rounded-[1.1rem] border border-white/15 bg-black/25">
            <p className="px-4 pb-1 pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
              My modifications
            </p>
            <ul className="divide-y divide-white/10">
            {changes.map((item) => (
              <li
                className="grid gap-1.5 px-4 py-3.5 sm:grid-cols-[8.5rem_1fr] sm:gap-4 sm:px-5"
                key={item.title}
              >
                <div className="pt-0.5">
                  <StatusBadge status={item.status} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">{item.detail}</p>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>

      <ChapterClosing
        evidence={
          <div className="rounded-[1.25rem] border border-white/15 bg-black/25 p-5 sm:p-6">
            <ul className="space-y-3">
              {evidence.map(({ item, done }) => (
                <li className="flex items-start gap-3 text-sm leading-6" key={item}>
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      done
                        ? "bg-zinc-100 shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                        : "border border-dashed border-zinc-400"
                    }`}
                  />
                  <span className={done ? "text-zinc-200" : "text-zinc-400"}>
                    {item}
                    <span className="sr-only">{done ? " — done" : " — pending"}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-zinc-400">
              {/* Real recordings go in /public/demos/persona-extension/. */}
              Filled dots are done; dashed dots are still pending.
            </p>
          </div>
        }
        evidenceLabel="Evidence"
        reflection={
          <Reflection>
            <p>
              Working on someone else&apos;s project showed me how much you can
              change an assistant&apos;s behavior without rebuilding it. It also
              taught me why it matters to give credit and be clear about who
              built what.
            </p>
          </Reflection>
        }
      />
    </ProjectChapter>
  );
}
