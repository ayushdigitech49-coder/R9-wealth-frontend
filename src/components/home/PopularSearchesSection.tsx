'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Tag } from 'lucide-react';
import Link from 'next/link';

const POPULAR_SEARCH_TAGS = [
  { label: 'Client Reviews & Testimonials', href: '/#testimonials' },
  { label: 'How Should an NRI Invest in India?', href: '/our-profile' },
  { label: 'Women & Wealth Investing', href: '/services' },
  { label: 'Investing for Armed Forces Personnel', href: '/our-profile' },
  { label: 'Investing for Merchant Navy Professionals', href: '/services' },
  { label: 'Milestones & Achievements', href: '/awards-achievements' },
  { label: 'Mis Selling Prevention & Ethics', href: '/our-profile' },
  { label: 'Specialized Investment Funds (AIFs)', href: '/alternate-investment-funds-aifs' },
  { label: 'Goal Based Investing Strategies', href: '/calculators' },
  { label: 'Direct vs Regular Mutual Funds', href: '/mutual-fund' },
  { label: 'Best Financial Advisor in India', href: '/founder-desk' },
  { label: 'Step Up SIP Calculator', href: '/mutual-fund-return-calculator' },
  { label: 'SIP Advantages & Power of Compounding', href: '/mutual-fund' },
  { label: 'Mutual Funds Kyu Sahi Hai?', href: '/mutual-fund' },
  { label: 'Great Place to Work Certified', href: '/awards-achievements' },
  { label: 'AMFI Registered ARN – 334421', href: '/our-profile' },
];

export const PopularSearchesSection: React.FC = () => {
  return (
    <section className="py-14 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
            Popular Searches & Key Insights
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {POPULAR_SEARCH_TAGS.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Link
                href={tag.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/40 text-xs font-medium text-slate-300 hover:text-emerald-400 transition-all"
              >
                <Tag className="w-3 h-3 text-slate-400" />
                <span>{tag.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
