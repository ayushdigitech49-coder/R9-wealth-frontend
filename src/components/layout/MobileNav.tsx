'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, TOP_BAR_CONFIG } from '@/config/navigation';
import { Logo } from '@/components/ui/Logo';
import { CTAButton } from '@/components/ui/CTAButton';
import { X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedMenu((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-50 lg:hidden flex flex-col justify-between overflow-hidden"
          >
            {/* Header / Brand */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
              <Logo />
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items Container */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const isExpanded = expandedMenu === item.title;

                if (item.type === 'megamenu' && item.megaMenuColumns) {
                  return (
                    <div key={item.title} className="border-b border-slate-100 dark:border-slate-800/60 py-2">
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="w-full flex items-center justify-between py-2.5 text-base font-bold text-slate-900 dark:text-slate-100"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-4 py-3"
                          >
                            {item.megaMenuColumns.map((col, idx) => (
                              <div key={idx} className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                                  {col.category}
                                </span>
                                {col.items.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between"
                                  >
                                    <span>{sub.title}</span>
                                    {sub.badge && (
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.type === 'dropdown' && item.items) {
                  return (
                    <div key={item.title} className="border-b border-slate-100 dark:border-slate-800/60 py-2">
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="w-full flex items-center justify-between py-2.5 text-base font-bold text-slate-900 dark:text-slate-100"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-2 py-2"
                          >
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={onClose}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1.5"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className={`py-3 text-base font-bold border-b border-slate-100 dark:border-slate-800/60 transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-900 dark:text-slate-100 hover:text-blue-600'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer / CTA Area */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col gap-4">
              <CTAButton href="/consultation" variant="gold" size="lg" className="w-full">
                Schedule Advisory Call
              </CTAButton>

              <div className="flex flex-col gap-2 text-xs text-slate-500 pt-2">
                <a
                  href={`tel:${TOP_BAR_CONFIG.phone}`}
                  className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{TOP_BAR_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${TOP_BAR_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-green-600" />
                  <span>{TOP_BAR_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
