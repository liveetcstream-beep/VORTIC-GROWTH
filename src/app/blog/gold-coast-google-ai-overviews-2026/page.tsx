import { Metadata } from "next";
import ArticleAiOverviewsClient from "./ArticleAiOverviewsClient";

export const metadata: Metadata = {
  title: "Google AI Overviews 2026: Gold Coast SEO Guide",
  description:
    "How Gemini AI Overviews impact Gold Coast businesses and how to get cited as the #1 recommended local service entity.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/gold-coast-google-ai-overviews-2026",
  },
  openGraph: {
    title: "Google AI Overviews 2026: Gold Coast SEO Guide",
    description:
      "How Gemini AI Overviews impact Gold Coast businesses and how to get cited as the #1 recommended local service entity.",
    url: "https://www.vorticgrowth.com/blog/gold-coast-google-ai-overviews-2026",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Google AI Overviews Guide" }],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AI Overviews 2026: Gold Coast SEO Guide",
    description:
      "How Gemini AI Overviews impact Gold Coast businesses and how to get cited as the #1 recommended local entity.",
    images: ["/og-image.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why Gold Coast Local Businesses are Losing Leads to Google AI Overviews in 2026",
            "image": "https://www.vorticgrowth.com/og-image.jpg",
            "datePublished": "2026-08-15T08:00:00+10:00",
            "dateModified": "2026-08-31T08:00:00+10:00",
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
            "description": "How Google's new Gemini AI Overviews are replacing traditional organic search results, and what Gold Coast practices and trade contractors must do."
          }),
        }}
      />
      <ArticleAiOverviewsClient />
    </>
  );
}
