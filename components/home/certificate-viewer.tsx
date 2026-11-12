"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

/**
 * Preview of a document image that opens a full-size view in a native <dialog>
 * (Escape, focus handling and backdrop come from the browser).
 */
export function CertificateViewer({
  image,
  alt,
  caption,
  downloadHref
}: {
  image: StaticImageData;
  alt: string;
  caption: string;
  downloadHref?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();

  return (
    <figure>
      <button
        aria-haspopup="dialog"
        className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black text-left shadow-[0_40px_100px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={() => dialog.current?.showModal()}
        type="button"
      >
        <Image
          alt={alt}
          className="h-auto w-full transition duration-700 motion-safe:group-hover:scale-[1.02]"
          placeholder="blur"
          sizes="(min-width: 1024px) 460px, 100vw"
          src={image}
        />
        {/* Shown on hover/focus only, so it never covers the document text. */}
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold text-titanium-50 opacity-0 backdrop-blur transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Enlarge ↗
        </span>
        <span className="sr-only">Open the full-size certificate</span>
      </button>
      <figcaption className="mt-3 text-xs text-titanium-500">{caption}</figcaption>

      <dialog
        aria-label={alt}
        className="w-[min(96vw,1200px)] rounded-2xl border border-white/15 bg-[#0b0c0e] p-0 text-titanium-50 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        ref={dialog}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <p className="text-sm text-titanium-300">{caption}</p>
          <div className="flex items-center gap-4">
            {downloadHref ? (
              <a
                className="text-sm font-semibold text-titanium-50 underline decoration-white/30 underline-offset-4 hover:decoration-white"
                download
                href={downloadHref}
              >
                Download
              </a>
            ) : null}
            <button
              className="rounded-full border border-white/20 px-3 py-1 text-sm text-titanium-50 transition hover:bg-white/10"
              onClick={close}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
        <Image
          alt={alt}
          className="mx-auto h-auto max-h-[80vh] w-auto"
          sizes="96vw"
          src={image}
        />
      </dialog>
    </figure>
  );
}
