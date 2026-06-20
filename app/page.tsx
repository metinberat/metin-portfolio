import Image from "next/image";
import {
  competitiveAchievements,
  contactLinks,
  educationEnglish,
  featuredProjects,
  goals,
  technicalSkills,
  timeline
} from "@/components/portfolio-data";
import { SectionHeader } from "@/components/section-header";
import { TitaniumCard } from "@/components/titanium-card";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <DirectionGoals />
      <FeaturedProjects />
      <TechnicalSkills />
      <EducationEnglish />
      <CompetitiveAchievements />
      <Timeline />
      <Contact />
    </main>
  );
}

function About() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
      <SectionHeader
        eyebrow="About Me"
        title="I learn by building, testing, comparing, and improving."
        description="My interests connect through the same mindset: discipline, strategy, and visible progress."
      />
      <TitaniumCard className="grid gap-5 p-5 sm:gap-7 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-[0.96rem] leading-8 text-graphite-700 sm:text-base">
          <p>
            I am a high school student from Istanbul who learns by building,
            testing, comparing, and improving. My interests are not separate
            from each other: AI tools, web development, PC hardware,
            competitive games, chess, English, and international education all
            connect through the same mindset — discipline, strategy, and
            visible progress.
          </p>
          <p>
            I like systems. I like understanding how things work, why they
            fail, and how they can be improved. That is why I spend time with AI
            workflows, performance optimization, interface ideas, hardware
            decisions, and projects like Akashi AI. I do not want this
            portfolio to be a simple biography; I want it to become proof of
            what I build, what I learn, and how I develop over time.
          </p>
          <p>
            Competitive gaming and chess are part of my background, but they
            are not the whole story. They trained me to review mistakes, stay
            calm under pressure, think ahead, and improve through repetition. I
            want to carry that same mentality into software, AI, English
            communication, and future international opportunities.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            [
              "Mindset",
              "Strategic, competitive, analytical, and improvement-focused."
            ],
            [
              "Current Focus",
              "AI workflows, web development, PC hardware, English, and portfolio building."
            ],
            [
              "Working Style",
              "I learn by creating real outputs, testing them, fixing mistakes, and documenting progress."
            ],
            [
              "Direction",
              "Building a stronger profile for AI projects, technology, and international education."
            ]
          ].map(([label, value]) => (
            <div
              className="flex min-w-0 items-center justify-between gap-4 rounded-[1.35rem] border border-white/75 bg-white/50 p-4 shadow-soft backdrop-blur"
              key={label}
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-500">
                  {label}
                </p>
                <p className="mt-1 min-w-0 break-words text-sm font-semibold text-graphite-900">
                  {value}
                </p>
              </div>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.22)]" />
            </div>
          ))}
        </div>
      </TitaniumCard>
    </section>
  );
}

