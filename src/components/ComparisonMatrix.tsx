import React from "react";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export default function ComparisonMatrix() {
  const comparisonData = [
    {
      feature: "Upfront Investment Risk",
      vortic: "Zero Risk (Live working assets & 30-day trial)",
      vorticPositive: true,
      agency: "High (Expensive setup fees + 6-month contracts)",
      agencyPositive: false,
      ppc: "High (Pay per click regardless of whether you win the job)",
      ppcPositive: false,
    },
    {
      feature: "Territory Exclusivity",
      vortic: "100% Exclusive to ONE business per trade/area",
      vorticPositive: true,
      agency: "None (They work with 3–5 of your competitors)",
      agencyPositive: false,
      ppc: "Shared (Leads sold to multiple contractors on HiPages/Angi)",
      ppcPositive: false,
    },
    {
      feature: "Asset Longevity & Equity",
      vortic: "Long-term organic authority (Traffic keeps compounding)",
      vorticPositive: true,
      agency: "Slow (If you stop paying, you lose momentum)",
      agencyPositive: false,
      ppc: "Zero (Traffic instantly drops to 0 the moment you stop paying)",
      ppcPositive: false,
    },
    {
      feature: "Google AI Overviews & Maps 3-Pack",
      vortic: "Ranked #1 in Google AI & Google Business Profile 3-Pack",
      vorticPositive: true,
      agency: "Rarely included (Basic on-page blog posts only)",
      agencyPositive: false,
      ppc: "Excluded (Paid search ads only, no organic AI dominance)",
      ppcPositive: false,
    },
    {
      feature: "Speed to Leads",
      vortic: "Immediate to 30 Days (Turnkey call & form routing)",
      vorticPositive: true,
      agency: "3 to 6 months waiting with no guarantee",
      agencyPositive: false,
      ppc: "Instant (But at $50–$150+ per single click)",
      ppcPositive: false,
    },
    {
      feature: "Contract Terms",
      vortic: "Month-to-month, zero lock-in contracts",
      vorticPositive: true,
      agency: "Strict 6–12 month locked retainers",
      agencyPositive: false,
      ppc: "Ongoing monthly ad budget required",
      ppcPositive: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/40 border-b border-slate-200/80" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Why Contractors Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            How <span className="gradient-text">Vortic Growth</span> Compares to Others
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See why traditional marketing agencies and wasteful Google PPC campaigns fail to deliver what our engineered search engines provide out of the box.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="card-clean rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="py-5 px-6 font-extrabold text-slate-900 uppercase tracking-wider text-xs w-1/4">
                    Comparison Criteria
                  </th>
                  <th className="py-5 px-6 font-extrabold text-indigo-900 bg-indigo-50/80 border-x border-indigo-200 text-xs uppercase tracking-wider w-1/3">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <span>Vortic Growth Engine</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-xs uppercase tracking-wider">
                    Traditional SEO Agencies
                  </th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-xs uppercase tracking-wider">
                    Google Ads & PPC Only
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900">
                      {row.feature}
                    </td>

                    {/* Vortic Column (Highlighted) */}
                    <td className="py-5 px-6 bg-indigo-50/40 border-x border-indigo-100 font-semibold text-slate-900">
                      <div className="flex items-start gap-2 text-indigo-950">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.vortic}</span>
                      </div>
                    </td>

                    {/* Traditional Agency Column */}
                    <td className="py-5 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>

                    {/* Google PPC Column */}
                    <td className="py-5 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.ppc}</span>
                      </div>
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
