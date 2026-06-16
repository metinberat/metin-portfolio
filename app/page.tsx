import {
  achievements,
  contactLinks,
  projects,
  skillGroups,
  timeline
} from "@/components/portfolio-data";
import { SectionHeader } from "@/components/section-header";
import { TitaniumCard } from "@/components/titanium-card";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="A high school student in Istanbul focused on AI, technology, and international education."
          description="Metin Berat Dönmez is building a focused technical profile across AI tools, software, PC hardware, competitive discipline, and future global study opportunities."
        />
        <TitaniumCard className="grid gap-5 p-5 sm:gap-7 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-[0.96rem] leading-8 text-graphite-700 sm:text-base">
            <p>
              I am a high school student based in Istanbul, Türkiye, with a
              strong interest in how technology changes the way people learn,
              build, and compete. My current focus is learning web development
              through this portfolio while exploring practical AI tools,
              software fundamentals, and PC hardware performance.
            </p>
            <p>
              Competitive gaming and chess have shaped the way I approach
              improvement: review carefully, stay calm under pressure, and keep
              refining the system. I want this portfolio to document that same
              discipline through projects, learning progress, achievements, and
              future education applications.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ["Location", "Istanbul, Türkiye"],
              ["Focus", "AI tools, software, hardware, and education"],
              ["Competition", "CS2 FACEIT Level 10, Valorant Immortal 2"],
              ["Current Work", "Learning web development through this portfolio"]
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

      <section
        className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
        id="skills"
      >
        <SectionHeader
          eyebrow="Skills"
          title="A balanced skill map for technology, study, and competition."
          description="The skill areas connect technical curiosity with the review discipline built through chess, competitive games, and independent learning."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
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
                    className="rounded-2xl border border-white/50 bg-white/50 px-4 py-3 text-sm font-medium text-graphite-700"
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

      <section
        className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
        id="projects"
      >
        <SectionHeader
          eyebrow="Projects"
          title="Practical projects for learning, documentation, and applications."
          description="This section tracks real work and structured technical ideas that support a stronger public student profile."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <TitaniumCard
              className="flex min-h-[20rem] flex-col p-4 sm:min-h-[22rem] sm:p-5"
              key={project.title}
            >
              <div className="mb-5 aspect-[4/3] rounded-[1.5rem] border border-white/75 bg-[linear-gradient(135deg,#ffffff_0%,#f0f0ec_48%,#cfd1cb_100%)] p-4 shadow-soft">
                <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-graphite-900/10 bg-white/40 p-4 backdrop-blur">
                  <span className="w-fit rounded-full bg-graphite-900/95 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                    {project.tag}
                  </span>
                  <div className="h-16 rounded-2xl bg-[linear-gradient(100deg,rgba(23,24,23,0.74),rgba(111,113,109,0.34)_48%,rgba(255,255,255,0.78))]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-graphite-900">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-graphite-700">
                {project.description}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
                {project.status}
              </p>
            </TitaniumCard>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Achievements"
            title="Competitive milestones and public project progress."
            description="A concise record of achievements that show discipline, consistency, strategic thinking, and technical initiative."
          />
        </div>
        <div className="grid gap-4">
          {achievements.map((achievement) => (
            <TitaniumCard
              className="grid gap-3 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6"
              key={achievement.title}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-graphite-900 shadow-soft">
                {achievement.year}
              </span>
              <div>
                <h3 className="font-semibold text-graphite-900">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-graphite-700">
                  {achievement.description}
                </p>
              </div>
            </TitaniumCard>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
        id="timeline"
      >
        <SectionHeader
          eyebrow="Timeline"
          title="A clear path from learning to applications and public work."
          description="A simple view of how competitive discipline is turning into technical learning, portfolio building, and international education preparation."
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
    </main>
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
          A focused high school student documenting AI learning, software
          projects, hardware knowledge, and competitive discipline for future
          international education opportunities.
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
              A clean public CV for technical projects, achievements, learning
              progress, and education goals.
            </p>
            <p className="text-right text-sm font-semibold text-graphite-900">
              2026
            </p>
          </div>
        </div>
      </TitaniumCard>
    </section>
  );
}
