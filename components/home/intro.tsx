import Image, { type StaticImageData } from "next/image";
import { SectionLabel } from "@/components/home/section-label";
import paris from "@/public/photos/paris.jpg";
import rome from "@/public/photos/rome.jpg";

function Photo({
  src,
  alt,
  place,
  className = ""
}: {
  src: StaticImageData;
  alt: string;
  place: string;
  className?: string;
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <Image
          alt={alt}
          className="h-auto w-full transition duration-700 motion-safe:group-hover:scale-[1.03]"
          placeholder="blur"
          priority
          sizes="(min-width: 1024px) 300px, (min-width: 768px) 32vw, 45vw"
          src={src}
        />
      </div>
      <figcaption className="mt-2 text-xs uppercase tracking-[0.2em] text-titanium-500">
        {place}
      </figcaption>
    </figure>
  );
}

export function Intro() {
  return (
    <section
      aria-labelledby="intro-title"
      className="mx-auto w-full max-w-6xl px-5 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pb-16"
      id="intro"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <SectionLabel label="About me" number="01" />
          <h1
            className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight text-titanium-50 sm:text-7xl lg:text-[5.5rem]"
            id="intro-title"
          >
            Metin Berat
            <br />
            Dönmez
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-8 text-titanium-100 sm:text-2xl sm:leading-9">
            I&apos;m a high school student from Istanbul. I like to understand
            how things work, and then make them better.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-titanium-300">
            That curiosity led me to build my own AI and software projects.
            Technology is a big part of my life, but it doesn&apos;t define all
            of it. Football, chess, travel and new experiences have shaped who I
            am just as much.
          </p>
        </div>

        <blockquote className="border-l border-white/25 pl-6 lg:col-span-5 lg:mb-2">
          <p className="text-lg leading-8 text-titanium-100">
            I don&apos;t want to settle for only the life that is in front of
            me. I want to find out how much of the world, and of life, I can
            experience.
          </p>
          <p className="mt-4 text-base leading-8 text-titanium-300">
            That&apos;s why I want to study abroad and keep building projects
            that matter.
          </p>
        </blockquote>
      </div>

      <div className="mt-12 grid grid-cols-2 items-start gap-4 sm:gap-6 md:ml-auto md:w-[64%] lg:mt-14 lg:w-[54%]">
        <Photo
          alt="Metin standing in front of the Eiffel Tower in Paris"
          place="Paris"
          src={paris}
        />
        <Photo
          alt="Metin standing in front of the Trevi Fountain in Rome"
          className="mt-12 sm:mt-20"
          place="Rome"
          src={rome}
        />
      </div>
    </section>
  );
}
