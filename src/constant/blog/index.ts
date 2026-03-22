import { article01 } from "./article-01";
import { article02 } from "./article-02";

export type { BlogArticle, BlogSection } from "./types";

export const blogArticles = [article01, article02];

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
