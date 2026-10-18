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
  ChevronDown,
  HelpCircle,
} from "lucide-react";

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

  const serviceAreas = [
    {
      region: "Northern Gold Coast",
      suburbs: [
        ["Pimpama", "4209"], ["Coomera", "4209"], ["Upper Coomera", "4209"],
        ["Ormeau", "4208"], ["Yatala", "4207"], ["Jacobs Well", "4208"],
        ["Helensvale", "4212"], ["Oxenford", "4210"], ["Willow Vale", "4209"],
        ["Kingsholme", "4208"], ["Luscombe", "4208"], ["Guanaba", "4210"],
      ],
    },
    {
      region: "Central Gold Coast",
      suburbs: [
        ["Southport", "4215"], ["Surfers Paradise", "4217"], ["Main Beach", "4217"],
        ["Broadbeach", "4218"], ["Bundall", "4217"], ["Ashmore", "4214"],
        ["Molendinar", "4214"], ["Arundel", "4214"], ["Parkwood", "4214"],
        ["Labrador", "4219"], ["Biggera Waters", "4216"], ["Runaway Bay", "4216"],
        ["Paradise Point", "4216"], ["Hope Island", "4212"], ["Sanctuary Cove", "4212"],
        ["Hollywell", "4216"], ["Coombabah", "4216"],
      ],
    },
    {
      region: "Southern Gold Coast",
      suburbs: [
        ["Burleigh Heads", "4220"], ["Miami", "4220"], ["Mermaid Beach", "4218"],
        ["Mermaid Waters", "4218"], ["Robina", "4226"], ["Varsity Lakes", "4227"],
        ["Palm Beach", "4221"], ["Currumbin", "4223"], ["Currumbin Waters", "4223"],
        ["Tugun", "4224"], ["Bilinga", "4225"], ["Coolangatta", "4225"],
        ["Kirra", "4225"], ["Elanora", "4221"],
      ],
    },
    {
      region: "Hinterland & West",
      suburbs: [
        ["Nerang", "4211"], ["Carrara", "4211"], ["Worongary", "4213"],
        ["Mudgeeraba", "4213"], ["Tallai", "4213"], ["Bonogin", "4213"],
        ["Austinville", "4213"], ["Gilston", "4211"], ["Advancetown", "4211"],
      ],
    },
  ];

  const faqs = [
    {
      q: "How quickly will I hear back after submitting the form?",
      a: "Within 2 business hours during AEST business hours (Mon–Fri, 8am–6pm). Messages sent overnight or on weekends are answered first thing the next business day. For the fastest response, use the WhatsApp line directly — it goes straight to Bilal, not a sales queue.",
    },
    {
      q: "What exactly is included in the free 15-minute strategy audit?",
      a: "A live snapshot of your Google Maps rankings, who's holding the 3-Pack in your target suburbs, and the quick wins we can spot in your Google Business Profile. It's a working session, not a sales pitch — you keep every insight regardless of what you decide next.",
    },
    {
      q: "Do I have to be based on the Gold Coast to work with you?",
      a: "No. We're headquartered on the Gold Coast and most of our case-study clients are local, but we run campaigns for businesses across Brisbane and Australia-wide. Every audit, report, and strategy call happens remotely over WhatsApp and video. Local SEO is local to your customers, not to our office — distance never affects the quality of the work.",
    },
    {
      q: "Is there a lock-in contract?",
      a: "No. Our retainers are month-to-month with no lock-in contracts. We keep clients by producing rankings and calls, not by paperwork — if the results ever stop, you should be free to walk away. That arrangement keeps us accountable every single month.",
    },
    {
      q: "Why do you only take one client per trade per territory?",
      a: "Because we can't ethically rank two competing concreters in Pimpama at the same time. Exclusivity means that when we take you on, every ranking we win in your corridor belongs to you alone — your competitor can't hire us to take it back.",
    },
    {
      q: "Do you guarantee #1 Google rankings?",
      a: "No — and you should be wary of any agency that does. Nobody controls Google's algorithm, and a guarantee is a marketing gimmick, not a strategy. What we offer instead is a proven methodology, verified case studies with real numbers, and month-to-month terms so we earn your business continuously.",
    },
  ];

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
                    <h4 className="text-2xl font-black text-slate-900">Inquiry Received & Sent to WhatsApp!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you! Bilal will review your Google Maps footprint and contact you shortly.
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
                          body: JSON.stringify({ ...formData, contactName: formData.name, source: "Contact Form" }),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      const waText = encodeURIComponent(
                        `Hi Bilal! I just submitted an Inquiry on Vortic Growth:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Business: ${formData.businessName}\n• Suburb: ${formData.suburb}\n• Service: ${formData.serviceType}\n• Message: ${formData.message}`
                      );
                      window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
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

      {/* What Happens Next Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>After You Hit Send</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Happens <span className="gradient-text">After You Contact Us?</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              No black hole, no "we'll be in touch sometime next week." Here is exactly what happens from the moment your inquiry lands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-clean p-8 rounded-3xl border border-slate-200 bg-white space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-600/30">1</div>
              <h3 className="text-lg font-extrabold text-slate-950">We Reply Within 2 Business Hours</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every inquiry lands directly with Bilal — not a sales rep, not a VA queue. During AEST business hours (Mon–Fri, 8am–6pm) expect a personal reply within 2 hours. Messages sent overnight or on weekends are answered first thing the next business day. WhatsApp is the fastest channel if you're in a hurry.
              </p>
            </div>
            <div className="card-clean p-8 rounded-3xl border border-slate-200 bg-white space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-600/30">2</div>
              <h3 className="text-lg font-extrabold text-slate-950">We Prepare Your Free Maps Audit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before the 15-minute strategy call, we pull your live Google Maps rankings, snapshot who's holding the 3-Pack in your target suburbs, and list the quick wins we can see in your profile. You get genuine insight on the call whether or not you ever become a client — no generic pitch deck.
              </p>
            </div>
            <div className="card-clean p-8 rounded-3xl border border-slate-200 bg-white space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-600/30">3</div>
              <h3 className="text-lg font-extrabold text-slate-950">Honest Territory Check — Including "No"</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We only partner with one business per trade corridor, so we check availability first. If your territory is already taken — or if we can see your situation doesn't need us — we'll tell you straight and point you in the right direction. We'd rather lose a lead than take on a client we can't genuinely help.
              </p>
            </div>
          </div>

          {/* Inline Reader Question */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-indigo-50/60 border border-indigo-100 space-y-3">
            <h3 className="text-lg font-extrabold text-slate-950">Do I need to be based on the Gold Coast to work with you?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. We're headquartered on the Gold Coast and most of our case-study clients are local, but we run campaigns for businesses across Brisbane and Australia-wide. Everything — audits, reporting, strategy calls — runs remotely over WhatsApp and video. Local SEO is local to your customers, not to our office.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span>Territories We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Gold Coast Suburbs <span className="gradient-text">We Rank Businesses In</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our campaigns run suburb by suburb across the entire Gold Coast — from the northern growth corridor to the southern coastal strip. Find your postcode below, or ask us about Brisbane's southside and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map((area, aIdx) => (
              <div key={aIdx} className="card-clean p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white space-y-4">
                <h3 className="text-base font-extrabold text-slate-950">{area.region}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.suburbs.map(([suburb, postcode], sIdx) => (
                    <span key={sIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                      <MapPin className="w-3 h-3 text-indigo-500" />
                      {suburb} <span className="text-slate-400 font-semibold">{postcode}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Targeting Brisbane's southside, the Tweed, or elsewhere in Australia? Our remote campaigns run Australia-wide — mention your suburbs in the form above and we'll check the competitive landscape for you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-900">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Before You Reach Out</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Contact Questions, Answered</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Response times, the free audit, contracts, and the honest limits of what any SEO agency can promise.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-slate-950 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-600 transition-transform shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
