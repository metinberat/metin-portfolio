import type { ReactNode } from "react";

type MediaKind = "Real screenshots" | "Real recording" | "Concept" | "In preparation";

/**
 * Wide 16:9 frame for project media. `kind` is always shown so a reviewer can
 * tell real evidence apart from concept graphics.
 */
export function MediaFrame({
  kind,
  caption,
  children
}: {
  kind: MediaKind;
  caption: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#0b0c0e] shadow-[0_40px_120px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-500 group-hover:border-white/30">
        {children}
        <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_60px_80px_-60px_rgba(255,255,255,0.10)]" />
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.06)_48%,transparent_60%)] transition-transform duration-[1400ms] ease-out group-hover:translate-x-full motion-reduce:hidden" />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur sm:left-4 sm:top-4">
          {kind}
        </span>
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-zinc-300">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Empty 16:9 state for evidence that does not exist yet. */
export function PendingMedia({
  title,
  detail,
  items
}: {
  title: string;
  detail: string;
  /** Optional list of what this area will show once real evidence exists. */
  items?: string[];
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-4 pt-10 text-center sm:p-6">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.07),transparent_60%)]" />
      <span className="relative hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] sm:flex">
        <span className="h-2 w-2 rounded-full border border-dashed border-zinc-400" />
      </span>
      <p className="relative text-sm font-semibold text-zinc-200 sm:mt-4">{title}</p>
      <p className="relative mt-2 max-w-sm text-xs leading-5 text-zinc-400">
        {detail}
      </p>
      {items && items.length > 0 ? (
        <ul className="relative mt-6 hidden w-full max-w-md divide-y divide-white/10 rounded-2xl border border-dashed border-white/20 bg-black/30 text-left md:block">
          {items.map((item, index) => (
            <li className="flex gap-3 px-4 py-2.5 text-sm text-zinc-300" key={item}>
              <span className="font-mono text-xs leading-5 text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
