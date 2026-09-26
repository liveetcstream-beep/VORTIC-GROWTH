import { Metadata } from "next";
import ArticleSeoVsPpcClient from "./ArticleSeoVsPpcClient";

export const metadata: Metadata = {
  title: "Local SEO vs Google Ads for Gold Coast Tradies (2026 ROI)",
  description:
    "A transparent financial comparison of Google Ads PPC ($35-$65/click) vs Organic Local SEO for Gold Coast trade contractors.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/seo-vs-google-ads-gold-coast-tradies",
  },
};

export default function Page() {
  return <ArticleSeoVsPpcClient />;
}
