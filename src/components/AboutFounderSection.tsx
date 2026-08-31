import React from "react";
import { ShieldCheck, Lock, Award, MessageSquare, CheckCircle, ArrowRight, UserCheck } from "lucide-react";

export default function AboutFounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Persona & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className="card-clean rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border-2 border-slate-200">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-indigo-600/30">
                    B
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold border border-indigo-200">
                      <UserCheck className="w-3.5 h-3.5" />
                      Lead Search Architect
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight pt-1">
                      Bilal
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">
                      Founder & Principal Local SEO Engineer
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <p>
                    &ldquo;Unlike traditional agencies that assign junior account reps to churn out generic reports, I personally architect every client&apos;s suburb micro-silo infrastructure, schema graph, and Google Maps 3-Pack radius.&rdquo;
                  </p>
                  <p>
                    &ldquo;We operate under a strict <strong>1-Partner-Per-Territory Rule</strong>. When you partner with Vortic Growth, we lock your postal codes against your competitors. We win only when you win.&rdquo;
                  </p>
                </div>

                {/* 3 Core Architect Guarantees */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct Access via WhatsApp (+61 401 164 987)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strict 100% Suburb Geographic Exclusivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>0 Long-Term Locked-in Contracts (Month-to-Month)</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/61401164987?text=Hi%20Bilal,%20I'd%20like%20to%20speak%20directly%20about%20my%20business%20territory."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Direct with Bilal on WhatsApp</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Why Partner With Us / EEAT Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>The Vortic Growth Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Why We Refuse To Be A <span className="gradient-text">&ldquo;Traditional Agency&rdquo;</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Most Australian digital agencies charge $3,000/month retainers, lock you into 12-month non-cancelable contracts, and then work with 3 of your direct competitors down the road. They deliver 50-page PDF reports filled with vanity impressions while your phone stays silent.
              </p>
              <p>
                <strong>Vortic Growth was engineered on the opposite premise:</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  Territory Exclusivity
                </div>
                <p className="text-xs text-slate-600">
                  We only accept one client per trade or practice specialization per geographic radius. We never pit clients against each other.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Compounding Organic Equity
                </div>
                <p className="text-xs text-slate-600">
                  Instead of renting temporary traffic that disappears when ad budgets stop, we build permanent search authority that compounds month after month.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:translate-y-[-1px]"
              >
                <span>Check If Your Territory Is Open</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
