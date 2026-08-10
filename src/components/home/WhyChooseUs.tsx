'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShieldCheck, Cpu, Target, Scale, CheckCircle2, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Strict Fiduciary Duty',
    description: '100% independent advisory with zero proprietary product conflicts. Our legal commitment is strictly to your portfolio growth.',
  },
  {
    icon: Cpu,
    title: 'Institutional Risk Technology',
    description: 'Proprietary quantitative engines, algorithmic stress testing, and real-time portfolio rebalancing models.',
  },
  {
    icon: Target,
    title: 'Bespoke Asset Allocation',
    description: 'Customized multi-asset strategies aligned precisely with your liquidity requirements and generational goals.',
  },
  {
    icon: Scale,
    title: 'Multi-Family Governance',
    description: 'End-to-end estate planning, tax optimization, philanthropic structuring, and intergenerational wealth transfer.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <SectionWrapper variant="default" padding="xl" className="bg-[#050816] text-white py-20 lg:py-28 overflow-hidden relative">
      {/* Dark Ambient Backlight */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none" />

      <WebsiteContainer size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column — Headline & Fiduciary Bullets */}
          <AnimatedSection direction="left" className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
              The R9 Enterprise Distinction
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15]">
              Why High Net Worth Families & Institutions Partner with R9 Wealth
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Combining institutional-grade quantitative risk management with bespoke private wealth advisory.
            </p>

            <div className="pt-2 flex flex-col gap-3.5">
              {[
                'Segregated Custodian Vaults (BlackRock & Goldman Sachs)',
                'Dedicated Senior Wealth Strategist (1-on-1 Fiduciary)',
                'Transparent Fee Model (No Hidden Commissions)',
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column — Quantitative Asset Modeling Visual */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6 relative">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/20 border border-slate-800 bg-slate-900/90 flex items-center justify-center">
              <div className="text-center p-8 flex flex-col items-center">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="inline-flex p-4 rounded-2xl bg-brand-green/10 text-brand-green mb-4 shadow-sm"
                >
                  <TrendingUp className="w-10 h-10" />
                </motion.div>
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                  Quantitative Asset Modeling
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  $2.5B+ Under Fiduciary Management
                </h3>
                <p className="text-sm text-slate-400 mt-2 font-medium">Real-time portfolio analytics & risk assessment</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            const isBlue = idx % 2 === 0;
            return (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`flex flex-col gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border shadow-2xl transition-all duration-300 h-full group ${
                    isBlue ? 'border-slate-800 hover:border-brand-blue/60' : 'border-slate-800 hover:border-brand-green/60'
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl w-fit transition-colors ${
                      isBlue ? 'bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-white' : 'bg-brand-green/15 text-brand-green group-hover:bg-brand-green group-hover:text-slate-950'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </WebsiteContainer>
    </SectionWrapper>
  );
};



