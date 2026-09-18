"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hammer,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
  ChevronDown,
  Wrench,
  Truck,
  Flame,
  Send,
  HelpCircle,
} from "lucide-react";

export default function TradieSeoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    tradeType: "Concreting",
    phone: "",
    suburbs: "Pimpama & Coomera Corridor",
  });

  const tradieTrades = [
    { name: "Concreters & Driveways", avgTicket: "$8,500 - $32,000", focus: "Slab Extensions, Exposed Aggregate, Commercial Paving" },
    { name: "Plumbers & Gas Fitters", avgTicket: "$450 - $14,000", focus: "Blocked Drains, Emergency Callouts, Hot Water Upgrades" },
    { name: "Electricians & Solar", avgTicket: "$650 - $18,000", focus: "EV Chargers, Solar Battery Storage, Switchboard Upgrades" },
    { name: "Roofers & Restoration", avgTicket: "$6,000 - $45,000", focus: "Storm Repair, Metal Roof Replacement, Tile Painting" },
    { name: "Builders & Renovators", avgTicket: "$40,000 - $350,000+", focus: "Granny Flats, Second Story Additions, Full Home Builds" },
    { name: "HVAC & Air Conditioning", avgTicket: "$1,800 - $22,000", focus: "Ducted Air Systems, Commercial Chillers, Split Install" },
  ];

  const tradieFaqs = [
    {
      q: "Why do paid Google Ads (PPC) keep getting more expensive for Gold Coast tradies?",
      a: "Google Ads operates on an auction system. National aggregators and lead-resellers bid up cost-per-click (CPC) rates to $25–$65 per click for terms like 'plumber Pimpama' or 'concreter Gold Coast'. If 3 clicks fail to convert, you lose $150. Organic Local SEO and Google Maps 3-Pack rankings deliver unlimited phone calls without paying per click.",
    },
    {
      q: "How do you rank tradies across 50+ Gold Coast suburbs without creating duplicate spam content?",
      a: "Google penalizes programmatic doorway pages. We build distinct Suburb Power Hubs for key postcodes (4209, 4208, 4212, 4215) using unique local council compliance details (City of Gold Coast City Plan), localized soil reactivity data (Pimpama clay vs Burleigh rock), and genuine suburb work proof.",
    },
    {
      q: "What is the 1-Tradie-Per-Suburb Exclusivity Rule?",
      a: "We only partner with ONE trade contractor per trade vertical per Gold Coast region. If you are our exclusive Concreter or Plumber in Pimpama & Coomera, we block all competing contractors in those postcodes from hiring us.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <Hammer className="w-4 h-4 text-indigo-400" />
                <span>Gold Coast Tradie Search Blueprint • 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Dominant Local SEO & Google Maps for <span className="gradient-text">Gold Coast Tradies</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Stop relying on word-of-mouth or wasting thousands on overpriced Google Ads. We engineer high-ranking Google Maps & AI Search architectures that drive <strong className="text-white font-semibold">45+ inbound quote calls monthly</strong> for Gold Coast contractors.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Maps 3-Pack</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>0% Pay-Per-Click Fees</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% Territory Lock</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#tradie-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Tradie Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Audit Card */}
            <div className="lg:col-span-5">
              <div id="tradie-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Exclusive Tradie Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your Trade Territory</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Check if your trade category is still available in Pimpama, Coomera, Ormeau, or Helensvale.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received & Sent to WhatsApp!</h4>
                    <p className="text-xs text-slate-300">
                      Our Lead Tradie Search Architect has received your details and will check territory availability for your trade category shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await fetch("/api/audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ ...formData, source: "Tradie SEO Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted a Tradie SEO Audit Request on Vortic Growth:\n\n• Business: ${formData.businessName}\n• Trade Category: ${formData.tradeType}\n• Phone: ${formData.phone}\n• Territory Target: ${formData.suburbs}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. GC Pro Concreting"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Trade Category *</label>
                      <select
                        value={formData.tradeType}
                        onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option>Concreting</option>
                        <option>Plumbing & Gas</option>
                        <option>Electrical & Solar</option>
                        <option>Roofing & Restoration</option>
                        <option>Building & Renovations</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Check Territory Availability</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Targeted High-LTV Trade Verticals
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We specialize in trade businesses where a single inbound call generates thousands in net profit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradieTrades.map((t, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all space-y-3">
                <h3 className="font-extrabold text-white text-lg">{t.name}</h3>
                <div className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-md inline-block">
                  Avg Ticket: {t.avgTicket}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Tradie SEO Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {tradieFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
