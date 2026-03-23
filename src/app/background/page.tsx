import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const education = {
  institution: "BANDUNG NATIONAL INSTITUTE OF TECHNOLOGY (ITENAS)",
  degree: "Bachelor of Informatics",
  gpa: "GPA 3.59 / 4.00",
  period: "2017 - 2021 • Bandung, Indonesia",
};

const certifications = [
  {
    title: "Agile Project Management",
    description:
      "Solid understanding of Agile principles and Scrum framework, including pillars, events, and backlog management; experienced in facilitating ceremonies, supporting team collaboration, and driving continuous improvement in project delivery.",
    link: "https://coursera.org/share/c630d4b71abd9cd0c4756ab85d974357",
  },
] as const;

const experiences = [
  {
    company: "PT. Central Mega Kencana",
    logo: "/images/cmk.jpeg",
    alt: "PT. Central Mega Kencana logo",
    employment: "Full-time • 1 yr 4 mos",
    location: "On-site",
    positions: [
      {
        title: "Business Process Specialist",
        period: "Jan 2026 - Present • 3 mos",
        location: "South Jakarta, Jakarta, Indonesia",
        achievements: [
          "Translated business requirements into technical specifications and produced BRD, FSD, and PRD to align stakeholders and development teams.",
          "Designed end-to-end user flows and business processes for e-commerce and internal digital platforms.",
          "Led Agile ceremonies and cross-functional coordination, managing backlog, user stories, and sprint execution.",
          "Conducted QA & UAT to ensure product quality and continuously improved digital experience to drive engagement and business growth.",
        ],
      },
      {
        title: "Business Analyst Specialist",
        period: "Dec 2024 - Jan 2026 • 1 yr 2 mos",
        location: "South Jakarta, Jakarta, Indonesia",
        achievements: [
          "Led digital performance optimization across Meta Ads and Google Ads, delivering +24% CTR uplift, -18% lower CPC, and +32% ROAS improvement.",
          "Improved the lead-generation ecosystem by increasing leads by +20%, raising conversion rate by +3%, and lowering CPL by 20% through enhanced channel strategy and segmentation.",
          "Drove data-informed decision-making using GA4, Clarity, Power BI, and Looker Studio to analyze funnels, user behavior, and campaign performance.",
          "Enhanced customer database quality and segmentation, supporting targeted acquisition and retention initiatives.",
        ],
      },
    ],
  },
  {
    company: "PT Duta Visual Nusantara Tivi Tujuh (TRANS7)",
    logo: "/images/trans7.png",
    alt: "TRANS7 logo",
    employment: "Full-time • 2 yrs 3 mos",
    location: "",
    positions: [
      {
        title: "Marketing Services & Industry Analyst",
        period: "Oct 2022 - Dec 2024 • 2 yrs 3 mos",
        location: "South Jakarta, Jakarta, Indonesia",
        achievements: [
          "Crawled, processed, and analyzed social media data from multiple platforms using Python and Jupyter Notebook, improving insight generation accuracy and reporting speed.",
          "Conducted market and audience research to identify emerging trends that informed content planning and marketing strategies.",
          "Forecasted campaign and content performance using historical trend models to support upcoming weekly and monthly programming decisions.",
          "Built automated data pipelines for insight extraction from 3rd-party analytics tools, reducing manual processing time by 30%.",
        ],
      },
    ],
  },
  {
    company: "PT. Anthromedis Cipta Utama Indonesia",
    logo: "/images/anthromedis.png",
    alt: "Anthromedis logo",
    employment: "Freelance • 7 mos",
    location: "",
    positions: [
      {
        title: "Data Science & Data Analyst Freelance",
        period: "Jul 2021 - Jan 2022 • 7 mos",
        location: "Bandung, Indonesia",
        achievements: [
          "Developed an NLP-based context analysis tool for extracting insights from online news data.",
          "Created a gender detection model using Python to classify users posting on social media, increasing classification accuracy by 90%.",
          "Delivered data insights for content planning, audience segmentation, and social behavior analysis.",
        ],
      },
    ],
  },
  {
    company: "Lembaga Ilmu Pengetahuan Indonesia",
    logo: "/images/lipi.png",
    alt: "LIPI logo",
    employment: "Internship • 4 mos",
    location: "",
    positions: [
      {
        title: "Programmer (Software & Hardware) Intern",
        period: "Sep 2020 - Dec 2020 • 4 mos",
        location: "Bandung, Indonesia",
        achievements: [
          "Developed Si-Monic, a wearable device integrated with a monitoring system for tracking individuals affected by COVID-19 during the pandemic.",
          "Assisted in IoT system integration and testing for real-time health monitoring applications.",
        ],
      },
    ],
  },
] as const;

