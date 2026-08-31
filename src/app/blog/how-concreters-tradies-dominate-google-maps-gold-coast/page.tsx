import { Metadata } from "next";
import ArticleTradiesSeoClient from "./ArticleTradiesSeoClient";

export const metadata: Metadata = {
  title: "How Tradies Dominate Google Maps: 57 Suburb Study",
  description:
    "The exact blueprint used to rank across 57 Gold Coast suburbs and generate 45+ inbound quote calls monthly with zero ads.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog/how-concreters-tradies-dominate-google-maps-gold-coast",
  },
  openGraph: {
    title: "How Tradies Dominate Google Maps: 57 Suburb Study",
    description:
      "The exact blueprint used to rank across 57 Gold Coast suburbs and generate 45+ inbound quote calls monthly with zero ads.",
    url: "https://www.vorticgrowth.com/blog/how-concreters-tradies-dominate-google-maps-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tradies Local SEO Study" }],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Tradies Dominate Google Maps: 57 Suburb Study",
    description:
      "Rank across 57 Gold Coast suburbs and generate 45+ inbound quote calls monthly with zero ads.",
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
            "headline": "How Northern Gold Coast Concreters & Tradies Dominate Google Maps 3-Packs (57 Suburb Case Study)",
            "image": "https://www.vorticgrowth.com/og-image.jpg",
            "datePublished": "2026-08-20T08:00:00+10:00",
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
            "description": "The exact technical blueprint behind ranking across 57 Northern Gold Coast suburbs driving 45+ inbound quote calls monthly without paid Google Ads."
          }),
        }}
      />
      <ArticleTradiesSeoClient />
    </>
  );
}
