import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Clock, UserCheck, CheckCircle2, Tag, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Insights & AI Search Guide | Vortic Growth",
  description:
    "Actionable Local SEO, Google AI Overviews, and Google Maps strategies for Australian businesses and trade contractors.",
  alternates: {
    canonical: "https://www.vorticgrowth.com/blog",
  },
  openGraph: {
    title: "Local SEO Insights & AI Search Guide | Vortic Growth",
    description:
      "Actionable Local SEO, Google AI Overviews, and Google Maps strategies for Australian businesses and trade contractors.",
    url: "https://www.vorticgrowth.com/blog",
    siteName: "Vortic Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vortic Growth Blog" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Insights & AI Search Guide | Vortic Growth",
    description:
      "Actionable Local SEO, Google AI Overviews, and Google Maps strategies for Australian businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndexPage() {
  const articles = [
    {
      slug: "northern-gold-coast-local-seo-guide-2026",
      title: "The Ultimate Northern Gold Coast Local SEO & Google Maps Blueprint (2026)",
      summary:
        "How Pimpama (4209), Coomera (4209), and Ormeau (4208) local service businesses and tradies dominate Google Maps 3-Packs and Gemini AI Overviews.",
      readTime: "12 min read",
      date: "September 2026",
      category: "Northern GC Pillar",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      slug: "google-maps-spam-fighting-gold-coast",
      title: "Google Maps Spam Fighting & Multi-Location GBP Setup in Gold Coast (2026)",
      summary:
        "How Gold Coast contractors remove fake competitor GMB profiles along the M1 corridor and build dominant multi-location profiles.",
      readTime: "8 min read",
      date: "September 2026",
      category: "Maps & GBP Strategy",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      slug: "local-schema-entity-seo-gold-coast",
      title: "Local Schema & Entity Graph Markup: Winning Gemini AI Citations in QLD",
      summary:
        "How to code JSON-LD LocalBusiness schema and sameAs entity triples to win Google Gemini AI Overviews citations.",
      readTime: "10 min read",
      date: "September 2026",
      category: "Technical GEO",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      slug: "seo-vs-google-ads-gold-coast-tradies",
      title: "Local SEO vs Google Ads for Gold Coast Tradies (2026 Financial Benchmarks)",
      summary:
        "A transparent financial comparison of Google Ads PPC ($35-$65/click) vs Organic Local SEO for Gold Coast trade contractors.",
      readTime: "7 min read",
      date: "August 2026",
      category: "ROI & Benchmarks",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      slug: "gold-coast-local-citations-directory-guide",
      title: "Top 50 Gold Coast Local Citation Directories for Google Maps & AI Indexing",
      summary:
        "The authoritative list of Australian NAP directory citations that move the needle for Gold Coast Google Maps 3-Packs and AI search.",
      readTime: "11 min read",
      date: "August 2026",
      category: "Citation Vault",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      slug: "how-to-rank-in-google-ai-overviews-gold-coast",
      title: "How to Get Cited in Google AI Overviews & Perplexity: Gold Coast GEO Guide",
      summary:
        "Master Generative Engine Optimization (GEO). How Google Gemini extracts local entity data and cites top Gold Coast service providers.",
      readTime: "9 min read",
      date: "August 2026",
      category: "AI Search & GEO",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      slug: "gold-coast-google-ai-overviews-2026",
      title: "Why Gold Coast Local Businesses are Losing Leads to Google AI Overviews in 2026",
      summary:
        "How Google's new Gemini AI Overviews are replacing traditional organic search results, and what Gold Coast practices and trade contractors must do to secure #1 recommended entity citations.",
      readTime: "6 min read",
      date: "August 2026",
      category: "AI Search & GEO",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      slug: "how-concreters-tradies-dominate-google-maps-gold-coast",
      title: "How Northern Gold Coast Concreters & Tradies Dominate Google Maps 3-Packs (57 Suburb Case Study)",
      summary:
        "The exact technical blueprint behind ranking across 57 Northern Gold Coast suburbs (Pimpama, Coomera, Ormeau) driving 45+ inbound quote calls monthly without paid Google Ads.",
      readTime: "8 min read",
      date: "August 2026",
      category: "Tradie SEO Blueprint",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      slug: "local-seo-cost-guide-australia-2026",
      title: "The Complete Local SEO Cost Guide for Australian Practices (2026 Market Benchmarks)",
      summary:
        "A transparent breakdown of Australian SEO pricing ($300 to $5,000/mo). What agencies actually do, why lock-in contracts are outdated, and how to calculate realistic ROI on your investment.",
      readTime: "7 min read",
      date: "August 2026",
      category: "Pricing & Strategy",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  const topics = [
    {
      category: "Northern GC Pillar",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Our flagship blueprint series: the complete playbook for dominating Google Maps across the northern growth corridor — Pimpama, Coomera, Ormeau and the 57-suburb strategy behind 45+ monthly calls.",
    },
    {
      category: "Maps & GBP Strategy",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Tactical guides to Google Business Profiles and the Maps 3-Pack — category setup, service-area targeting, and fighting the fake spam listings clogging Gold Coast results.",
    },
    {
      category: "Technical GEO",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "The engineering layer: LocalBusiness schema, JSON-LD, entity graphs and sameAs triples — the code that gets AI search engines to cite your business as the answer.",
    },
    {
      category: "ROI & Benchmarks",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Honest numbers: what Google Ads actually costs Gold Coast tradies per click versus organic local SEO, so you can budget with real figures instead of agency estimates.",
    },
    {
      category: "Citation Vault",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      description: "The directory lists that matter — 50 Australian NAP citations ranked by impact on Maps rankings and AI indexing, not padded fluff.",
    },
    {
      category: "AI Search & GEO",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Generative Engine Optimisation: how Google's AI Overviews choose which local businesses to recommend, and how to become the cited answer instead of the ignored listing.",
    },
    {
      category: "Tradie SEO Blueprint",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Trade-specific playbooks — concreters, builders, sparkies and roofies — built around how customers in each trade actually search on Google Maps.",
    },
    {
      category: "Pricing & Strategy",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Transparent pricing guides for the Australian SEO market: what agencies really do for the fee, how to calculate ROI, and why lock-in contracts are dying.",
    },
  ];

  const learnPoints = [
    "Google Business Profile optimisation that wins the Maps 3-Pack",
    "NAP citations that actually move Gold Coast rankings",
    "Review generation systems that grow review velocity honestly",
    "Ranking in Google AI Overviews with Generative Engine Optimisation",
    "LocalBusiness schema & entity SEO for AI citations",
    "SEO vs Google Ads cost benchmarks for Australian tradies",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Vortic Growth Knowledge Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              Local SEO, Google AI & <span className="gradient-text">Search Architecture Insights</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Actionable guides, Australian case studies, and engineering breakdowns for local practice owners and contractors.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              These aren't recycled generic SEO tips. Every guide on this blog is written from campaigns we're actively running across Gold Coast suburbs — the same Google Business Profile rebuilds, citation audits, and review systems behind our case studies. When Google changes how the 3-Pack or AI Overviews behave, we test it on real client profiles first and write up what actually happened.
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="max-w-5xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">What You'll Learn Here</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                Field notes from a working Gold Coast local SEO practice — written so a business owner with zero SEO background can follow along, and detailed enough that working marketers use them as reference.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learnPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
              <h3 className="text-sm font-extrabold text-slate-950">Are these guides for beginners or experienced marketers?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Both. Foundational guides define every SEO term the first time it appears, so a practice owner with no technical background can follow the strategy. The technical pieces — schema markup, entity graphs, spam fighting — go deep enough that working SEO professionals keep them bookmarked as reference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${art.badgeColor}`}>
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900 leading-snug tracking-tight hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    <span>Muhammad Bilal</span>
                  </div>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Browse by Topic Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Tag className="w-4 h-4 text-indigo-600" />
              <span>Browse by Topic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Every Topic <span className="gradient-text">We Write About</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Eight topic tracks covering the full local search stack — from Google Business Profiles to AI Overviews. Pick the track that matches your biggest ranking bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, idx) => (
              <div key={idx} className="card-clean p-6 rounded-3xl border border-slate-200 bg-white space-y-3 hover:border-indigo-300 hover:shadow-lg transition-all">
                <span className={`inline-block text-[11px] font-extrabold px-3 py-1 rounded-full border ${topic.badgeColor}`}>
                  {topic.category}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <span>Done Reading — Ready to Rank?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Want This System <span className="gradient-text">Run For Your Business?</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Reading the playbook is step one. Step two is a free 15-minute Google Maps audit where we show you exactly where your business stands against the competitors holding your suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              Get Your Free Maps Audit →
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm border border-slate-200 transition-all"
            >
              See the Results First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
