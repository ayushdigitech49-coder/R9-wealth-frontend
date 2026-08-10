'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Sparkles,
  Target,
  RefreshCw,
  Eye,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';

interface Principle {
  id: number;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  lineColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  glowColor: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: 1,
    num: '01',
    title: 'People',
    subtitle: 'Experienced Leadership',
    description:
      'Seasoned wealth managers, CFPs, and market experts dedicated to preserving and growing your capital.',
    icon: Users,
    accentColor: 'text-blue-600',
    lineColor: '#3B82F6',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/20 ring-blue-500/15',
  },
  {
    id: 2,
    num: '02',
    title: 'Personalization',
    subtitle: 'Tailored Financial Blueprint',
    description:
      'Custom asset allocation strategies aligned strictly with your risk profile, age, tax status, and cash flow needs.',
    icon: Sparkles,
    accentColor: 'text-emerald-600',
    lineColor: '#10B981',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    borderColor: 'border-emerald-400',
    glowColor: 'shadow-emerald-500/20 ring-emerald-500/15',
  },
  {
    id: 3,
    num: '03',
    title: 'Purpose',
    subtitle: 'Goal-Centric Wealth Building',
    description:
      'Every recommendation is designed around real life milestones — retirement, education, legacy, or capital growth.',
    icon: Target,
    accentColor: 'text-purple-600',
    lineColor: '#8B5CF6',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    borderColor: 'border-purple-400',
    glowColor: 'shadow-purple-500/20 ring-purple-500/15',
  },
  {
    id: 4,
    num: '04',
    title: 'Process',
    subtitle: 'Disciplined Execution',
    description:
      'Proprietary rebalancing frameworks and quantitative risk monitoring to navigate market volatility with confidence.',
    icon: RefreshCw,
    accentColor: 'text-amber-600',
    lineColor: '#F59E0B',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    borderColor: 'border-amber-400',
    glowColor: 'shadow-amber-500/20 ring-amber-500/15',
  },
  {
    id: 5,
    num: '05',
    title: 'Transparency',
    subtitle: 'Zero Hidden Commissions',
    description:
      '100% compliant AMFI Registered entity (ARN – 334421) committed to clear portfolio reporting and ethical advice.',
    icon: Eye,
    accentColor: 'text-rose-600',
    lineColor: '#F43F5E',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    borderColor: 'border-rose-400',
    glowColor: 'shadow-rose-500/20 ring-rose-500/15',
  },
  {
    id: 6,
    num: '06',
    title: 'Product',
    subtitle: '360° Financial Universe',
    description:
      'Full suite of Mutual Funds, FDs, PMS, AIFs, Bonds, Real Estate, and Insurance under one integrated roof.',
    icon: PackageCheck,
    accentColor: 'text-teal-600',
    lineColor: '#14B8A6',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    borderColor: 'border-teal-400',
    glowColor: 'shadow-teal-500/20 ring-teal-500/15',
  },
];

