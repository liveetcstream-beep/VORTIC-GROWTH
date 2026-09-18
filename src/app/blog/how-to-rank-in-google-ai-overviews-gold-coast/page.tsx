import { Metadata } from "next";
import ArticleAiRankClient from "./ArticleAiRankClient";

export const metadata: Metadata = {
  title: "How to Rank in Google AI Overviews & Perplexity | Gold Coast GEO",
  description:
    "Master Generative Engine Optimization (GEO) for Gold Coast businesses. Get cited as the #1 recommended entity in Google Gemini and Perplexity search.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/how-to-rank-in-google-ai-overviews-gold-coast",
  },
  openGraph: {
    title: "How to Rank in Google AI Overviews & Perplexity | Gold Coast GEO",
    description:
      "Generative Engine Optimization (GEO) guide for Gold Coast practices, tradies, and local businesses.",
    url: "https://www.vorticgrowth.com/blog/how-to-rank-in-google-ai-overviews-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Google AI Overviews Gold Coast SEO" }],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AI Overviews Gold Coast GEO Guide 2026",
    description:
      "Get cited by Gemini and Perplexity AI for Gold Coast local business queries.",
    images: ["/vortic_seo_showcase_1788191983849.jpg"],
  },
};

export default function ArticleAiRankPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Get Cited in Google AI Overviews & Perplexity: Gold Coast GEO Guide (2026)",
    "image": "https://www.vorticgrowth.com/vortic_seo_showcase_1788191983849.jpg",
    "datePublished": "2026-09-18T08:00:00+10:00",
    "dateModified": "2026-09-18T08:00:00+10:00",
    "author": {
      "@type": "Organization",
      "name": "Vortic Growth Search Architecture",
      "url": "https://www.vorticgrowth.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vortic Growth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.vorticgrowth.com/vorticgrowth-logo.png"
      }
    },
    "description": "Master Generative Engine Optimization (GEO) for Gold Coast businesses."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleAiRankClient />
    </>
  );
}
