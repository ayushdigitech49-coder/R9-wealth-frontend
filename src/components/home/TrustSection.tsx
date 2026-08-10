'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PARTNER_LOGOS } from '@/data/homepage';
import { ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white py-7 overflow-hidden relative border-y border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          Global Custodian & Institutional Research Network
        </p>
      </div>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex items-center gap-6 shrink-0 pr-6"
        >
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-white hover:border-brand-blue/60 transition-all shadow-md group"
            >
              {/* Partner Logo Emblem */}
              <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-black text-brand-blue group-hover:text-brand-green group-hover:border-brand-green/40 transition-colors">
                {partner.code}
              </div>
              
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-100">{partner.name}</span>
              <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-brand-blue/30 text-blue-300 border border-blue-400/20">
                {partner.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
