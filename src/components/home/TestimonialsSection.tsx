'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { TESTIMONIALS_DATA } from '@/data/homepage';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />

      <WebsiteContainer size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>CLIENT ENDORSEMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">Visionary Founders</span> & Family Offices
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed font-medium"
          >
            Read how R9 Wealth&apos;s quantitative fiduciary advisory transforms capital preservation.
          </motion.p>
        </div>

        {/* 3-Column Card Layout Matching Reference Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2.2rem] p-7 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200/80 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 relative group overflow-hidden"
            >
              {/* Top Centered Avatar with Glowing Border Ring */}
              <div className="relative mb-5">
                <div className="p-1 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-blue-500 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-6 px-1 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* 5-Star Rating */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Vibrant Accent Gradient Divider Bar */}
              <div className="h-1.5 w-3/4 max-w-[200px] bg-gradient-to-r from-blue-500 via-emerald-400 to-teal-400 rounded-full mx-auto mb-5 shadow-sm" />

              {/* Client Name & Designation */}
              <div className="flex flex-col items-center mt-auto">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {item.title}, {item.company}
                </p>
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 mt-3">
                  {item.portfolioTier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </WebsiteContainer>
    </section>
  );
};
