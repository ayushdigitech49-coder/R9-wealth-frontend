'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { SERVICES_DATA } from '@/data/homepage';
import {
  PieChart,
  TrendingUp,
  Layers,
  ShieldCheck,
  Umbrella,
  Calculator,
  Coins,
  CreditCard,
  ArrowRight,
  PlayCircle,
  Building2,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  PieChart,
  TrendingUp,
  Layers,
  ShieldCheck,
  Umbrella,
  Calculator,
  Coins,
  CreditCard,
  Building2,
};

// Vibrant theme styling matching reference image
const cardThemes = [
  { bg: 'bg-[#FDF6E3]', text: 'text-emerald-950', sub: 'text-emerald-900/80', badgeBg: 'bg-emerald-800 text-white', langTag: 'Equity' },
  { bg: 'bg-[#18181B]', text: 'text-white', sub: 'text-slate-300', badgeBg: 'bg-white text-black', langTag: 'Direct PMS' },
  { bg: 'bg-[#0B2545]', text: 'text-emerald-400', sub: 'text-slate-200', badgeBg: 'bg-emerald-500 text-slate-950', langTag: 'Alternatives' },
  { bg: 'bg-[#FAF0CA]', text: 'text-stone-900', sub: 'text-stone-700', badgeBg: 'bg-amber-800 text-white', langTag: 'Bonds' },
  { bg: 'bg-[#09090B]', text: 'text-white', sub: 'text-slate-400', badgeBg: 'bg-pink-600 text-white', langTag: 'Insurance' },
  { bg: 'bg-[#A3B18A]', text: 'text-slate-950', sub: 'text-slate-900', badgeBg: 'bg-slate-900 text-white', langTag: 'Taxation' },
  { bg: 'bg-[#1E293B]', text: 'text-emerald-400', sub: 'text-slate-300', badgeBg: 'bg-emerald-500 text-slate-950', langTag: 'Yield' },
];

export const ServicesSection: React.FC = () => {
  const duplicatedServices = [...SERVICES_DATA, ...SERVICES_DATA];

  return (
    <SectionWrapper variant="default" padding="xl" className="bg-white text-slate-900 py-16 sm:py-24 overflow-hidden relative border-b border-slate-100">
      <WebsiteContainer size="xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 gap-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bespoke Private Wealth & Investment Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Institutional-grade wealth management simplified for ultra-high-net-worth families.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-sm text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer mt-1">
            <PlayCircle className="w-4 h-4 text-red-600 fill-red-600/10" />
            <span>Explore Wealth Solutions</span>
          </div>
        </div>

        {/* 3D Arc Curved Deck Marquee Container */}
        <div className="relative w-full py-6 overflow-hidden flex items-center min-h-[490px]">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 flex-nowrap perspective-[1200px]"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
            }}
          >
            {duplicatedServices.map((service, idx) => {
              const theme = cardThemes[idx % cardThemes.length];
              const IconComp = iconMap[service.iconName] || PieChart;

              // Compute 3D curved deck tilt for each card position in sequence
              const posInSet = idx % SERVICES_DATA.length;
              const centerOffset = posInSet - 3.5;
              const rotateY = centerOffset * -5;
              const rotateZ = centerOffset * 1.2;
              const translateY = Math.abs(centerOffset) * 5;

              return (
                <div
                  key={`${service.id}-${idx}`}
                  style={{
                    transform: `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`,
                  }}
                  className={`relative flex-shrink-0 w-[240px] sm:w-[270px] h-[410px] sm:h-[440px] rounded-[2rem] p-5 shadow-xl flex flex-col justify-between transition-all duration-300 border border-black/10 transform-gpu select-none group ${theme.bg}`}
                >
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-extrabold ${theme.text}`}>
                      {theme.langTag}
                    </span>
                    <div className={`p-1.5 rounded-xl bg-black/10 ${theme.text}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* High Quality Card Image Box */}
                  <div className="relative w-full h-[150px] sm:h-[165px] rounded-2xl overflow-hidden mb-3 border border-black/10 group-hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src={service.image || '/images/stat_growth.jpg'}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {service.badge && (
                      <span className={`absolute bottom-2 left-2 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md ${theme.badgeBg}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Main Title & Description Content */}
                  <div className="flex flex-col gap-1.5 my-auto">
                    <h3 className={`text-base sm:text-lg font-black leading-snug tracking-tight ${theme.text}`}>
                      {service.title}
                    </h3>
                    <p className={`text-[11px] sm:text-xs leading-relaxed line-clamp-2 font-medium opacity-90 ${theme.sub}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-3 border-t border-current/10 flex items-center justify-between mt-2">
                    <span className={`text-xs font-bold ${theme.text}`}>
                      Explore Capability
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-black/10 group-hover:bg-black/20 ${theme.text} transition-colors`}>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </WebsiteContainer>
    </SectionWrapper>
  );
};
