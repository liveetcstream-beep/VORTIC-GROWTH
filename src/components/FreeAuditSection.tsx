"use client";

import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function FreeAuditSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    trade: "Concrete & Driveways",
    suburb: "",
    website: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous capture & show confirmation
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 via-indigo-50/20 to-white border-b border-slate-200/80 relative" id="audit-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Request Audit */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
              <span>100% Free • No Sales Pressure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Claim Your Free <span className="gradient-text">Local SEO & Suburb Grid</span> Audit
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We’ll manually analyze your Google Maps 3-Pack rankings, competitor gaps, and suburb search presence across your city—delivering a customized roadmap to capture 40+ monthly inbound quote calls.
            </p>

            {/* What is inside the audit */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-indigo-100">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Suburb-by-Suburb Proximity Scan</h3>
                  <p className="text-xs text-slate-600">See exactly where your Google Maps ranking drops off in surrounding postal codes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-indigo-100">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Competitor Inbound Leakage Audit</h3>
                  <p className="text-xs text-slate-600">Identify which local competitors are taking your high-margin jobs and why.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-indigo-100">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Google AI & GEO Readiness Check</h3>
                  <p className="text-xs text-slate-600">Verify whether Gemini and Google AI Overviews cite your business or your rivals.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Need Answers Right Now?</div>
              <a
                href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20a%20business%20owner%20and%20I'd%20like%20a%20quick%20free%20audit%20review%20over%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 font-extrabold text-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-700" />
                  <span>Chat Direct on WhatsApp (+61 401 164 987)</span>
                </div>
                <span>→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="card-clean rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Audit Request Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Our lead search architect is already preparing your Suburb Proximity & Competitor Audit for <strong className="text-slate-900">{formData.businessName || "your business"}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto">
                    We typically deliver completed audits within 4–6 business hours via WhatsApp / Email.
                  </div>
                  <a
                    href="https://wa.me/61401164987?text=Hi%20Bilal,%20I%20just%20submitted%20the%20audit%20form%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping on WhatsApp for Priority Rush</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Request Your Growth Audit
                      </h3>
                      <p className="text-xs text-slate-600 font-medium">Takes 60 seconds • Delivered to your inbox & WhatsApp</p>
                    </div>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                      Step 1 of 1
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="businessNameInput" className="text-xs font-bold text-slate-800">
                        Business / Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="businessNameInput"
                        type="text"
                        required
                        placeholder="e.g. Gold Coast Slabs & Driveways"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>

                    {/* Trade / Industry */}
                    <div className="space-y-1.5">
                      <label htmlFor="tradeCategorySelect" className="text-xs font-bold text-slate-800">
                        Primary Trade / Category <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="tradeCategorySelect"
                        aria-label="Select Primary Trade or Category"
                        value={formData.trade}
                        onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      >
                        <option>Dental & Medical Clinic</option>
                        <option>Lawyer & Legal Practice</option>
                        <option>Concrete & Driveways</option>
                        <option>Custom Home Builder</option>
                        <option>Roofing & Restorations</option>
                        <option>Solar & HVAC Systems</option>
                        <option>Commercial B2B / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Suburb / City */}
                    <div className="space-y-1.5">
                      <label htmlFor="suburbInput" className="text-xs font-bold text-slate-800">
                        Target Suburb / City Region <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="suburbInput"
                        type="text"
                        required
                        placeholder="e.g. Gold Coast QLD (Robina, Coomera)"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>

                    {/* Current Website URL */}
                    <div className="space-y-1.5">
                      <label htmlFor="websiteInput" className="text-xs font-bold text-slate-800">
                        Current Website URL <span className="text-slate-600 font-medium">(Optional)</span>
                      </label>
                      <input
                        id="websiteInput"
                        type="text"
                        placeholder="e.g. https://mybusiness.com.au"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Phone / WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0401 164 987"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Work Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. quotes@mybusiness.com.au"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-base shadow-xl shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-600/40 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Generate My Custom Growth & Suburb Audit</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Privacy Protected
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      Delivered in 4–6 Hours
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
