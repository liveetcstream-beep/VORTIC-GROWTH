"use client";

import React, { useState } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function RoiCalculator() {
  const industries = [
    { name: "Concrete & Driveways", defaultAvgJob: 8000, defaultLeads: 35 },
    { name: "Roofing & Restorations", defaultAvgJob: 12000, defaultLeads: 25 },
    { name: "HVAC & Air Conditioning", defaultAvgJob: 6500, defaultLeads: 30 },
    { name: "Solar & Electrical", defaultAvgJob: 9000, defaultLeads: 25 },
    { name: "Plumbing & Relining", defaultAvgJob: 4500, defaultLeads: 40 },
    { name: "Commercial & Builders", defaultAvgJob: 35000, defaultLeads: 15 },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [leadsPerMonth, setLeadsPerMonth] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(8000);
  const [closeRate, setCloseRate] = useState(30); // 30% close rate

  // Calculations
  const closedDeals = Math.round((leadsPerMonth * (closeRate / 100)) * 10) / 10;
  const monthlyRevenue = Math.round(closedDeals * avgJobValue);
  const annualRevenue = monthlyRevenue * 12;
  const estimatedRetainer = 1500; // standard benchmark
  const roiMultiplier = Math.round((monthlyRevenue / estimatedRetainer) * 10) / 10;

  const handleIndustryChange = (ind: typeof industries[0]) => {
    setSelectedIndustry(ind);
    setAvgJobValue(ind.defaultAvgJob);
    setLeadsPerMonth(ind.defaultLeads);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-indigo-50/20 to-white border-b border-slate-200/80" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
            <Calculator className="w-4 h-4 text-indigo-600" />
            <span>Interactive ROI Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Calculate Your <span className="gradient-text">Inbound Revenue Potential</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See exactly how many high-margin jobs and new revenue you could add to your books every month by ranking #1 on Google Maps and suburb search results.
          </p>
        </div>

        {/* Main Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-7 card-clean p-7 sm:p-9 rounded-3xl space-y-8 flex flex-col justify-between">
            
            {/* Step 1: Industry Selector */}
            <div className="space-y-3">
              <label className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                <span>1. Select Your Primary Trade or Industry:</span>
                <span className="text-xs text-indigo-600 font-bold">{selectedIndustry.name}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {industries.map((ind) => (
                  <button
                    key={ind.name}
                    onClick={() => handleIndustryChange(ind)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                      selectedIndustry.name === ind.name
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Slider - Inbound Leads / Month */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900">
                  2. Targeted Inbound Quote Calls / Month:
                </label>
                <span className="text-lg font-black text-indigo-600 bg-indigo-50 px-3 py-0.5 rounded-lg border border-indigo-100">
                  {leadsPerMonth} Leads
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="75"
                step="5"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>10 Leads (Starter)</span>
                <span>35 Leads (Concreters Avg)</span>
                <span>75 Leads (Dominator)</span>
              </div>
            </div>

            {/* Step 3: Slider - Average Job Value */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900">
                  3. Average Job / Contract Value ($AUD / $USD):
                </label>
                <span className="text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-lg border border-emerald-100">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="50000"
                step="500"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>$1,500</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Step 4: Slider - Conversion / Close Rate */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900">
                  4. Your Typical Quote Close Rate (%):
                </label>
                <span className="text-base font-black text-slate-800 bg-slate-100 px-3 py-0.5 rounded-lg border border-slate-200">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="60"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>15% (Conservative)</span>
                <span>30% (Standard Trade)</span>
                <span>60% (High Performer)</span>
              </div>
            </div>

          </div>

          {/* Right: Real-time Output Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-9 text-white shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Ambient subtle glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Projected Revenue Pipeline
                </span>
                <span className="text-[11px] font-bold bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800">
                  High-Intent Traffic
                </span>
              </div>

              {/* Big Metric 1: Monthly Revenue */}
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Projected Monthly Revenue:
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-1 text-emerald-400">
                  ${monthlyRevenue.toLocaleString()}
                  <span className="text-xs font-medium text-slate-400 tracking-normal">/ mo</span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Based on ~<strong className="text-white font-bold">{closedDeals} signed jobs</strong> each month.
                </p>
              </div>

              {/* Big Metric 2: Annual Impact */}
              <div className="space-y-1 pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Projected Annual Pipeline:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${annualRevenue.toLocaleString()}
                  <span className="text-xs font-medium text-slate-400 tracking-normal">/ yr</span>
                </div>
              </div>

              {/* Estimated ROI multiplier */}
              <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-800/70 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-indigo-300">Estimated Return on Investment:</div>
                  <div className="text-2xl font-black text-white tracking-tight">
                    {roiMultiplier}x ROI
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 font-medium">Payoff Benchmark:</div>
                  <div className="text-xs font-bold text-emerald-400">Just 1 Job Covers 6+ Months</div>
                </div>
              </div>

            </div>

            {/* Bottom CTA to claim */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href="#audit-form"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-center block shadow-lg shadow-indigo-600/30 hover:translate-y-[-2px] transition-all text-sm"
              >
                Claim This Pipeline for Your Territory →
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero lock-in contracts • 30-Day performance trial</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
