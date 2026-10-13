import { MediaFrame } from "@/components/showcase/media-frame";

export type DemoVideo = {
  /** Path under /public, e.g. "/demos/absolute/research.mp4". Real recordings only. */
  src: string;
  poster?: string;
  title: string;
  caption: string;
};

function PlannedList({
  items,
  className
}: {
  items: string[];
  className: string;
}) {
  return (
    <ol className={className}>
      {items.map((item, index) => (
        <li className="flex gap-3 text-xs leading-5 text-zinc-300 sm:text-sm" key={item}>
          <span className="font-mono text-[0.68rem] leading-5 text-zinc-500 sm:leading-6">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

/**
 * 16:9 demo area. With `video`, it plays a real recording. Without one, it shows
 * a single "Demo in preparation" state that lists the planned recordings.
 */
export function VideoShowcase({
  video,
  planned
}: {
  video?: DemoVideo;
  planned: string[];
}) {
  if (video) {
    return (
      <MediaFrame caption={video.caption} kind="Real recording">
        <video
          aria-label={video.title}
          className="absolute inset-0 h-full w-full bg-black object-contain"
          controls
          playsInline
          poster={video.poster}
          preload="metadata"
          src={video.src}
        />
      </MediaFrame>
    );
  }

  return (
    <div>
      <MediaFrame
        caption="No public demo video yet. Only real, unedited screen recordings will be added here."
        kind="In preparation"
      >
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-[1fr_1.15fr]">
          <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="relative hidden items-center justify-center sm:flex">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/[0.05] shadow-[0_0_40px_rgba(255,255,255,0.06)]">
              <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-zinc-300" />
            </span>
          </div>
          <div className="relative flex flex-col items-center justify-center px-5 text-center sm:items-start sm:py-6 sm:pl-0 sm:pr-8 sm:text-left">
            <p className="text-base font-semibold text-white sm:text-lg">
              Demo in preparation
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">
              {planned.length} planned recordings
            </p>
            <PlannedList className="mt-3 hidden space-y-2 sm:block" items={planned} />
          </div>
        </div>
      </MediaFrame>
      <PlannedList className="mt-3 space-y-1.5 sm:hidden" items={planned} />
    </div>
  );
}
