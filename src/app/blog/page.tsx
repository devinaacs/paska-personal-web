import { BookOpen, Clock3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blogArticles } from "@/constant/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts and notes on agile delivery, project execution, and data-driven problem solving.",
};

export default function BlogPage() {
  const featuredArticle = blogArticles[0];

  return (
    <div className="flex min-h-screen flex-col bg-[#0e1a40] text-white">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-[#222f5b]/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:px-10 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[#946b2d] bg-[#222f5b]/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f5d08b]">
                Insight Journal
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                A place for ideas, reflections, and everything worth writing.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                A personal space for sharing thoughts, lessons, observations,
                and stories across any topic I want to explore.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-[2rem] border border-[#946b2d]/40 bg-[#08122f]/80 p-6 shadow-2xl shadow-black/20 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-[#946b2d]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d08b]">
                    Featured article
                  </span>
                  <span>{featuredArticle.category}</span>
                  <span className="text-slate-500">•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="mt-5 max-w-2xl text-xl font-bold leading-tight md:text-3xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                  {featuredArticle.summary}
                </p>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#946b2d] px-5 py-2 text-sm font-semibold text-[#f5d08b] transition-colors hover:bg-[#946b2d] hover:text-[#0e1a40]"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              <aside className="rounded-[2rem] border border-[#222f5b] bg-[#08122f]/80 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5d08b]">
                  Library
                </p>
                <div className="mt-6 space-y-4">
                  {blogArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="block"
                    >
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <BookOpen className="h-4 w-4 text-[#f5d08b]" />
                        {article.publishedLabel}
                      </div>
                      <h3 className="mt-3 text-base font-semibold leading-snug md:text-lg">
                        {article.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                        <Clock3 className="h-4 w-4 text-[#f5d08b]" />
                        <span>{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