export const WhyChooseUsSixPs: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const activePrinciple = PRINCIPLES.find((p) => p.id === activeId) || PRINCIPLES[0];
  const ActiveIcon = activePrinciple.icon;

  // DOM Refs for dynamic SVG line calculation
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const [centerCoords, setCenterCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [nodeCoords, setNodeCoords] = useState<Record<number, { x: number; y: number }>>({});

  useEffect(() => {
    const updateCoordinates = () => {
      if (!containerRef.current || !coreRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const coreRect = coreRef.current.getBoundingClientRect();

      const cx = coreRect.left + coreRect.width / 2 - containerRect.left;
      const cy = coreRect.top + coreRect.height / 2 - containerRect.top;

      const coords: Record<number, { x: number; y: number }> = {};

      Object.keys(nodeRefs.current).forEach((key) => {
        const id = Number(key);
        const el = nodeRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          coords[id] = {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          };
        }
      });

      setCenterCoords({ x: cx, y: cy });
      setNodeCoords(coords);
    };

    updateCoordinates();
    const timer = setTimeout(updateCoordinates, 150);
    window.addEventListener('resize', updateCoordinates);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCoordinates);
    };
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/70">
      {/* Background Decorative Pattern & Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Why Investors Choose Amoolya by R9 Wealth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">6 P&apos;s</span> Advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Our core foundation delivers strategic investment solutions designed to grow, protect, and structure your wealth with precision.
          </motion.p>
        </div>

        {/* FULL-WIDTH DESKTOP RADIAL ECOSYSTEM (Hidden on Mobile < 1024px) */}
        <div
          ref={containerRef}
          className="hidden lg:flex relative w-full max-w-6xl mx-auto h-[580px] items-center justify-between px-4 my-4"
        >
          {/* Dynamic SVG Connecting Lines Layer - CLEAN SOLID LINES & SMOOTH DOT PULSE */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            {centerCoords.x > 0 &&
              PRINCIPLES.map((item) => {
                const isActive = item.id === activeId;
                const coords = nodeCoords[item.id];
                if (!coords) return null;

                return (
                  <g key={item.id}>
                    {/* Clean Solid Connection Line */}
                    <line
                      x1={coords.x}
                      y1={coords.y}
                      x2={centerCoords.x}
                      y2={centerCoords.y}
                      stroke={isActive ? item.lineColor : '#CBD5E1'}
                      strokeWidth={isActive ? 3 : 1.5}
                      opacity={isActive ? 0.95 : 0.3}
                      className="transition-all duration-300"
                    />

                    {/* Smooth Pulse Dot moving towards center */}
                    {isActive && (
                      <motion.circle
                        r="5"
                        fill={item.lineColor}
                        initial={{
                          cx: coords.x,
                          cy: coords.y,
                        }}
                        animate={{
                          cx: [coords.x, centerCoords.x],
                          cy: [coords.y, centerCoords.y],
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </g>
                );
              })}
          </svg>

          {/* LEFT COLUMN: Node 02 (Personalization) & Node 04 (Process) */}
          <div className="flex flex-col justify-between h-[400px] z-10">
            {[PRINCIPLES[1], PRINCIPLES[3]].map((item) => {
              const isActive = item.id === activeId;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => { nodeRefs.current[item.id] = el; }}
                >
                  <motion.div
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    tabIndex={0}
                    role="button"
                    aria-selected={isActive}
                    whileHover={{ scale: 1.04, x: -4 }}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      x: isActive ? -4 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`w-[230px] xl:w-[250px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer outline-none ${
                      isActive
                        ? `bg-white border-2 ${item.borderColor} shadow-xl ${item.glowColor} ring-4`
                        : 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${item.badgeBg} ${item.badgeText}`}>
                        {item.num}
                      </span>
                      <div className={`p-2 rounded-xl ${item.badgeBg} ${item.accentColor}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className={`text-xs font-semibold ${item.accentColor} mt-1 truncate`}>
                      {item.subtitle}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Node 01 (People) TOP, R9 WEALTH CORE CENTER, Node 06 (Product) BOTTOM */}
          <div className="flex flex-col items-center justify-between h-full z-20">
            {/* Top Node: Node 01 (People) */}
            <div ref={(el) => { nodeRefs.current[1] = el; }}>
              <motion.div
                onMouseEnter={() => setActiveId(1)}
                onClick={() => setActiveId(1)}
                tabIndex={0}
                role="button"
                aria-selected={activeId === 1}
                whileHover={{ scale: 1.04, y: -4 }}
                animate={{
                  scale: activeId === 1 ? 1.04 : 1,
                  y: activeId === 1 ? -4 : 0,
                }}
                transition={{ duration: 0.25 }}
                className={`w-[230px] xl:w-[250px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer outline-none ${
                  activeId === 1
                    ? `bg-white border-2 ${PRINCIPLES[0].borderColor} shadow-xl ${PRINCIPLES[0].glowColor} ring-4`
                    : 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-md ${PRINCIPLES[0].badgeBg} ${PRINCIPLES[0].badgeText}`}>
                    {PRINCIPLES[0].num}
                  </span>
                  <div className={`p-2 rounded-xl ${PRINCIPLES[0].badgeBg} ${PRINCIPLES[0].accentColor}`}>
                    <Users className="w-4.5 h-4.5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {PRINCIPLES[0].title}
                </h3>
                <p className={`text-xs font-semibold ${PRINCIPLES[0].accentColor} mt-1 truncate`}>
                  {PRINCIPLES[0].subtitle}
                </p>
              </motion.div>
            </div>

            {/* Central R9 WEALTH CORE Circle */}
            <div ref={coreRef} className="relative my-2">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    '0 0 25px rgba(16, 185, 129, 0.25)',
                    '0 0 45px rgba(16, 185, 129, 0.45)',
                    '0 0 25px rgba(16, 185, 129, 0.25)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#06091F] via-[#0B1238] to-[#040614] border-2 border-emerald-400/50 flex flex-col items-center justify-center text-center p-4 shadow-2xl relative overflow-hidden"
              >
                {/* Clean Solid Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-emerald-400/30 pointer-events-none" />

                <div className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest mb-0.5">
                  AMOOLYA BY
                </div>
                <div className="text-2xl font-black text-white tracking-tight leading-none">
                  R9 <span className="text-emerald-400">WEALTH</span>
                </div>
                <div className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest mt-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15">
                  CORE SYSTEM
                </div>

                {/* Orbiting particle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400 absolute top-2 left-1/2 -translate-x-1/2" />
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Node: Node 06 (Product) */}
            <div ref={(el) => { nodeRefs.current[6] = el; }}>
              <motion.div
                onMouseEnter={() => setActiveId(6)}
                onClick={() => setActiveId(6)}
                tabIndex={0}
                role="button"
                aria-selected={activeId === 6}
                whileHover={{ scale: 1.04, y: 4 }}
                animate={{
                  scale: activeId === 6 ? 1.04 : 1,
                  y: activeId === 6 ? 4 : 0,
                }}
                transition={{ duration: 0.25 }}
                className={`w-[230px] xl:w-[250px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer outline-none ${
                  activeId === 6
                    ? `bg-white border-2 ${PRINCIPLES[5].borderColor} shadow-xl ${PRINCIPLES[5].glowColor} ring-4`
                    : 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-md ${PRINCIPLES[5].badgeBg} ${PRINCIPLES[5].badgeText}`}>
                    {PRINCIPLES[5].num}
                  </span>
                  <div className={`p-2 rounded-xl ${PRINCIPLES[5].badgeBg} ${PRINCIPLES[5].accentColor}`}>
                    <PackageCheck className="w-4.5 h-4.5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {PRINCIPLES[5].title}
                </h3>
                <p className={`text-xs font-semibold ${PRINCIPLES[5].accentColor} mt-1 truncate`}>
                  {PRINCIPLES[5].subtitle}
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Node 03 (Purpose) & Node 05 (Transparency) */}
          <div className="flex flex-col justify-between h-[400px] z-10">
            {[PRINCIPLES[2], PRINCIPLES[4]].map((item) => {
              const isActive = item.id === activeId;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => { nodeRefs.current[item.id] = el; }}
                >
                  <motion.div
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    tabIndex={0}
                    role="button"
                    aria-selected={isActive}
                    whileHover={{ scale: 1.04, x: 4 }}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      x: isActive ? 4 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`w-[230px] xl:w-[250px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer outline-none ${
                      isActive
                        ? `bg-white border-2 ${item.borderColor} shadow-xl ${item.glowColor} ring-4`
                        : 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${item.badgeBg} ${item.badgeText}`}>
                        {item.num}
                      </span>
                      <div className={`p-2 rounded-xl ${item.badgeBg} ${item.accentColor}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className={`text-xs font-semibold ${item.accentColor} mt-1 truncate`}>
                      {item.subtitle}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE FLOW (< 1024px) */}
        <div className="lg:hidden space-y-6">
          {/* Mobile R9 Core Badge */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-[#06091F] via-[#0B1238] to-[#040614] border-2 border-emerald-400 p-2 shadow-xl mb-2">
              <div className="text-center">
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block">R9 WEALTH</span>
                <span className="text-xl font-black text-white block">CORE</span>
              </div>
            </div>
          </div>

          {/* Mobile Stacked Interactive Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRINCIPLES.map((item) => {
              const isActive = item.id === activeId;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    isActive
                      ? `bg-white ${item.borderColor} shadow-lg ring-2 ring-emerald-500/20`
                      : 'bg-white/90 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${item.badgeBg} ${item.badgeText}`}>
                      {item.num}
                    </span>
                    <Icon className={`w-4 h-4 ${item.accentColor}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className={`text-xs font-semibold ${item.accentColor}`}>{item.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* DYNAMIC ACTIVE DETAIL INFORMATION PANEL */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePrinciple.id}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl ${activePrinciple.badgeBg} ${activePrinciple.accentColor} border border-slate-200/60`}>
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded ${activePrinciple.badgeBg} ${activePrinciple.badgeText}`}>
                        PRINCIPLE {activePrinciple.num}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">R9 WEALTH CORE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                      {activePrinciple.title}
                    </h3>
                  </div>
                </div>

                <div className={`text-xs font-bold px-3.5 py-1.5 rounded-full ${activePrinciple.badgeBg} ${activePrinciple.badgeText} border border-slate-200/80`}>
                  {activePrinciple.subtitle}
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {activePrinciple.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Integrated with R9 Wealth Core Governance</span>
                </span>
                <span className="text-slate-400 hidden sm:inline">Hover or tap any principle node above</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
