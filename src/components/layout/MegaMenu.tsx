'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MegaMenuColumn } from '@/types/navigation';
import {
  Briefcase,
  ShieldCheck,
  Calculator,
  TrendingUp,
  Coins,
  Building2,
  PieChart,
  Activity,
  Leaf,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  ShieldCheck,
  Calculator,
  TrendingUp,
  Coins,
  Building2,
  PieChart,
  Activity,
  Leaf,
};

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ columns, isOpen, onClose, onMouseEnter }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.99 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute top-full left-0 w-full pt-2 z-50 pointer-events-auto"
        onMouseEnter={() => {}}
        onMouseLeave={onClose}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden relative">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Main Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                {col.category}
              </h3>

              <div className="flex flex-col gap-2">
                {col.items.map((item) => {
                  const IconComp = (item.icon && iconMap[item.icon]) || Briefcase;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Feature Highlight Box */}
          <div className="hidden lg:flex flex-col justify-between p-6 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden border border-slate-800">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                R9 Advisory Portal
              </div>
              <h4 className="text-base font-bold text-slate-100 mb-1.5">
                Bespoke Portfolio Consultation
              </h4>
              <p className="text-xs text-slate-300">
                Connect with an accredited senior wealth strategist for personalized allocation modeling.
              </p>
            </div>

            <div className="mt-6 relative z-10">
              <Link
                href="/consultation"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 group"
              >
                <span>Book Advisory Session</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
