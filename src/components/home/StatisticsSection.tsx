'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  TrendingUp,
  Users,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Building2,
} from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  useSeparator?: boolean;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  useSeparator = true,
  className = '',
}) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 2200; // 2.2 seconds smooth count-up

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out calculation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * value);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, value]);

  const formattedCount = useSeparator ? count.toLocaleString('en-IN') : count.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

interface StatItem {
  id: string;
  number: string;
  numericValue: number;
  prefix: string;
  suffix: string;
  useSeparator: boolean;
  label: string;
  icon: React.FC<{ className?: string }>;
  badge: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const STATS_ITEMS: StatItem[] = [
  {
    id: 'aum',
    number: '₹3,500 Cr+',
    numericValue: 3500,
    prefix: '₹',
    suffix: ' Cr+',
    useSeparator: true,
    label: 'ASSETS UNDER ADVISORY',
    icon: TrendingUp,
    badge: 'Scale & Growth',
    title: 'Disciplined Capital Appreciation',
    description: 'Managing over ₹3,500 Crore in investor wealth across equity portfolios, debt structures, and multi-asset funds with quantitative risk management.',
    image: '/images/stat_growth.jpg',
    highlights: ['Multi-AMC Asset Allocation', 'CAGR Optimized Portfolios', 'Real-time Risk Monitoring'],
  },
  {
    id: 'investors',
    number: '25,000+',
    numericValue: 25000,
    prefix: '',
    suffix: '+',
    useSeparator: true,
    label: 'SATISFIED INVESTORS',
    icon: Users,
    badge: 'Investor Trust',
    title: 'Nationwide Investor Community',
    description: 'Empowering over 25,000 retail, HNW, and corporate investors across India and globally with personalized wealth planning.',
    image: '/images/stat_investors.jpg',
    highlights: ['Bespoke Financial Blueprints', 'Dedicated Wealth Managers', '99.4% Fiduciary Retention'],
  },
  {
    id: 'amfi',
    number: 'Till 2028',
    numericValue: 2028,
    prefix: 'Till ',
    suffix: '',
    useSeparator: false,
    label: 'AMFI REG. VALIDITY',
    icon: ShieldCheck,
    badge: 'Regulatory Trust',
    title: 'AMFI Registered Distributor',
    description: 'Strict regulatory compliance under AMFI Registration ARN – 334421 (Valid 18-July-2025 to 17-July-2028) ensuring complete transparency.',
    image: '/images/stat_compliance.jpg',
    highlights: ['ARN Registered: 334421', 'Zero Hidden Commissions', 'Audited Fiduciary Standards'],
  },
  {
    id: 'advisors',
    number: '120+',
    numericValue: 120,
    prefix: '',
    suffix: '+',
    useSeparator: true,
    label: 'CERTIFIED WEALTH MANAGERS',
    icon: Award,
    badge: 'Expert Leadership',
    title: 'Certified Financial Planners',
    description: 'Our experienced team of 120+ accredited wealth strategists and market research professionals deliver strategic guidance.',
    image: '/images/stat_advisors.jpg',
    highlights: ['CFP Certified Planners', 'Personalized Advisory Desk', 'Proactive Portfolio Reviews'],
  },
];

export const StatisticsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStat = STATS_ITEMS[activeIndex];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-200/70">
      {/* Background Decorative Pattern & Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Financial Excellence & Scale</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Trust</span>, Scale & Performance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base mt-3"
          >
            Hover or tap any statistic card to explore R9 Wealth&apos;s institutional scale and regulatory foundation.
          </motion.p>
        </div>

        {/* Desktop Split & Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 2x2 Grid of Interactive Stat Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {STATS_ITEMS.map((stat, idx) => {
              const isActive = activeIndex === idx;
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-selected={isActive}
                  className={`relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer outline-none flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1.5 scale-[1.02] ring-4 ring-blue-500/10'
                      : 'bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl transition-colors duration-300 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                        isActive
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {stat.badge}
                    </span>
                  </div>

                  {/* Stat Number with Custom Framer Motion AnimatedCounter */}
                  <div>
                    <div
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${
                        isActive ? 'text-blue-900' : 'text-slate-900'
                      }`}
                    >
                      <AnimatedCounter
                        value={stat.numericValue}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        useSeparator={stat.useSeparator}
                      />
                    </div>

                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                      {stat.label}
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? 'text-blue-600 font-bold' : 'text-slate-400'}>
                      {isActive ? 'Active Overview' : 'View Insights'}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'text-blue-600 translate-x-0.5 -translate-y-0.5' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Area (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800/20 bg-slate-950 group">
              {/* Dynamic Image Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStat.id}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={activeStat.image}
                    alt={activeStat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                </motion.div>
              </AnimatePresence>

              {/* Text Overlay Layer */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{activeStat.badge}</span>
                  </span>

                  <span className="text-xl sm:text-2xl font-extrabold text-amber-400 drop-shadow">
                    <AnimatedCounter
                      value={activeStat.numericValue}
                      prefix={activeStat.prefix}
                      suffix={activeStat.suffix}
                      useSeparator={activeStat.useSeparator}
                    />
                  </span>
                </div>

                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStat.id + '-text'}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                        {activeStat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {activeStat.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-white/15 grid grid-cols-1 gap-2">
                    {activeStat.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
