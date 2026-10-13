import Image from "next/image";
import { AbsoluteArchitecture } from "@/components/projects/absolute-architecture";
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
  SubHeading,
  type Status
} from "@/components/showcase/ui";
import { VideoShowcase } from "@/components/showcase/video-showcase";

const REPO = "https://github.com/metinberat/akashi-ai";
const DEV_BRANCH = "https://github.com/metinberat/akashi-ai/tree/cloud-source-latest";

type Area = {
  title: string;
  status: Status;
  detail: string;
  evidence: string;
};

// Status is based on the public cloud-source-latest branch (commit 1c773dd).
// "Built" = code plus passing unit tests; "Experimental" = code exists, but it has
// no verified real-world run or depends on the real desktop/external services.
const areas: Area[] = [
  {
    title: "FastAPI Core & model routing",
    status: "Built",
    detail:
      "One backend owns every AI request. A router picks a model profile (fast, quality, reasoning or vision) and sends it to Gemini or a local Ollama model.",
    evidence: "test_core_api.py · test_intent.py"
  },
  {
    title: "Memory V2",
    status: "Built",
    detail:
      "Long sessions are compressed into summaries without changing the stored format. Long-term memory is saved only on request and rejects values that look like secrets.",
    evidence: "test_memory_v2.py"
  },
  {
    title: "Research with source tracking",
    status: "Built",
    detail:
      "Deep mode runs several search queries and removes duplicate sources. Each extract stays linked to its source, and citations come only from retrieved pages.",
    evidence: "test_research.py · screenshot above"
  },
  {
    title: "Tool permissions & approvals",
    status: "Built",
    detail:
      "Every tool has a risk level: safe, confirm or restricted. A task that needs confirmation waits for my approval, then runs its steps and saves the result.",
    evidence: "test_tools_tasks.py"
  },
  {
    title: "Device pairing & security",
    status: "Built",
    detail:
      "One-time pairing codes, salted token hashes, token checks on private routes, and private memory that public chat cannot read.",
    evidence: "test_devices.py · test_auth.py · test_absolute_security.py"
  },
  {
    title: "Web & Windows apps",
    status: "Built",
    detail:
      "One Next.js interface runs in the browser and inside a hardened Electron shell. The packaged Windows app passed its own visual test.",
    evidence: "Packaged-app visual test, 21 Sep 2026"
  },
  {
    title: "Windows desktop agent",
    status: "Experimental",
    detail:
      "Observe, act, verify. State-changing actions need approval and free terminal typing is blocked. The real-desktop tests were not part of my latest check.",
    evidence: "test_computer_agent.py (unit tests only)"
  },
  {
    title: "Autonomous planning & recovery",
    status: "Experimental",
    detail:
      "Goals become dependency graphs. Failed steps are observed again and retried, and a restart keeps checkpoints without assuming that unfinished work succeeded.",
    evidence: "test_autonomy_v2.py · no long real-world runs yet"
  },
  {
    title: "Voice & Live integrations",
    status: "Experimental",
    detail:
      "Always-on desktop voice through Gemini Live, and inbound phone calls through SIP and LiveKit. Both depend on external services.",
    evidence: "test_voice_sessions.py · test_phone.py"
  },
  {
    title: "Android & iOS apps",
    status: "Experimental",
    detail:
      "Capacitor shells reuse the same interface with native speech input and output. I have not verified them on real devices yet.",
    evidence: "Source only"
  }
];

const planned = [
  "Long autonomous tasks, tested end to end in real use",
  "Live camera effects that adapt in real time",
  "Control of embedded devices"
];

const challenges = [
  {
    problem: "Apps should not each hold API keys and their own AI logic.",
    solution:
      "All AI requests go through FastAPI Core. Desktop voice is the only exception: it streams audio straight to Gemini Live for low latency, but it still sends tool, memory and research requests back to Core."
  },
  {
    problem: "An AI that can act on a computer can also cause damage.",
    solution:
      "Risk levels for every tool, approval before state-changing actions, blocked free terminal typing, one-time device pairing, and tokens stored only as salted hashes."
  },
  {
    problem: "Desktop and browser steps fail often.",
    solution:
      "An observe–act–verify loop. A failed action is observed again and retried, and a rejected result leads to a new plan with recovery steps."
  },
  {
    problem: "A restart can hide what really happened.",
    solution:
      "Tasks and voice sessions keep checkpoints. After a restart, unfinished work is marked as interrupted, never reported as successful."
  }
];

const plannedDemos = [
  "AI research and tool execution",
  "Windows Agent completing a real task",
  "Failure recovery and task continuation",
  "Voice interaction — only if a working demo is recorded"
];

function AreaCard({ area }: { area: Area }) {
  return (
    <div className="flex flex-col rounded-[1.1rem] border border-white/15 bg-black/25 p-4 transition duration-300 hover:border-white/30 hover:bg-black/35">
      <StatusBadge status={area.status} />
      <p className="mt-3 text-[0.95rem] font-semibold leading-6 text-white">{area.title}</p>
      <p className="mt-1.5 flex-1 text-sm leading-6 text-zinc-300">{area.detail}</p>
      <p className="mt-3 border-t border-white/10 pt-2.5 font-mono text-[0.66rem] leading-4 text-zinc-500">
        {area.evidence}
      </p>
    </div>
  );
}

