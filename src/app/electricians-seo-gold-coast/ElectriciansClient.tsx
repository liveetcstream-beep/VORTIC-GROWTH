"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  Send,
} from "lucide-react";

export default function ElectriciansClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    suburbs: "Pimpama, Coomera & Gold Coast Corridor",
  });

  const electricianFaqs = [
    {
      q: "Why do Google Ads (PPC) fail for Gold Coast sparkies?",
      a: "Google Ads cost $35 to $70+ per click for terms like 'emergency electrician Pimpama' or 'switchboard upgrade Gold Coast'. Organic Google Maps 3-Pack and AI search placement deliver unlimited emergency call-outs and high-margin EV charger installations with 0% pay-per-click fee.",
    },
    {
      q: "What is the 1-Electrician-Per-Territory Exclusivity Rule?",
      a: "We only partner with ONE electrical contractor per Gold Coast postcode corridor (e.g. Pimpama/Coomera 4209, Helensvale/Hope Island 4212). Your neighborhood competitors are blocked from using our ranking engine.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-bold text-amber-300">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Gold Coast Electrical SEO • 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                #1 Local SEO & Google Maps for <span className="gradient-text">Gold Coast Electricians</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Capture high-margin emergency call-outs, EV charger installs, and solar battery upgrades across Pimpama, Coomera, Helensvale, and Gold Coast.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#sparkie-audit"
                  className="px-8 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Electrical Territory Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div id="sparkie-audit" className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white">Check Your Electrical Territory</h3>
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
                          body: JSON.stringify({ ...formData, tradeType: "Electrical & Solar", source: "Electricians SEO Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Audit Request on Vortic Growth for Electricians SEO:\n\n• Business: ${formData.businessName}\n• Contact Name: ${formData.contactName}\n• Phone: ${formData.phone}\n• Territory Target: ${formData.suburbs}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Electrical Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sparky Pro Gold Coast"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mark Stevens"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-indigo-500"
                      />
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
                      className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Check Electrical Territory Availability</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
