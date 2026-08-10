'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalculatorModal } from './CalculatorModal';
import {
  TrendingUp,
  PiggyBank,
  Coins,
  FileText,
  Calculator as CalcIcon,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface MiniVisualProps {
  type: string;
  isActive: boolean;
}

const MiniVisualPreview: React.FC<MiniVisualProps> = ({ type, isActive }) => {
  switch (type) {
    case 'sip':
      return (
        <div className="w-full h-16 bg-slate-50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-blue-600">
            <span>Projected Growth</span>
            <span>+14.8% CAGR</span>
          </div>
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 40">
            <motion.path
              d="M 0 35 Q 50 30, 100 20 T 200 5"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.5"
              initial={{ pathLength: 0.8 }}
              animate={{ pathLength: isActive ? 1 : 0.8 }}
              transition={{ duration: 0.8 }}
            />
            {isActive && (
              <motion.circle
                cx="200"
                cy="5"
                r="4"
                fill="#2563EB"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </svg>
        </div>
      );

    case 'retirement':
      return (
        <div className="w-full h-16 bg-emerald-50/50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-emerald-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-emerald-600">
            <span>Corpus Planning</span>
            <span>Target: ₹5 Cr</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-7 pt-1">
            {[25, 40, 55, 70, 90, 100].map((h, i) => (
              <motion.div
                key={i}
                className="w-full bg-emerald-500 rounded-t-sm"
                initial={{ height: `${h * 0.7}%` }}
                animate={{ height: isActive ? `${h}%` : `${h * 0.7}%` }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>
      );

    case 'fd':
      return (
        <div className="w-full h-16 bg-teal-50/50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-teal-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-teal-600">
            <span>Maturity Value</span>
            <span>Guaranteed Yield</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px]">Principal</span>
            <span className="text-slate-400">→</span>
            <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">+ Interest</span>
          </div>
        </div>
      );

    case 'bond':
      return (
        <div className="w-full h-16 bg-purple-50/50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-purple-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-purple-600">
            <span>Yield Analysis</span>
            <span>Coupon YTM</span>
          </div>
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 30">
            <line x1="0" y1="25" x2="200" y2="25" stroke="#E2E8F0" strokeWidth="2" />
            <motion.path
              d="M 0 10 Q 100 25, 200 5"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2.5"
              initial={{ pathLength: 0.8 }}
              animate={{ pathLength: isActive ? 1 : 0.8 }}
            />
          </svg>
        </div>
      );

    case 'loan':
      return (
        <div className="w-full h-16 bg-amber-50/50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-amber-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-amber-600">
            <span>Repayment Structure</span>
            <span>EMI Amortization</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
            <motion.div
              className="bg-amber-500 h-full"
              initial={{ width: '65%' }}
              animate={{ width: isActive ? '75%' : '65%' }}
            />
            <div className="bg-slate-400 h-full flex-1" />
          </div>
        </div>
      );

    case 'insurance':
      return (
        <div className="w-full h-16 bg-cyan-50/50 dark:bg-slate-950/50 rounded-xl p-2.5 flex flex-col justify-between border border-cyan-100 dark:border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-bold text-cyan-600">
            <span>Protection Planning</span>
            <span>HLV Cover</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-cyan-500 text-white">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
              Optimal Term Protection
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const CALCULATOR_ITEMS = [
  {
    num: '01',
    id: 'sip',
    title: 'Mutual Fund Return Calculator',
    shortDesc: 'Calculate wealth growth through Systematic Investment Plans (SIP) & Lumpsum.',
    icon: TrendingUp,
    category: 'Mutual Funds',
    visualType: 'sip',
    accentColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    badgeColor: 'bg-blue-50 text-blue-700',
    glowColor: 'shadow-blue-500/10 ring-blue-500/10',
  },
  {
    num: '02',
    id: 'retirement',
    title: 'Retirement Planning Test Calculator',
    shortDesc: 'Estimate your required retirement corpus and monthly savings target.',
    icon: PiggyBank,
    category: 'Retirement',
    visualType: 'retirement',
    isRecommended: true,
    accentColor: 'text-emerald-600',
    borderColor: 'border-emerald-400',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    glowColor: 'shadow-emerald-500/10 ring-emerald-500/10',
  },
  {
    num: '03',
    id: 'fd',
    title: 'Fixed Deposit Return Calculator',
    shortDesc: 'Calculate interest returns and maturity values on corporate & bank FDs.',
    icon: Coins,
    category: 'Fixed Income',
    visualType: 'fd',
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-400',
    badgeColor: 'bg-teal-50 text-teal-700',
    glowColor: 'shadow-teal-500/10 ring-teal-500/10',
  },
  {
    num: '04',
    id: 'bond',
    title: 'Bond Yield Calculator',
    shortDesc: 'Evaluate yield-to-maturity (YTM) and coupon interest payouts on bonds.',
    icon: FileText,
    category: 'Fixed Income',
    visualType: 'bond',
    accentColor: 'text-purple-600',
    borderColor: 'border-purple-400',
    badgeColor: 'bg-purple-50 text-purple-700',
    glowColor: 'shadow-purple-500/10 ring-purple-500/10',
  },
  {
    num: '05',
    id: 'loan',
    title: 'Loan EMI Calculator',
    shortDesc: 'Compute monthly loan EMI, interest payout, and total repayment schedule.',
    icon: CalcIcon,
    category: 'Loans',
    visualType: 'loan',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-400',
    badgeColor: 'bg-amber-50 text-amber-700',
    glowColor: 'shadow-amber-500/10 ring-amber-500/10',
  },
  {
    num: '06',
    id: 'insurance',
    title: 'Insurance Cover Calculator',
    shortDesc: 'Determine adequate human life value (HLV) and term insurance cover.',
    icon: ShieldCheck,
    category: 'Insurance',
    visualType: 'insurance',
    accentColor: 'text-cyan-600',
    borderColor: 'border-cyan-400',
    badgeColor: 'bg-cyan-50 text-cyan-700',
    glowColor: 'shadow-cyan-500/10 ring-cyan-500/10',
  },
];

export const CalculatorPreviewGrid: React.FC = () => {
  const [selectedCalcTitle, setSelectedCalcTitle] = useState<string | null>(null);
  const [activeCardId, setActiveCardId] = useState<string>('sip');

  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800 relative overflow-hidden">
      {/* Subtle Financial Data Background Elements */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>QUANTITATIVE MODELING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Financial Calculator <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Suite</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed"
          >
            Model capital growth, mortgage amortizations, and retirement cash flows with our quantitative previews.
          </motion.p>
        </div>

        {/* 3x2 Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CALCULATOR_ITEMS.map((calc, idx) => {
            const isActive = activeCardId === calc.id;
            const IconComponent = calc.icon;

            return (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveCardId(calc.id)}
                onClick={() => setSelectedCalcTitle(calc.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCalcTitle(calc.title);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-selected={isActive}
                whileHover={{ y: -6, scale: 1.02 }}
                animate={{
                  y: isActive ? -6 : 0,
                  scale: isActive ? 1.02 : 1,
                }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer outline-none ${
                  isActive
                    ? `bg-white dark:bg-slate-900 border-2 ${calc.borderColor} shadow-xl ${calc.glowColor} ring-4`
                    : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Header Row */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded ${calc.badgeColor}`}>
                        {calc.num}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {calc.category}
                      </span>
                    </div>

                    {calc.isRecommended && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Recommended
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-3 rounded-2xl ${calc.badgeColor} border border-slate-200/60 dark:border-slate-800 shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {calc.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {calc.shortDesc}
                  </p>

                  {/* Mini Visual Preview */}
                  <MiniVisualPreview type={calc.visualType} isActive={isActive} />
                </div>

                {/* Footer CTA */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className={`transition-colors ${isActive ? calc.accentColor : 'group-hover:text-blue-600'}`}>
                    Open Calculator Model
                  </span>
                  <motion.div
                    animate={{ x: isActive ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`w-4 h-4 ${isActive ? calc.accentColor : 'text-slate-400'}`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Existing Calculator Modal Trigger */}
      <CalculatorModal
        isOpen={!!selectedCalcTitle}
        onClose={() => setSelectedCalcTitle(null)}
        calculatorTitle={selectedCalcTitle || ''}
      />
    </section>
  );
};
