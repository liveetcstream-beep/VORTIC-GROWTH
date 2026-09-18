import { Metadata } from "next";
import TradieSeoClient from "./TradieSeoClient";

export const metadata: Metadata = {
  title: "Tradie SEO Gold Coast | #1 Local SEO & Google Maps for Contractors",
  description:
    "Dominate Google Maps 3-Pack across Pimpama, Coomera, Ormeau, and Gold Coast. Guaranteed exclusive local search framework for concreters, plumbers, electricians, and builders.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/tradie-seo-gold-coast",
  },
  openGraph: {
    title: "Tradie SEO Gold Coast | Vortic Growth Search Architecture",
    description:
      "Exclusive #1 Google Maps & AI search rankings for Gold Coast trade contractors. Drive 45+ inbound quote calls monthly.",
    url: "https://www.vorticgrowth.com/tradie-seo-gold-coast",
    siteName: "Vortic Growth",
    images: [{ url: "/vortic_seo_showcase_1788191983849.jpg", width: 1200, height: 630, alt: "Tradie SEO Gold Coast" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradie SEO Gold Coast | Vortic Growth",
    description:
      "Drive 45+ organic inbound quote calls monthly for your Gold Coast trade business without paying Google Ads.",
    images: ["/vortic_seo_showcase_1788191983849.jpg"],
  },
};

export default function TradieSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Tradie Local SEO & Google Maps Optimization",
        "provider": {
          "@type": "Organization",
          "name": "Vortic Growth Search Architecture",
          "url": "https://www.vorticgrowth.com"
        },
        "areaServed": {
          "@type": "State",
          "name": "Queensland, Gold Coast"
        },
        "description": "Exclusive Local SEO and Google Maps 3-Pack rank domination for Gold Coast trade contractors."
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
            "name": "Tradie SEO Gold Coast",
            "item": "https://www.vorticgrowth.com/tradie-seo-gold-coast"
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
      <TradieSeoClient />
    </>
  );
}
