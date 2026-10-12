"use client";

import React from "react";
import { Sparkles, Clock, ShieldCheck, ArrowRight, BookOpen, Layers, Mail, Phone, Users, Award } from "lucide-react";

interface SurveyWelcomeProps {
  onStart: () => void;
}

export const SurveyWelcome: React.FC<SurveyWelcomeProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 sm:py-10 px-4 sm:px-8 animate-fadeIn space-y-7">
      {/* Institutional Co-Branded Logos (Clean, No Card Container) */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 pt-2">
        <img
          src="/images/nhrd-logo.png"
          alt="National HRD Network (NHRD)"
          className="h-14 sm:h-18 w-auto max-w-[220px] sm:max-w-[300px] object-contain"
        />

        <span className="text-zinc-300 dark:text-zinc-600 font-light text-2xl select-none">×</span>

        <img
          src="/images/xmonks-logo.png"
          alt="xMonks"
          className="h-12 sm:h-16 w-auto max-w-[180px] sm:max-w-[240px] object-contain"
        />
      </div>

      {/* Top Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NHRD × xMonks Flagship National Study</span>
        </div>
      </div>

      {/* Main Title & Subtitle (Clean Elegant Typography with Soft Warm Gradient) */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          The Coaching Ripple Effect{" "}
          <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-300 bg-clip-text text-transparent font-bold mt-1">
            From Leadership Maturity to Ecosystem Impact
          </span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto pt-1">
          A flagship research instrument examining how coaching develops leadership maturity and how its impact travels across teams, organizations, business outcomes, and the wider ecosystem.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">4 – 10 Minutes</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Adaptive flow tailored to your role and coaching exposure.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">100% Confidential</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Responses analyzed in aggregate for academic research only.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border border-zinc-500/20 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">Tailored Vantage Point</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Custom pathways for CHRO, CLO, L&D, CXO, and Non-Adopters.</p>
          </div>
        </div>
      </div>

      {/* Multi-Respondent & Academic Integrity Combined Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-orange-50/70 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/40 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2 font-semibold text-orange-800 dark:text-orange-300">
            <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Multi-Role Organization Participation</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            Multiple leaders from the same organization (CHRO, CLO, Head L&D, CXO Sponsors) are encouraged to participate for 360° perspective benchmarking.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>NHRD Academic Integrity Guarantee</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            Governed under NHRD Research Council. All data is strictly for macro research & publishing. Zero commercial solicitations.
          </p>
        </div>
      </div>

      {/* Research Ethics & Secretariat */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200">
          <BookOpen className="w-4 h-4 text-orange-500 shrink-0" />
          <span>Voluntary & confidential. All verified respondents receive a complimentary executive copy of the 2026 report.</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium pt-1 sm:pt-0 border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800">
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-orange-500" />
            preeti.verma@xmonks.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            (+91) 8860789723
          </span>
        </div>
      </div>

      {/* Big, Prominent Soft-Gradient CTA Button */}
      <div className="flex flex-col items-center gap-3 pt-2 pb-6">
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-10 sm:px-14 py-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>Begin Research Survey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </button>

        <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
          Press <kbd className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 text-[10px]">Enter ↵</kbd> to start
        </span>
      </div>
    </div>
  );
};
