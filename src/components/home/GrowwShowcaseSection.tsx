'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { CTAButton } from '@/components/ui/CTAButton';
import { TrendingUp, BarChart2, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ShowcaseSlide {
  id: string;
  category: string;
  leftTitle: string;
  leftDesc: string;
  buttonText: string;
  buttonHref: string;
  screenTitle: string;
  accentColor: string;
  chartType: 'candlestick' | 'area' | 'depth' | 'matrix';
}

const SLIDES: ShowcaseSlide[] = [
  {
    id: 'terminal',
    category: 'QUANTITATIVE PLATFORM',
    leftTitle: 'Track portfolios, risk metrics & execute in a customisable terminal',
    leftDesc: 'Institutional multi-asset dashboard with real-time candlestick charts, volatility index tracking, and zero-latency order routing.',
    buttonText: 'Explore Terminal',
    buttonHref: '/wealth-management',
    screenTitle: 'R9 PRO TERMINAL — NIFTY 50 / PORTFOLIO',
    accentColor: '#10B981',
    chartType: 'candlestick',
  },
  {
    id: 'fiduciary-vault',
    category: 'FIDUCIARY CUSTODY',
    leftTitle: 'Segregated Tier-1 Vaults with BlackRock & Goldman Sachs',
    leftDesc: 'Direct institutional custody with zero proprietary product conflicts and 100% legal fiduciary protection.',
    buttonText: 'View Custody Vaults',
    buttonHref: '/wealth-management',
    screenTitle: 'CUSTODY VAULT MONITOR — #R9-NYC-882',
    accentColor: '#4172B8',
    chartType: 'area',
  },
  {
    id: 'risk-engine',
    category: 'ALGORITHMIC RISK ENGINE',
    leftTitle: 'Macro stress testing with 10,000+ real-time market simulations',
    leftDesc: 'Automated downside risk hedging models designed to preserve capital before volatility impacts portfolio returns.',
    buttonText: 'Analyze Risk Engine',
    buttonHref: '/services',
    screenTitle: 'ALGORITHMIC STRESS ENGINE — MODEL v4.2',
    accentColor: '#7AB539',
    chartType: 'depth',
  },
  {
    id: 'family-governance',
    category: 'MULTI-FAMILY OFFICE',
    leftTitle: 'Bespoke intergenerational wealth governance & estate optimization',
    leftDesc: 'End-to-end trust structuring, tax optimization, and succession planning tailored for ultra-high-net-worth families.',
    buttonText: 'Schedule Audit',
    buttonHref: '/consultation',
    screenTitle: 'FAMILY OFFICE GOVERNANCE — TIER 1',
    accentColor: '#F59E0B',
    chartType: 'matrix',
  },
];

export const GrowwShowcaseSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const slideIndexTransform = useTransform(scrollYProgress, [0, 1], [0, SLIDES.length - 1]);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  useEffect(() => {
    const unsub = slideIndexTransform.on('change', (latest) => {
      setCurrentSlideIdx(Math.min(SLIDES.length - 1, Math.max(0, Math.round(latest))));
    });
    return () => unsub();
  }, [slideIndexTransform]);

  const activeSlide = SLIDES[currentSlideIdx];

  return (
    <div
      ref={targetRef}
      className="relative w-full bg-[#050816] text-white overflow-hidden"
      style={{ height: `${SLIDES.length * 100}vh` }}
    >
      {/* Background Ambient Lighting */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Sticky Window Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-between z-10 px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        
        {/* Top Header Badge — Fixed Position */}
        <div className="w-full flex items-center justify-center pt-2">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-sm sm:text-base lg:text-lg font-extrabold text-white tracking-wide">
              Manage Generational Wealth Like A Pro
            </h2>
          </div>
        </div>

        {/* Center Main Split Viewport */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Column — Synchronized Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5"
              >
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                  {activeSlide.category}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
                  {activeSlide.leftTitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {activeSlide.leftDesc}
                </p>

                <div className="pt-2">
                  <CTAButton href={activeSlide.buttonHref} variant="green" size="lg" glow>
                    {activeSlide.buttonText} <ChevronRight className="w-4 h-4 ml-1 inline" />
                  </CTAButton>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 pt-4">
              {SLIDES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlideIdx ? 'w-8 bg-brand-green' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column — Groww-Style Dual Overlapping Screen Mockup */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Desktop Terminal Display Window */}
            <div className="relative w-full max-w-[620px] aspect-[16/10] bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              
              {/* Window Titlebar */}
              <div className="w-full bg-slate-900 py-2.5 px-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                  {activeSlide.screenTitle}
                </span>
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  LIVE
                </span>
              </div>

              {/* Dynamic Screen Viewport with AnimatePresence */}
              <div className="relative flex-1 bg-slate-950 p-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    {activeSlide.chartType === 'candlestick' && (
                      <div className="flex flex-col gap-4 h-full">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-slate-400 font-semibold">NIFTY 50 INDEX</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-black text-white">22,508.15</span>
                              <span className="text-xs font-bold text-emerald-400">+67.55 (+0.27%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-slate-400 font-semibold">Overall P&L</span>
                            <p className="text-lg font-bold text-emerald-400">+₹3,23,500.00</p>
                          </div>
                        </div>

                        {/* Candlestick SVG Graphic */}
                        <div className="flex-1 w-full bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 relative">
                          <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" fill="none">
                            <line x1="0" y1="60" x2="400" y2="60" stroke="#334155" strokeDasharray="4 4" />
                            
                            {/* Green / Red Candlesticks */}
                            <line x1="30" y1="40" x2="30" y2="90" stroke="#10B981" strokeWidth="2" />
                            <rect x="23" y="50" width="14" height="30" fill="#10B981" rx="2" />

                            <line x1="70" y1="30" x2="70" y2="100" stroke="#EF4444" strokeWidth="2" />
                            <rect x="63" y="45" width="14" height="40" fill="#EF4444" rx="2" />

                            <line x1="110" y1="20" x2="110" y2="80" stroke="#10B981" strokeWidth="2" />
                            <rect x="103" y="25" width="14" height="45" fill="#10B981" rx="2" />

                            <line x1="150" y1="15" x2="150" y2="70" stroke="#10B981" strokeWidth="2" />
                            <rect x="143" y="20" width="14" height="35" fill="#10B981" rx="2" />

                            <line x1="190" y1="35" x2="190" y2="95" stroke="#EF4444" strokeWidth="2" />
                            <rect x="183" y="40" width="14" height="45" fill="#EF4444" rx="2" />

                            <line x1="230" y1="10" x2="230" y2="65" stroke="#10B981" strokeWidth="2" />
                            <rect x="223" y="15" width="14" height="40" fill="#10B981" rx="2" />

                            <line x1="270" y1="5" x2="270" y2="50" stroke="#10B981" strokeWidth="2" />
                            <rect x="263" y="10" width="14" height="30" fill="#10B981" rx="2" />

                            <line x1="310" y1="2" x2="310" y2="40" stroke="#10B981" strokeWidth="2" />
                            <rect x="303" y="5" width="14" height="25" fill="#10B981" rx="2" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {activeSlide.chartType === 'area' && (
                      <div className="flex flex-col gap-4 h-full justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">Fiduciary Vault Status</span>
                          <span className="text-xs font-bold text-emerald-400">100% Segregated</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <p className="text-xs text-slate-400">Total Fiduciary Assets</p>
                          <p className="text-3xl font-extrabold text-white mt-1">$2.5B+</p>
                          <p className="text-xs text-emerald-400 mt-1">Held with BlackRock & Goldman Sachs Vaults</p>
                        </div>
                      </div>
                    )}

                    {activeSlide.chartType === 'depth' && (
                      <div className="flex flex-col gap-4 h-full justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">Algorithmic Risk Monitor</span>
                          <span className="text-xs font-bold text-blue-400">99.4% Risk Coverage</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <p className="text-xs text-slate-400">Sharpe Ratio</p>
                            <p className="text-2xl font-bold text-emerald-400 mt-1">2.84</p>
                          </div>
                          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <p className="text-xs text-slate-400">Max Drawdown</p>
                            <p className="text-2xl font-bold text-blue-400 mt-1">-3.1%</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSlide.chartType === 'matrix' && (
                      <div className="flex flex-col gap-4 h-full justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">Family Office Governance</span>
                          <span className="text-xs font-bold text-amber-400">Active Estate Shield</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <p className="text-xs text-slate-400">Tax Optimization</p>
                          <p className="text-2xl font-bold text-amber-400 mt-1">-38.2% Savings</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Overlapping Smartphone Mockup Visual */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 sm:-left-8 w-44 sm:w-56 aspect-[9/18] bg-slate-950 rounded-[2rem] border-2 border-slate-800 shadow-2xl p-3 flex flex-col justify-between overflow-hidden"
            >
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto" />
              <div className="flex-1 py-3 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-extrabold text-emerald-400 uppercase">LIVE TRADING</span>
                  <p className="text-xs font-bold text-white leading-tight mt-0.5">NIFTY Call Options</p>
                  <p className="text-base font-extrabold text-emerald-400 mt-1">+₹24,200</p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 text-center">
                  Order Executed →
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full flex items-center justify-between text-xs text-slate-500 pb-2">
          <span>0{currentSlideIdx + 1} / 0{SLIDES.length}</span>
          <span className="uppercase font-bold tracking-widest text-slate-400">R9 ENTERPRISE SHOWCASE</span>
        </div>

      </div>
    </div>
  );
};
