import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function BackgroundPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 pb-16">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,2.2fr)]">
            <section className="space-y-6">
              <h2 className="text-lg font-semibold tracking-wide text-slate-100">
                Education
              </h2>

              <div className="rounded-2xl bg-[#222f5b]/90 p-6 shadow-lg shadow-black/40">
                <div className="flex items-start gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/itenas.png"
                      alt="ITENAS logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#946b2d]">
                      Bandung National Institute of Technology (ITENAS)
                    </p>
                    <p className="text-base font-medium">
                      Bachelor of Informatics
                    </p>

                    <p className="text-sm text-slate-300">
                      GPA <span className="font-semibold">3.59 / 4.00</span>
                    </p>

                    <p className="text-xs text-slate-300">
                      2017 – 2021 • Bandung, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-lg font-semibold tracking-wide text-slate-100">
                Experience
              </h2>

              <div className="relative">
                <div className="absolute left-[14px] top-2 bottom-2 w-px bg-black/50 lg:left-4" />

                <div className="space-y-8">
                  <article className="relative flex gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-black/60 bg-[#946b2d]" />
                    </div>

                    <div className="flex-1 rounded-2xl bg-[#222f5b]/90 p-5 shadow-lg shadow-black/40">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-3">
                          <div className="relative mt-1 h-12 w-12 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src="/images/cmk.jpeg"
                              alt="Central Mega Kencana logo"
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold">
                              Business Analyst Specialist
                            </h3>
                            <p className="text-xs font-medium text-[#946b2d]">
                              PT. Central Mega Kencana (Mondial, Frank &amp; Co.,
                              The Palace)
                            </p>
                            <p className="mt-1 text-xs text-slate-300">
                              Jakarta Selatan, Indonesia
                            </p>
                          </div>
                        </div>

                        <p className="mt-1 text-xs text-slate-300 sm:mt-0 text-right whitespace-nowrap">
                          12/2024 – Present
                        </p>
                      </div>

                      <ul className="mt-3 space-y-2 text-sm text-slate-100">
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Optimized website performance using GA4 traffic analysis
                            and user behavior insights from heatmaps (Clarity).
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Managed and scaled media placement ad campaigns
                            (Google Ads, Meta Ads) to achieve specific funnel targets.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Developed data-driven strategies that increased sales for
                            jewelry brands across Indonesia.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Maintained customer and transaction data for all brands to
                            support retention and segmentation analysis.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Analyzed best-selling products per store to inform
                            strategic sales plans and annual revenue growth.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Created reports and dashboards to support sales strategies
                            and provide actionable insights for management.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article className="relative flex gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-black/60 bg-[#946b2d]" />
                    </div>

                    <div className="flex-1 rounded-2xl bg-[#222f5b]/90 p-5 shadow-lg shadow-black/40">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-3">
                          <div className="relative mt-1 h-12 w-12 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src="/images/trans7.png"
                              alt="TRANS7 logo"
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold">
                              Marketing Services &amp; Industry Analyst
                            </h3>
                            <p className="text-xs font-medium text-[#946b2d]">
                              PT Duta Visual Nusantara Tivi Tujuh (TRANS7)
                            </p>
                            <p className="mt-1 text-xs text-slate-300">
                              Jakarta Selatan, Indonesia
                            </p>
                          </div>
                        </div>

                        <p className="mt-1 text-xs text-slate-300 sm:mt-0 text-right whitespace-nowrap">
                          10/2022 – 12/2024
                        </p>
                      </div>

                      <ul className="mt-3 space-y-2 text-sm text-slate-100">
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Crawled social media data for all platforms using
                            3rd-party tools.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Processed raw data with Jupyter Notebook (Python) for
                            further analysis.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Conducted market research on emerging industries.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Forecasted content and campaign performance for upcoming
                            events.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article className="relative flex gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-black/60 bg-[#946b2d]" />
                    </div>

                    <div className="flex-1 rounded-2xl bg-[#222f5b]/90 p-5 shadow-lg shadow-black/40">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-3">
                          <div className="relative mt-1 h-12 w-12 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src="/images/anthromedis.png"
                              alt="Anthromedis logo"
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold">
                              Data Science &amp; Data Analyst Freelance
                            </h3>
                            <p className="text-xs font-medium text-[#946b2d]">
                              PT. Anthromedis Cipta Utama Indonesia
                            </p>
                            <p className="mt-1 text-xs text-slate-300">
                              Bandung, Indonesia
                            </p>
                          </div>
                        </div>

                        <p className="mt-1 text-xs text-slate-300 sm:mt-0 text-right whitespace-nowrap">
                          07/2021 – 01/2022
                        </p>
                      </div>

                      <ul className="mt-3 space-y-2 text-sm text-slate-100">
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Built a context-analysis program that automatically
                            crawls and summarizes news content from multiple
                            platforms.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Developed a gender detection system to identify user
                            gender in social-media posts.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article className="relative flex gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-black/60 bg-[#946b2d]" />
                    </div>

                    <div className="flex-1 rounded-2xl bg-[#222f5b]/90 p-5 shadow-lg shadow-black/40">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-3">
                          <div className="relative mt-1 h-12 w-12 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src="/images/lipi.png"
                              alt="LIPI logo"
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold">
                              Programmer (Software &amp; Hardware) Intern
                            </h3>
                            <p className="text-xs font-medium text-[#946b2d]">
                              Lembaga Ilmu Pengetahuan Indonesia
                            </p>
                            <p className="mt-1 text-xs text-slate-300">
                              Bandung, Indonesia
                            </p>
                          </div>
                        </div>

                        <p className="mt-1 text-xs text-slate-300 sm:mt-0 text-right whitespace-nowrap">
                          09/2020 – 12/2020
                        </p>
                      </div>

                      <ul className="mt-3 space-y-2 text-sm text-slate-100">
                        <li className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#946b2d]" />
                          <span>
                            Developed a wearable device (Si-Monic) integrated with
                            an information system to monitor or track individuals
                            affected by COVID-19 during the pandemic.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
