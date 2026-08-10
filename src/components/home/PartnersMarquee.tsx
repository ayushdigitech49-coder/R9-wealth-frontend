'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, ShieldCheck } from 'lucide-react';

const AMC_PARTNERS = [
  'HDFC Mutual Fund',
  'ICICI Prudential',
  'SBI Mutual Fund',
  'Axis Mutual Fund',
  'Nippon India MF',
  'Aditya Birla Sun Life',
  'Kotak Mahindra MF',
  'Mirae Asset',
  'UTI Mutual Fund',
  'DSP Mutual Fund',
  'Edelweiss MF',
  'Tata Mutual Fund',
];

const BANK_PARTNERS = [
  'Axis Bank',
  'Kotak Mahindra Bank',
  'Bajaj Finance',
  'L&T Finance',
  'Tata Capital',
  'PNB Housing',
  'Godrej Capital',
  'HDFC Bank',
  'ICICI Bank',
  'State Bank of India',
];

export const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#0B1228] text-white overflow-hidden relative border-y border-white/10">
      {/* Premium Ambient Lighting Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center relative z-10">
        {/* Top Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-emerald-500/10"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </motion.div>
          <span>INDIA&apos;S MOST TRUSTED FINANCIAL ECOSYSTEM</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
        >
          Partnered with <span className="text-emerald-400">40+ AMCs</span> & <span className="text-blue-400">20+ Banks & NBFCs</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto font-medium leading-relaxed"
        >
          AMFI Registered Mutual Fund Distributor (ARN – 334421) providing multi-asset access under one platform.
        </motion.p>
      </div>

      {/* Marquee Wrapper with Ultra-Smooth Left/Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-48 bg-gradient-to-r from-[#0B1228] via-[#0B1228]/90 to-transparent z-20" />
        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-48 bg-gradient-to-l from-[#0B1228] via-[#0B1228]/90 to-transparent z-20" />

        {/* ROW 1: AMCs (Right -> Left) */}
        <div className="relative mb-4 sm:mb-5 group">
          <div className="flex gap-3.5 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap w-max py-1">
            {[...AMC_PARTNERS, ...AMC_PARTNERS, ...AMC_PARTNERS].map((amc, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#141E43] border border-slate-700/60 hover:border-emerald-400 hover:bg-[#1C2A5C] text-xs sm:text-sm font-semibold text-white shrink-0 transition-all duration-250 cursor-pointer shadow-md hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/15 group/pill"
              >
                <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Building2 className="w-3.5 h-3.5 group-hover/pill:scale-110 transition-transform" />
                </div>
                <span className="tracking-wide">{amc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Banks & NBFCs (Left -> Right) */}
        <div className="relative group">
          <div className="flex gap-3.5 sm:gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap w-max py-1">
            {[...BANK_PARTNERS, ...BANK_PARTNERS, ...BANK_PARTNERS].map((bank, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#141E43] border border-slate-700/60 hover:border-blue-400 hover:bg-[#1C2A5C] text-xs sm:text-sm font-semibold text-white shrink-0 transition-all duration-250 cursor-pointer shadow-md hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 group/pill"
              >
                <div className="p-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Landmark className="w-3.5 h-3.5 group-hover/pill:scale-110 transition-transform" />
                </div>
                <span className="tracking-wide">{bank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
