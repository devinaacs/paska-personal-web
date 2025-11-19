import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import { me } from "@/constant/me";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-16 px-10 pb-16">
        <section className="max-w-md">
          <div className="inline-flex items-center rounded-full border border-[#946b2d] px-5 py-2 mb-6 bg-transparent">
            <span className="text-xs font-semibold tracking-[0.25em]">
              ABOUT ME
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block">Hello,</span>
            <span className="block">
              I&apos;m{" "}
              <span className="text-[#946b2d]">
                {me.firstName}
                !
              </span>
            </span>
          </h2>
        </section>

        <section className="max-w-xl text-sm md:text-base leading-relaxed">
          <p className="mb-4 text-[#f2f2f2]">
            Results-driven{" "}
            <span className="font-semibold text-[#946b2d]">data analyst</span>{" "}
            with 4+ years of experience in extracting insights from complex
            datasets. Proficient in{" "}
            <span className="font-semibold text-[#946b2d]">Python</span>{" "}
            programming and dashboard creation, leveraging tools like{" "}
            <span className="font-semibold text-[#946b2d]">Looker Studio</span>{" "}
            and{" "}
            <span className="font-semibold text-[#946b2d]">Power BI</span> to
            visualize data effectively.
          </p>
          <p className="mb-8 text-[#f2f2f2]">
            Skilled in spreadsheet applications such as{" "}
            <span className="font-semibold text-[#946b2d]">
              Microsoft Excel
            </span>{" "}
            for data manipulation and analysis, and passionate about turning raw
            data into clear, actionable stories for business stakeholders.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              <a
                href={me.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href={`mailto:${me.email}`}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full border border-white text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors"
              >
                Projects
              </Link>
              <Link
                href={me.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-[#946b2d] bg-[#946b2d] text-sm font-semibold hover:bg-transparent hover:text-[#946b2d] transition-colors"
              >
                Download CV
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
