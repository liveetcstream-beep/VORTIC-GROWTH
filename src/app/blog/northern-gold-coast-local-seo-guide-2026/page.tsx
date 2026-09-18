import { Metadata } from "next";
import ArticleNorthernGcClient from "./ArticleNorthernGcClient";

export const metadata: Metadata = {
  title: "Northern Gold Coast Local SEO & Maps Blueprint (2026)",
  description:
    "How Pimpama, Coomera, and Ormeau businesses dominate Google Maps 3-Packs and Gemini AI Overviews. Actionable 2026 Local SEO framework.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/northern-gold-coast-local-seo-guide-2026",
  },
  openGraph: {
    title: "Northern Gold Coast Local SEO & Maps Blueprint (2026)",
    description:
      "Actionable local search framework for Pimpama (4209), Coomera (4209), and Ormeau (4208) contractors and local businesses.",
    url: "https://www.vorticgrowth.com/blog/northern-gold-coast-local-seo-guide-2026",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Northern Gold Coast Local SEO Guide 2026" }],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Gold Coast Local SEO & Maps Blueprint (2026)",
    description:
      "Dominate Pimpama, Coomera, and Ormeau local search in 2026.",
    images: ["/vortic_seo_showcase_1788191983849.jpg"],
  },
};

export default function ArticleNorthernGcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Ultimate Northern Gold Coast Local SEO & Google Maps Dominance Blueprint (2026 Edition)",
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
    "description": "How Pimpama, Coomera, and Ormeau businesses dominate Google Maps 3-Packs and Gemini AI Overviews."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleNorthernGcClient />
    </>
  );
}
