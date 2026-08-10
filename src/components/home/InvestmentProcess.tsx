'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { PROCESS_STEPS } from '@/data/homepage';
import { Search, Compass, CheckCircle2, Activity, Zap, ChevronRight } from 'lucide-react';
import { CTAButton } from '@/components/ui/CTAButton';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Compass,
  CheckCircle2,
  Activity,
  Zap,
};

export const InvestmentProcess: React.FC = () => {
  return (
    <SectionWrapper variant="default" padding="xl" className="bg-[#050816] text-white py-16 lg:py-24 overflow-hidden relative">
        {/* Ambient background blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Content area */}
        <div className="relative z-10 h-full flex flex-col pt-16 lg:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          <WebsiteContainer size="xl">
            {/* Top Header */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                Disciplined Fiduciary Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Our 5-Step Private Wealth Journey
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                A structured roadmap designed to preserve capital while maximizing risk-adjusted compound returns.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* LEFT COLUMN — Framework Info Card */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="p-6 sm:p-7 rounded-[2rem] bg-slate-900/90 border border-slate-800 flex flex-col gap-4 shadow-2xl">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 w-fit">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-xs font-bold text-slate-300">Fiduciary Standard</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    Institutional Wealth Governance Framework
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our proprietary 5-stage fiduciary engine integrates continuous risk auditing, tax optimization, and bespoke portfolio allocation — engineered for ultra-high-net-worth families.
                  </p>

                  <ul className="flex flex-col gap-2.5 text-sm text-slate-300 pt-1">
                    {[
                      'Strict Fiduciary Duty & Independent Custody',
                      'Quantitative Risk Tech & Macro Stress Testing',
                      'Bespoke Multi-Asset Allocation Engine',
                      'Intergenerational Wealth Transfer & Governance'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <CTAButton href="/consultation" variant="green" size="lg" glow>
                      Start Your Journey <ChevronRight className="w-4 h-4 ml-1 inline" />
                    </CTAButton>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN — Mouse / Cursor Direct Scrollable Cards Stream (No outer box boundary) */}
              <div className="lg:col-span-7 relative h-[480px] overflow-hidden">
                {/* Top & bottom fade masks matching background color */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#050816] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050816] to-transparent z-20 pointer-events-none" />

                {/* Direct mouse wheel / cursor scroll container with hidden scrollbar */}
                <div className="h-full overflow-y-auto pr-1 flex flex-col gap-4 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {PROCESS_STEPS.map((step, idx) => {
                    const IconComp = iconMap[step.iconName] || Search;
                    const isBlue = idx % 2 === 0;
                    return (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className={`w-full p-5 sm:p-6 rounded-2xl bg-[#050816] border transition-all duration-300 hover:border-slate-600 ${
                          isBlue ? 'border-slate-800 shadow-brand-blue/5' : 'border-slate-800 shadow-brand-green/5'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-0.5">
                            <span className={`text-3xl font-black tracking-tight leading-none ${isBlue ? 'text-brand-blue' : 'text-brand-green'}`}>
                              {step.step}
                            </span>
                            <div className={`p-1.5 rounded-lg ${isBlue ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-green/10 text-brand-green'}`}>
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 flex-1">
                            <h3 className="text-base font-extrabold text-white">
                              {step.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </WebsiteContainer>
      </div>
    </SectionWrapper>
  );
};
