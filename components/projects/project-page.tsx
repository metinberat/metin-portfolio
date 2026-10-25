import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/home/site-header";

const others = [
  { href: "/projects/absolute-ai", label: "Absolute AI" },
  { href: "/projects/form-3d", label: "FORM 3D" },
  { href: "/projects/akashi-persona", label: "Akashi Persona" }
];

/** Shell for the detailed case-study pages linked from the homepage. */
export function ProjectPage({ current, children }: { current: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <Link
          className="inline-flex items-center gap-2 text-sm text-titanium-300 transition hover:text-white"
          href="/#work"
        >
          <span aria-hidden="true">←</span> Back to the portfolio
        </Link>
        <div className="mt-6">{children}</div>
        <nav aria-label="Other projects" className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanium-500">
            Other projects
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {others
              .filter((item) => item.href !== current)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-lg font-semibold text-titanium-50 transition hover:text-white"
                    href={item.href}
                  >
                    {item.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
