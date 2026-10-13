import type { ReactNode } from "react";
import { TitaniumCard } from "@/components/titanium-card";
import { Eyebrow, Pill } from "@/components/showcase/ui";

/** Full-width titanium shell shared by every project chapter. */
export function ProjectChapter({
  id,
  children
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <article aria-labelledby={`${id}-title`} id={id}>
      <TitaniumCard className="p-4 sm:p-7 lg:p-10">
        <div className="relative z-10 space-y-10 lg:space-y-12">{children}</div>
      </TitaniumCard>
    </article>
  );
}

/**
 * Chapter heading: intro on the left, a short facts panel on the right.
 * Every project uses this so the three chapters read the same way.
 */
export function ChapterHeader({
  id,
  number,
  label,
  status,
  title,
  intro,
  chips,
  actions,
  aside
}: {
  id: string;
  number: string;
  label: string;
  status: string;
  title: string;
  intro: ReactNode;
  chips?: string[];
  actions?: ReactNode;
  aside: ReactNode;
}) {
  return (
    <header className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-10">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>
            {number} / {label}
          </Eyebrow>
          <Pill>{status}</Pill>
        </div>
        <h3
          className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          id={`${id}-title`}
        >
          {title}
        </h3>
        <div className="mt-4 max-w-2xl space-y-3 text-base leading-8 text-zinc-300">
          {intro}
        </div>
        {chips && chips.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <Pill key={chip}>{chip}</Pill>
            ))}
          </div>
        ) : null}
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      <div className="rounded-[1.25rem] border border-white/15 bg-black/30 p-5 lg:self-start">
        {aside}
      </div>
    </header>
  );
}

/** Row in a header facts panel: a large value, a label and one line of detail. */
export function FactRow({
  value,
  label,
  detail
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-white/10 py-3 first:pt-0 last:border-b-0 last:pb-0">
      <p className="w-16 shrink-0 text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-zinc-100">{label}</p>
        <p className="mt-0.5 text-xs leading-5 text-zinc-400">{detail}</p>
      </div>
    </div>
  );
}

/** Closing row of every chapter: reflection on the left, demo or evidence on the right. */
export function ChapterClosing({
  reflection,
  evidenceLabel,
  evidence
}: {
  reflection: ReactNode;
  evidenceLabel: string;
  evidence: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
      {reflection}
      <div>
        <div className="mb-3">
          <Eyebrow>{evidenceLabel}</Eyebrow>
        </div>
        {evidence}
      </div>
    </div>
  );
}
