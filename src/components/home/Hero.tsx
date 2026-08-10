'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { CTAButton } from '@/components/ui/CTAButton';
import { BrandTagline } from '@/components/ui/AnimatedSection';
import { CalculatorModal } from './CalculatorModal';
import { CALCULATOR_ITEMS } from '@/data/homepage';
import {
  ShieldCheck,
  TrendingUp,
  Calculator,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

const floatingStats = [
  { label: 'AUM Managed', value: '$2.5B+', color: 'bg-brand-blue' },
  { label: 'Active Investors', value: '15K+', color: 'bg-brand-green' },
  { label: 'Avg. Returns', value: '18.4%', color: 'bg-brand-blue' },
];

export const Hero: React.FC = () => {
  const [activeModalCalc, setActiveModalCalc] = useState<string | null>(null);

  return (
    <SectionWrapper
      variant="default"
      padding="xl"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white min-h-[calc(100vh-90px)] flex items-center pt-4 pb-12 lg:pt-8 lg:pb-16"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-brand-blue/8 rounded-full blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none animate-blob [animation-delay:2s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4172B808_1px,transparent_1px),linear-gradient(to_bottom,#7AB53908_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <WebsiteContainer size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column — Slide In From Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >

            {/* Small Brand Accent Chip */}
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
              <span className="text-brand-blue">INVEST</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-green">GROW</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-blue">SUCCEED</span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Build Your{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                Generational Wealth
              </span>{' '}
              with Expert Guidance
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              Empowering investors with smart asset allocation, private equity access, and capital preservation strategies — backed by fiduciary precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <CTAButton href="/consultation" variant="green" size="lg" glow>
                Start Investing Today
              </CTAButton>
              <CTAButton href="/wealth-management" variant="outline" size="lg">
                Explore Solutions
              </CTAButton>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span className="font-semibold text-slate-800">100% Fiduciary Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-blue" />
                <span className="font-semibold text-slate-800">$2.5B+ Assets Under Management</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Slide In From Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center"
          >
            {/* Single Smartphone Outer Box */}
            <div className="relative w-full max-w-[420px] rounded-[2.5rem] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 flex flex-col gap-5 overflow-hidden">
              
              {/* Phone Speaker Top Bar */}
              <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto" />

              {/* Stock Title Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-blue-600 text-white flex items-center justify-center font-black text-base shadow-md">
                    R9
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">RESE</p>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Renewable Energy Solutions</h4>
                  </div>
                </div>
                <div className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-brand-blue transition-colors cursor-pointer">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Stock Live Price */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">₹790.7</span>
                  <span className="text-lg font-extrabold text-slate-900">8</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    +15.95 (2.24%)
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">1D</span>
                </div>
              </div>

              {/* Infinite Continuous Slow Stock Graph Line SVG */}
              <div className="relative py-2">
                <svg viewBox="0 0 300 150" className="w-full h-auto overflow-visible" fill="none">
                  <defs>
                    <linearGradient id="growwChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Dotted Reference Line */}
                  <line x1="0" y1="75" x2="300" y2="75" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Infinite Continuous Stock Path */}
                  <motion.path
                    d="M0,140 L10,110 L20,112 L30,85 L40,92 L50,60 L60,68 L70,55 L80,62 L90,50 L100,58 L110,45 L120,70 L130,65 L140,72 L150,62 L160,68 L170,80 L180,75 L190,82 L200,72 L210,55 L220,60 L230,52 L240,58 L250,50 L260,25 L270,35 L280,20 L290,28 L300,10"
                    stroke="#059669"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  />

                  {/* Shaded Fill Area */}
                  <motion.path
                    d="M0,140 L10,110 L20,112 L30,85 L40,92 L50,60 L60,68 L70,55 L80,62 L90,50 L100,58 L110,45 L120,70 L130,65 L140,72 L150,62 L160,68 L170,80 L180,75 L190,82 L200,72 L210,55 L220,60 L230,52 L240,58 L250,50 L260,25 L270,35 L280,20 L290,28 L300,10 L300,150 L0,150 Z"
                    fill="url(#growwChartGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  />

                  {/* Pulsing Dot at current live peak point */}
                  <motion.circle
                    cx="300"
                    cy="10"
                    r="5"
                    fill="#059669"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                </svg>
              </div>

              {/* Time Interval Selectors */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-[11px] font-extrabold text-slate-500">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-white shadow-xs">1D</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors">1W</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors">1M</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors">3M</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors">1Y</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors">ALL</span>
              </div>

              {/* Bottom Integrated Wealth Calculators Grid */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-brand-green/10 text-brand-green">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Wealth Calculators</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20">
                    Interactive
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {CALCULATOR_ITEMS.slice(0, 4).map((calc) => (
                    <button
                      key={calc.id}
                      onClick={() => setActiveModalCalc(calc.title)}
                      className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-brand-green/10 border border-slate-200/80 hover:border-brand-green/40 text-left transition-all flex items-center justify-between group"
                    >
                      <span className="text-[11px] font-bold text-slate-700 group-hover:text-brand-blue line-clamp-1">
                        {calc.title.split(' ')[0]}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-green group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </WebsiteContainer>

      <CalculatorModal
        isOpen={!!activeModalCalc}
        onClose={() => setActiveModalCalc(null)}
        calculatorTitle={activeModalCalc || ''}
      />
    </SectionWrapper>
  );
};
