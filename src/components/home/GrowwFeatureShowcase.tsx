'use client';

import React from 'react';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { ArrowUpRight, TrendingUp, ShieldCheck, PieChart, Cpu } from 'lucide-react';
import { CTAButton } from '@/components/ui/CTAButton';

const SHOWCASE_CARDS = [
  {
    id: 'intraday',
    title: 'Monitor top Intraday stocks in real time',
    linkText: 'Explore Intraday stocks',
    linkHref: '/wealth-management',
    bgGradient: 'from-blue-600 to-indigo-600',
    cardBadge: 'INTRADAY SCREENER',
    price: '₹1,740.15',
    change: '+52.40 (3.10%)',
    stockName: 'Arvali Health Tech',
    icon: TrendingUp,
  },
  {
    id: 'fiduciary',
    title: 'Segregated Custodian Vaults with Tier-1 Institutions',
    linkText: 'Explore Fiduciary Protection',
    linkHref: '/wealth-management',
    bgGradient: 'from-emerald-600 to-teal-700',
    cardBadge: 'FIDUCIARY CUSTODY',
    price: '$2.5B+',
    change: '100% Segregated Asset',
    stockName: 'BlackRock & Goldman Sachs',
    icon: ShieldCheck,
  },
  {
    id: 'risk-engine',
    title: 'Quantitative Risk Technology & Algorithmic Stress Testing',
    linkText: 'Analyze Risk Technology',
    linkHref: '/services',
    bgGradient: 'from-purple-600 to-violet-800',
    cardBadge: 'RISK ALGORITHMS',
    price: '99.4%',
    change: '2.84 Sharpe Ratio',
    stockName: 'Quantitative Risk Engine v4.2',
    icon: Cpu,
  },
  {
    id: 'family-office',
    title: 'Bespoke Multi-Family Governance & Tax Optimization',
    linkText: 'Schedule Family Office Audit',
    linkHref: '/consultation',
    bgGradient: 'from-amber-500 to-orange-600',
    cardBadge: 'FAMILY OFFICE',
    price: '-38.2%',
    change: 'Tax Optimization Savings',
    stockName: 'Intergenerational Trust',
    icon: PieChart,
  },
];

export const GrowwFeatureShowcase: React.FC = () => {
  return (
    <SectionWrapper variant="default" padding="xl" className="bg-[#0A0E1A] text-white py-20 lg:py-28 overflow-hidden">
      <WebsiteContainer size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column — Sticky Fixed Text */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-36 h-fit">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              R9 ENTERPRISE PLATFORM
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Wealth management made simple
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md">
              Fast, simple, and secure institutional investment advisory. All in one unified enterprise platform.
            </p>
            <div className="pt-2">
              <CTAButton href="/consultation" variant="green" size="lg" glow>
                Get Started Today
              </CTAButton>
            </div>
          </div>

          {/* Right Column — Scrolling Feature Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {SHOWCASE_CARDS.map((card) => {
              const IconComp = card.icon;
              return (
                <div key={card.id} className="flex flex-col gap-4 group">
                  {/* Colored Visual Card Mockup */}
                  <div className={`w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl bg-gradient-to-br ${card.bgGradient} p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300`}>
                    
                    {/* Background Pattern Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />

                    {/* Top Phone Mockup Frame Inside Card */}
                    <div className="w-full max-w-[280px] bg-slate-950/90 backdrop-blur-md rounded-2xl border border-white/20 p-4 mx-auto my-auto shadow-2xl flex flex-col gap-3">
                      <div className="w-10 h-1 bg-white/30 rounded-full mx-auto" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-white/10 text-white">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold text-white/60 uppercase tracking-widest">{card.cardBadge}</span>
                            <h4 className="text-xs font-bold text-white leading-tight">{card.stockName}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pt-1 border-t border-white/10 flex items-baseline justify-between">
                        <span className="text-lg font-extrabold text-white">{card.price}</span>
                        <span className="text-xs font-bold text-emerald-400">{card.change}</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Caption Title & Link */}
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {card.title}
                    </h3>
                    <a
                      href={card.linkHref}
                      className="inline-flex items-center gap-1 text-sm font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors w-fit group-hover:underline"
                    >
                      <span>{card.linkText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </WebsiteContainer>
    </SectionWrapper>
  );
};
