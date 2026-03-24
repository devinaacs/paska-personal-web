import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const skills = {
  programming: [
    {
      name: "SQL",
      description: "Querying, cleaning, and transforming datasets.",
    },
    {
      name: "Python",
      description: "Analysis, automation, and notebooks for exploration.",
    },
  ],
  analyticsTools: [
    "Microsoft Excel",
    "Google Sheets",
    "Google BigQuery",
    "Visual Studio Code",
  ],
  visualizationTools: ["Power BI", "Looker Studio", "GA4 Dashboards"],
  analyticsMethods: [
    "EDA (Exploratory Data Analysis)",
    "Segmentation / Clustering",
    "Cohort Analysis",
    "A/B Testing",
    "Linear Regression",
    "Logistic Regression",
    "Statistical Modelling",
  ],
  professionalSkills: [
    "Business Process",
    "Agile Project Management",
    "Organizational Change",
    "Product Roadmaps",
    "Kanban Principles",
    "Backlogs",
    "Jira",
    "monday.com",
    "Problem Solving",
    "Decision-Making",
    "Conflict Resolution",
  ],
} as const;

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[#946b2d]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#f5d08b]/5 blur-3xl" />

      <Navbar />

      <main className="relative z-10 flex-1 px-6 md:px-10 pb-16 pt-10 md:pt-16">
        <section className="mx-auto w-full max-w-6xl">
          <div className="inline-flex items-center rounded-full border border-[#946b2d] px-4 md:px-5 py-2 bg-transparent">
            <span className="text-[0.65rem] md:text-xs font-semibold tracking-[0.25em]">
              SKILL
            </span>
          </div>

          <header className="mt-8 mb-10 md:mb-12 max-w-4xl">
            <h1 className="max-w-3xl text-3xl md:text-5xl font-bold leading-tight">
              From raw data to clear stories and decisions.
            </h1>
            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-slate-300">
              A mix of programming, analytics tools, visualization, and
              statistical methods I use in day-to-day work.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <article className="relative overflow-hidden border-l-4 border-[#946b2d] bg-gradient-to-br from-[#222f5b]/50 to-[#222f5b]/15 p-6 md:p-8 lg:col-span-7">
              <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-[#946b2d]/10 blur-2xl" />

              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#946b2d]">
                Programming
              </p>
              <h2 className="mt-1 text-lg md:text-xl font-semibold text-white">
                Languages
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {skills.programming.map((language, index) => (
                  <div key={language.name} className="relative min-h-[96px]">
                    <div className="pointer-events-none absolute -top-3 -left-1 text-5xl md:text-6xl font-bold text-[#946b2d]/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-base md:text-lg font-semibold text-[#f5d08b]">
                        {language.name}
                      </h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-300">
                        {language.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#16234d]/55 p-6 md:p-7 shadow-lg shadow-black/20 lg:col-span-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#946b2d]">
                Data Analytics
              </p>
              <h2 className="mt-1 text-lg md:text-xl font-semibold text-white">
                Tools
              </h2>

              <div className="mt-6 space-y-4">
                {skills.analyticsTools.map((tool) => (
                  <div key={tool} className="group flex items-center gap-3">
                    <div className="h-8 w-1 bg-[#946b2d]/30 transition-colors group-hover:bg-[#946b2d]" />
                    <span className="text-sm md:text-base text-slate-100">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-t-2 border-[#946b2d] bg-[#222f5b]/45 p-6 md:p-8 lg:col-span-12">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#946b2d]">
                    Professional Skills
                  </p>
                  <h2 className="mt-1 text-lg md:text-xl font-semibold text-white">
                    Project Management &amp; Business
                  </h2>
                </div>

                <p className="text-sm text-[#f5d08b]">
                  {skills.professionalSkills.length} Skills
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#946b2d]/30 bg-[#0e1a40] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-[#946b2d] hover:text-[#f5d08b]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[#946b2d]/20 bg-[#222f5b]/40 p-6 md:p-7 shadow-lg shadow-black/20 lg:col-span-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#946b2d]">
                Data Visualization
              </p>
              <h2 className="mt-1 text-lg md:text-xl font-semibold text-white">
                Tools
              </h2>

              <div className="mt-6 space-y-3">
                {skills.visualizationTools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#946b2d]" />
                    <span className="text-sm md:text-base text-slate-100">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-gradient-to-tr from-[#222f5b]/35 to-transparent p-6 md:p-8 shadow-lg shadow-black/20 lg:col-span-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#946b2d]">
                Data Analytics
              </p>
              <h2 className="mt-1 text-lg md:text-xl font-semibold text-white">
                Methods
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300">
                Approaches I use to explore data, model behaviour, and
                evaluate business impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.analyticsMethods.map((method) => (
                  <span
                    key={method}
                    className="rounded border border-[#946b2d]/20 bg-[#0e1a40] px-4 py-2.5 text-sm text-slate-200 transition-colors hover:border-[#946b2d]/60 hover:text-white"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
