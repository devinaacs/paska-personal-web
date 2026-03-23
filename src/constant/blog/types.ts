export type BlogSection = {
  title: string;
  body: string[];
  bullets?: string[];
  note?: string[];
  noteStyle?: "source" | "paragraph";
  quote?: string;
  bulletStyle?: "ordered" | "arrow" | "unordered";
  headingStyle?: "hero" | "section" | "subsection";
  image?: {
    src: string;
    alt: string;
    caption?: string;
    sourceLabel?: string;
    sourceHref?: string;
  };
};

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedLabel: string;
  sections: BlogSection[];
  layout?: "default" | "document";
};
