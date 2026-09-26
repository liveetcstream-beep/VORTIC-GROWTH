import { Metadata } from "next";
import OxenfordClient from "./OxenfordClient";

export const metadata: Metadata = {
  title: "Local SEO Oxenford & Pacific Pines (4210) | Vortic Growth",
  description: "Dominate Google Maps 3-Pack and Gemini AI Overviews in Oxenford and Pacific Pines (Postcode 4210).",
  alternates: { canonical: "https://www.vorticgrowth.com/local-seo-oxenford" },
};

export default function Page() { return <OxenfordClient />; }
