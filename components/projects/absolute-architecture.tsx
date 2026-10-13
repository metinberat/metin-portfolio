import {
  DiagramConnector,
  DiagramFigure,
  DiagramFlow,
  DiagramLayer,
  DiagramNode
} from "@/components/projects/diagram";

export function AbsoluteArchitecture() {
  return (
    <DiagramFigure
      ariaLabel="Architecture diagram of Absolute Akashi AI"
      label="System architecture"
      note="Diagram drawn from the repository documentation — not a screenshot"
    >
      <div className="mt-5 grid items-stretch lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.5fr)_auto_minmax(0,1fr)]">
        <DiagramLayer label="Clients">
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            <DiagramNode caption="Next.js, static export" title="Web" />
            <DiagramNode caption="Hardened Electron shell" title="Windows app" />
            <DiagramNode caption="Capacitor — experimental" muted title="Android / iOS" />
          </div>
        </DiagramLayer>

        <DiagramConnector label="API token · SSE" />

        <DiagramLayer className="bg-white/[0.035]" label="AKASHI Core — FastAPI">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <DiagramNode caption="Intent, persona, context" title="Brain" />
            <DiagramNode caption="Summaries, long-term" title="Memory V2" />
            <DiagramNode caption="Fast · quality · reasoning · vision" title="Model router" />
            <DiagramNode caption="Queries, sources, citations" title="Research" />
            <DiagramNode caption="Risk levels, approvals" title="Tools & tasks" />
            <DiagramNode caption="Goal graphs — experimental" muted title="Autonomy engine" />
            <DiagramNode caption="Pairing, action queue" title="Devices" />
            <DiagramNode caption="Validated uploads" title="Files" />
            <DiagramNode caption="Authenticated SSE" title="Event stream" />
          </div>
        </DiagramLayer>

        <DiagramConnector label="Providers · devices" />

        <DiagramLayer label="Models, services, devices">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            <DiagramNode caption="Cloud and local models" title="Gemini · Ollama" />
            <DiagramNode caption="Search providers" title="Wikipedia · SearXNG" />
            <DiagramNode caption="Local image generation" title="ComfyUI" />
            <DiagramNode caption="Paired, polls for actions" title="Windows Agent" />
          </div>
        </DiagramLayer>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <DiagramFlow
          status="Built"
          steps={["App", "Core action queue", "Windows Agent polls", "Runs one named action", "Result + event"]}
          title="Device actions"
        />
        <DiagramFlow
          status="Experimental"
          steps={["Desktop mic", "Gemini Live audio", "Tool requests → Core /chat"]}
          title="Always-on desktop voice"
        />
        <DiagramFlow
          status="Experimental"
          steps={["Phone call", "SIP trunk", "LiveKit SIP", "Phone worker", "Core /chat"]}
          title="Phone calls"
        />
      </div>
    </DiagramFigure>
  );
}
