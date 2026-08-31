import React from "react";
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MapPin,
  FileText,
  DollarSign,
  PhoneForwarded,
} from "lucide-react";

export default function CaseStudySection() {
  const rankingTable = [
    {
      query: "architectural concrete pimpama",
      ranking: "#1 Source in Google AI Overview",
      isAi: true,
      badge: "Google AI #1",
      intent: "Decorative / High-Margin",
    },
    {
      query: "concreters ormeau",
      ranking: "Position #4 (Page 1 Top 5)",
      isAi: false,
      badge: "Page 1 Verified",
      intent: "Northern GC Core Hub",
    },
    {
      query: "covercrete resurfacing gold coast",
      ranking: "Position #5 (Page 1)",
      isAi: false,
      badge: "Page 1 Verified",
      intent: "Driveway Resurfacing ($8k-$15k)",
    },
    {
      query: "stencil stamped concrete gold coast",
      ranking: "Position #6 (Page 1)",
      isAi: false,
      badge: "Page 1 Verified",
      intent: "Decorative Slabs",
    },
    {
      query: "concreters pimpama",
      ranking: "Page 1 (Top 3 Contender)",
      isAi: false,
      badge: "Page 1 Verified",
      intent: "High Volume Suburb",
    },
    {
      query: "concreters willow vale",
      ranking: "Position #11 (Top of Page 2)",
      isAi: false,
      badge: "Rising Fast",
      intent: "Acreage Slabs ($20k+)",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80 relative" id="case-study">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Flagship Client Case Study</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            How We Built a <span className="gradient-text">45+ Lead/Month</span> Engine in Gold Coast Concreting
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Case Study: <strong className="text-slate-900 font-semibold">Gold Coast Concreters QLD</strong> (goldcoastconcretersqld.com.au). From zero visibility to dominating Page 1 and being cited as the #1 Source in Google AI Overviews.
          </p>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Asset Breakdown & Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Asset Overview */}
            <div className="card-clean p-7 rounded-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Live Digital Asset
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    Gold Coast Concreters QLD
                  </h3>
                </div>
                <a
                  href="https://goldcoastconcretersqld.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                  aria-label="Visit live asset"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                A purpose-built topical authority platform engineered to capture high-intent residential driveways, house slabs, and large-scale commercial contracts across 20+ Gold Coast suburbs.
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-slate-900">45+</div>
                  <div className="text-xs font-semibold text-slate-600">Monthly Quote Calls</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-indigo-600">$60,000+</div>
                  <div className="text-xs font-semibold text-slate-600">Largest Job Inquired</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-slate-900">57</div>
                  <div className="text-xs font-semibold text-slate-600">Suburb Silo Pages</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-emerald-600">&lt; 0.8s</div>
                  <div className="text-xs font-semibold text-slate-600">Mobile Page Speed</div>
                </div>
              </div>

              {/* Inbound Call Feature */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-2 text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800 text-sm">
                  <PhoneForwarded className="w-4 h-4 text-emerald-600" />
                  Turnkey Lead Routing Activated
                </div>
                <p className="text-emerald-800 leading-normal">
                  All phone calls (+61 411 914 157) and Web3Forms quote inquiries are forwarded in real-time exclusively to the partner contractor’s phone.
                </p>
              </div>

            </div>

            {/* Card 2: Strategy Execution */}
            <div className="card-clean p-7 rounded-2xl space-y-4">
              <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                The 3-Step Scaling Blueprint Applied
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Suburb Micro-Silos:</strong> Dedicated pages for Pimpama, Coomera, Ormeau, Helensvale, Willow Vale, and Southport with Australian Standards (AS 3727) compliance content.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>EEAT & Technical Schema:</strong> Custom JSON-LD LocalBusiness & ProfessionalService schema with QBCC licensing verification.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Generative Engine Optimization (GEO):</strong> Optimized for Google AI Overviews & Gemini, securing the #1 citation slot for high-margin queries.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Live SERP Verification Table */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="card-clean rounded-2xl p-7 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Live SERP & Google AI Rankings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Verified real-world queries checked on Google Australia
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200 self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Live Audited
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px] tracking-wider">
                      <th className="pb-3 pr-4">Search Query</th>
                      <th className="pb-3 px-4">Google SERP Status</th>
                      <th className="pb-3 pl-4">Commercial Intent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {rankingTable.map((r, i) => (
                      <tr key={i} className="hover:bg-indigo-50/40 transition-colors">
                        <td className="py-3.5 pr-4">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                            {r.query}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-extrabold ${
                              r.isAi
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                                : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            }`}
                          >
                            {r.ranking}
                          </span>
                        </td>
                        <td className="py-3.5 pl-4">
                          <span className="text-xs text-slate-600 font-medium">{r.intent}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Real Inbound Lead Evidence Box */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    Commercial Lead Evidence
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Verified Lead
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-200 leading-relaxed">
                  &ldquo;Received direct inbound inquiry for an extensive commercial concreting slab project in Northern Gold Coast — estimated job value: <strong className="text-emerald-400 font-bold">$40,000 – $60,000+</strong>.&rdquo;
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>Residential Driveway Inquiries: 80m²–150m² Exposed Aggregate</span>
                  <span className="text-indigo-300 font-bold">100% Exclusive</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
