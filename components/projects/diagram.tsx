import type { ReactNode } from "react";
import { Eyebrow, StatusBadge, type Status } from "@/components/showcase/ui";

export function DiagramNode({
  title,
  caption,
  muted = false
}: {
  title: string;
  caption?: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`min-w-0 rounded-xl border px-3 py-2.5 ${
        muted
          ? "border-dashed border-white/15 bg-transparent"
          : "border-white/15 bg-white/[0.055]"
      }`}
    >
      <p className="text-[0.8rem] font-semibold leading-5 text-zinc-100">{title}</p>
      {caption ? (
        <p className="mt-0.5 text-[0.68rem] leading-4 text-zinc-400">{caption}</p>
      ) : null}
    </div>
  );
}

export function DiagramLayer({
  label,
  children,
  className = ""
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.1rem] border border-white/15 bg-black/30 p-3 sm:p-4 ${className}`}>
      <p className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      {children}
    </div>
  );
}

export function DiagramConnector({ label }: { label: string }) {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-2 py-1 lg:flex-col lg:px-1 lg:py-0">
      <span className="h-5 w-px bg-gradient-to-b from-white/10 via-white/50 to-white/10 lg:h-px lg:w-8 lg:bg-gradient-to-r" />
      <span className="whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.14em] text-zinc-500 lg:[writing-mode:vertical-rl] lg:rotate-180">
        {label}
      </span>
      <span className="h-5 w-px bg-gradient-to-b from-white/10 via-white/50 to-white/10 lg:h-px lg:w-8 lg:bg-gradient-to-r" />
    </div>
  );
}

export function DiagramFlow({
  title,
  status,
  steps
}: {
  title: string;
  status: Status;
  steps: string[];
}) {
  return (
    <div className="rounded-[1.1rem] border border-white/15 bg-black/25 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-white">{title}</p>
        <StatusBadge status={status} />
      </div>
      <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {steps.map((step, index) => (
          <li className="flex items-center gap-1.5" key={step}>
            <span className="rounded-md border border-white/12 bg-white/[0.05] px-2 py-1 text-[0.7rem] leading-4 text-zinc-300">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="text-[0.7rem] text-zinc-500">→</span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Dark framed figure used for every technical diagram. */
export function DiagramFigure({
  label,
  note,
  ariaLabel,
  children
}: {
  label: string;
  note: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <figure
      aria-label={ariaLabel}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[radial-gradient(circle_at_50%_0%,rgba(220,224,233,0.12),transparent_55%),linear-gradient(160deg,#1d1f24,#0e0f12_60%,#08090b)] p-4 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <div className="relative">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <Eyebrow>{label}</Eyebrow>
          <span className="text-[0.68rem] text-zinc-500">{note}</span>
        </div>
        {children}
      </div>
    </figure>
  );
}