export function AbsoluteAkashi() {
  const built = areas.filter((area) => area.status === "Built");
  const experimental = areas.filter((area) => area.status === "Experimental");

  return (
    <ProjectChapter id="absolute-akashi">
      <ChapterHeader
        actions={
          <>
            <ProjectLink href={REPO}>Repository</ProjectLink>
            <ProjectLink href={DEV_BRANCH}>Development source</ProjectLink>
          </>
        }
        aside={
          <>
            <FactRow
              detail="Public cloud-source-latest branch (commit 1c773dd), last run on 13 Oct 2026."
              label="Backend unit tests passing"
              value="168"
            />
            <FactRow
              detail="They control the real computer, so they were not part of this check."
              label="Real-desktop tests not run"
              value="10"
            />
            <FactRow
              detail="The main branch has the early backend. Current work is on the development branch."
              label="Public branches"
              value="6"
            />
          </>
        }
        chips={["Python", "FastAPI", "TypeScript", "Next.js", "Electron", "Gemini · Ollama"]}
        id="absolute-akashi"
        intro={
          <p>
            A general-purpose AI system that I am building on my own. One
            FastAPI backend connects AI models, memory, research, tools, and
            devices. The same interface runs in the browser and as a Windows
            desktop app, and a paired Windows agent can carry out approved
            actions on my computer.
          </p>
        }
        label="Flagship project · Independently developed"
        number="01"
        status="Active development"
        title="Absolute Akashi AI"
      />

      {/* Media */}
      <MediaFrame
        caption={
          <>
            Composite of five real panels from an automated visual test of the
            packaged Windows app (21 Sep 2026): Agent Dock, research result,
            activity log, system monitor and quick actions. The panels are
            cropped and placed together; their content is unchanged. The
            background artwork of the app is left out. The interface text is
            in Turkish.{" "}
            <a
              className="font-semibold text-zinc-200 underline decoration-white/30 underline-offset-4 hover:text-white"
              href="/evidence/absolute/showcase-composite.webp"
              rel="noopener noreferrer"
              target="_blank"
            >
              View full size ↗
            </a>
          </>
        }
        kind="Real screenshots"
      >
        <Image
          alt="Five panels from the Absolute Akashi AI Windows app: Agent Dock with component status, a research result with six sources, the live activity log, the system monitor and quick actions"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority={false}
          sizes="(min-width: 1280px) 1100px, 100vw"
          src="/evidence/absolute/showcase-composite.webp"
          unoptimized
        />
      </MediaFrame>

      {/* Architecture */}
      <AbsoluteArchitecture />

      {/* Capabilities */}
      <div>
        <SubHeading
          aside={
            <div className="flex flex-wrap gap-4">
              <StatusBadge status="Built" />
              <StatusBadge status="Experimental" />
              <StatusBadge status="Planned" />
            </div>
          }
          label="Engineering work"
          title="What is built, what is experimental, and what is planned"
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {built.map((area) => (
            <AreaCard area={area} key={area.title} />
          ))}
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="grid gap-3 sm:grid-cols-2">
            {experimental.map((area) => (
              <AreaCard area={area} key={area.title} />
            ))}
          </div>
          <div className="rounded-[1.1rem] border border-dashed border-white/20 bg-transparent p-4">
            <StatusBadge status="Planned" />
            <p className="mt-3 text-[0.95rem] font-semibold text-white">Next goals</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">Not built yet.</p>
            <div className="mt-3">
              <BulletList items={planned} />
            </div>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <SubHeading label="Engineering challenges" title="Problems I had to solve" />
        <div className="grid gap-3 md:grid-cols-2">
          {challenges.map((item, index) => (
            <div
              className="grid gap-3 rounded-[1.1rem] border border-white/15 bg-black/25 p-4 sm:grid-cols-[2.25rem_1fr]"
              key={item.problem}
            >
              <span className="font-mono text-xs text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold leading-6 text-white">{item.problem}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  <span className="mr-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Solution
                  </span>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChapterClosing
        evidence={
          // Real recordings go in /public/demos/absolute/ and are passed as `video`.
          <VideoShowcase planned={plannedDemos} />
        }
        evidenceLabel="Demonstration"
        reflection={
          <Reflection>
            <p>
              I started Absolute Akashi AI because I wanted an assistant that
              could do more than answer messages. A chatbot can explain how to
              fix something, but I wanted a system that could take an action,
              check the result and continue. That goal shaped my main
              decisions. I put all of the AI logic in one FastAPI backend, so
              every app uses the same memory, tools and safety rules.
            </p>
            <p>
              Computer control is the hardest part. Apps and websites change,
              steps fail, and a model can sound confident and still be wrong.
              Because of this, I added risk levels, approval steps, retries and
              recovery plans, and I made the system mark unfinished work as
              interrupted instead of successful. Building memory taught me that
              saving everything is not useful; the system needs clear rules
              about what to keep and what to compress. Next, I want to test the
              computer agent on longer real tasks, record honest demos, and move
              the stable parts into the main branch.
            </p>
          </Reflection>
        }
      />
    </ProjectChapter>
  );
}
