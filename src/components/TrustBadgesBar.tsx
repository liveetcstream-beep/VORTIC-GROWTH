import React from "react";
import { ShieldCheck, MapPin, Sparkles, Lock, CheckCircle2 } from "lucide-react";

export default function TrustBadgesBar() {
  const badges = [
    {
      icon: MapPin,
      title: "Google Maps 3-Pack Authority",
      desc: "Local Map Proximity & Geo-Signals",
    },
    {
      icon: Sparkles,
      title: "Google AI & Gemini (GEO) Ready",
      desc: "Generative Engine #1 Citations",
    },
    {
      icon: Lock,
      title: "100% Territory Exclusivity",
      desc: "Strict 1 Partner Per Suburb Rule",
    },
    {
      icon: ShieldCheck,
      title: "AHPRA & QBCC Compliant",
      desc: "Clinical & Trade Regulatory Ethics",
    },
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 leading-tight flex items-center gap-1">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {b.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
