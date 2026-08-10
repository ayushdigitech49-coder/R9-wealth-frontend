'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { AWARDS_DATA } from '@/data/homepage';
import { Award, Trophy } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <SectionWrapper variant="muted" padding="sm" className="bg-slate-50 border-y border-slate-200/80">
      <WebsiteContainer size="xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="p-3 rounded-2xl bg-brand-green/10 text-brand-green border border-brand-green/20 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Recognized Wealth Leadership
              </h3>
              <p className="text-xs text-slate-500">
                Global industry accolades for quantitative innovation and fiduciary excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {AWARDS_DATA.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 hover:border-brand-blue/30 transition-colors"
              >
                <Award className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    {award.title}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {award.organization} ({award.year})
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </WebsiteContainer>
    </SectionWrapper>
  );
};
