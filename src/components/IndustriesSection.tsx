import React from "react";
import {
  Stethoscope,
  Hammer,
  Scale,
  Sun,
  Flame,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Dental & Medical Clinics",
      subtitle: "Consistent Patient Acquisition",
      description:
        "Dominate local Google Maps searches for key treatments like Dental Implants, Invisalign, Cosmetic Veneers, Orthodontics, and General Care. Turn nearby local searchers into booked patients.",
      avgValue: "AUD $1,500 – $6,500+",
      keyQueries: ["dental implants gold coast", "invisalign dentist near me", "cosmetic dentistry [suburb]"],
      badge: "Healthcare & Dental",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "from-blue-600 to-cyan-600",
    },
    {
      icon: Hammer,
      title: "Builders & Concreting",
      subtitle: "Residential & Commercial Inquiries",
      description:
        "Rank across 15+ surrounding suburbs for quality home builds, architectural concrete driveways, house slabs, and site packages without competing on price.",
      avgValue: "AUD $3,500 – $15,000+",
      keyQueries: ["architectural concrete [suburb]", "commercial slabs near me", "driveway resurfacing"],
      badge: "Builders & Tradies",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accent: "from-indigo-600 to-blue-600",
    },
    {
      icon: Scale,
      title: "Legal & Professional Firms",
      subtitle: "Qualified Retainer Inquiries",
      description:
        "Capture local clients actively searching for personal injury attorneys, family law specialists, commercial conveyancing, and estate planners in your service region.",
      avgValue: "AUD $2,500 – $8,000+",
      keyQueries: ["personal injury lawyer [city]", "commercial conveyancing near me", "family law solicitor"],
      badge: "Legal & Professional",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
      accent: "from-slate-800 to-slate-950",
    },
    {
      icon: Sun,
      title: "Roofing, Solar & Restorations",
      subtitle: "Local Residential Installations",
      description:
        "Outrank lead brokers and claim prime Google Maps 3-Pack spots for full roof restorations, solar installations, storm damage repairs, and guttering.",
      avgValue: "AUD $4,500 – $12,000+",
      keyQueries: ["roof restoration [suburb]", "solar installation near me", "emergency roof repair"],
      badge: "Energy & Roofing",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "from-amber-600 to-orange-600",
    },
    {
      icon: Flame,
      title: "HVAC & Climate Systems",
      subtitle: "Ducted & Split System Installations",
      description:
        "Generate a continuous stream of ducted air conditioning installations and maintenance contracts before seasonal demand peaks.",
      avgValue: "AUD $3,500 – $9,000+",
      keyQueries: ["ducted air conditioning [city]", "air conditioning install near me", "split system [suburb]"],
      badge: "HVAC & Electrical",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      accent: "from-rose-600 to-pink-600",
    },
    {
      icon: Wrench,
      title: "Plumbing & Relining",
      subtitle: "Specialized Pipe Relining & Drainage",
      description:
        "Position your business for substantial pipe relining projects, emergency commercial plumbing, and blocked drainage solutions across key suburbs.",
      avgValue: "AUD $2,500 – $8,500+",
      keyQueries: ["pipe relining [city]", "emergency plumber near me", "blocked drain specialist [suburb]"],
      badge: "Specialized Plumbing",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Multi-Industry Specialization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Key Sectors We <span className="gradient-text">Engineered to Dominate</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our Suburb Domination framework is tailor-made for local practices and trade businesses where winning 3 to 5 extra quality jobs per month significantly increases net profit.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-indigo-300"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${ind.badgeColor}`}>
                      {ind.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {ind.title}
                    </h3>
                    <div className="text-xs font-bold text-indigo-600 pt-0.5">
                      {ind.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ind.description}
                  </p>

                </div>

                {/* Bottom Metric & Queries Box */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">Average Job / Case Value:</span>
                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {ind.avgValue}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <span className="font-bold text-slate-700 block">Target Suburb Searches:</span>
                    <div className="text-slate-500 italic">
                      {ind.keyQueries.map((q, qi) => (
                        <span key={qi} className="inline-block mr-2">• &quot;{q}&quot;</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
