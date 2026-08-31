"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Hammer,
  Stethoscope,
  Building2,
  Star,
  Award,
  PhoneCall,
  Search,
  Check,
} from "lucide-react";

export default function CaseStudiesClient() {
  const caseStudies = [
    {
      id: "concreting",
      title: "Gold Coast Concreters QLD",
      category: "Tradie & Concreting SEO",
      icon: Hammer,
      badge: "45+ Inbound Calls / Mo",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      location: "Northern Gold Coast (Pimpama, Coomera, Ormeau, Helensvale)",
      summary: "How an independent concreter captured 57 Northern Gold Coast suburbs and achieved #1 Google Maps 3-Pack rankings with zero paid Google Ads.",
      metrics: [
        { label: "Monthly Calls", before: "3 - 5", after: "45+" },
        { label: "Suburb Micro-Silos", before: "0", after: "57 Suburbs" },
        { label: "Google AI Citation", before: "0%", after: "#1 Recommended" },
        { label: "Avg Job Value", before: "$3,500", after: "$6,200" },
      ],
      queries: [
        "concreters pimpama qld",
        "driveway concreting coomera",
        "concrete slab ormeau",
        "decorative concrete helensvale",
      ],
    },
    {
      id: "dental",
      title: "Coastal Cosmetic Dental Practice",
      category: "Healthcare & Dental SEO",
      icon: Stethoscope,
      badge: "38+ Patient Bookings / Mo",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      location: "Robina, Southport & South Brisbane Corridor",
      summary: "AHPRA-compliant local search engine architecture generating high-value dental implant and Invisalign patient cases on autopilot.",
      metrics: [
        { label: "Monthly Patients", before: "8", after: "38+ New Patients" },
        { label: "Case Value Generated", before: "$18k/mo", after: "$95k+/mo" },
        { label: "Mobile PageSpeed", before: "38/100", after: "98/100" },
        { label: "Map 3-Pack Rank", before: "Not in Top 20", after: "#1 Rank" },
      ],
      queries: [
        "dental implants robina",
        "emergency dentist southport",
        "invisalign clear aligners gold coast",
        "all on 4 dental implants brisbane south",
      ],
    },
    {
      id: "builders",
      title: "Sovereign Waterfront Custom Builders",
      category: "Luxury Construction SEO",
      icon: Building2,
      badge: "$3.2M Construction Pipeline",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      location: "Hope Island, Sanctuary Cove & Sovereign Islands",
      summary: "Hyper-targeted organic search acquisition for a boutique custom home builder targeting high-net-worth waterfront property buyers.",
      metrics: [
        { label: "Qualified Build Leads", before: "1 / month", after: "8 - 12 / month" },
        { label: "Signed Contracts", before: "2 / year", after: "5 / year" },
        { label: "Pipeline Value", before: "$1.2M", after: "$3.2M Added" },
        { label: "Organic Ad Spend", before: "$4,500/mo", after: "$0 Paid Ads" },
      ],
      queries: [
        "luxury custom home builders hope island",
        "waterfront architectural builder gold coast",
        "major home renovation sanctuary cove",
        "custom home builders sovereign islands",
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs sm:text-sm font-bold text-indigo-300 backdrop-blur-md">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>Verified Local Search Architecture Results</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Real Suburb Rankings. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Real Revenue Generated.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore verified case studies of Australian dental practices, trade contractors, and custom builders dominating Google Maps 3-Packs and Gemini AI Overviews.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="card-clean rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl bg-white space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{cs.category}</span>
                        <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${cs.badgeColor}`}>
                          {cs.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">{cs.title}</h2>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-1">
                        <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{cs.location}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#audit-cta"
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs self-start sm:self-auto transition-all"
                  >
                    Replicate These Results →
                  </a>
                </div>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {cs.summary}
                </p>

                {/* Metrics Table */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="text-xs font-semibold text-slate-500">{m.label}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-slate-400 line-through">{m.before}</span>
                        <span className="text-lg sm:text-xl font-black text-emerald-600">{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Verified Query Pills */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-indigo-600" />
                    Verified #1 Ranked Google Search Queries:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.queries.map((q, qIdx) => (
                      <span
                        key={qIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-bold"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        "{q}"
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-b border-slate-200/80" id="audit-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Ready to Dominate Your <span className="gradient-text">Trade or Practice Territory?</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            We only partner with 1 business per trade corridor. Check if your territory is still open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="/#packages"
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              Explore Growth Packages →
            </a>
            <a
              href="https://wa.me/61401164987?text=Hi%20Bilal,%20I%20saw%20your%20case%20studies%20and%20want%20to%20check%20territory%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm border border-slate-200 transition-all"
            >
              Check Territory on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
