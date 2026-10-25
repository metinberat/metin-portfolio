import { SectionLabel } from "@/components/home/section-label";

// GitHub is the only confirmed public contact method for now.
const GITHUB = "https://github.com/metinberat";

export function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-5 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20"
      id="contact"
    >
      <SectionLabel label="Contact" number="05" />
      <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
        <h2
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-titanium-50 sm:text-6xl"
          id="contact-title"
        >
          Questions or ideas? I&apos;d like to hear them.
        </h2>
        <a
          className="inline-flex w-fit items-center gap-3 rounded-full bg-titanium-50 px-7 py-3.5 text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
          href={GITHUB}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="mt-16 text-xs text-titanium-500">© 2026 Metin Berat Dönmez</p>
    </section>
  );
}
