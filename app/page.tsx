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
      <FeaturedProjects />
      <TechnicalSkills />
      <EducationEnglish />
      <Goals />
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
        title="A high school student in Istanbul building a project-based technical profile."
        description="Metin Berat Dönmez is focused on AI tools, web development, PC hardware, English development, and international education opportunities."
      />
      <TitaniumCard className="grid gap-5 p-5 sm:gap-7 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-[0.96rem] leading-8 text-graphite-700 sm:text-base">
          <p>
            I am a high school student based in Istanbul, Türkiye. My current
            focus is turning curiosity into visible work: AI-assisted projects,
            web development practice, hardware documentation, and a clearer
            public profile for future applications.
          </p>
          <p>
            I approach learning with the same discipline I use in competitive
            environments: review carefully, improve systems, communicate
            clearly, and keep building. This portfolio is designed to document
            that progress through real projects and structured evidence.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            ["Location", "Istanbul, Türkiye"],
            ["Current Focus", "AI tools, web development, and documentation"],
            ["Portfolio Direction", "Projects, skills, English, and applications"],
            ["Technical Interest", "Software, PC hardware, and practical workflows"]
          ].map(([label, value]) => (
            <div
              className="rounded-[1.35rem] border border-white/75 bg-white/50 p-4 shadow-soft backdrop-blur"
              key={label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-500">
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold text-graphite-900">
                {value}
              </p>
            </div>
          ))}
        </div>
      </TitaniumCard>
    </section>
  );
}

function FeaturedProjects() {
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
      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <TitaniumCard
            className={`flex w-full min-w-0 flex-col p-4 sm:p-5 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
            key={project.title}
          >
            <ProjectPreview featured={project.featured} tag={project.tag} />
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="rounded-full bg-graphite-900/95 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  {project.status}
                </span>
                <span className="min-w-0 break-words text-xs font-semibold uppercase tracking-[0.14em] text-graphite-500">
                  {project.type}
                </span>
              </div>
              <h3 className="mt-4 min-w-0 break-words text-xl font-semibold leading-tight text-graphite-900 sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 min-w-0 flex-1 break-words text-sm leading-6 text-graphite-700">
                {project.description}
              </p>
            </div>
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({
  featured,
  tag
}: {
  featured: boolean;
  tag: string;
}) {
  return (
    <div
      className={`mb-4 min-w-0 rounded-[1.35rem] border border-white/75 bg-[linear-gradient(135deg,#ffffff_0%,#f0f0ec_48%,#cfd1cb_100%)] p-3 shadow-soft sm:mb-5 sm:rounded-[1.5rem] sm:p-4 ${
        featured ? "h-40 sm:h-64" : "h-28 sm:aspect-[4/3] sm:h-auto"
      }`}
    >
      <div className="flex h-full min-w-0 flex-col justify-between rounded-[1rem] border border-graphite-900/10 bg-white/40 p-3 backdrop-blur sm:rounded-[1.1rem] sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="w-fit max-w-full rounded-full bg-graphite-900/95 px-3 py-1 text-xs font-semibold text-white shadow-soft">
            {tag}
          </span>
          <div className="h-7 w-10 rounded-xl border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#e7e8e3_48%,#aeb1aa_100%)] shadow-soft" />
        </div>
        <div className="grid gap-2">
          <div className="h-9 rounded-2xl bg-[linear-gradient(100deg,rgba(23,24,23,0.74),rgba(111,113,109,0.34)_48%,rgba(255,255,255,0.78))] sm:h-14" />
          {featured ? (
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded-xl bg-white/55" />
              <div className="h-8 rounded-xl bg-white/45" />
              <div className="h-8 rounded-xl bg-white/35" />
            </div>
          ) : null}
        </div>
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
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-graphite-900 text-sm font-bold text-white shadow-soft">
              {group.initial}
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
            <h3 className="text-xl font-semibold tracking-tight text-graphite-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-graphite-700">
              {item.detail}
            </p>
          </TitaniumCard>
        ))}
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="goals"
    >
      <SectionHeader
        eyebrow="Goals"
        title="Clear next steps for stronger projects, communication, and applications."
        description="These goals connect technical progress with long-term education and portfolio development."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {goals.map((goal, index) => (
          <TitaniumCard className="p-5" key={goal}>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/65 text-sm font-semibold text-graphite-900 shadow-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-5 text-sm font-semibold leading-6 text-graphite-900">
              {goal}
            </p>
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
            className="grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6"
            key={achievement.category}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/75 bg-white/60 text-xl font-semibold text-graphite-900 shadow-soft">
              {achievement.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-graphite-900">
                {achievement.category}
              </h3>
              <p className="mt-1 min-w-0 break-words text-sm font-semibold uppercase tracking-[0.14em] text-graphite-500">
                {achievement.result}
              </p>
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
        <div className="grid gap-5">
          {timeline.map((item) => (
            <div
              className="grid gap-4 rounded-[1.5rem] border border-white/50 bg-white/45 p-4 sm:grid-cols-[9rem_1fr]"
              key={item.period}
            >
              <p className="text-sm font-semibold text-graphite-500">
                {item.period}
              </p>
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
              Open to learning opportunities, project feedback, and future applications.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite-700">
              For school opportunities, technical feedback, or collaboration
              ideas, use the links here to connect with Metin&apos;s public
              profiles.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {contactLinks.map((link) => (
              <a
                className="rounded-full border border-white/80 bg-white/65 px-5 py-3 text-center text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
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
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite-500 sm:text-sm sm:tracking-[0.26em]">
          Istanbul Student Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-graphite-900 sm:mt-5 sm:text-6xl lg:text-7xl">
          Metin Berat Dönmez
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-graphite-700 sm:mt-6 sm:text-lg">
          A project-first personal CV documenting Akashi AI, web development,
          hardware knowledge, English growth, and future international
          education goals.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-full bg-graphite-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-white/80 bg-white/60 px-6 py-3 text-center text-sm font-semibold text-graphite-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
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
            <div className="h-11 w-14 rounded-2xl border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#e7e8e3_48%,#aeb1aa_100%)] shadow-soft sm:h-12 sm:w-16" />
          </div>
          <div className="space-y-4 sm:space-y-5">
            <div className="h-16 rounded-[1.35rem] bg-[linear-gradient(100deg,rgba(23,24,23,0.78),rgba(111,113,109,0.42)_43%,rgba(255,255,255,0.76))] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] sm:h-20 sm:rounded-[1.5rem]" />
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
