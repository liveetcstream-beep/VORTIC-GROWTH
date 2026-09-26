"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
  ChevronDown,
  Send,
  HelpCircle,
  Anchor,
} from "lucide-react";

export default function HopeIslandClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    tradeType: "Luxury Home Services & Marine Trades",
    phone: "",
    website: "",
  });

  const hopeIslandSuburbs = [
    { name: "Sanctuary Cove Marina", postcode: "4212", highlight: "Luxury Marine & Gated Community" },
    { name: "Hope Island Resort", postcode: "4212", highlight: "Golf & Gated Residential Precinct" },
    { name: "Santa Barbara Waterfront", postcode: "4212", highlight: "Deepwater Canal Enclave" },
    { name: "Hope Island Marketplace", postcode: "4212", highlight: "Commercial & Health Precinct" },
    { name: "Coomera Waters Connector", postcode: "4212", highlight: "Northern Coastal Corridor" },
    { name: "Oyster Cove", postcode: "4212", highlight: "Affluent Waterfront Suburb" },
  ];

  const hopeIslandFaqs = [
    {
      q: "Why is Hope Island & Sanctuary Cove (Postcode 4212) a high-LTV customer market?",
      a: "Hope Island and Sanctuary Cove represent Queensland's highest concentration of high-net-worth homeowners and marine vessel owners. Searches for luxury custom builders, marine contractors, cosmetic dentists, and high-end landscapers carry job values exceeding $20,000 to $250,000+. Ranking #1 in Google Maps for 4212 delivers high-margin clients who value quality over low pricing.",
    },
    {
      q: "How does GEO Optimization capture high-net-worth inquiries in Sanctuary Cove?",
      a: "Affluent residents increasingly use Google Gemini AI and voice search on mobile and tablet devices. We engineer local entity triples that connect your business directly to Sanctuary Cove Marina and Hope Island Resort Knowledge Graph nodes, forcing AI search engines to cite your brand.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm font-bold text-indigo-300">
                <Anchor className="w-4 h-4 text-indigo-400" />
                <span>Hope Island & Sanctuary Cove • Postcode 4212</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Local SEO for <span className="gradient-text">Hope Island & Sanctuary Cove</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture high-LTV clients in Queensland&apos;s premier waterfront gated enclaves: <strong className="text-white font-semibold">Hope Island Resort, Sanctuary Cove, and Santa Barbara</strong>. Built for luxury trades, custom builders, and medical practices.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#hope-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Hope Island Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="hope-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Free Hope Island 4212 Audit</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Check Your 4212 Rankings</h3>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await fetch("/api/audit", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ ...formData, suburb: "Hope Island 4212", source: "Hope Island Audit Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request for Hope Island (4212):\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Industry: ${formData.tradeType}\n• Suburb: Hope Island & Sanctuary Cove (4212)`
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
                        placeholder="e.g. Hope Island Marine & Building Services"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Richard Vance"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
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
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Industry</label>
                        <select
                          value={formData.tradeType}
                          onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-indigo-500"
                        >
                          <option>Luxury Home Services & Marine Trades</option>
                          <option>Custom Builders & Renovators</option>
                          <option>Cosmetic Dental & Medical</option>
                          <option>Professional Legal & Financial</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free Hope Island Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Geographic Nodes */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Hope Island 4212 Power Nodes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hopeIslandSuburbs.map((sub, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-white text-base">{sub.name}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300">{sub.postcode}</span>
                </div>
                <p className="text-xs text-slate-400">{sub.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
