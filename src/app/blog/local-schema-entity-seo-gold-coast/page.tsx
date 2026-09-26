import { Metadata } from "next";
import ArticleLocalSchemaClient from "./ArticleLocalSchemaClient";

export const metadata: Metadata = {
  title: "Local Schema & Entity Graph Markup for QLD Businesses (2026)",
  description:
    "How to code JSON-LD LocalBusiness schema and sameAs entity triples to win Google Gemini AI Overviews citations.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/local-schema-entity-seo-gold-coast",
  },
};

export default function Page() {
  return <ArticleLocalSchemaClient />;
}