function FeaturedProjects() {
  const primaryProject = featuredProjects.find((project) => project.featured);
  const secondaryProjects = featuredProjects.filter(
    (project) => !project.featured
  );

  return (
    <section
      className="mx-auto w-full max-w-6xl overflow-hidden px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="projects"
    >
      <SectionHeader
        eyebrow="Featured Projects"
        title="Project evidence first: AI, portfolio development, and hardware documentation."
        description="The portfolio now prioritizes concrete project direction, with visual slots prepared for screenshots and future case studies."
      />
      <div className="grid min-w-0 items-start gap-4 sm:gap-5 lg:grid-cols-[2fr_1fr]">
        {primaryProject ? <ProjectCard project={primaryProject} /> : null}
        <div className="grid min-w-0 gap-4 sm:gap-5">
          {secondaryProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <TitaniumCard className="flex w-full min-w-0 flex-col p-4 sm:p-5">
      <ProjectPreview
        featured={project.featured}
        image={project.image}
        imageAlt={project.imageAlt}
        imagePosition={project.imagePosition}
        tag={project.tag}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-titanium-50 shadow-soft">
            {project.status}
          </span>
          <span className="min-w-0 break-words text-xs font-semibold uppercase tracking-[0.14em] text-graphite-500">
            {project.type}
          </span>
        </div>
        <h3 className="mt-4 min-w-0 break-words text-xl font-semibold leading-tight text-graphite-900 sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 min-w-0 break-words text-sm leading-6 text-graphite-700">
          {project.description}
        </p>
        {project.caseStudy.length > 0 ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.caseStudy.map((item) => (
              <div
                className="rounded-[1.1rem] border border-white/15 bg-white/[0.055] p-4"
                key={item.label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-graphite-700">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {project.highlights.length > 0 ? (
          <ul className="mt-5 grid gap-2">
            {project.highlights.map((item) => (
              <li
                className="flex gap-3 text-sm leading-6 text-graphite-700"
                key={item}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex min-w-0 flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-titanium-200 shadow-soft"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </TitaniumCard>
  );
}

function ProjectPreview({
  featured,
  image,
  imageAlt,
  imagePosition,
  tag
}: {
  featured: boolean;
  image: string | null;
  imageAlt: string;
  imagePosition: string;
  tag: string;
}) {
  return (
    <div
      className={`mb-4 min-w-0 rounded-[1.35rem] border border-white/15 bg-[radial-gradient(circle_at_28%_8%,rgba(255,255,255,0.22),transparent_34%),linear-gradient(135deg,rgba(112,116,124,0.68),rgba(22,23,26,0.92)_58%,rgba(5,5,6,0.96))] p-3 shadow-soft sm:mb-5 sm:rounded-[1.5rem] sm:p-4 ${
        featured ? "h-48 sm:h-72" : "h-32 sm:aspect-[4/3] sm:h-auto"
      }`}
    >
      <div className="relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-[1rem] border border-white/15 bg-black/25 p-3 backdrop-blur sm:rounded-[1.1rem] sm:p-4">
        {image ? (
          <>
            <Image
              alt={imageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              src={image}
              style={{ objectPosition: imagePosition }}
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
          </>
        ) : (
          <div className="absolute inset-0 fine-grid opacity-35" />
        )}
        <div className="relative flex items-center justify-between gap-3">
          <span className="w-fit max-w-full rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-titanium-50 shadow-soft">
            {tag}
          </span>
        </div>
        {!image ? (
          <div className="relative grid gap-2">
            <div className="h-10 rounded-2xl border border-white/10 bg-[linear-gradient(100deg,rgba(244,244,246,0.86),rgba(132,136,146,0.44)_44%,rgba(5,5,6,0.68))] shadow-[0_0_34px_rgba(255,255,255,0.10)] sm:h-16" />
            {featured ? (
            <div className="grid grid-cols-3 gap-2">
              <div className="h-9 rounded-xl border border-white/12 bg-white/12" />
              <div className="h-9 rounded-xl border border-white/10 bg-white/8" />
              <div className="h-9 rounded-xl border border-white/8 bg-black/20" />
            </div>
            ) : null}
          </div>
        ) : (
          <span className="relative w-fit rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-titanium-200 backdrop-blur">
            Interface preview
          </span>
        )}
      </div>
    </div>
  );
}

function TechnicalSkills() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="skills"
    >
      <SectionHeader
        eyebrow="Technical Skills"
        title="A practical skill map for AI workflows, web basics, hardware, and documentation."
        description="The skills are organized around what supports real projects: learning tools, implementation, optimization, presentation, and project organization."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {technicalSkills.map((group) => (
          <TitaniumCard className="p-5 sm:p-6" key={group.title}>
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-graphite-900 text-sm font-bold text-white shadow-soft">
                {group.initial}
              </div>
              <span className="rounded-full border border-white/70 bg-white/55 px-3 py-1 text-xs font-semibold text-graphite-600 shadow-soft">
                {group.focus}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-graphite-900">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li
                  className="rounded-2xl border border-white/50 bg-white/50 px-4 py-3 text-sm font-medium leading-6 text-graphite-700"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-graphite-900/70" />
              <div className="h-2 rounded-full bg-graphite-500/35" />
              <div className="h-2 rounded-full bg-white/70" />
            </div>
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function EducationEnglish() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="education"
    >
      <SectionHeader
        eyebrow="Education & English"
        title="Academic direction, English development, and portfolio-based learning."
        description="This section gives the CV a stronger education foundation without making the page feel formal or heavy."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {educationEnglish.map((item) => (
          <TitaniumCard className="p-5 sm:p-6" key={item.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-500">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-graphite-900">
                  {item.title}
                </h3>
              </div>
              <div className="h-10 w-10 rounded-2xl border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#e7e8ec_48%,#aeb2bb_100%)] shadow-soft" />
            </div>
            <p className="mt-3 text-sm leading-6 text-graphite-700">
              {item.detail}
            </p>
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function DirectionGoals() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="goals"
    >
      <SectionHeader
        eyebrow="Direction & Goals"
        title="Turning interests into visible evidence."
        description="My goal is not just to list interests. I want to turn my interests into evidence: projects, screenshots, technical notes, public progress, and clear results. This portfolio is where I organize that direction."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal, index) => (
          <TitaniumCard
            className="flex min-h-[13rem] flex-col p-5 sm:p-6"
            key={goal.title}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/65 text-sm font-semibold text-graphite-900 shadow-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-graphite-500">
                Direction
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-graphite-900">
              {goal.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-graphite-700">
              {goal.detail}
            </p>
            <div className="mt-5 h-px bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function CompetitiveAchievements() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="competitive"
    >
      <SectionHeader
        eyebrow="Competitive Achievements"
        title="Compact milestones from competitive gaming and chess."
        description="Kept secondary in the page hierarchy, these achievements show discipline, review habits, and performance under pressure."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {competitiveAchievements.map((achievement) => (
          <TitaniumCard
            className="flex min-w-0 flex-col p-4 sm:p-5"
            key={achievement.category}
          >
            {achievement.image ? (
              <div className="relative mb-4 h-32 min-w-0 overflow-hidden rounded-[1.2rem] border border-white/15 bg-black/30 shadow-soft sm:h-36">
                <Image
                  alt={achievement.imageAlt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={achievement.image}
                  style={{ objectPosition: achievement.imagePosition }}
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
              </div>
            ) : (
              <div className="mb-4 flex h-20 items-center justify-between rounded-[1.2rem] border border-white/15 bg-white/[0.055] px-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-semibold text-graphite-900 shadow-soft">
                  {achievement.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
                  Text record
                </span>
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-graphite-900">
                  {achievement.category}
                </h3>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite-500">
                  {achievement.tone}
                </span>
              </div>
              <p className="mt-2 min-w-0 break-words text-sm font-semibold text-graphite-900">
                {achievement.result}
              </p>
              <p className="mt-1 min-w-0 break-words text-sm text-graphite-700">
                {achievement.detail}
              </p>
              <div className="mt-4 flex min-w-0 flex-wrap gap-2">
                {achievement.badges.map((badge) => (
                  <span
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-graphite-500"
                    key={badge}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="timeline"
    >
      <SectionHeader
        eyebrow="Timeline"
        title="A project-first path from learning to public evidence."
        description="The timeline connects AI-assisted projects, web development, education preparation, and compact competitive discipline."
      />
      <TitaniumCard className="p-4 sm:p-8">
        <div className="grid gap-4">
          {timeline.map((item) => (
            <div
              className="grid gap-4 rounded-[1.5rem] border border-white/50 bg-white/45 p-4 sm:grid-cols-[9rem_1fr]"
              key={item.period}
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-graphite-900/80 shadow-soft" />
                <p className="text-sm font-semibold text-graphite-500">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-graphite-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </TitaniumCard>
    </section>
  );
}

function Contact() {
  const emailLink = contactLinks.find((link) =>
    link.label.startsWith("Email")
  );
  const whatsappLink = contactLinks.find((link) =>
    link.label.startsWith("WhatsApp")
  );
  const publicLinks = contactLinks.filter(
    (link) => link !== emailLink && link !== whatsappLink
  );

  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8"
      id="contact"
    >
      <TitaniumCard className="relative overflow-hidden p-5 sm:p-10">
        <div className="absolute inset-0 fine-grid opacity-45" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-graphite-500">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-tight tracking-tight text-graphite-900 sm:text-5xl">
              Open to project feedback, international education opportunities,
              AI/web learning connections, and future collaboration.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite-700">
              Email is the best way to reach me for serious or detailed
              communication.
            </p>
          </div>
          <div className="grid min-w-0 gap-3 lg:w-[20rem]">
            {emailLink ? (
              <a
                className="rounded-[1.25rem] border border-white/20 bg-white/12 px-5 py-4 text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white/15"
                href={emailLink.href}
              >
                {emailLink.label}
              </a>
            ) : null}
            <div className="grid grid-cols-2 gap-3">
              {publicLinks.map((link) => (
                <a
                  className="rounded-full border border-white/15 bg-white/[0.055] px-4 py-3 text-center text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white/10"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {whatsappLink ? (
              <div className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4">
                <a
                  className="text-sm font-semibold text-graphite-900 transition hover:text-white"
                  href={whatsappLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {whatsappLink.label}
                </a>
                <p className="mt-2 text-xs leading-5 text-graphite-500">
                  For quick messages only. Email is preferred for serious
                  communication.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </TitaniumCard>
    </section>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-7 px-5 pb-10 pt-14 sm:px-6 sm:py-10 lg:min-h-screen lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-titanium-300 sm:text-sm sm:tracking-[0.26em]">
          Istanbul Student Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-titanium-50 sm:mt-5 sm:text-6xl lg:text-7xl">
          Metin Berat Dönmez
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-titanium-300 sm:mt-6 sm:text-lg">
          A project-first personal CV documenting Akashi AI, web development,
          hardware knowledge, English growth, and future international
          education goals.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-full bg-titanium-50 px-6 py-3 text-center text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-titanium-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-white/15"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      <TitaniumCard className="relative min-h-[27rem] overflow-hidden p-4 sm:min-h-[32rem] sm:p-7">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="relative flex h-full min-h-[24.5rem] flex-col justify-between rounded-[1.6rem] border border-white/80 bg-white/35 p-4 sm:min-h-[29rem] sm:rounded-[2rem] sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-500">
                Titanium Profile
              </p>
              <p className="mt-2 text-2xl font-semibold text-graphite-900">
                MBD
              </p>
            </div>
            <div className="h-11 w-14 rounded-2xl border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#e7e8ec_48%,#aeb2bb_100%)] shadow-soft sm:h-12 sm:w-16" />
          </div>
          <div className="space-y-4 sm:space-y-5">
            <div className="h-16 rounded-[1.35rem] bg-[linear-gradient(100deg,rgba(20,21,24,0.82),rgba(116,120,130,0.42)_43%,rgba(255,255,255,0.76))] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] sm:h-20 sm:rounded-[1.5rem]" />
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {["AI", "Code", "Global"].map((item) => (
                <div
                  className="rounded-2xl border border-white/70 bg-white/55 px-2 py-3 text-center shadow-soft sm:p-4"
                  key={item}
                >
                  <p className="text-sm font-semibold text-graphite-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xs text-sm leading-6 text-graphite-700">
              Premium student portfolio for projects, skills, goals,
              education, and selected achievements.
            </p>
            <p className="text-right text-sm font-semibold text-graphite-900">
              V2.2
            </p>
          </div>
        </div>
      </TitaniumCard>
    </section>
  );
}
