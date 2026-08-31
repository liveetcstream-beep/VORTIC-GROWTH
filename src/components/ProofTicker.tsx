import React from "react";
import { PhoneIncoming, Brain, DollarSign, Eye, Award, CheckCircle } from "lucide-react";

export default function ProofTicker() {
  const metrics = [
    {
      icon: PhoneIncoming,
      value: "45+ Leads / Mo",
      label: "Average Inbound Quote Inquiries",
      subtext: "Gold Coast Concreters QLD Flagship",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100",
    },
    {
      icon: Brain,
      value: "#1 AI Overview",
      label: "Ranked in Google AI & Gemini",
      subtext: "Architectural Concrete Pimpama & Ormeau",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: DollarSign,
      value: "$99,000+ USD",
      label: "Verified Google Search Revenue",
      subtext: "AdMob & AdSense Search Engines",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      icon: Eye,
      value: "15M+ Views",
      label: "Aggregate Search Impressions",
      subtext: "Multi-Region Topical Clusters",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
    },
  ];

  return (
    <section className="py-10 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden" id="proof">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-blue-950/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-indigo-400">
              <Award className="w-4 h-4" />
              Verified Performance Track Record
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
              Data-Backed Proof. Zero Guesswork. Real Inbound Revenue.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/80">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            Live Search Console & Call Logs Audited
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-indigo-500/50 transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
              >
                <div className="flex items-center justify-between pb-3">
                  <div className={`w-12 h-12 rounded-xl ${m.bgColor} flex items-center justify-center ${m.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Metric 0{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 pt-1">
                  {m.label}
                </div>
                <div className="text-xs text-slate-400 font-medium pt-1.5 border-t border-slate-700/60 mt-3">
                  {m.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
