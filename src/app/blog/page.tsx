import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, BookOpen, Clock, Calendar, UserCheck } from "lucide-react";

export default function BlogIndexPage() {
  const articles = [
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

      <Footer />
    </main>
  );
}
