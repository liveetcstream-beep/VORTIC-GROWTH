"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, Send } from "lucide-react";

export default function RunawayBayClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ businessName: "", contactName: "", phone: "" });

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      <section className="relative pt-24 pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Runaway Bay, Biggera Waters & Labrador • 4216</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Local SEO for <span className="gradient-text">Runaway Bay (4216)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Dominate Google search across Runaway Bay Marina, Biggera Waters, and Labrador coastal enclaves.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3"><CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" /><h4 className="text-lg font-bold text-white">Audit Request Received!</h4></div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                try { await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, suburb: "Runaway Bay 4216", source: "Runaway Bay Audit Form" }) }); } catch(err){}
                const waText = encodeURIComponent(`Hi Bilal! Audit Request for Runaway Bay (4216):\n• Business: ${formData.businessName}\n• Contact: ${formData.contactName}\n• Phone: ${formData.phone}`);
                window.open(`https://wa.me/61401164987?text=${waText}`, "_blank");
                setFormSubmitted(true);
              }} className="space-y-4 text-xs">
                <div><label className="block text-slate-300 mb-1">Business Name *</label><input type="text" required placeholder="e.g. Runaway Bay Marine Services" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Your Name *</label><input type="text" required placeholder="e.g. Steve Walsh" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <div><label className="block text-slate-300 mb-1">Phone *</label><input type="tel" required placeholder="0400 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-white" /></div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950"><Send className="w-4 h-4 inline mr-1" />Get Free Runaway Bay Audit</button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
