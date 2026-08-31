"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  Building,
  Check,
} from "lucide-react";

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    serviceType: "Dental & Healthcare SEO",
    suburb: "",
    message: "",
  });

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-xs sm:text-sm font-bold text-indigo-300 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Direct Search Architect Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Territory Domination</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Speak directly with Bilal and our Gold Coast search engineering team. No overseas sales reps, no cookie-cutter templates.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Value Props */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                  Direct Contact Channels
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We respond to all Australian business inquiries within 2 hours during AEST business hours.
                </p>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Fastest Response:</div>
                    <div className="text-lg font-black text-slate-900">Direct WhatsApp Line</div>
                  </div>
                </div>
                <p className="text-xs text-emerald-950 font-medium">
                  Chat directly with our lead architect about your suburb territory and Google ranking potential.
                </p>
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20discuss%20Local%20SEO%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs text-center block transition-all shadow-md shadow-emerald-600/20"
                >
                  Message +61 401 164 987 on WhatsApp →
                </a>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="card-clean p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Headquarters</div>
                    <div className="text-sm font-extrabold text-slate-900">Gold Coast, Queensland, 4217 Australia</div>
                    <div className="text-xs text-slate-500 mt-0.5">Serving Gold Coast, Brisbane & Australia-Wide</div>
                  </div>
                </div>

                <div className="card-clean p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <PhoneCall className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Direct Phone</div>
                    <a href="tel:+61401164987" className="text-sm font-extrabold text-slate-900 hover:text-indigo-600 transition-colors">
                      +61 401 164 987
                    </a>
                  </div>
                </div>

                <div className="card-clean p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Operating Hours</div>
                    <div className="text-sm font-extrabold text-slate-900">Mon – Fri: 8:00 AM – 6:00 PM (AEST)</div>
                  </div>
                </div>
              </div>

              {/* Strict Guarantees */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Our Core Commitments:</div>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strict 1-Partner-Per-Territory exclusivity rule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Month-to-month retainers (No lock-in contracts)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Australian compliance (AHPRA & QBCC aligned)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="card-clean rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl bg-white space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-950">Book a Free 15-Min Strategy Audit</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Enter your details below and we'll prepare a live Google Maps & competitor ranking report before we speak.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900">Inquiry Received!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you! Bilal will review your Google Maps footprint and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jason Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Mobile / Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0401 164 987"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Business Name</label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Gold Coast Dental Care"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Primary Target Suburb</label>
                        <input
                          type="text"
                          required
                          value={formData.suburb}
                          onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                          placeholder="e.g. Robina, Southport, Pimpama"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Industry / Specialization</label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none bg-white"
                        >
                          <option>Dental & Healthcare</option>
                          <option>Concreting & Trades</option>
                          <option>Custom Home Building & Renovation</option>
                          <option>Legal & Accounting Practice</option>
                          <option>Other Professional Service</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Current Website (Optional)</label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://yourwebsite.com.au"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">How Can We Help You?</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current rankings, lead goals, or specific suburbs you want to dominate..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Audit Request & Lock Territory →
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
