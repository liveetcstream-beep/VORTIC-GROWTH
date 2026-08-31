import React from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function PricingPackages() {
  const packages = [
    {
      name: "Local 3-Pack & GBP",
      tagline: "Ongoing Google Maps 3-Pack ranking boost and local citation management.",
      price: "AUD $300",
      period: "/ month",
      popular: false,
      features: [
        "Google Business Profile (GBP) Complete Optimization",
        "Primary & Secondary Category Structuring",
        "NAP Consistency Across Reputable Australian Directories",
        "Systematic Patient / Customer Review Generation System",
        "Local Competitor Visibility & Proximity Monitoring",
        "Month-to-Month (No Lock-In Contracts)",
      ],
      ctaText: "Start Local 3-Pack Plan",
      ctaLink: "#audit-form",
      badge: "Modular Option",
    },
    {
      name: "Full Growth Engine",
      tagline: "Everything bundled together for maximum patient/lead acquisition velocity.",
      price: "AUD $2,000",
      period: "/ month",
      trialNote: "+ AUD $900 one-off Phase 1 Technical Setup",
      popular: true,
      features: [
        "Phase 1: Full Technical Fixes, Speed (57→85+) & Redirect Consolidation",
        "Phase 2: Deep On-Page SEO, Content Clusters & Clinical/Trade Schema",
        "Phase 3: Ongoing Google Business Profile 3-Pack Supremacy",
        "Off-Page Authority: Toxic Backlink Audit, Disavow & Quality Link Building",
        "Generative Engine Optimization (GEO): #1 Google AI Overview Citations",
        "100% Territory Exclusivity Guarantee per Suburb",
        "Direct Lead Search Architect Access & Monthly Transparent Reporting",
      ],
      ctaText: "Claim Full Growth Package",
      ctaLink: "#audit-form",
      badge: "🔥 RECOMMENDED (Best Value)",
    },
    {
      name: "On-Page & Authority",
      tagline: "Targeted organic content expansion, topical authority & backlink cleanup.",
      price: "AUD $1,500",
      period: "/ month",
      trialNote: "Or Modular from AUD $600 - $650/mo",
      popular: false,
      features: [
        "Comprehensive Keyword Research & Intent Mapping",
        "High-Intent Treatment & Service Page Optimization",
        "Dedicated FAQ & Conversational Search Blocks (AEO)",
        "Toxic Backlink Audit & Disavow (Fixes High Spam Scores)",
        "Quality Australian Niche Citations & Backlink Acquisition",
        "Google Search Console & Entity Optimization",
      ],
      ctaText: "Start Authority Sprint",
      ctaLink: "#audit-form",
      badge: "Modular Option",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Transparent Investment Plans (AUD)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Market-Standard Pricing. <span className="gradient-text">Exceptional Value.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our Full Growth Package sits right in the <strong>$1,500–$2,500/mo</strong> Australian standard sweet spot—well below the <strong>$2,500–$5,000/mo</strong> charged by large Gold Coast agencies for comparable scopes.
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
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{pkg.period}</span>
                  </div>
                  {pkg.trialNote && (
                    <div className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md mt-2 inline-block border border-indigo-200">
                      ⚡ {pkg.trialNote}
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

        {/* Optional Add-Ons Bar (Matching Proposal Section 5) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 pb-3">
            Optional Strategic Add-Ons (Available on Request):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700 font-medium">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block">Social Media Content:</span>
              <span>AUD $25 per post (no minimum)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block">Google Business Profile Ads:</span>
              <span>From AUD $250 setup + $200/mo</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block">Website & On-Site Ads:</span>
              <span>From AUD $250 setup + $200/mo</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block text-indigo-700">Brand Search Protection Ads:</span>
              <span>From AUD $300 setup + $250/mo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
