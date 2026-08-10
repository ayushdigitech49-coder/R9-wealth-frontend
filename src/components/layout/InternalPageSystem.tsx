'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CalculatorModal } from '@/components/home/CalculatorModal';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Building,
  Phone,
  Mail,
  Sparkles,
  TrendingUp,
  PieChart,
  Coins,
  Layers,
  Umbrella,
  CreditCard,
  Building2,
  ChevronDown,
  Lock,
  UserCheck,
  Star,
  Users,
  Target,
  RefreshCw,
  FileText,
} from 'lucide-react';

interface InternalPageProps {
  slug: string;
  formattedTitle: string;
}

export const InternalPageSystem: React.FC<InternalPageProps> = ({ slug, formattedTitle }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcModalOpen, setCalcModalOpen] = useState<boolean>(false);

  const getPageCategory = (s: string) => {
    if (s.includes('calculator')) return 'Financial Calculator';
    if (['66-downtown', 'amstoria-verti-greens-gaia-residences', 'tonino-lamborghini', 'tarc-ishva', 'la-foret'].some(r => s.includes(r))) return 'Luxury Real Estate';
    if (['our-profile', 'founder-desk', 'our-team', 'awards-achievements'].some(a => s.includes(a))) return 'About R9 Wealth';
    if (['blogs', 'news-media', 'event-photo-gallery'].some(l => s.includes(l))) return 'Learning & Media';
    return 'Investment Capability';
  };

  const categoryLabel = getPageCategory(slug);

  // Dynamic Visual for Hero based on Page Slug
  const getHeroVisual = () => {
    if (slug.includes('mutual-fund')) {
      return (
        <div className="w-full h-64 sm:h-72 rounded-3xl bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-950 p-6 border border-blue-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between text-xs font-bold text-blue-400">
            <span>MUTUAL FUND ALLOCATION</span>
            <span>+14.8% CAGR</span>
          </div>
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 100">
            <path d="M 0 80 Q 75 70, 150 40 T 300 10" fill="none" stroke="#3B82F6" strokeWidth="3" />
            <circle cx="300" cy="10" r="5" fill="#10B981" />
          </svg>
          <div className="flex items-center justify-between text-[11px] text-slate-300 border-t border-white/10 pt-3">
            <span>40+ Partnered AMCs</span>
            <span className="text-emerald-400 font-bold">Fiduciary Standard</span>
          </div>
        </div>
      );
    }

    if (slug.includes('real-estate') || ['66-downtown', 'amstoria-verti-greens-gaia-residences', 'tonino-lamborghini', 'tarc-ishva', 'la-foret'].some(r => slug.includes(r))) {
      return (
        <div className="relative w-full h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
          <Image
            src="/images/real_estate_downtown.jpg"
            alt={formattedTitle}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
            <span>Institutional Real Estate</span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950">Prime Asset</span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-64 sm:h-72 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B102F] to-slate-950 p-6 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
          <span>AMFI REGISTRATION</span>
          <span>ARN – 334421</span>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-black text-white">{formattedTitle}</div>
          <div className="text-xs text-slate-300">Quantitative Risk Management & Fiduciary Excellence</div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-3">
          <span>Validity: 2025 – 2028</span>
          <span className="text-blue-400 font-bold">Audited Reports</span>
        </div>
      </div>
    );
  };

  // Sample FAQs tailored for this subpage
  const faqs = [
    {
      q: `What is the regulatory compliance process for ${formattedTitle} at R9 Wealth?`,
      a: `R9 Wealth operates strictly under AMFI Registration ARN – 334421 (Valid 18-July-2025 to 17-July-2028). All investments undergo quantitative risk auditing and transparent fiduciary reporting.`,
    },
    {
      q: `How does R9 Wealth structure portfolios for ${formattedTitle}?`,
      a: `We utilize proprietary rebalancing frameworks aligned with your age, risk profile, tax status under Section 80C/80D, and liquidity needs.`,
    },
    {
      q: `Are there any hidden advisory fees for ${formattedTitle}?`,
      a: `No. R9 Wealth maintains 100% transparency with zero hidden commissions. All portfolio charges and yield payouts are disclosed upfront.`,
    },
  ];

  return (
    <div>
      {/* 1. INTERNAL PAGE HERO */}
      <section className="bg-gradient-to-br from-[#06091F] via-[#0A1033] to-[#040614] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            customItems={[
              { label: 'Home', href: '/' },
              { label: formattedTitle, href: `/${slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{categoryLabel}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {formattedTitle}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                Discover bespoke quantitative allocation strategies, institutional risk controls, and fiduciary excellence at R9 Wealth.
              </p>

              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setCalcModalOpen(true)}
                  className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <span>Model Strategy & Calculate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact-us"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs sm:text-sm rounded-2xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Talk to Advisor (+91 99712 95533)</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              {getHeroVisual()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. METRIC STRIP */}
      <section className="bg-white py-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase">AMFI REGISTRATION</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">ARN – 334421</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase">ECOSYSTEM SCALE</div>
              <div className="text-lg font-black text-blue-600 mt-0.5">40+ AMC Partners</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase">FIDUCIARY ADVISORY</div>
              <div className="text-lg font-black text-emerald-600 mt-0.5">120+ CFPs</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase">REGULATORY VALIDITY</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">Till 2028</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN OVERVIEW & FEATURE HIGHLIGHTS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Strategic Overview Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/80 space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                    ADVISORY FRAMEWORK
                  </span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    R9 WEALTH FIDUCIARY CODE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Strategic Overview: {formattedTitle}
                </h2>

                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  R9 Wealth provides quantitative wealth management and fiduciary asset allocation solutions for ultra-high-net-worth families and retail investors. Our multi-asset platform integrates mutual funds, corporate FDs, PMS, AIFs, and real estate into one disciplined portfolio strategy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Compliant AMFI Governance</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Strict adherence to regulatory standards (ARN - 334421).</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Quantitative Rebalancing</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Proprietary risk monitoring against market volatility.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 5-STEP CONNECTED PROCESS TIMELINE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/80 space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The R9 Fiduciary Process
                </h3>

                <div className="space-y-4 relative">
                  {[
                    { step: '01', title: 'Goal Discovery & Risk Audit', desc: 'Evaluating investment horizons, tax liabilities, and cash flow needs.' },
                    { step: '02', title: 'Quantitative Asset Allocation', desc: 'Constructing optimal multi-asset blueprints across 40+ AMCs.' },
                    { step: '03', title: 'Fiduciary Execution', desc: 'Seamless onboarding with zero hidden commissions.' },
                    { step: '04', title: 'Annual Rebalancing', desc: 'Periodic portfolio adjustments to mitigate market risk.' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
                      <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ ACCORDION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/80 space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="w-full text-left p-4 bg-slate-50 flex items-center justify-between font-bold text-sm text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 font-normal">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Consultation Box */}
              <div className="bg-gradient-to-br from-[#06091F] via-[#0B1238] to-[#040614] text-white p-7 rounded-3xl shadow-2xl border border-slate-800 space-y-5 sticky top-24">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 w-fit">
                  <Building className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">Book Wealth Advisory</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Schedule a private portfolio review with a senior accredited wealth strategist.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs font-semibold">
                  <a href="tel:+919971295533" className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>+91 99712 95533</span>
                  </a>
                  <a href="mailto:info@r9wealth.com" className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>info@r9wealth.com</span>
                  </a>
                </div>

                <Link
                  href="/contact-us"
                  className="block text-center w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs rounded-2xl shadow-lg transition-all"
                >
                  Schedule Advisory Session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR MODAL WIDGET */}
      <CalculatorModal
        isOpen={calcModalOpen}
        onClose={() => setCalcModalOpen(false)}
        calculatorTitle={formattedTitle}
      />
    </div>
  );
};
