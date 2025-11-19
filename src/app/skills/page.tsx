"use client";

import {
  BarChart3,
  Brain,
  Code2,
  Database,
  FileSpreadsheet,
  FileText,
  LineChart,
  PieChart,
  Search,
  Sigma,
  Terminal,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const iconCircleClasses =
  "flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#946b2d] shadow-md shadow-black/40";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center px-6 md:px-10 pb-16 pt-10 md:pt-16">
        <section className="w-full max-w-6xl space-y-10">
          <header className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                From raw data to clear stories and decisions.
              </h1>
              <p className="max-w-md text-xs md:text-sm text-slate-200 text-center md:text-right mx-auto md:mx-0">
                A mix of programming, analytics tools, visualization, and
                statistical methods I use in day-to-day work.
              </p>
            </div>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl bg-[#222f5b]/90 p-6 md:p-7 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
                Programming
              </h2>
              <p className="mt-1 text-lg font-semibold">Languages</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <Database className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-medium">
                      SQL
                    </span>
                    <span className="text-xs text-slate-300">
                      Querying, cleaning, and transforming datasets.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <Code2 className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-medium">
                      Python
                    </span>
                    <span className="text-xs text-slate-300">
                      Analysis, automation, and notebooks for exploration.
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-[#020617]/90 p-6 md:p-7 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
                Data Analytics
              </h2>
              <p className="mt-1 text-lg font-semibold">Tools</p>

              <div className="mt-6 grid gap-4">
                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <FileSpreadsheet className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">
                    Microsoft Excel
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <FileText className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">Google Sheets</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <Search className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">Google BigQuery</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <Terminal className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">
                    Visual Studio Code
                  </span>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-[#020617]/90 p-6 md:p-7 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
                Data Visualization
              </h2>
              <p className="mt-1 text-lg font-semibold">Tools</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <BarChart3 className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">Power BI</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <PieChart className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">Looker Studio</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className={iconCircleClasses}>
                    <LineChart className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-sm md:text-base">GA4 Dashboards</span>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-[#222f5b]/90 p-6 md:p-7 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
                Data Analytics
              </h2>
              <p className="mt-1 text-lg font-semibold">Methods</p>

              <p className="mt-4 text-xs md:text-sm text-slate-200">
                Approaches I use to explore data, model behaviour, and evaluate
                business impact.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <SkillTag label="EDA (Exploratory Data Analysis)" />
                <SkillTag label="Segmentation / Clustering" />
                <SkillTag label="Cohort Analysis" />
                <SkillTag
                  icon={<Sigma className="h-3.5 w-3.5" />}
                  label="Linear Regression"
                />
                <SkillTag label="Logistic Regression" />
                <SkillTag
                  icon={<Brain className="h-3.5 w-3.5" />}
                  label="Statistical Modelling"
                />
                <SkillTag label="A/B Testing" />
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

type SkillTagProps = {
  label: string;
  icon?: React.ReactNode;
};

function SkillTag({ label, icon }: SkillTagProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#0e1a40] px-3 py-1 text-[0.7rem] md:text-xs font-medium text-slate-100 border border-[#946b2d]/70">
      {icon && <span className="text-[#f5d08b]">{icon}</span>}
      {label}
    </span>
  );
}
