import { Metadata } from "next";
import PimpamaClient from "./PimpamaClient";

export const metadata: Metadata = {
  title: "Local SEO Pimpama (4209) | #1 Google Maps & AI Search Agency",
  description:
    "Dominate Google Maps 3-Pack and Gemini AI Overviews in Pimpama (Postcode 4209). Suburb-specific search architecture for Gold Coast tradies, builders, and local services.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/local-seo-pimpama",
  },
  openGraph: {
    title: "Local SEO Pimpama (4209) | Vortic Growth Search Architecture",
    description:
      "Exclusive #1 Google Maps 3-Pack rankings and Google AI citations for local businesses in Pimpama, Gainsborough Greens, and the Northern Gold Coast Growth Corridor.",
    url: "https://www.vorticgrowth.com/local-seo-pimpama",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Local SEO Pimpama 4209" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Pimpama (4209) | Vortic Growth",
    description:
      "Exclusive Google Maps & AI Search rankings for Pimpama tradies, builders, and local service providers.",
    images: ["/vortic_seo_showcase_1788191983849.jpg"],
  },
};

export default function PimpamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.vorticgrowth.com/#organization",
        "name": "Vortic Growth Search Architecture - Pimpama Branch",
        "url": "https://www.vorticgrowth.com/local-seo-pimpama",
        "logo": "https://www.vorticgrowth.com/vorticgrowth-logo.png",
        "image": "https://www.vorticgrowth.com/vortic_seo_showcase_1788191983849.jpg",
        "telephone": "+61401164987",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pimpama City Precinct",
          "addressLocality": "Pimpama",
          "addressRegion": "QLD",
          "postalCode": "4209",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -27.8174,
          "longitude": 153.2981
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Pimpama 4209" },
          { "@type": "AdministrativeArea", "name": "Gainsborough Greens" },
          { "@type": "AdministrativeArea", "name": "Pimpama Village" },
          { "@type": "AdministrativeArea", "name": "Northern Gold Coast Growth Corridor" }
        ],
        "description": "Specialized Local SEO, Google Maps 3-Pack, and Generative AI Search (GEO) optimization for Pimpama businesses."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is Pimpama (Postcode 4209) the most competitive local search market on the Gold Coast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pimpama is Queensland's fastest-growing residential corridor. Thousands of homeowners in Gainsborough Greens search daily for local tradies, dentists, plumbers, and builders. Ranking in the Google Maps 3-Pack for 4209 secures top high-margin local jobs."
            }
          },
          {
            "@type": "Question",
            "name": "How does Vortic Growth help Pimpama businesses rank in Google AI Overviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build structured location schemas and entity triples (Pimpama + M1 Motorway + City of Gold Coast compliance) that force Gemini AI and Perplexity to cite your business as the verified #1 local service provider."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.vorticgrowth.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Local SEO Gold Coast",
            "item": "https://www.vorticgrowth.com/local-seo-gold-coast"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Local SEO Pimpama",
            "item": "https://www.vorticgrowth.com/local-seo-pimpama"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PimpamaClient />
    </>
  );
}
