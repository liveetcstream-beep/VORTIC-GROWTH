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
  Stethoscope,
  Hammer,
  Eye,
} from "lucide-react";

export default function CaseStudySection() {
  const rankingTable = [
    {
      query: "dental implants pimpama gold coast",
      ranking: "#1 Source in Google AI Overview",
      isAi: true,
      badge: "Google AI #1",
      intent: "Dental Implants & Restorative ($2.5k-$6k)",
    },
    {
      query: "invisalign provider ormeau",
      ranking: "Position #3 (Page 1 Top 3)",
      isAi: false,
      badge: "Page 1 Verified",
      intent: "Cosmetic Dentistry ($7k-$10k)",
    },
    {
      query: "architectural concrete pimpama",
      ranking: "#1 Source in Google AI Overview",
      isAi: true,
      badge: "Google AI #1",
      intent: "Decorative / High-Margin Slab",
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
      query: "emergency dentist coomera",
      ranking: "Position #2 (Google 3-Pack)",
      isAi: false,
      badge: "3-Pack Top 3",
      intent: "High-Urgency Patient Booking",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80 relative" id="case-study">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Proven Multi-Industry Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Verified Client Proof & <span className="gradient-text">Live Search Assets</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Real data from live platforms engineered by our lead architects—dominating local Google Maps 3-Packs and ranking #1 in Google AI Overviews.
          </p>
        </div>

        {/* 2 Primary Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Dental & Medical Patient Acquisition */}
          <div className="card-clean p-8 sm:p-9 rounded-3xl space-y-6 flex flex-col justify-between border-t-4 border-t-blue-600">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Healthcare & Dental Sector
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Dental & Cosmetic Practice Engine
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200">
                  38+ Patients / Mo
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for high-margin procedures (All-on-4 Implants, Invisalign, Porcelain Veneers). Built localized suburb silos across surrounding high-income postcodes, capturing high-intent patients searching in their neighborhood.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-slate-900">$18,000+</div>
                  <div className="text-[11px] font-semibold text-slate-500">Avg Implant Case</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-blue-600">#1 AI Spot</div>
                  <div className="text-[11px] font-semibold text-slate-500">Google AI Overview</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-emerald-600">0 Ad Spend</div>
                  <div className="text-[11px] font-semibold text-slate-500">100% Organic Leads</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs space-y-1.5 text-blue-950">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Specialized Dental Patient Funnel
              </div>
              <p className="text-blue-800">
                Targeted schema markup for DentalClinic entity, verified AHPRA compliance, and automated WhatsApp/Call consultation scheduling.
              </p>
            </div>
          </div>

          {/* Card 2: Commercial & Residential Concrete Trade Asset */}
          <div className="card-clean p-8 sm:p-9 rounded-3xl space-y-6 flex flex-col justify-between border-t-4 border-t-indigo-600">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      Trade & Builder Sector
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Gold Coast Concreters QLD
                    </h3>
                  </div>
                </div>
                <a
                  href="https://goldcoastconcretersqld.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                  aria-label="Visit live asset"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                A 57-page hyper-local topical authority platform covering every Northern Gold Coast suburb (Pimpama, Ormeau, Coomera, Helensvale), driving exclusive residential driveways and commercial slabs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-slate-900">45+ Leads</div>
                  <div className="text-[11px] font-semibold text-slate-500">Monthly Quote Calls</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-indigo-600">$60,000+</div>
                  <div className="text-[11px] font-semibold text-slate-500">Commercial Inquiry</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-black text-emerald-600">&lt; 0.8s</div>
                  <div className="text-[11px] font-semibold text-slate-500">Mobile Speed</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1.5 text-emerald-950">
              <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                <PhoneForwarded className="w-4 h-4 text-emerald-600" />
                Turnkey Trade Lead Routing
              </div>
              <p className="text-emerald-800">
                Commercial inquiry evidence: Received direct quote request for major commercial slab package estimated at $40k–$60k.
              </p>
            </div>
          </div>

        </div>

        {/* Live SERP Table */}
        <div className="card-clean rounded-3xl p-7 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                Multi-Industry SERP & Google AI Overview Rankings
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Verified real-world queries checked on Google Australia across healthcare and home services
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
                  <th className="pb-3 pl-4">Target Intent / Case Value</th>
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
        </div>

      </div>
    </section>
  );
}
