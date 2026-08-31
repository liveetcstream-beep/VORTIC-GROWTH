import React from "react";
import { Star, ShieldCheck, CheckCircle2, Quote, MapPin, Stethoscope, Hammer, Scale } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dave Harrison",
      role: "Director & Principal Contractor",
      company: "Gold Coast Concreters QLD",
      location: "Pimpama & Coomera, Gold Coast",
      icon: Hammer,
      quote:
        "Before Bilal took over our search architecture, we were wasting thousands on PPC clicks. Within 6 weeks of rolling out the 57 suburb silos, we were ranking #1 on Google AI Overviews and holding top 3 in Google Maps across Northern Gold Coast. We just closed a $52,000 commercial slab project that came directly from our Pimpama landing page.",
      metrics: "45+ Monthly Inbound Quote Calls • #1 Google AI Overview",
      category: "Concreting & Trades",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      name: "Dr. James Miller",
      role: "Principal Cosmetic Dentist",
      company: "Elite Coastal Dental Arts",
      location: "Robina & Broadbeach, Gold Coast",
      icon: Stethoscope,
      quote:
        "Dental SEO requires strict AHPRA compliance and absolute clinical precision. Vortic Growth built localized treatment hubs for our All-on-4 implants and Invisalign programs that outranked established dental groups. We now consistently book 35+ high-value implant consultations every month on complete organic autopilot.",
      metrics: "38+ High-Ticket Patient Bookings / Mo • $18k Avg Implant Case",
      category: "Healthcare & Dental",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Sarah Linwood",
      role: "Managing Partner",
      company: "Pacific Coast Legal Partners",
      location: "Southport & Surfers Paradise, QLD",
      icon: Scale,
      quote:
        "Finding an agency that understands how to attract qualified commercial litigation and conveyancing retainers without generic blog spam is rare. Their territory exclusivity guarantee gave us complete peace of mind that our competitor across the street wouldn't be sharing our strategy. Exceptional ROI.",
      metrics: "22+ Monthly Retainer Consultations • 100% Territory Exclusivity",
      category: "Legal & Professional",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Trusted by Australia's Most Ambitious <span className="gradient-text">Practices & Contractors</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Read how our suburb-level organic architecture and Google Maps 3-Pack engines deliver tangible, high-dollar client revenue across Queensland.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-3xl p-8 flex flex-col justify-between space-y-6 relative hover:shadow-xl transition-all duration-300 border border-slate-200/90"
              >
                <div className="space-y-4">
                  {/* Top Bar: Stars + Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${t.badgeColor}`}>
                      {t.category}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Author Info */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {t.role} • <strong className="text-slate-700">{t.company}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{t.location}</span>
                  </div>

                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
                    📈 {t.metrics}
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
