import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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

const HIGHLIGHT_STYLES: Record<string, string> = {
  cyan: "bg-[#14f1ff]",
  green: "bg-[#b8e986]",
  yellow: "bg-[#ffe84a]",
  pink: "bg-[#eab3d3]",
  magenta: "bg-[#ff35ee]",
  red: "bg-[#ff2f2f]",
  blue: "bg-[#5b8eff] text-black",
  rose: "bg-[#f2cfd3]",
};

function renderRichText(text: string) {
  const parts = text
    .split(/(\[\[(?:cyan|green|yellow|pink|magenta|red|blue|rose):.*?\]\]|\*\*.*?\*\*|\*.*?\*|==.*?==)/g)
    .filter(Boolean);

  return parts.map((part, index) => {
    const highlightMatch = part.match(/^\[\[(cyan|green|yellow|pink|magenta|red|blue|rose):(.*)\]\]$/);

    if (highlightMatch) {
      const [, color, content] = highlightMatch;

      return (
        <mark
          key={`${part}-${index}`}
          className={`rounded-[1px] px-1 py-0 text-inherit ${HIGHLIGHT_STYLES[color]}`}
        >
          {renderRichText(content)}
        </mark>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <mark
          key={`${part}-${index}`}
          className="rounded-[1px] bg-[#c8f0d8] px-1 py-0 text-inherit"
        >
          {part.slice(2, -2)}
        </mark>
      );
    }

    return part;
  });
}

function normalizeBulletText(text: string, bulletStyle?: "ordered" | "arrow") {
  if (bulletStyle === "ordered") {
    return text.replace(/^\d+\.\s+/, "");
  }

  return text;
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isDocumentLayout = article.layout === "document";

  return (
    <div className="flex min-h-screen flex-col bg-[#0e1a40] text-white">
      <Navbar />

      <main className="flex-1">
        <>
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

            <section className={`mx-auto px-4 ${isDocumentLayout ? "max-w-6xl py-10 md:px-8 md:py-14" : "max-w-5xl py-14 md:px-8 md:py-16"}`}>
              <article
                className={
                  isDocumentLayout
                    ? "p-0 text-slate-100"
                    : "rounded-[1.75rem] border border-slate-200 bg-white p-6 text-black shadow-2xl shadow-black/20 md:p-10"
                }
              >
                <div className="space-y-8">
                  {article.sections.map((section, index) => (
                    <section key={section.title} className={`${isDocumentLayout ? "space-y-5" : "space-y-4"}`}>
                      {!(isDocumentLayout && index === 0) && (
                        <h2
                          className={`${
                            isDocumentLayout ? "text-white" : "text-black"
                          } ${
                            section.headingStyle === "hero"
                              ? "text-4xl font-semibold leading-tight md:text-6xl"
                              : section.headingStyle === "section"
                                ? "text-3xl font-semibold leading-tight md:text-5xl"
                                : "text-xl font-semibold leading-snug md:text-2xl"
                          }`}
                        >
                          {section.title}
                        </h2>
                      )}

                      {section.quote && (
                        <blockquote className="border-l-4 border-[#946b2d] pl-5 text-base leading-7 italic text-slate-700">
                          {renderRichText(section.quote)}
                        </blockquote>
                      )}

                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className={`${isDocumentLayout ? "text-[1.05rem] leading-[1.65] text-justify text-slate-100 md:text-[1.15rem]" : "text-sm leading-7 text-black md:text-base"}`}
                        >
                          {renderRichText(paragraph)}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className={`${section.bulletStyle === "arrow" ? "pl-10" : "pl-8"} space-y-3 ${isDocumentLayout ? "text-[1.05rem] leading-[1.65] text-justify text-slate-100 md:text-[1.15rem]" : "text-sm leading-7 text-black md:text-base"}`}>
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className={section.bulletStyle === "arrow" ? "list-none relative before:absolute before:-left-8 before:top-[0.2em] before:text-[1.1em] before:content-['➔']" : "list-decimal marker:font-medium"}
                            >
                              {renderRichText(
                                normalizeBulletText(
                                  item,
                                  section.bulletStyle ?? "ordered"
                                )
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.note?.map((noteItem) => (
                        <p
                          key={noteItem}
                          className={
                            section.noteStyle === "paragraph"
                              ? `${isDocumentLayout ? "text-[1.05rem] leading-[1.65] text-justify text-slate-100 md:text-[1.15rem]" : "text-sm leading-7 text-black md:text-base"}`
                              : "text-center text-sm italic leading-6 text-[#2647ff] md:text-base"
                          }
                        >
                          {renderRichText(noteItem)}
                        </p>
                      ))}

                      {section.image && (
                        <figure className="space-y-3">
                          <div
                            className={`relative overflow-hidden ${
                              section.title === "Closing Thought"
                                ? "mx-auto aspect-square w-full max-w-[420px]"
                                : "aspect-[16/10] w-full border border-black"
                            }`}
                          >
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              fill
                              className={`${
                                section.title === "Closing Thought"
                                  ? "object-contain"
                                  : "object-contain bg-white"
                              }`}
                            />
                          </div>
                        </figure>
                      )}

                      {section.image?.sourceLabel && (
                        <p className="text-center text-sm italic leading-6 text-[#2647ff] md:text-base">
                          {section.image.sourceHref ? (
                            <a
                              href={section.image.sourceHref}
                              target="_blank"
                              rel="noreferrer"
                              className="transition-colors hover:text-[#9ebcff]"
                            >
                              {section.image.sourceLabel}
                            </a>
                          ) : (
                            section.image.sourceLabel
                          )}
                        </p>
                      )}

                      {section.image?.caption && (
                        <p className="text-center text-xs leading-6 text-slate-500">
                          {section.image.caption}
                        </p>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            </section>
        </>
      </main>

      <Footer />
    </div>
  );
}
