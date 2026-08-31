"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Clock,
  UserCheck,
  DollarSign,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  MapPin,
  Building,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Percent,
} from "lucide-react";

export default function ArticleSeoCostGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why do some agencies charge $300/month while others quote $5,000/month in Australia?",
      a: "The difference lies in scope and deliverables. A $300/mo package is typically a modular Google Business Profile (GBP) and local citation plan—perfect for maintaining Google Maps listings. Full Growth programs ($1,500–$2,500/mo) engineer comprehensive technical speed fixes (57 to 85+), multi-suburb micro-silos, Google AI Overviews (GEO), and toxic link cleanup. Retainers above $4,000/mo often include large agency overheads and account manager commissions rather than extra engineering work.",
    },
    {
      q: "Why should I avoid long-term 12-month locked-in SEO retainers?",
      a: "Agencies that consistently generate measurable inbound calls and client revenue do not need to trap you in legal paperwork. Month-to-month contracts keep your agency accountable to deliver real business outcomes (bookings, phone calls, quote requests) every single month.",
    },
    {
      q: "How many closed jobs does it take to break even on an AUD $2,000/month SEO investment?",
      a: "For high-value industries, the break-even threshold is remarkably low. A cosmetic dental implant case is worth $3,500 to $6,000 (1 patient covers multiple months). A residential exposed aggregate driveway in Gold Coast averages $4,800 (1 job covers over 2 months of retainer). A commercial legal retainer averages $4,500. Everything beyond the first job won is pure operational profit.",
    },
    {
      q: "Are setup fees necessary for Local SEO programs?",
      a: "Phase 1 technical setup fees (such as our AUD $900 one-off setup) cover critical forensic fixes: resolving duplicate homepage URLs, fixing broken call buttons, Core Web Vitals speed optimization, 301 redirect consolidations, and toxic backlink disavowals that provide the foundation for ongoing monthly ranking growth.",
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
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Australian Market Pricing Analysis
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                2026 Benchmarks (AUD) • Dental, Tradies & Professional Firms
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              The Complete Local SEO Cost Guide for Australian Practices (2026 Market Benchmarks)
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              A transparent, BS-free breakdown of Australian Local SEO pricing. What deliverables actually move the needle, why lock-in contracts are outdated, and how to calculate realistic ROI on your investment in AUD.
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
                8 min read
              </span>
              <span>•</span>
              <span>Updated August 31, 2026</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="pt-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              If you own a dental clinic in Robina, a custom building business in Pimpama, or a law practice in Southport, you have likely received wildly divergent SEO proposals: ranging anywhere from <strong>AUD $300/month</strong> from overseas freelancers up to <strong>AUD $5,000+/month</strong> from large Gold Coast and Brisbane digital agencies.
            </p>

            <p>
              Why is there such a massive discrepancy? What are you actually paying for, and how can you ensure your investment delivers measurable inbound revenue rather than vanity keyword reports?
            </p>

            {/* 3 Tier Pricing Comparison */}
            <h2 className="text-2xl font-black text-slate-950 pt-4">
              The 3 Tiers of Australian Local SEO Pricing in 2026
            </h2>

            <div className="space-y-6 pt-2">
              
              {/* Tier 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                    Tier 1: Modular / Google Maps Starter
                  </span>
                  <span className="font-extrabold text-slate-950 text-base">AUD $300 – $650 / month</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">What is included?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Google Business Profile (GBP) weekly updates, core category optimization, review generation strategies, and basic Australian directory citations (YellowPages.com.au, TrueLocal).
                </p>
                <div className="text-xs font-semibold text-slate-700 pt-1">
                  🎯 Best For: Single-location solo operators who only need Google Maps 3-Pack maintenance.
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-6 rounded-2xl bg-indigo-50/80 border-2 border-indigo-600 shadow-md space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
                    Tier 2: Full Growth & Suburb Domination (The Market Sweet Spot)
                  </span>
                  <span className="font-black text-indigo-950 text-lg">AUD $1,500 – $2,500 / month</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">What is included?</h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  Full-scope search engine architecture: Core Web Vitals speed acceleration (57 → 85+), 15–50 dedicated suburb micro-silos, Generative Engine Optimization (GEO) for Google AI Overviews, clinical/trade JSON-LD schema, toxic backlink audit & disavowal, and 100% geographic territory exclusivity.
                </p>
                <div className="text-xs font-bold text-indigo-900 pt-1">
                  🎯 Best For: Growing dental clinics, multi-crew tradies, builders, and professional service firms aiming for total local market dominance.
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                    Tier 3: Traditional Full-Service Agency Retainers
                  </span>
                  <span className="font-extrabold text-slate-950 text-base">AUD $3,000 – $6,000+ / month</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">What is included?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Often similar deliverables to Tier 2, but heavily marked up to fund account managers, executive salaries, and commercial office rents. Usually bundled with mandatory 12-month lock-in contracts without territory exclusivity.
                </p>
              </div>

            </div>

            {/* ROI Calculation Table */}
            <h2 className="text-2xl font-black text-slate-950 pt-6">
              Calculating Real Local SEO ROI by Australian Industry
            </h2>

            <p>
              When evaluating SEO as an investment rather than an expense, the mathematics are clear:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-2xl overflow-hidden">
                <thead className="bg-slate-900 text-white font-extrabold">
                  <tr>
                    <th className="p-3.5">Industry Specialization</th>
                    <th className="p-3.5">Average Job / Case Value</th>
                    <th className="p-3.5">Jobs Needed to Break Even</th>
                    <th className="p-3.5">Projected Monthly Pipeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white font-medium text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Cosmetic & Surgical Dentistry</td>
                    <td className="p-3.5 text-indigo-700 font-bold">AUD $2,500 – $5,500</td>
                    <td className="p-3.5">1 Patient</td>
                    <td className="p-3.5 text-emerald-700 font-bold">AUD $45,000 – $95,000 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Concreters & Driveway Contractors</td>
                    <td className="p-3.5 text-indigo-700 font-bold">AUD $4,800 – $12,000</td>
                    <td className="p-3.5">1 Project</td>
                    <td className="p-3.5 text-emerald-700 font-bold">AUD $50,000 – $120,000 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Custom Home Builders & Renovation</td>
                    <td className="p-3.5 text-indigo-700 font-bold">AUD $25,000 – $150,000</td>
                    <td className="p-3.5">0.1 Project</td>
                    <td className="p-3.5 text-emerald-700 font-bold">AUD $150,000+ / mo</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Commercial Dispute & Legal Law</td>
                    <td className="p-3.5 text-indigo-700 font-bold">AUD $4,500 – $15,000</td>
                    <td className="p-3.5">1 Retainer</td>
                    <td className="p-3.5 text-emerald-700 font-bold">AUD $40,000 – $80,000 / mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Red Flags Callout */}
            <h2 className="text-2xl font-black text-slate-950 pt-6">
              3 Critical Red Flags to Watch Out For
            </h2>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
                <strong>1. No Territory Exclusivity:</strong> If an agency represents you and two other dental clinics in Southport, they are bidding your own money against yourself. Always demand 100% suburb exclusivity.
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
                <strong>2. 12-Month Non-Cancelable Contracts:</strong> If an agency produces real patient and quote flow, they have no reason to trap you in a non-cancelable legal contract.
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
                <strong>3. Ignoring Technical Speed & Google AI:</strong> If your website loads slower than 2.5 seconds (LCP) and lacks conversational AEO structure, you are paying for 2018 SEO in 2026.
              </div>
            </div>

            {/* Strategy Call Banner */}
            <div className="my-10 p-8 rounded-3xl bg-slate-950 text-white space-y-4 border border-slate-800 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-extrabold border border-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Pressure Transparent Audit</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Get a Free Audit of Your Current Website & SEO Health
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Speak directly with Muhammad Bilal, Lead Search Architect. We’ll review your speed, Google Maps 3-Pack radius, and toxic backlinks on a direct screen share or WhatsApp call.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20a%20transparent%20pricing%20and%20ROI%20review%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:translate-y-[-1px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Direct on WhatsApp (+61 401 164 987)</span>
                </a>
                <a
                  href="/#calculator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>Use Live ROI Calculator</span>
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
                  Local SEO Pricing & Contracts in Australia
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
