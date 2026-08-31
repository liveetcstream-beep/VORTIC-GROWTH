"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight, Menu, X, CheckCircle2 } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80">
      {/* Top Banner Ticker */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle"></span>
            <span className="font-semibold text-slate-200">
              Gold Coast & Global Lead Engine:
            </span>
            <span className="hidden sm:inline text-slate-300">
              Accepting 2 New Trade / Enterprise Clients for Q4
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:flex items-center gap-1.5 font-medium text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified 45+ Inbound Calls/Mo
            </span>
            <a
              href="https://wa.me/61411914157?text=Hi%20Bilal,%20I'm%20interested%20in%20scaling%20my%20local%20business%20with%20Vortic%20Growth."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline font-semibold flex items-center gap-1"
            >
              Direct Line: +61 411 914 157
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vorticgrowth-logo.png"
              alt="Vortic Growth Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#proof" className="hover:text-indigo-600 transition-colors">
              Verified Results
            </a>
            <a href="#case-study" className="hover:text-indigo-600 transition-colors">
              Concreters Case Study
            </a>
            <a href="#suburb-engine" className="hover:text-indigo-600 transition-colors">
              The Suburb Engine
            </a>
            <a href="#calculator" className="hover:text-indigo-600 transition-colors">
              ROI Calculator
            </a>
            <a href="#packages" className="hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/61411914157?text=Hi%20Bilal,%20I'd%20like%20to%20claim%20a%20Free%20Local%20SEO%20Audit%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-sm font-bold hover:bg-emerald-100 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="#audit-form"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 transition-all hover:translate-y-[-1px]"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4" />
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              Verified Results
            </a>
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              Concreters Case Study
            </a>
            <a
              href="#suburb-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              The Suburb Engine
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              ROI Calculator
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              Pricing & Retainers
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-indigo-600"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://wa.me/61411914157?text=Hi%20Bilal,%20I'd%20like%20a%20Free%20Local%20SEO%20Audit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>Chat Direct on WhatsApp</span>
            </a>
            <a
              href="#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-md"
            >
              <span>Claim Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
