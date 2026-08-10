'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FAQ_DATA } from '@/data/homepage';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <SectionWrapper variant="muted" padding="lg" className="bg-slate-50/70">
      <WebsiteContainer size="lg">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-brand-green" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Guidelines for Investors
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear insights into our fiduciary standard, minimum thresholds, security, and account onboarding.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <AnimatedSection key={idx} delay={idx * 0.06}>
                <div
                  className={`rounded-2xl border bg-white overflow-hidden transition-all shadow-sm ${
                    isOpen ? 'border-brand-green/40 shadow-brand-green/5' : 'border-slate-200 shadow-slate-200/40'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-blue transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-green' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </WebsiteContainer>
    </SectionWrapper>
  );
};
