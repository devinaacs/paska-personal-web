"use client";

import {
  BarChart3,
  Code,
  ExternalLink,
  Globe2,
  MapPin,
  MousePointerClick,
  Package,
  Presentation,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  analyses: string[];
  deckLink: string;
  notebookLink: string;
};

const projects: Project[] = [
  {
    id: "performance-review",
    index: "01",
    title: "Performance Review",
    subtitle: "BLU X – VEXA Collection",
    description:
      "An end-to-end analysis evaluating the BLU X – VEXA collection’s sales performance across stores, provinces, and events. This study analyzes customer profiles, generation & tiering distribution, sales contribution vs. other BLU X lines, and sales-vs-stock performance to uncover which items, stores, and customer segments drive the highest revenue. The insights guide clear recommendations on inventory allocation, campaign targeting, and assortment optimization to improve sell-through and revenue uplift.",
    tools: [
      "Python",
      "SQL",
      "Excel / Spreadsheet",
      "PowerPoint / Google Slides",
      "VS Code / Google Colab",
      "Power BI",
    ],
    analyses: [
      "Descriptive Analytics",
      "Customer Behaviour",
      "Contribution & Stock Analysis",
    ],
    deckLink:
      "https://docs.google.com/presentation/d/1ylDce1F_XY1_7eW5Uny2ZjzFJt9SI0bf/edit?usp=sharing&ouid=103326858945801192718&rtpof=true&sd=true",
    notebookLink:
      "https://colab.research.google.com/drive/1E82T3yjKJaUU6N-jc3DXlnGyd3eqE-yd?usp=sharing",
  },
  {
    id: "digital-performance",
    index: "02",
    title: "Digital Performance",
    subtitle: "Multi-Channel Marketing Review",
    description:
      "A comprehensive performance analysis covering Jan–Oct 2025 across digital channels including Google, Meta, TikTok, Programmatic, and website analytics. This project measures traffic, engagement, channel contribution, conversions, and ROAS, identifies high-performing and underperforming campaigns, and reveals opportunities to optimize budget allocation and targeting strategy. The insights deliver a clear roadmap to achieve better conversion rates and more efficient marketing spend.",
    tools: [
      "Python",
      "GA4",
      "Excel / Spreadsheet",
      "PowerPoint / Google Slides",
      "VS Code / Google Colab",
    ],
    analyses: [
      "Funnel & Channel Performance",
      "Attribution & ROAS Review",
      "Campaign Optimization Insights",
    ],
    deckLink:
      "https://docs.google.com/presentation/d/10AwsDzyZUF_ILpUKeZx25S73caAo2L_v/edit?usp=sharing&ouid=103326858945801192718&rtpof=true&sd=true",
    notebookLink:
      "https://colab.research.google.com/drive/1-Cpg1jsR2GegDK0gkkdvJ4KDqKCc0unR?usp=sharing",
    
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {projects.map((project, idx) => (
          <ProjectSection
            key={project.id}
            project={project}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

function ProjectSection({
  project,
  align,
}: {
  project: Project;
  align: "left" | "right";
}) {
  const isLeft = align === "left";

  return (
    <section id={project.id} className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-16">
        {/* Text block */}
        <div className={`flex-1 space-y-6 ${isLeft ? "" : "lg:order-2"}`}>
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-[#946b2d] bg-[#222f5b]/80 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
              Notable Project
            </span>

            <div className="flex items-baseline gap-4">
              <p className="text-4xl md:text-5xl font-bold text-[#f5d08b]">
                {project.index}
              </p>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-slate-200">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-slate-100">
            {project.description}
          </p>

          {/* Tags */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d08b]">
                Tools
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <TagPill key={tool}>{tool}</TagPill>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d08b]">
                Analysis Focus
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.analyses.map((analysis) => (
                  <TagPill key={analysis} variant="outline">
                    {analysis}
                  </TagPill>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <ProjectLinkButton
              href={project.deckLink}
              icon={<Presentation className="h-4 w-4" />}
              label="View Slide Deck"
            />
            <ProjectLinkButton
              href={project.notebookLink}
              icon={<Code className="h-4 w-4" />}
              label="View Google Collab Python Code"
            />
          </div>
        </div>

        {/* Highlight card */}
        <div className={`flex-1 ${isLeft ? "" : "lg:order-1"}`}>
          <ProjectHighlightCard project={project} />
        </div>
      </div>
    </section>
  );
}

function ProjectHighlightCard({ project }: { project: Project }) {
  const baseWrapper =
    "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#222f5b] via-[#020617] to-[#946b2d] p-[1px] shadow-2xl shadow-black/40";
  const baseInner =
    "h-full w-full rounded-[1.4rem] bg-[#020617]/95 px-6 py-6 md:px-8 md:py-8 flex flex-col justify-between gap-6";

  // ===== Project 1 – VEXA Performance Review =====
  if (project.id === "performance-review") {
    return (
      <div className={baseWrapper}>
        <div className={baseInner}>
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <BarChart3 className="h-4 w-4 text-[#f5d08b]" />
              BLU X VEXA Performance Snapshot
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              From Collection Launch to Revenue Drivers
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Overview of how the BLU X VEXA collection performs across
              customers, stores, and inventory — and where the next growth
              opportunities live.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-slate-100">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Key Numbers
              </p>
              <MetricLine
                label="Total sales"
                value="13 pcs"
                icon={<Package className="h-3.5 w-3.5" />}
              />
              <MetricLine
                label="Total events"
                value="1 event"
                icon={<MapPin className="h-3.5 w-3.5" />}
              />
              <MetricLine
                label="Customer mix"
                value="Existing » New (0% new in period)"
                icon={<Users className="h-3.5 w-3.5" />}
              />
            </div>

            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Customer Profile
              </p>
              <ul className="space-y-1">
                <li>Dominated by Millennials &amp; Gen X customers.</li>
                <li>Strong loyalty from existing customers.</li>
                <li>
                  Gen Z share is growing in the active base, indicating future
                  potential.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 text-xs md:text-sm text-slate-200">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
              Strategic Insights
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <TrendingUp className="mt-[2px] h-3.5 w-3.5 text-[#f5d08b]" />
                <span>
                  BLU X Precious delivers higher sales uplift than regular
                  collections, with VEXA as one of the key growth drivers.
                </span>
              </li>
              <li className="flex gap-2">
                <TrendingUp className="mt-[2px] h-3.5 w-3.5 text-[#f5d08b]" />
                <span>
                  Existing customers generate the majority of revenue, while
                  dedicated initiatives are needed to grow new-customer
                  acquisition.
                </span>
              </li>
              <li className="flex gap-2">
                <TrendingUp className="mt-[2px] h-3.5 w-3.5 text-[#f5d08b]" />
                <span>
                  Store, province, and stock-vs-sales analysis highlight which
                  models to push, where to reallocate inventory, and how to
                  unlock extra conversion from the 2026 sales pipeline.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-[0.65rem] md:text-[0.7rem] text-slate-500">
            *All numbers are anonymized &amp; randomized for confidentiality.
            See the full deck and notebook for detailed charts, cohort views,
            and stock-performance deep dives.
          </p>
        </div>
      </div>
    );
  }

  // ===== Project 2 – Digital Performance & Insight =====
  if (project.id === "digital-performance") {
    return (
      <div className={baseWrapper}>
        <div className={baseInner}>
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <BarChart3 className="h-4 w-4 text-[#f5d08b]" />
              Jan–Oct 2025 • Digital Performance & Insight
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              Multi-Channel Funnel View Across AURA X, BLU X, and ORO X
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Summarizing how paid media, creatives, and audiences work together
              across Google, Meta, TikTok, and Programmatic, from reach and
              engagement all the way to leads, revenue, and ROAS.
            </p>
          </div>

          {/* Metrics grid tuned to the deck */}
          <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-slate-100">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                New Customer Contribution
              </p>
              <MetricLine
                label="AURA X"
                value="14.16% of revenue from new customers"
                icon={<Users className="h-3.5 w-3.5" />}
              />
              <MetricLine
                label="BLU X"
                value="8.87% of revenue from new customers"
                icon={<Users className="h-3.5 w-3.5" />}
              />
              <MetricLine
                label="ORO X"
                value="19.40% of revenue from new customers"
                icon={<Users className="h-3.5 w-3.5" />}
              />
            </div>

            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Channel & Funnel Signals
              </p>
              <ul className="space-y-1">
                <li className="flex gap-2">
                  <Globe2 className="mt-[1px] h-3.5 w-3.5 text-[#f5d08b]" />
                  <span>
                    SEM on Google consistently outperforms other channels on
                    conversion rate and ROAS when isolated.
                  </span>
                </li>
                <li className="flex gap-2">
                  <MousePointerClick className="mt-[1px] h-3.5 w-3.5 text-[#f5d08b]" />
                  <span>
                    Meta &amp; TikTok drive upper/mid-funnel scale, with strong
                    lifts from specific public-figure and product creatives.
                  </span>
                </li>
                <li className="flex gap-2">
                  <MousePointerClick className="mt-[1px] h-3.5 w-3.5 text-[#f5d08b]" />
                  <span>
                    CPAS &amp; long-running campaigns (e.g., GLX) deliver the
                    strongest efficiency thanks to consistent spend.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottleneck + opportunity */}
          <div className="space-y-2 text-xs md:text-sm text-slate-200">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
              Key Bottleneck & Opportunities
            </p>
            <ul className="space-y-1.5">
              <li>
                The main bottleneck is the scale of leads generated vs. the
                store team&apos;s follow-up capacity — many paid leads are never
                contacted, capping conversion.
              </li> 
              <li>
                Audience &amp; visual-performance views by age, gender, and
                region reveal which segments and creatives deserve priority in
                the next media plan.
              </li>
            </ul>
          </div>

          <p className="text-[0.65rem] md:text-[0.7rem] text-slate-500">
            *Data across all brands has been anonymized and randomized for
            confidentiality. 
          </p>
        </div>
      </div>
    );
  }

  // Fallback (in case you add more projects later)
  return (
    <div className={baseWrapper}>
      <div className={baseInner}>
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            <BarChart3 className="h-4 w-4 text-[#f5d08b]" />
            Case Study Overview
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            Performance &amp; insight case study
          </h3>
          <p className="text-xs md:text-sm text-slate-300">
            A reusable layout you can customize when you add new projects in the
            future.
          </p>
        </div>
      </div>
    </div>
  );
}


function MetricLine({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-[#f5d08b]">{icon}</span>}
      <div className="flex flex-col">
        <span className="text-[0.7rem] text-slate-300">{label}</span>
        <span className="text-xs font-semibold text-slate-100">{value}</span>
      </div>
    </div>
  );
}

function TagPill({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] md:text-xs";
  if (variant === "outline") {
    return (
      <span
        className={`${base} border border-[#946b2d]/80 bg-transparent text-slate-100`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`${base} bg-[#222f5b] text-slate-100 border border-[#0e1a40]`}
    >
      {children}
    </span>
  );
}

function ProjectLinkButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-[#f5d08b] bg-transparent px-4 py-2 text-xs md:text-sm font-medium text-[#f5d08b] transition hover:bg-[#f5d08b] hover:text-black"
    >
      {icon}
      <span>{label}</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </Link>
  );
}
