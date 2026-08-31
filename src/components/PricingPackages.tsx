import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingPackages() {
  const packages = [
    {
      name: "Foundation Sprint",
      tagline: "Core suburb Google Maps 3-Pack push for single-location contractors.",
      price: "$850",
      period: "per month",
      popular: false,
      features: [
        "Google Business Profile (GBP) 3-Pack Optimization",
        "Top 5 High-Intent Core Keyword Targeting",
        "Local Australian Citations (YellowPages, TrueLocal)",
        "On-Page Technical & Schema Implementation",
        "Monthly Ranking & Call Tracking Report",
        "Month-to-Month (No Lock-In Contracts)",
      ],
      ctaText: "Start Foundation Sprint",
      ctaLink: "#audit-form",
      badge: "Local Starter",
    },
    {
      name: "Market Dominator",
      tagline: "Full regional suburb cluster + Google AI Overview dominance.",
      price: "$1,450",
      period: "per month",
      popular: true,
      features: [
        "Everything in Foundation Sprint",
        "15+ Dedicated Suburb-Level Micro-Silos (Every Postal Code)",
        "Google AI Overviews & Gemini Generative Optimization",
        "GMB Proximity Radius Expansion (Surrounding Suburbs)",
        "Instant WhatsApp Lead Widget & Call Routing Setup",
        "100% Geographic Suburb Exclusivity",
        "Priority Support & Weekly Lead Pipeline Review",
      ],
      ctaText: "Claim Regional Domination",
      ctaLink: "#audit-form",
      badge: "🔥 Most Popular for High ROI",
    },
    {
      name: "Exclusive Asset Lease",
      tagline: "Turnkey live ranking lead asset (Rank & Rent) — immediate leads.",
      price: "$750 – $1,000",
      period: "per month",
      trialNote: "30-Day Risk-Free Trial available at $500",
      popular: false,
      features: [
        "100% Exclusive ownership of all inbound phone calls & forms",
        "Live Page 1 & Google AI Overview ranked platform",
        "10-Minute technical setup (Call number forwarded to your mobile)",
        "Zero setup fees, zero ad spend, zero waiting for rankings",
        "Your QBCC / trade license integrated into EEAT badges",
        "First job won pays for entire year of lease",
      ],
      ctaText: "Inquire Asset Availability",
      ctaLink: "https://wa.me/61411914157?text=Hi%20Bilal,%20I'd%20like%20to%20check%20Exclusive%20Asset%20Lease%20availability%20for%20my%20trade.",
      badge: "Turnkey Inbound Asset",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Transparent Partnership Models</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Predictable Pricing. <span className="gradient-text">Massive ROI.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Choose the model that fits your growth stage. No hidden fees, no locked-in 12-month retainers, and strict 1-contractor exclusivity per territory.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-indigo-50/50 via-white to-white border-2 border-indigo-600 shadow-2xl scale-105 z-10"
                  : "card-clean bg-white border border-slate-200 shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                
                <div>
                  {!pkg.popular && (
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight pt-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-1">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{pkg.period}</span>
                  </div>
                  {pkg.trialNote && (
                    <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-2 inline-block border border-emerald-200">
                      🎁 {pkg.trialNote}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {pkg.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom CTA Button */}
              <div className="pt-8">
                <a
                  href={pkg.ctaLink}
                  className={`w-full py-4 rounded-2xl font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:translate-y-[-2px]"
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:translate-y-[-1px]"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
