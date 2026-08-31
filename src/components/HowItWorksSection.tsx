import React from "react";
import { Search, Network, Sparkles, PhoneForwarded, CheckCircle2, ArrowRight, Shield } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Hyper-Local Suburb & Competitor Audit",
      timeline: "Day 1 to Day 3",
      description:
        "We scan your primary and surrounding postcodes using multi-point geo-grid scrapers. We uncover exactly where high-intent search volume for lucrative procedures ($5k+ Implants) and high-ticket trade jobs ($40k+ Commercial Slabs) is leaking to your competitors.",
      deliverables: [
        "Google Maps 3-Pack Proximity Radius Scan",
        "Competitor Suburb Topical Cluster Audit",
        "High-Ticket Keyword Revenue Gap Map",
      ],
      badge: "Discovery & Intelligence",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "02",
      icon: Network,
      title: "Micro-Silo Entity Architecture",
      timeline: "Week 1 to Week 2",
      description:
        "Instead of relying on a single generic homepage, we engineer 15 to 50+ dedicated suburb-level micro-silo landing pages. Each page incorporates deep JSON-LD Schema markup, local entity coordinates, and verified regulatory standards (AHPRA compliance for clinics, QBCC licensing for trades).",
      deliverables: [
        "Postal-Code Specific Suburb Silos",
        "Clinical EEAT & Medical/Trade Schema Markup",
        "Sub-Second Next.js Core Web Vitals Optimization",
      ],
      badge: "Search Engineering",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Generative Engine (GEO) & 3-Pack Supremacy",
      timeline: "Week 3 to Week 6",
      description:
        "We optimize your digital footprint for both Google's traditional local search algorithms and new Generative AI Overviews (Google Gemini, Perplexity). We establish tier-1 Australian localized citations (YellowPages, TrueLocal, LocalDirectories) and reinforce your Google Business Profile with geo-tagged proof.",
      deliverables: [
        "#1 Citations in Google AI Overviews",
        "Google Business Profile Proximity Expansion",
        "High-Authority Local Australian Citations",
      ],
      badge: "Algorithmic Authority",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      number: "04",
      icon: PhoneForwarded,
      title: "Direct Inbound Lead & Call Flow",
      timeline: "Ongoing & Compounding",
      description:
        "High-intent phone calls, direct WhatsApp strategy chats, and quote forms route directly to your front desk or mobile. You secure high-margin appointments without bidding against competitors on expensive pay-per-click ad auctions.",
      deliverables: [
        "100% Exclusive Local Territory Protection",
        "Real-Time Call & Booking Attribution",
        "Zero-Lock-in Month-to-Month Transparency",
      ],
      badge: "Revenue Acceleration",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>The Suburb Domination Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            How We Turn Your Local Market Into An <span className="gradient-text">Inbound Booking Machine</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A battle-tested 4-step framework engineered specifically for practices and high-ticket service businesses in Australia.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-3xl p-7 flex flex-col justify-between space-y-6 relative group hover:border-indigo-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                      {step.number}
                    </span>
                    <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center p-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-400 pt-0.5">
                      Timeline: {step.timeline}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">
                    Core Outcomes:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white">
              Want to see your suburb's exact search volume gap?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We'll prepare a custom 15-page Google Maps 3-Pack & Competitor Audit for your exact postcode.
            </p>
          </div>
          <a
            href="#audit-form"
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 hover:translate-y-[-2px] transition-all shrink-0"
          >
            <span>Claim Free Suburb Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