export default function BackgroundPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e1a40] text-white">
      <Navbar />

      <main className="px-6 pb-16 pt-10 md:px-10 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="inline-flex items-center rounded-full border border-[#946b2d] px-4 md:px-5 py-2 bg-transparent">
              <span className="text-[0.65rem] md:text-xs font-semibold tracking-[0.25em] text-slate-100">
                BACKGROUND
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#d4a855]/0 via-[#d4a855]/45 to-[#d4a855]/0 lg:block" />

            <section className="space-y-14">
              <div className="group relative transition-transform duration-300 hover:translate-x-1">
                <div className="absolute -right-[27px] top-10 hidden h-4 w-4 rounded-full border-4 border-[#0e1a40] bg-[#d4a855] transition-transform duration-300 group-hover:scale-110 lg:block" />

                <h2 className="mb-10 text-2xl md:text-3xl font-bold leading-tight">
                  Education
                </h2>

                <div className="flex gap-4 md:gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8d1a] to-[#ff6a00] shadow-[0_12px_30px_rgba(255,122,0,0.25)]">
                    <Image
                      src="/images/itenas.png"
                      alt="ITENAS logo"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-semibold leading-tight text-[#d4a855]">
                      {education.institution}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white">
                      {education.degree}
                    </p>
                    <p className="mt-1 text-sm md:text-base text-slate-300">
                      {education.gpa}
                    </p>
                    <p className="mt-2 text-[0.7rem] md:text-sm text-slate-400">
                      {education.period}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative pt-4 transition-transform duration-300 hover:translate-x-1">
                <div className="absolute -right-[27px] top-28 hidden h-4 w-4 rounded-full border-4 border-[#0e1a40] bg-[#d4a855] transition-transform duration-300 group-hover:scale-110 lg:block" />

                <div className="relative mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    Certificates
                  </h2>
                  <div className="mt-5 h-1 w-16 bg-[#d4a855]" />
                </div>

                <div className="space-y-8">
                  {certifications.map((cert) => (
                    <div key={cert.title}>
                      <div className="mb-4 flex items-start gap-3">
                        <h3 className="flex-1 text-base md:text-lg font-semibold text-white">
                          {cert.title}
                        </h3>
                        <a
                          href={cert.link}
                          className="shrink-0 text-[#d4a855] transition-colors hover:text-[#f0c670]"
                          aria-label={`View ${cert.title} certificate`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>

                      <p className="max-w-xl text-sm md:text-base leading-relaxed text-slate-300">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Experience
              </h2>

              <div className="space-y-12">
                {experiences.map((exp) => (
                  <article
                    key={exp.company}
                    className="group relative transition-transform duration-300 hover:-translate-x-1"
                  >
                    <div className="absolute -left-[27px] top-10 hidden h-4 w-4 rounded-full border-4 border-[#0e1a40] bg-[#d4a855] transition-transform duration-300 group-hover:scale-110 lg:block" />

                    <div className="mb-6 flex gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src={exp.logo}
                          alt={exp.alt}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {exp.company}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-slate-300">
                          {exp.employment}
                        </p>
                        {exp.location ? (
                          <p className="text-sm md:text-base text-slate-400">
                            {exp.location}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-9">
                      {exp.positions.map((pos) => (
                        <div
                          key={`${exp.company}-${pos.title}`}
                          className="relative border-l-2 border-[#d4a855]/35 pl-6"
                        >
                          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#d4a855]" />

                          <h4 className="text-base md:text-lg font-semibold text-white">
                            {pos.title}
                          </h4>
                          <p className="mt-2 text-sm md:text-base text-slate-300">
                            {pos.period}
                          </p>
                          <p className="mt-1 text-sm md:text-base text-slate-400">
                            {pos.location}
                          </p>

                          <ul className="mt-5 space-y-3">
                            {pos.achievements.map((achievement) => (
                              <li
                                key={achievement}
                                className="flex gap-3 text-sm md:text-base leading-relaxed text-slate-300"
                              >
                                <span className="mt-2 text-[#d4a855]">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
