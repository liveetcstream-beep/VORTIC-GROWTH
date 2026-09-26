import { Metadata } from "next";
import ArticleSpamFightingClient from "./ArticleSpamFightingClient";

export const metadata: Metadata = {
  title: "Google Maps Spam Fighting & Multi-Location GBP Guide (2026)",
  description:
    "How Gold Coast contractors remove fake competitor GMB profiles and build dominant multi-location Google Business Profiles.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/google-maps-spam-fighting-gold-coast",
  },
};

export default function Page() {
  return <ArticleSpamFightingClient />;
}
