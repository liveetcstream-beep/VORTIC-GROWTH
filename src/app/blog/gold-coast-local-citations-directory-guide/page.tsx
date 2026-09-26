import { Metadata } from "next";
import ArticleCitationVaultClient from "./ArticleCitationVaultClient";

export const metadata: Metadata = {
  title: "Top 50 Gold Coast Local Citation Directories for Google Maps (2026)",
  description:
    "The authoritative list of Australian NAP directory citations that move the needle for Gold Coast Google Maps 3-Packs and AI search indexing.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/gold-coast-local-citations-directory-guide",
  },
};

export default function Page() {
  return <ArticleCitationVaultClient />;
}
