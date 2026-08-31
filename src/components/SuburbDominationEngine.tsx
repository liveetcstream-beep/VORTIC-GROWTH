import React from "react";
import {
  Map,
  Navigation,
  BrainCircuit,
  Zap,
  CheckCircle,
  ArrowRight,
  Shield,
  Layers,
  Search,
} from "lucide-react";

export default function SuburbDominationEngine() {
  const pillars = [
    {
      step: "01",
      icon: Map,
      title: "Suburb-Level Micro-Silos",
      description:
        "We don't build generic 5-page websites. We construct dedicated, hyper-targeted organic landing silos for every individual suburb and postal code across your city—capturing homeowners searching right in their immediate neighborhood.",
      features: [
        "Unique suburb-level keyword mapping",
        "Australian Standards (AS) & technical compliance content",
        "Zero duplicate content with localized geo-data",
      ],
      badge: "Organic Search Engine",
    },
    {
      step: "02",
      icon: Navigation,
      title: "Google Maps 3-Pack Proximity Grid",
      description:
        "We expand your Google Business Profile visibility radius beyond your immediate physical address, pushing your listing into the top 3 Google Maps pack across surrounding high-net-worth suburbs.",
      features: [
        "Hyper-local citation building (YellowPages, TrueLocal, Hotfrog)",
        "GMB category hierarchy & geo-tagged asset optimization",
        "Review generation velocity & keyword signal funnels",
      ],
      badge: "Google Maps Domination",
    },
    {
      step: "03",
      icon: BrainCircuit,
      title: "Google AI & Generative Search (GEO)",
      description:
        "Google is replacing traditional search with AI Overviews and Gemini. We structure your site’s schema, FAQ entities, and factual knowledge graphs so AI models cite your business as the #1 authoritative recommendation.",
      features: [
        "Entity-based JSON-LD ProfessionalService schema",
        "Direct quotation by Google AI Overviews & Gemini",
        "ChatGPT & Voice Search conversational optimization",
      ],
      badge: "Next-Gen AI SEO",
    },
    {
      step: "04",
      icon: Zap,
      title: "Sub-Second Conversion Architecture",
      description:
        "High rankings are useless if traffic doesn’t convert. Our custom web builds load in under 0.8 seconds on mobile and feature instant WhatsApp quote widgets and call-tracking routing that convert visitors into signed jobs.",
      features: [
        "< 0.8s mobile Core Web Vitals speed",
        "Instant WhatsApp & Tap-to-Call routing",
        "Automated Web3Forms lead capture sync",
      ],
      badge: "High-Converting Leads",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative" id="suburb-engine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Our Proprietary Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            The <span className="gradient-text">Vortic Suburb Domination</span> System
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            The exact 4-pillar methodology we use to outrank legacy competitors, claim prime Google Maps real estate, and generate predictable 40+ monthly inbound inquiries.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                {/* Top Row: Icon & Step Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
                      {p.badge}
                    </span>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-indigo-200 transition-colors">
                      {p.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-xs uppercase font-extrabold tracking-widest text-indigo-300 flex items-center justify-center lg:justify-start gap-1.5">
              <Shield className="w-4 h-4 text-indigo-400" />
              100% Territory Exclusivity Guarantee
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              We Only Partner With ONE Contractor Per Territory.
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Unlike agencies that take money from you and your competitors at the same time, we operate on strict geographic exclusivity. When you partner with us, we lock down the territory for your business alone.
            </p>
          </div>

          <a
            href="https://wa.me/61411914157?text=Hi%20Bilal,%20I'd%20like%20to%20check%20if%20my%20suburb%20territory%20is%20available%20for%20exclusivity."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-base shadow-lg shadow-emerald-500/25 shrink-0 flex items-center gap-2 hover:translate-y-[-2px] transition-all"
          >
            <span>Check Territory Availability</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
