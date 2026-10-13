import type { ReactNode } from "react";

export type Status = "Built" | "Experimental" | "Planned";

// The reflection texts are drafts until Metin confirms them as his own words.
// Set to true only after that review.
export const REFLECTIONS_CONFIRMED = false;

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {children}
    </p>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.075] px-3 py-1.5 text-[0.7rem] font-semibold text-zinc-200">
      {children}
    </span>
  );
}

const statusDot: Record<Status, string> = {
  Built: "bg-zinc-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]",
  Experimental: "bg-zinc-400",
  Planned: "border border-dashed border-zinc-400 bg-transparent"
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-zinc-300">
      <span className={`h-2 w-2 shrink-0 rounded-full ${statusDot[status]}`} />
      {status}
    </span>
  );
}

export function ProjectLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children} <span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}

export function TextLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-200 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white/70"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-zinc-300" key={item}>
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SubHeading({
  label,
  title,
  aside
}: {
  label: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h4 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </h4>
      </div>
      {aside}
    </div>
  );
}

export function Reflection({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.25rem] border border-white/15 bg-black/25 p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Eyebrow>My reflection</Eyebrow>
        {REFLECTIONS_CONFIRMED ? null : (
          <span className="rounded-full border border-dashed border-white/25 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
            Draft — pending review
          </span>
        )}
      </div>
      <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </div>
  );
}
