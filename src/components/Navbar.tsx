"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Stethoscope,
  Hammer,
  Scale,
  Sun,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80">
      
      {/* Sleek Top Status Ticker */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle"></span>
            <span className="font-semibold text-slate-300">
              Gold Coast & Global Search Domination
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-emerald-400 font-medium">
              100% Territory Exclusivity Guarantee
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'm%20interested%20in%20scaling%20my%20local%20business%20with%20Vortic%20Growth."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Line: +61 401 164 987</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Brand Logo - Made Larger */}
          <a href="/" className="flex items-center gap-3 group py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vorticgrowth-logo.png"
              alt="Vortic Growth"
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Items (Clean, Zero-Wrapping: Home, Solutions/Specializations, Case Studies, ROI Calculator, Pricing, Insights) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-bold text-slate-700 whitespace-nowrap">
            
            {/* Home Link */}
            <a href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </a>

            {/* Specializations / Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-slate-800 hover:text-indigo-600 transition-colors py-2 font-extrabold"
                aria-expanded={dropdownOpen}
              >
                <span>Specializations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2.5 space-y-1 z-50 animate-in fade-in duration-150">
                  
                  <a
                    href="/local-seo-gold-coast"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs group-hover:text-amber-700 flex items-center gap-1.5">
                        <span>Gold Coast Local SEO</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-black">QLD Hub</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">Surfers Paradise, Southport, Robina & 15+ Suburbs</div>
                    </div>
                  </a>

                  <a
                    href="/dental-seo"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs group-hover:text-blue-700">
                        Dental & Medical Clinics
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">Implants, Invisalign & High-LTV Patients</div>
                    </div>
                  </a>

                  <a
                    href="/concreters-seo"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Hammer className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs group-hover:text-indigo-700">
                        Concrete & Tradies
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">Driveways, Slabs & Commercial Leads</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Law & Professional Firms
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">High-Retainer Case Acquisition</div>
                    </div>
                  </a>

                  <a
                    href="/builders-seo"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs group-hover:text-emerald-700">
                        Custom Builders & Renovators
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">Custom Homes & Major Construction Funnels</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-xs">
                        Law & Professional Firms
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">High-Retainer Case Acquisition</div>
                    </div>
                  </a>

                </div>
              )}
            </div>

            <a href="/case-studies" className="hover:text-indigo-600 transition-colors">
              Case Studies
            </a>

            <a href="/#calculator" className="hover:text-indigo-600 transition-colors">
              ROI Calculator
            </a>

            <a href="/#packages" className="hover:text-indigo-600 transition-colors">
              Pricing
            </a>

            <a href="/blog" className="hover:text-indigo-600 transition-colors">
              Insights
            </a>

            <a href="/contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>

          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            <a
              href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20claim%20a%20Free%20Local%20SEO%20Audit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-extrabold hover:bg-emerald-100 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="/#audit-form"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xs font-extrabold shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 transition-all hover:translate-y-[-1px]"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-900 font-extrabold text-sm"
            >
              Home
            </a>
            <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider pt-2 pb-1">
              Industry Specializations
            </div>
            <a
              href="/dental-seo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-blue-700 font-extrabold text-sm"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Dental & Medical Clinics</span>
            </a>
            <a
              href="/concreters-seo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-indigo-700 font-extrabold text-sm"
            >
              <Hammer className="w-4 h-4" />
              <span>Concreters & Tradies</span>
            </a>
            <a
              href="/#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-slate-800 font-bold text-sm"
            >
              <Scale className="w-4 h-4 text-slate-500" />
              <span>Law & Professional Firms</span>
            </a>
          </div>

          <div className="flex flex-col space-y-2.5 font-bold text-slate-800 text-sm pt-2">
            <a
              href="/local-seo-gold-coast"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-indigo-700 font-extrabold hover:text-indigo-900"
            >
              Gold Coast SEO & Suburbs
            </a>
            <a
              href="/#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-indigo-600"
            >
              Case Studies & Proof
            </a>
            <a
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-indigo-600"
            >
              ROI Calculator
            </a>
            <a
              href="/#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-indigo-600"
            >
              Pricing & Retainers
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-indigo-600 text-slate-600"
            >
              Insights & Knowledge Hub
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20a%20Free%20Local%20SEO%20Audit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-extrabold text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat Direct on WhatsApp (+61 401 164 987)</span>
            </a>
            <a
              href="/#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
