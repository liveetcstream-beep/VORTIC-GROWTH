"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, UserCheck, Code, ArrowRight, Network, Sparkles, TriangleAlert } from "lucide-react";

const plumberJsonLd = `{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Coastal Flow Plumbing",
  "image": "https://coastalflowplumbing.com.au/images/van.jpg",
  "telephone": "+61-7-5555-0123",
  "url": "https://coastalflowplumbing.com.au",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 Industry Drive",
    "addressLocality": "Yatala",
    "addressRegion": "QLD",
    "postalCode": "4207",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.7436,
    "longitude": 153.2153
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "07:00",
    "closes": "17:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Yatala" },
    { "@type": "City", "name": "Ormeau" },
    { "@type": "City", "name": "Coomera" }
  ],
  "sameAs": [
    "https://www.facebook.com/coastalflowplumbing",
    "https://abr.business.gov.au/ABN/View/12345678901"
  ]
}`;

export default function ArticleLocalSchemaClient() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <article className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                Technical Local SEO & GEO
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 7 min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Local Schema & Entity Graph Markup: Winning Gemini AI Citations in QLD
            </h1>
            <div className="flex items-center justify-between border-y border-slate-800 py-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>By <strong className="text-white font-semibold">Muhammad Bilal</strong></span>
              </div>
              <span>Updated September 2026</span>
            </div>
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Your website can say &quot;plumber in Yatala&quot; in plain English, but Google and AI engines don&apos;t rank sentences — they rank entities. Schema markup is the machine-readable layer that tells Google, Gemini and Perplexity exactly what your business is, where it sits on the map, when it&apos;s open and which suburbs it serves. For a Gold Coast trade business competing in the Maps 3-Pack, it&apos;s one of the highest-leverage technical wins available.
            </p>
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-bold text-white mb-2">
                <Code className="w-5 h-5 text-purple-400" /> Definition: LocalBusiness Schema
              </p>
              <p className="mb-0">
                LocalBusiness schema is a vocabulary from Schema.org — the standard Google, Bing and Yahoo jointly maintain — that describes a local business in structured JSON-LD code. It includes properties like name, address, geo-coordinates, opening hours and sameAs profile links, letting search engines understand your business as a verified entity rather than guessing from your page text.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-white pt-4">What Is Entity SEO and Why Does It Matter for Local Rankings?</h2>
            <p>
              Entity SEO is the practice of helping search engines understand your business as a distinct, verified &quot;thing&quot; — with attributes like location, services, reviews and relationships to other entities (your suburb, your industry, your review profiles). Google&apos;s local algorithm doesn&apos;t just match keywords; it resolves entities. A plumber whose entity is clearly defined through schema, consistent NAP citations and a well-structured Google Business Profile is simply easier for Google to trust — and easier to place in the 3-Pack for &quot;plumber near me&quot; searches across <Link href="/local-seo-ormeau" className="text-purple-400 hover:underline">Ormeau 4208</Link> and <Link href="/local-seo-coomera" className="text-purple-400 hover:underline">Coomera 4209</Link>.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">Which Schema Properties Matter Most for a Gold Coast Business?</h2>
            <p>
              <strong className="text-white">What should a local business actually mark up?</strong> Start with the correct @type — Plumber, Dentist, Electrician and RoofingContractor all exist as specific types, and using the precise one beats generic LocalBusiness. Then add PostalAddress with your real suburb and postcode, GeoCoordinates with accurate latitude and longitude, openingHoursSpecification, telephone, url, priceRange, areaServed listing the suburbs you genuinely cover, and sameAs links to your Facebook page, True Local listing and ABN Lookup record. Each property is another confirmed fact about your entity.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">What Does LocalBusiness JSON-LD Look Like in Practice?</h2>
            <p>
              Below is a realistic example for a fictional Yatala plumber. It uses the Plumber type, pins the business with geo-coordinates, declares genuine opening hours, lists three served suburbs and links the entity to its Facebook page and ABN record via sameAs — the exact pattern we deploy on client sites:
            </p>
            <pre className="rounded-xl border border-slate-700 bg-slate-900 p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed text-emerald-300 font-mono whitespace-pre">
              {plumberJsonLd}
            </pre>
            <p>
              <strong className="text-white">How do you add this to a website?</strong> Paste the JSON-LD inside a <span className="font-mono text-purple-300">&lt;script type=&quot;application/ld+json&quot;&gt;</span> tag in the page head or just before the closing body tag. On WordPress, a plugin like Rank Math or Schema Pro handles it; on Next.js sites like this one, it goes directly into the layout or page component. Then validate it with Google&apos;s Rich Results Test before considering it done.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">How Does Schema Help With AI Overviews and GEO?</h2>
            <p>
              Generative Engine Optimisation is about making AI systems confident enough to cite your business. When Google&apos;s AI Overviews or Gemini answer &quot;best emergency plumber Gold Coast,&quot; they favour entities with rich, structured, corroborated data — schema markup, consistent citations and clear service-area definitions. Schema doesn&apos;t guarantee an AI mention (nothing does), but a business with precise entity markup is measurably easier for these systems to verify than one relying on page text alone. Think of it as giving the AI a fact sheet instead of making it guess.
            </p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-bold text-white mb-3">
                <Network className="w-5 h-5 text-purple-400" /> The Entity Stack: How the Pieces Connect
              </p>
              <ul className="space-y-2 list-disc pl-5 mb-0">
                <li><strong className="text-white">Schema markup</strong> — declares your entity directly to machines.</li>
                <li><strong className="text-white">NAP citations</strong> — corroborate the entity across <Link href="/blog/gold-coast-local-citations-directory-guide" className="text-purple-400 hover:underline">50+ Australian directories</Link>.</li>
                <li><strong className="text-white">Google Business Profile</strong> — Google&apos;s own canonical record of the entity.</li>
                <li><strong className="text-white">Reviews</strong> — third-party validation of the entity&apos;s quality.</li>
                <li><strong className="text-white">sameAs links</strong> — tie the entity together across Facebook, ABN Lookup and directories.</li>
              </ul>
            </div>
            <p>
              Notice how no single layer does the job alone. Schema declares the facts, citations corroborate them, reviews validate quality and sameAs links stitch the profiles into one identity. When all five agree, Google&apos;s confidence in your entity is at its highest — and that confidence is what surfaces you in both the Maps 3-Pack and AI-generated answers.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">What Are the Most Common Local Schema Mistakes?</h2>
            <p>
              The worst is marking up reviews or ratings your business doesn&apos;t actually have — that&apos;s structured-data spam and can earn a manual penalty. Close behind: using the wrong @type (a dental clinic marked up as a generic LocalBusiness), listing suburbs in areaServed you don&apos;t actually service, publishing two conflicting schemas on the same page from different plugins, and geo-coordinates that point to the middle of the suburb instead of your real address. Every property you mark up must be true and visible on the page.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">How Often Should You Review and Update Your Schema?</h2>
            <p>
              <strong className="text-white">Is schema a set-and-forget job?</strong> No — treat it like your Google Business Profile. Update your markup whenever your hours change (including Gold Coast public holidays), when you add or drop service suburbs, when your phone number changes, or after any website rebuild. Stale schema is worse than no schema: if your markup says you&apos;re open and your GBP says you&apos;re closed, you&apos;ve handed Google a contradiction. A quick quarterly check with the Rich Results Test takes five minutes and catches the drift before it costs you.
            </p>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-bold text-white mb-2">
                <TriangleAlert className="w-5 h-5 text-amber-400" /> Honest Limits
              </p>
              <p className="mb-0">
                Schema is a clarity tool, not a ranking hack. It helps Google understand you, but it won&apos;t outrank a competitor with 200 genuine reviews and a decade of citations. Anyone selling schema as a guaranteed path to AI Overviews is overselling — it&apos;s one layer of a proper entity strategy, alongside citations, reviews and content.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 sm:p-6 space-y-4">
              <p className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" /> Frequently Asked Questions
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">Will adding schema directly improve my Google Maps ranking?</p>
                  <p className="mb-0">Not directly — Maps rankings are driven by relevance, distance and prominence. But schema strengthens the entity understanding behind relevance, especially for service-area and &quot;near me&quot; queries, so treat it as a supporting signal rather than a primary ranking factor.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">Should I use JSON-LD, Microdata or RDFa?</p>
                  <p className="mb-0">JSON-LD. It&apos;s Google&apos;s recommended format, it lives in a script tag separate from your visible content, and it&apos;s far easier to maintain and validate than Microdata sprinkled through your HTML.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">Can I mark up suburbs I want to rank in but don&apos;t have an office in?</p>
                  <p className="mb-0">Only suburbs you genuinely serve. Listing the entire Gold Coast in areaServed when you only work in two suburbs is misleading structured data. Mark up your real service area — relevance to real coverage beats aspirational coverage every time.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">How do I check my schema is working?</p>
                  <p className="mb-0">Run the page through Google&apos;s Rich Results Test and the Schema.org validator. Both flag syntax errors and missing recommended properties. Re-check after every site update, since theme and plugin changes silently break markup all the time.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">Does schema help AI tools like ChatGPT or Perplexity find my business?</p>
                  <p className="mb-0">Indirectly. These tools train on and retrieve from the open web, where well-structured businesses are easier to identify and cite accurately. Combined with consistent citations and clear service pages, schema makes your entity legible to every system that reads the web.</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white mb-1">What&apos;s the difference between Organization and LocalBusiness schema?</p>
                  <p className="mb-0">Organization describes a company generally; LocalBusiness (and its subtypes like Plumber or Dentist) adds location-specific properties — address, geo-coordinates, opening hours, areaServed. A Gold Coast service business should always use the most specific LocalBusiness subtype available.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-purple-600 text-white hover:bg-purple-500 transition-all">
              <span>Book Entity Graph Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
