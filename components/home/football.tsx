import Image from "next/image";
import { SectionLabel } from "@/components/home/section-label";
import { TFF_RECORD_URL } from "@/lib/site";
import team from "@/public/photos/football-team.jpg";

export function Football() {
  return (
    <section
      aria-labelledby="football-title"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
      id="football"
    >
      <SectionLabel label="Football" number="04" />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
        <figure className="group">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
            {/* On desktop the photo is cropped to 330px high; the whole team stays in frame. */}
            <Image
              alt="Metin Berat Dönmez with his football team on the pitch, all in red training kits"
              className="h-auto w-full transition duration-700 motion-safe:group-hover:scale-[1.02] lg:h-[330px] lg:object-cover lg:object-center"
              placeholder="blur"
              sizes="(min-width: 1024px) 600px, 100vw"
              src={team}
            />
          </div>
          <figcaption className="mt-3 text-xs text-titanium-500">With my team.</figcaption>
        </figure>

        <div>
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight text-titanium-50 sm:text-4xl"
            id="football-title"
          >
            Football &amp; Leadership
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-titanium-200">
            <p>
              I was a licensed football player and trained at Inter Academy
              Beylikdüzü, where I also served as a team captain. Football
              required regular practice, discipline and responsibility to my
              teammates.
            </p>
            <p>
              I also had the chance to train with İbrahim Yattara. Being a
              captain taught me to lead by example, communicate under pressure
              and support the team when things were difficult. Those lessons
              still matter to me outside the field.
            </p>
          </div>
          <a
            className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-titanium-50 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            href={TFF_RECORD_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Official TFF Player Record <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
