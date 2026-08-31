"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Clock,
  UserCheck,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  MapPin,
  Building,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export default function ArticleGoogleAiOverviews() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Google determine which Gold Coast business to cite in Gemini AI Overviews?",
      a: "Google's Gemini search model doesn't simply pick whoever has the most backlinks. It queries the local Knowledge Graph, looking for entity clarity (verified Google Business Profile, active QBCC/AHPRA credentials), strict NAP consistency across top Australian directories (YellowPages.com.au, TrueLocal), and semantic question-answering structures on your website. If your page provides direct, factual, expert-reviewed answers formatted with structured JSON-LD schema, Google AI cites your clinic or firm as the primary recommendation.",
    },
    {
      q: "Can I rank in both Google Maps 3-Pack and Google AI Overviews simultaneously?",
      a: "Yes, and this is the ultimate competitive moat. When we engineer a Suburb Domination framework for Gold Coast clients (e.g. across Southport 4215, Robina 4226, or Pimpama 4209), we build topical micro-silos that simultaneously satisfy traditional local proximity signals for the 3-Pack while providing the semantic entity context required by Google AI.",
    },
    {
      q: "Why are my competitors appearing in AI Overviews when they have lower domain authority?",
      a: "Because AI Overviews prioritize Answer Engine Optimization (AEO) and conversational intent rather than legacy PageRank metrics. If a competitor in Broadbeach 4218 has structured direct-answer blocks answering 'What is the cost of emergency tooth extraction on the Gold Coast?', Gemini will extract their paragraph even if their overall website has fewer links than yours.",
    },
    {
      q: "Does LLMS.TXT help Gold Coast businesses get discovered by AI search models?",
      a: "LLMS.TXT is a modern standard that provides a clean markdown sitemap specifically formatted for Large Language Models (LLMs) and AI crawlers like Perplexity, ChatGPT Search, and Gemini. While it is not a direct Google ranking shortcut, implementing an AI-readable LLMS.TXT file gives your business a distinct discoverability advantage across the emerging conversational search ecosystem.",
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
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Generative Engine Optimization (GEO) & AEO
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Gold Coast Region • QLD 4217
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Why Gold Coast Local Businesses are Losing Leads to Google AI Overviews in 2026
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              How Google&apos;s Gemini AI Overviews are replacing traditional organic search results across Surfers Paradise, Southport, Robina, and the Northern Growth Corridor—and how to engineer your website to become the #1 AI-cited authority.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium py-4 border-y border-slate-100">
              <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                <UserCheck className="w-4 h-4 text-indigo-600" />
                Muhammad Bilal
              </span>
              <span>•</span>
              <span>Lead Local Search Architect (10+ Years AU Search Experience)</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                8 min read
              </span>
              <span>•</span>
              <span>Updated August 31, 2026</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="pt-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            
            {/* Intro with Local Context */}
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              If you operate a dental practice along Ferry Road in Southport (4215), a high-end concreting firm serving the booming Pimpama–Coomera growth corridor (4209), or a commercial law firm in the Bundall Corporate precinct, the way your prospective clients search Google has fundamentally transformed.
            </p>

            <p>
              For over fifteen years, local search was straightforward: rank in the top 3 of Google Maps, win Page 1 for your target keyword (e.g. <em>&quot;emergency dentist gold coast&quot;</em> or <em>&quot;driveway concreters robina&quot;</em>), and capture the phone calls.
            </p>

            <p>
              In 2026, Google has deployed <strong>Gemini-powered AI Overviews (GEO)</strong> across Australian mobile and desktop queries. Now, when a patient or homeowner asks a high-intent, conversational question, Google generates an interactive synthesized answer at the very top of the screen—pushing standard organic listings and even the Maps 3-Pack below the digital fold.
            </p>

            {/* Pain Point Callout Box */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>The Pain Point: The Silent Lead Hemorrhage on the Coast</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                If your website relies on outdated 2018-era keyword stuffing or thin generic pages, Google AI will bypass you completely. Instead, Gemini extracts answers directly from competitors who have structured semantic entity graphs, clinical/trade E-E-A-T credentials, and direct-answer formatting—routing high-value emergency calls to other practices before users ever see your phone number.
              </p>
            </div>

            {/* Inline Question 1 */}
            <h2 className="text-2xl font-black text-slate-950 pt-4 flex items-center gap-2">
              <span>What Are Patients & Homeowners Actually Asking Google AI in 2026?</span>
            </h2>

            <p>
              Search behavior across Queensland is shifting rapidly from fragmented keywords to multi-variable conversational queries. Consider how different customer demographics search on the Gold Coast today:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Healthcare Query</span>
                <p className="font-semibold text-slate-900 text-sm sm:text-base pt-2">
                  &ldquo;Who is an AHPRA-registered cosmetic dentist near Robina Town Centre (4226) that offers Afterpay, Bulk Billing for children, and same-day dental emergency walk-ins?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Trade & Construction Query</span>
                <p className="font-semibold text-slate-900 text-sm sm:text-base pt-2">
                  &ldquo;Which QBCC-licensed concreter in Northern Gold Coast (Coomera/Pimpama 4209) specializes in marine-grade exposed aggregate driveways that resist coastal salt spray?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Legal & Corporate Query</span>
                <p className="font-semibold text-slate-900 text-sm sm:text-base pt-2">
                  &ldquo;Where can I find a commercial dispute lawyer in Southport CBD (4215) with fixed fee structures for property lease disagreements?&rdquo;
                </p>
              </div>
            </div>

            {/* Inline Question 2 */}
            <h2 className="text-2xl font-black text-slate-950 pt-6">
              How Google Evaluates Local Entities: The 4 Pillars of GEO
            </h2>

            <p>
              To get referenced and cited by Google AI Overviews, your search architecture must satisfy four technical criteria:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>1. Deep JSON-LD Schema Graphs</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Explicitly linking your <code>LocalBusiness</code>, <code>Dentist</code>, or <code>GeneralContractor</code> schema with licensed practitioner AHPRA numbers, QBCC registration, geo-coordinates, and exact service areas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                  <Building className="w-4 h-4 text-indigo-600" />
                  <span>2. Suburb-Level Micro-Silos</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Building dedicated, content-rich landing pages for individual Gold Coast postcodes (e.g. Southport 4215, Helensvale 4212, Hope Island 4212) rather than a single generic &quot;Gold Coast&quot; page.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>3. Answer Engine Optimization (AEO)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Direct-answer content modules written in plain Australian English that directly resolve patient pain points, average procedure costs, and emergency protocols in 40–60 word answer blocks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>4. Australian Tier-1 Citations (NAP)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  100% verified Name, Address, and Phone consistency across Australian authoritative directories: YellowPages.com.au, TrueLocal, LocalDirectories, and Hotfrog.
                </p>
              </div>

            </div>

            {/* Local Geography & Environmental Quirks */}
            <h2 className="text-2xl font-black text-slate-950 pt-6">
              The Gold Coast Demographic Split: Coastal Luxury vs Northern Growth Corridor
            </h2>

            <p>
              A common mistake made by interstate Sydney or Melbourne agencies is treating the entire Gold Coast as one uniform market. In reality, local search intent is heavily segregated:
            </p>

            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Southern & Coastal Lifestyle Hubs (Burleigh Heads 4220, Broadbeach 4218, Mermaid Beach 4218):</strong> Patients and clients prioritize high-end cosmetic aesthetics, boutique clinical experience, and fast digital booking via mobile.
              </li>
              <li>
                <strong>Northern Family & Construction Corridor (Pimpama, Coomera 4209, Ormeau 4208):</strong> High population influx of young families and new estate builds. Search volume is dominated by immediate availability, Afterpay, child dental benefits (CDBS), and residential concreting slabs.
              </li>
              <li>
                <strong>Central Commercial & Medical District (Southport 4215, Robina 4226):</strong> Dense professional searches near the Gold Coast University Hospital and Robina Town Centre where proximity and Google Maps reviews determine patient selection.
              </li>
            </ul>

            {/* Strategic Call to Action Banner */}
            <div className="my-10 p-8 rounded-3xl bg-slate-950 text-white space-y-5 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/80 text-indigo-300 text-xs font-extrabold border border-indigo-700">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>100% Suburb Exclusivity Guarantee</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Check Where Your Business Ranks in Gold Coast AI Overviews
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  We will run a manual 16-point search architecture audit across your target Gold Coast postcodes, identifying exactly where Gemini AI is routing your potential clients.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://wa.me/61401164987?text=Hi%20Bilal,%20I%20read%20your%20Gold%20Coast%20Google%20AI%20article.%20I'd%20like%20to%20audit%20my%20business%20rankings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:translate-y-[-1px]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct Strategy Call (+61 401 164 987)</span>
                  </a>
                  <a
                    href="/local-seo-gold-coast#gc-audit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                  >
                    <span>Request Free Audit Form</span>
                  </a>
                </div>
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
                  Google AI Overviews & Local SEO on the Gold Coast
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
