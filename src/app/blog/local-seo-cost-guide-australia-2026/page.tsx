import { Metadata } from "next";
import ArticleCostGuideClient from "./ArticleCostGuideClient";

export const metadata: Metadata = {
  title: "Local SEO Cost Guide Australia 2026 | Pricing ROI",
  description:
    "Transparent Australian Local SEO pricing benchmarks ($300-$2,000/mo). Understand real costs, ROI math, and agency retainers.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/local-seo-cost-guide-australia-2026",
  },
  openGraph: {
    title: "Local SEO Cost Guide Australia 2026 | Pricing ROI",
    description:
      "Transparent Australian Local SEO pricing benchmarks ($300-$2,000/mo). Understand real costs, ROI math, and agency retainers.",
    url: "https://www.vorticgrowth.com/blog/local-seo-cost-guide-australia-2026",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Australian Local SEO Cost Guide" }],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Cost Guide Australia 2026 | Pricing ROI",
    description:
      "Australian Local SEO pricing benchmarks ($300-$2,000/mo). Understand real costs and ROI.",
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
            "headline": "The Complete Local SEO Cost Guide for Australian Practices (2026 Market Benchmarks)",
            "image": "https://www.vorticgrowth.com/og-image.jpg",
            "datePublished": "2026-08-25T08:00:00+10:00",
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
            "description": "A transparent breakdown of Australian SEO pricing ($300 to $5,000/mo). What agencies actually do, why lock-in contracts are outdated, and how to calculate realistic ROI."
          }),
        }}
      />
      <ArticleCostGuideClient />
    </>
  );
}
