import Image from "next/image";
import { SectionLabel } from "@/components/home/section-label";
import setup from "@/public/photos/pc-setup.jpg";

// Verified results only (checked against the original profile screenshots).
const results = [
  { game: "Chess.com", value: "2053", detail: "Rapid rating" },
  { game: "Valorant", value: "Immortal 3", detail: "Peak: 268 RR" }
];

export function Hardware() {
  return (
    <section
      aria-labelledby="hardware-title"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
      id="hardware"
    >
      <SectionLabel label="Hardware & Competitive Achievements" number="04" />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <figure className="group lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
            <Image
              alt="Metin's desk setup at night: two monitors, a keyboard and a white PC case with green lighting"
              className="h-auto w-full transition duration-700 motion-safe:group-hover:scale-[1.02]"
              placeholder="blur"
              sizes="(min-width: 1024px) 640px, 100vw"
              src={setup}
            />
          </div>
          <figcaption className="mt-3 text-xs text-titanium-500">My setup.</figcaption>
        </figure>

        <div className="lg:col-span-5">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight text-titanium-50 sm:text-4xl"
            id="hardware-title"
          >
            Inside the machine.
          </h2>
          <p className="mt-5 text-base leading-8 text-titanium-200">
            I&apos;m also interested in computer hardware: choosing parts,
            building systems and understanding what makes a computer perform
            well.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanium-500">
          Competitive results
        </p>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2">
          {results.map((item) => (
            <li className="flex items-baseline gap-5" key={item.game}>
              <p className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-titanium-300">
                {item.game}
              </p>
              <div>
                <p className="text-3xl font-semibold tracking-tight text-titanium-50 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-titanium-300">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
