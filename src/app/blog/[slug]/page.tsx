import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { blogArticles, getBlogArticleBySlug } from "@/constant/blog";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0e1a40] text-white">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-[#222f5b]/70">
          <div className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-18">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-[#f5d08b]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-[#946b2d]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d08b]">
                {article.category}
              </span>
              <span>{article.publishedLabel}</span>
              <span className="text-slate-500">•</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
              {article.summary}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-16">
          <article className="rounded-[2rem] border border-[#222f5b]/80 bg-[#08122f]/85 p-6 md:p-10">
            <div className="space-y-8">
              {article.sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="text-xl font-semibold leading-snug text-[#f8e5ba] md:text-2xl">
                    {section.title}
                  </h2>

                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-200 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-3 pl-5 text-sm leading-7 text-slate-200 md:text-base">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="list-disc marker:text-[#f5d08b]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
