import React from "react";
import { MessageSquare, Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const suburbs = [
    "Pimpama QLD", "Coomera QLD", "Ormeau QLD", "Helensvale QLD",
    "Southport QLD", "Surfers Paradise QLD", "Burleigh Heads QLD", "Robina QLD",
    "Varsity Lakes QLD", "Palm Beach QLD", "Coolangatta QLD", "Brisbane QLD"
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vorticgrowth-logo.png"
                alt="Vortic Growth Logo"
                className="h-10 sm:h-12 w-auto object-contain bg-white/10 p-1.5 rounded-xl border border-slate-700"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer hyper-local search engines, Google Maps 3-Pack dominance, and Google AI Overview citations for trade contractors and high-value service businesses.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/60 w-fit font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Territory Exclusivity Guarantee</span>
            </div>
          </div>

          {/* Col 2: Core Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li><a href="/dental-seo" className="text-blue-400 font-bold hover:text-white transition-colors">🦷 Dental & Medical Clinics SEO</a></li>
              <li><a href="/concreters-seo" className="text-indigo-400 font-bold hover:text-white transition-colors">🏗️ Concrete & Trade SEO</a></li>
              <li><a href="/#suburb-engine" className="hover:text-white transition-colors">Suburb Micro-Silos System</a></li>
              <li><a href="/#suburb-engine" className="hover:text-white transition-colors">Google Maps 3-Pack Proximity</a></li>
              <li><a href="/#suburb-engine" className="hover:text-white transition-colors">Google AI Overviews (GEO)</a></li>
              <li><a href="/#calculator" className="hover:text-white transition-colors">Interactive ROI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
              Direct Contact & Strategy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+61401164987" className="hover:text-white">+61 401 164 987</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20reaching%20out%20from%20vorticgrowth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Instant Direct
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Gold Coast QLD 4217, Australia</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
              Get Started
            </h4>
            <a
              href="#audit-form"
              className="inline-block w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs text-center shadow-md transition-all"
            >
              Claim Free Audit
            </a>
            <a
              href="#case-study"
              className="inline-block w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs text-center border border-slate-700 transition-all"
            >
              View Case Study
            </a>
          </div>

        </div>

        {/* Territory Coverage Tags */}
        <div className="py-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <span className="font-bold text-slate-300">Active Territory Coverage:</span>
          <div className="flex flex-wrap gap-2">
            {suburbs.map((suburb, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[11px]">
                {suburb}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong>Vortic Growth</strong> (vorticgrowth.com). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Territory Disclaimer</a>
          </div>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Button on Bottom Right */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20on%20vorticgrowth.com%20and%20I'd%20like%20to%20chat%20about%20Local%20SEO."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-2xl shadow-emerald-600/50 hover:scale-105 transition-all group"
          aria-label="Direct WhatsApp Contact"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"></span>
          </div>
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </a>
      </aside>
    </footer>
  );
}
