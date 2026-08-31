"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Clock,
  UserCheck,
  Hammer,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  MapPin,
  Building,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export default function ArticleTradieDomination() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why do directory sites like HiPages and Oneflare produce lower profit margins for Gold Coast tradies?",
      a: "Shared directory lead platforms sell the exact same homeowner lead to 4 or 5 competing contractors simultaneously. This forces contractors into a race-to-the-bottom price war on labour and materials. In contrast, owning a Page 1 Google Maps 3-Pack and suburb micro-silo asset delivers 100% exclusive inbound phone calls from high-income homeowners in suburbs like Hope Island, Robina, and Burleigh Heads who are ready to hire without haggling.",
    },
    {
      q: "How many suburb pages does a Gold Coast trade business need?",
      a: "For Northern Gold Coast trade corridors (Coomera, Pimpama, Ormeau, Helensvale), we typically build 20 to 57 dedicated suburb micro-silos. Each page targets specific high-margin services (e.g. exposed aggregate driveways in Pimpama 4209, commercial factory slabs in Ormeau 4208, pool surrounds in Sanctuary Cove).",
    },
    {
      q: "How does QBCC license verification impact Google ranking signals?",
      a: "Google's Quality Rater Guidelines heavily weight trust for home services. By embedding your Queensland Building and Construction Commission (QBCC) license number and business insurance details directly into JSON-LD LocalBusiness structured schema, Google recognizes your business as a legally compliant, verified Queensland trade entity.",
    },
    {
      q: "What is the difference between leasing a rank-and-rent asset vs building our own website?",
      a: "Building and ranking a brand-new website from scratch typically takes 60 to 90 days of link building and citation indexing. Leasing a pre-ranked Vortic Growth digital asset gives you live Page 1 and Google AI Overview placement within 10 minutes—all inbound phone calls and quote requests are forwarded directly to your mobile.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights Hub</span>
          </Link>

          {/* Header Block */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Gold Coast Tradie & Contractor SEO
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                57 Suburbs Case Study • Northern Gold Coast Corridor
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              How Northern Gold Coast Concreters & Tradies Dominate Google Maps 3-Packs (57 Suburb Blueprint)
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              The exact local search architecture behind generating 45+ inbound quote calls monthly across Pimpama, Coomera, Ormeau, and Helensvale without paying thousands in Google Ads or shared HiPages lead fees.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium py-4 border-y border-slate-100">
              <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                Muhammad Bilal
              </span>
              <span>•</span>
              <span>Lead Local Search Architect</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                9 min read
              </span>
              <span>•</span>
              <span>Updated August 31, 2026</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="pt-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            
            {/* Real Case Intro */}
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              When Dave Harrison, founder of <em>Gold Coast Concreters QLD</em>, first reached out to us, his trade business was caught in the classic Australian contractor trap: paying $45 to $75 per click on Google Search Ads while getting price-shopped on shared directory portals like HiPages and Oneflare.
            </p>

            <p>
              Despite having 12 years of hands-on concreting experience, a flawless QBCC license, and a crew ready for residential driveways and commercial slabs, his website was invisible to homeowners living just 5 kilometers away in Pimpama (4209) and Coomera Waters (4209).
            </p>

            {/* Pain Point Callout */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-sm">
                <AlertTriangle className="w-4 h-4 text-indigo-400" />
                <span>The Core Bottleneck: The &quot;Single Homepage&quot; Fallacy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                90% of Gold Coast tradies have a generic 4-page website targeting only <em>&quot;concreters gold coast&quot;</em>. But Google Maps ranks businesses based on <strong>Geographic Proximity and Suburb Entity Authority</strong>. When a new homeowner in the Gainsborough Greens estate in Pimpama searches on their phone, Google prioritizes contractors who have dedicated local relevance in postcode 4209.
              </p>
            </div>

            {/* Step-by-Step Blueprint */}
            <h2 className="text-2xl font-black text-slate-950 pt-4">
              The 3-Phase Suburb Domination Engineering Framework
            </h2>

            <div className="space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">1</span>
                  <span>Building 57 Postcode Micro-Silos Across the Northern M1 Corridor</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Instead of one generic page, we engineered dedicated, content-rich landing pages for all 57 Northern Gold Coast suburbs and surrounding residential estates:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs font-semibold text-slate-700">
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Pimpama QLD 4209</span>
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Coomera QLD 4209</span>
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Upper Coomera 4209</span>
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Ormeau QLD 4208</span>
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Helensvale QLD 4212</span>
                  <span className="p-2 bg-white rounded-lg border border-slate-200">📍 Hope Island QLD 4212</span>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Each page includes localized trade content: residential council setback rules, soil movement challenges in Northern Gold Coast clay, and coastal exposed aggregate specifications.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">2</span>
                  <span>QBCC License & Trade Schema Graph Embedding</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  We injected comprehensive JSON-LD <code>HomeAndConstructionBusiness</code> schema directly into Google&apos;s Knowledge Graph, incorporating active QBCC licensing numbers, public liability insurance verifications, and verified Australian business registration (ABN).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">3</span>
                  <span>Google Maps 3-Pack Proximity Radius Expansion</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  By syndicating geocoded job-site completion photos, verified homeowner reviews mentioning specific suburb names, and building local citations on TrueLocal, YellowPages AU, and LocalDirectories, Google expanded their 3-Pack radius from a tiny 2km circle to a 25km dominant zone.
                </p>
              </div>

            </div>

            {/* Real Business Numbers */}
            <h2 className="text-2xl font-black text-slate-950 pt-4">
              The Real Business Impact: 45+ Inbound Calls Every Month
            </h2>

            <p>
              The compounding power of organic local search vs paid ads is staggering. Within 6 weeks of deployment:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <div className="text-3xl font-black text-emerald-700">45+ Calls</div>
                <div className="text-xs font-bold text-emerald-900">Direct Inbound Calls / Mo</div>
                <div className="text-[11px] text-emerald-700 font-medium">100% Exclusive to Dave</div>
              </div>
              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-1">
                <div className="text-3xl font-black text-indigo-700">AUD $0</div>
                <div className="text-xs font-bold text-indigo-900">Monthly Ad Spend</div>
                <div className="text-[11px] text-indigo-700 font-medium">Saved $2,400/mo on Google Ads</div>
              </div>
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
                <div className="text-3xl font-black text-purple-700">#1 AI Spot</div>
                <div className="text-xs font-bold text-purple-900">Google AI Overview Citation</div>
                <div className="text-[11px] text-purple-700 font-medium">Across 57 Postcodes</div>
              </div>
            </div>

            {/* Exclusivity CTA */}
            <div className="my-10 p-8 rounded-3xl bg-indigo-950 text-white space-y-4 border border-indigo-800 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-extrabold border border-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict 1-Contractor-Per-Territory Rule</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Check If Your Trade & Gold Coast Suburb Is Available
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                We never partner with competing contractors in the same suburb. Once a territory is claimed for concreting, roofing, or building, it is locked.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20tradie%20on%20the%20Gold%20Coast.%20I'd%20like%20to%20check%20if%20my%20territory%20is%20open."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:translate-y-[-1px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check Territory on WhatsApp (+61 401 164 987)</span>
                </a>
                <a
                  href="/concreters-seo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>Explore Tradie Platform</span>
                </a>
              </div>
            </div>

            {/* Semantic FAQ Section */}
            <div className="pt-8 border-t border-slate-200" id="faqs">
              <div className="space-y-2 mb-6">
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950">
                  Gold Coast Tradie Local SEO & Google Maps
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-slate-100 transition-colors"
                      >
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? "rotate-180 text-indigo-600" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
