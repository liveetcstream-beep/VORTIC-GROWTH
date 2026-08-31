import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vortic Growth | Local SEO, Google Maps & Inbound Lead Engine",
  description:
    "Engineered Local Domination & Organic Revenue for High-Value Contractors, Builders & Service Enterprises. Verified 45+ leads/month, #1 Google AI Overview citations, zero ad spend.",
  keywords: [
    "Local SEO Agency",
    "Google Maps 3-Pack Ranking",
    "Gold Coast Local SEO",
    "Trade Lead Generation",
    "Generative Engine Optimization",
    "Rank and Rent Assets",
    "Suburb SEO Domination",
  ],
  authors: [{ name: "Vortic Growth Team", url: "https://vorticgrowth.com" }],
  creator: "Vortic Growth",
  metadataBase: new URL("https://vorticgrowth.com"),
  openGraph: {
    title: "Vortic Growth | Engineered Local Domination & Organic Revenue",
    description:
      "Transform your trade or service business with top Google Maps 3-Pack rankings and suburb-level organic lead funnels. Verified case studies inside.",
    url: "https://vorticgrowth.com",
    siteName: "Vortic Growth",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortic Growth | Local SEO & Inbound Lead Engine",
    description: "Dominating local search results and driving 40+ inbound quote calls monthly for contractors.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "-9OJXBKwPQ7ZIQFeiasiJ4GLXA_6PfDwYlK0WdkarXE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Vortic Growth",
              "image": "https://vorticgrowth.com/og-image.jpg",
              "url": "https://vorticgrowth.com",
              "sameAs": [
                "https://www.facebook.com/vorticgrowth/"
              ],
              "telephone": "+61401164987",
              "priceRange": "$$$",
              "description": "Results-driven Local SEO, Google Maps 3-Pack optimization, and suburb-level organic lead generation for trade and clinical practices.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gold Coast",
                "addressRegion": "QLD",
                "postalCode": "4217",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -28.0167,
                "longitude": 153.4000
              },
              "areaServed": [
                "Gold Coast QLD",
                "Brisbane QLD",
                "Sydney NSW",
                "Melbourne VIC",
                "Australia",
                "United States",
                "United Kingdom"
              ],
              "knowsAbout": [
                "Local Search Engine Optimization",
                "Google Business Profile 3-Pack Domination",
                "Google AI Overviews & Generative Engine Optimization",
                "Suburb-Level Organic Silo Strategy",
                "Trade & Contractor Inbound Lead Generation",
                "Rank and Rent Digital Assets"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.98",
                "reviewCount": "54"
              }
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
