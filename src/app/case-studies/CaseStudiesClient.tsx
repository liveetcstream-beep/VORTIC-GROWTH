"use client";

import React, { useState } from "react";
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
  ChevronDown,
  HelpCircle,
} from "lucide-react";

export default function CaseStudiesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      detail: "We rebuilt the Google Business Profile from the category level up — correct primary category, every service itemised, and service-area settings mapped across the northern corridor. Then we built dedicated suburb landing pages for the M1 growth belt, cleaned up contradictory directory citations, and installed a post-job review request system. Within months the profile was holding the Maps 3-Pack for concreting queries across Pimpama, Coomera, Ormeau and Helensvale.",
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
      detail: "The old site loaded like it was 2012 — a 38/100 mobile PageSpeed score was silently killing conversions. We rebuilt the site for speed, restructured the Google Business Profile with treatment-specific services, and created dedicated pages for high-value treatments like implants and Invisalign. Everything stayed AHPRA-compliant throughout: no testimonials used in advertising, no misleading before-and-afters — just accurate service information and a review system that grew their Maps presence the honest way.",
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
      detail: "Luxury buyers don't search like everyone else — they Google hyper-specific phrases like 'waterfront architectural builder Hope Island'. We built the entire organic strategy around those exact entity-rich queries: portfolio case-study pages for completed builds, suburb-level landing pages for Sanctuary Cove and Sovereign Islands, and a Google Business Profile tuned for high-intent local searches. No paid ads were run at any point — every lead in that pipeline came from organic search.",
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

  const faqs = [
    {
      q: "Are these results typical, or are these your best clients?",
      a: "These are real client outcomes with verified numbers — not averages and not cherry-picked miracles. Every territory behaves differently: a quiet hinterland suburb and Surfers Paradise are different competitive universes. We show you the real figures so you can judge the system honestly, and we never promise you'll match a specific case study.",
    },
    {
      q: "How long did these results take to achieve?",
      a: "Maps movement is usually visible within 6 to 12 weeks of a proper Google Business Profile rebuild. Deeper suburb domination — the kind shown in these case studies — typically takes 4 to 8 months depending on competition, your review base, and where your site starts. Anyone promising overnight #1 rankings is selling you something.",
    },
    {
      q: "Why do you only work with one business per trade corridor?",
      a: "Because we can't ethically rank two competing concreters in Pimpama at the same time. Exclusivity means every ranking we win in your corridor belongs to you alone — your competitor can't hire us to take it back. Check the contact page to see if your territory is still open.",
    },
    {
      q: "Do you use the exact same system for every client?",
      a: "The five-part architecture is the same, but the application is tuned per industry. A dental practice needs AHPRA-compliant content and treatment pages, a concreter needs suburb micro-silos along the M1 corridor, and a luxury builder needs entity-rich portfolio content. Same engine, different tuning for each trade.",
    },
    {
      q: "Can you work with my existing website, or do I need a rebuild?",
      a: "We audit first and give you an honest answer. Many sites can be optimised in place — the concreting campaign kept its site. The dental practice genuinely needed a rebuild because a 38/100 mobile PageSpeed score was killing conversions. We'll tell you which camp you're in before you spend a dollar.",
    },
    {
      q: "What if my competitor is already ranked #1 on Maps?",
      a: "Then we reverse-engineer why they're there: their review velocity, citation strength, category setup, and content depth. Most #1 positions are more vulnerable than they look — and some are held by spam profiles we can challenge through Google's redressal process. The free audit maps all of this out for your specific suburbs.",
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

      {/* Methodology Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs sm:text-sm font-bold text-indigo-300">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>The System Behind The Numbers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Do Local Businesses Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Reach #1 on Google Maps?</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every case study below was built on the same five-part local search architecture. No tricks, no private blog networks, no review farms — just the ranking factors Google publicly rewards, executed suburb by suburb.
            </p>
          </div>

          {/* Definition Box */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-indigo-500/10 border border-indigo-400/30 space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-indigo-300">
              Definition: Google Maps 3-Pack
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              The Google Maps 3-Pack is the block of three business listings Google displays at the top of local search results, above the organic listings. It captures the majority of local clicks — ranking here means your phone number, reviews, and directions button appear before competitors even get seen.
            </p>
          </div>

          {/* Five Methodology Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-400/30">1</div>
              <h3 className="text-base font-extrabold text-white">Google Business Profile Rebuild</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your GBP is the single highest-leverage asset in local search. We rebuild it from the category level up: correct primary and secondary categories, every service itemised with descriptions, service-area settings mapped to the suburbs you actually want work from, and accurate hours. Most businesses we audit are sitting on a half-finished profile — completing it properly is often the fastest ranking win available.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-400/30">2</div>
              <h3 className="text-base font-extrabold text-white">Suburb Micro-Silo Pages</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google ranks relevance by location. Instead of one generic "service areas" page, we build dedicated, genuinely useful landing pages for each target suburb — Pimpama, Coomera, Ormeau and beyond — each with local landmarks, postcode modifiers, and suburb-specific service detail. That is how the concreting campaign captured 57 northern suburbs instead of ranking in just one.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-400/30">3</div>
              <h3 className="text-base font-extrabold text-white">NAP Citation Network</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                NAP stands for Name, Address, Phone — and consistency across the web is a core trust signal Google uses to verify your business is real. We audit every directory listing for contradictions, then build citations across the Australian directories that actually move Gold Coast rankings. One wrong phone number on an old directory can quietly drag a whole campaign backwards.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-400/30">4</div>
              <h3 className="text-base font-extrabold text-white">Review Velocity System</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reviews are the fuel of the Maps 3-Pack: Google watches how many you get and how steadily they arrive. We install a simple post-job review request workflow so happy customers leave reviews while the experience is fresh. No fake reviews, no review gating, no incentives — just a system that makes it easy for real customers to speak up.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-400/30">5</div>
              <h3 className="text-base font-extrabold text-white">AI Overview Entity Optimisation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google's AI Overviews and tools like Perplexity don't rank websites the way classic search does — they cite entities they trust. We structure your business as a clear entity: LocalBusiness schema markup, consistent sameAs references, and quotable, factual content AI can lift with confidence. That is what turned our clients into the "#1 recommended" answer instead of just another blue link.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-400/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-white">Honest Measurement</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We report on calls, bookings, and revenue — not vanity rankings for keywords nobody searches. Every metric card on this page pairs a "before" with an "after" so you can see the actual distance travelled. If a campaign isn't working, you'll see it in the numbers before we do.
              </p>
            </div>
          </div>

          {/* Inline Reader Question */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
            <h3 className="text-lg font-extrabold text-white">Why does the same system work for both a concreter and a dental practice?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Because Google's local ranking factors don't change between industries — relevance, distance, and prominence decide every 3-Pack. The architecture stays the same; the application is tuned. A dental practice needs AHPRA-compliant content and treatment pages, a concreter needs suburb micro-silos along the M1 corridor. Same engine, different tuning.
            </p>
          </div>

          <p className="max-w-4xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed text-center">
            A word of honesty: no two territories behave the same. A quiet hinterland suburb and Surfers Paradise are different competitive universes, and anyone who promises identical timelines for both is selling you something. What we can promise is the system — the same five-part architecture, applied with full transparency and measured against the metrics that matter.
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

                {/* What We Did */}
                <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-indigo-700">What we did</div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {cs.detail}
                  </p>
                </div>

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

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-900">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Case Study Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Questions About These Results</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Straight answers about timelines, typical outcomes, and how the system adapts to your trade.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-slate-950 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-600 transition-transform shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
