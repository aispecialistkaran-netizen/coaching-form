"use client";

import React from "react";
import { Sparkles, Clock, ShieldCheck, ArrowRight, BookOpen, Layers, Mail, Phone, Users, Award } from "lucide-react";

interface SurveyWelcomeProps {
  onStart: () => void;
}

export const SurveyWelcome: React.FC<SurveyWelcomeProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8 sm:py-14 px-4 sm:px-6 animate-fadeIn">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NHRD × xMonks Flagship National Study</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
          The Coaching Ripple Effect{" "}
          <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
            From Leadership Maturity to Ecosystem Impact
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          A flagship research instrument examining how coaching develops leadership maturity and how its impact travels across teams, organizations, business outcomes, and the wider ecosystem.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">4 – 10 Minutes</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Adaptive flow tailored to your role and coaching exposure.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">100% Confidential</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Responses analyzed in aggregate for academic research only.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Tailored Vantage Point</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Custom pathways for CHRO, CLO, L&D, CXO, and Non-Adopters.</p>
          </div>
        </div>
      </div>

      {/* Multi-Respondent Design & Academic Integrity Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-2xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/40 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2 font-semibold text-orange-800 dark:text-orange-300">
            <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Multi-Role Organization Participation</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            Multiple leaders from the same organization (e.g., CHRO, CLO, Head L&D, and CXO Sponsors) are welcome and encouraged to respond. Each perspective provides a vital, distinct vantage point for intra-firm divergence benchmarking.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>NHRD Academic Integrity Guarantee</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            This study is governed under the NHRD Research Council. All data is gathered strictly for macro-industry research and report publication. Your contact details will never be used for commercial solicitations or sales outreach.
          </p>
        </div>
      </div>

      {/* Research Ethics & Contact */}
      <div className="p-5 rounded-2xl bg-zinc-100/80 dark:bg-gradient-to-b dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 mb-8 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
        <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-200 text-xs">
          <BookOpen className="w-4 h-4 text-orange-500 dark:text-orange-400" />
          <span>Research Consent & Confidentiality</span>
        </div>
        <p>
          Participation is entirely voluntary. Every verified executive respondent will receive a complimentary executive copy of the published <em>State of Executive Coaching in India 2026</em> research report.
        </p>
        <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
          <span>Questions? Contact the Research Secretariat:</span>
          <div className="flex items-center gap-3 font-medium text-zinc-700 dark:text-zinc-300">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-orange-500" />
              preeti.verma@xmonks.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-500" />
              (+91) 8860789723
            </span>
          </div>
        </div>
      </div>

      {/* Start Button & Keyboard Hint */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold text-base sm:text-lg shadow-xl shadow-orange-600/25 transition-all flex items-center justify-center gap-3 group"
        >
          <span>Begin Research Survey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-xs text-zinc-500 font-mono">
          Press <kbd className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">Enter ↵</kbd> to start
        </span>
      </div>
    </div>
  );
};
