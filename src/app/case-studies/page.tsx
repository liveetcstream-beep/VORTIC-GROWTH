import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "SEO Case Studies Gold Coast | Verified Client ROI",
  description:
    "See how Gold Coast dental clinics and trade contractors achieved 40+ monthly inbound calls and #1 Google rankings.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/case-studies",
  },
  openGraph: {
    title: "SEO Case Studies Gold Coast | Verified Client ROI",
    description:
      "See how Gold Coast dental clinics and trade contractors achieved 40+ monthly inbound calls and #1 Google rankings.",
    url: "https://www.vorticgrowth.com/case-studies",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vortic Growth Case Studies" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Case Studies Gold Coast | Verified Client ROI",
    description:
      "See how Gold Coast dental clinics and contractors achieved 40+ monthly inbound calls.",
    images: ["/og-image.jpg"],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Local SEO & Inbound Lead Case Studies",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "url": "https://www.vorticgrowth.com",
              "telephone": "+61401164987"
            },
            "description": "Verified case studies documenting Google Maps 3-Pack and organic lead generation growth for dental clinics, trade contractors, and builders."
          }),
        }}
      />
      <CaseStudiesClient />
    </>
  );
}
