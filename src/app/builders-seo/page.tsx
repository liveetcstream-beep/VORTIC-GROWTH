import { Metadata } from "next";
import BuildersSeoClient from "./BuildersSeoClient";

export const metadata: Metadata = {
  title: "Builders SEO Gold Coast | Custom Home Builder SEO",
  description:
    "High-intent SEO for Gold Coast custom builders and renovators. Win $1M+ home building contracts from Google organic search.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/builders-seo",
  },
  openGraph: {
    title: "Builders SEO Gold Coast | Custom Home Builder SEO",
    description:
      "High-intent SEO for Gold Coast custom builders and renovators. Win $1M+ home building contracts from Google organic search.",
    url: "https://www.vorticgrowth.com/builders-seo",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Builders SEO Gold Coast" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builders SEO Gold Coast | Custom Home Builder SEO",
    description:
      "High-intent SEO for Gold Coast custom builders and renovators.",
    images: ["/og-image.jpg"],
  },
};

export default function BuildersSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Home Builders SEO & Lead Engine",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "url": "https://www.vorticgrowth.com",
              "telephone": "+61401164987"
            },
            "serviceType": "Construction SEO & High-Value Contract Acquisition",
            "description": "Hyper-local search engine optimization and Google Maps 3-Pack ranking for custom home builders, luxury residential renovators, and construction firms across Queensland."
          }),
        }}
      />
      <BuildersSeoClient />
    </>
  );
}
