import Image from "next/image";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <header className="flex items-center justify-between px-10 py-6">
        <div className="text-xl font-semibold tracking-wider">
          <span className="px-3 py-1 border border-[#946b2d] rounded-full text-xs font-medium text-[#946b2d]">
            EDUCATION & EXPERIENCE
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/home" className="hover:text-[#946b2d] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#946b2d] transition-colors">
            About Me
          </Link>
          <Link href="/skill" className="hover:text-[#946b2d] transition-colors">
            Skill
          </Link>
          <Link
            href="/experience"
            className="text-[#946b2d] font-semibold"
          >
            Background
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#946b2d] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#946b2d] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 px-8 md:px-16 pb-16">
       
        <div className="grid md:grid-cols-[1.1fr_minmax(0,_1fr)] gap-10 md:gap-16 items-start">
          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
              EDUCATION
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="relative mt-1 h-16 w-16 rounded-full bg-[#000000] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/itenas.png"
                    alt="ITENAS logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-sm md:text-base leading-relaxed">
                  <p className="font-extrabold text-[#f9f9f9]">
                    Bandung National Institute of Technology (ITENAS)
                  </p>
                  <p className="font-semibold text-[#f5d08b]">
                    Bachelor of Informatics
                  </p>
                  <p className="mt-1 text-[#f2f2f2]">
                    GPA <span className="font-semibold">3.59 / 4.00</span>
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-[#d3d3d3]">
                    2017 – 2021 · Bandung, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
              EXPERIENCE
            </h2>

            <div className="border-l border-[#5d5d5d] pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-[#946b2d]" />
                <div className="flex gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-full bg-[#000000] flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/cmk.jpeg"
                      alt="Central Mega Kencana logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="font-extrabold text-[#f9f9f9]">
                        Business Analyst Specialist
                      </p>
                      <p className="font-semibold text-[#f5d08b]">
                        PT. Central Mega Kencana (Mondial, Frank &amp; Co., The Palace)
                      </p>
                      <ul className="mt-2 list-disc marker:text-[#946b2d] text-sm md:text-[0.9rem] text-[#f2f2f2] ml-5 space-y-1.5">
                        <li>
                          Optimized website performance using GA4 traffic analysis and
                          user behavior insights from heatmaps (Clarity).
                        </li>
                        <li>
                          Managed and scaled media placement ad campaigns (Google Ads,
                          Meta Ads) to achieve specific funnel targets.
                        </li>
                        <li>
                          Developed data-driven strategies that increased sales for
                          jewelry brands across Indonesia.
                        </li>
                        <li>
                          Maintained customer and transaction data for all brands to
                          support retention and segmentation analysis.
                        </li>
                        <li>
                          Analyzed best-selling products per store to inform strategic
                          sales plans and annual revenue growth.
                        </li>
                        <li>
                          Created reports and dashboards to support sales strategies and
                          provide actionable insights for management.
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs md:text-sm text-right text-[#d3d3d3] whitespace-nowrap">
                      <p>12/2024 – Present</p>
                      <p>Jakarta Selatan, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-[#946b2d]" />
                <div className="flex gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-full bg-[#000000] flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/trans7.png"
                      alt="TRANS7 logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="font-extrabold text-[#f9f9f9]">
                        Marketing Services &amp; Industry Analyst
                      </p>
                      <p className="font-semibold text-[#f5d08b]">
                        PT Duta Visual Nusantara Tivi Tujuh (TRANS7)
                      </p>
                      <ul className="mt-2 list-disc marker:text-[#946b2d] text-sm md:text-[0.9rem] text-[#f2f2f2] ml-5 space-y-1.5">
                        <li>
                          Crawled social media data for all platforms using 3rd-party
                          tools.
                        </li>
                        <li>
                          Processed raw data with Jupyter Notebook (Python) for further
                          analysis.
                        </li>
                        <li>
                          Conducted market research on emerging industries.
                        </li>
                        <li>
                          Forecasted content and campaign performance for upcoming
                          events.
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs md:text-sm text-right text-[#d3d3d3] whitespace-nowrap">
                      <p>10/2022 – 12/2024</p>
                      <p>Jakarta Selatan, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-[#946b2d]" />
                <div className="flex gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-full bg-[#000000] flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/anthromedis.png"
                      alt="Anthromedis logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="font-extrabold text-[#f9f9f9]">
                        Data Science &amp; Data Analyst Freelance
                      </p>
                      <p className="font-semibold text-[#f5d08b]">
                        PT. Anthromedis Cipta Utama Indonesia
                      </p>
                      <ul className="mt-2 list-disc marker:text-[#946b2d] text-sm md:text-[0.9rem] text-[#f2f2f2] ml-5 space-y-1.5">
                        <li>
                          Built a context-analysis program that automatically crawls and
                          summarizes news content from multiple platforms.
                        </li>
                        <li>
                          Developed a gender detection system to identify user gender in
                          social-media posts.
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs md:text-sm text-right text-[#d3d3d3] whitespace-nowrap">
                      <p>07/2021 – 01/2022</p>
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-[#946b2d]" />
                <div className="flex gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-full bg-[#000000] flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/lipi.png"
                      alt="LIPI logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="font-extrabold text-[#f9f9f9]">
                        Programmer (Software &amp; Hardware) Intern
                      </p>
                      <p className="font-semibold text-[#f5d08b]">
                        Lembaga Ilmu Pengetahuan Indonesia
                      </p>
                      <ul className="mt-2 list-disc marker:text-[#946b2d] text-sm md:text-[0.9rem] text-[#f2f2f2] ml-5 space-y-1.5">
                        <li>
                          Developed a wearable device (Si-Monic) integrated with an
                          information system to monitor or track individuals affected by
                          COVID-19 during the pandemic.
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs md:text-sm text-right text-[#d3d3d3] whitespace-nowrap">
                      <p>09/2020 – 12/2020</p>
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
