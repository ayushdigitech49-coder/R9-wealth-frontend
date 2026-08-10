'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FOOTER_SECTIONS, TOP_BAR_CONFIG } from '@/config/navigation';
import { Logo } from '@/components/ui/Logo';
import { CTAButton } from '@/components/ui/CTAButton';
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  ShieldCheck,
  Award,
  ChevronUp,
  MessageCircle,
} from 'lucide-react';

const socialIconMap: Record<string, React.FC<{ className?: string }>> = {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050619] text-slate-300 border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & Callout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          <div className="lg:col-span-6 flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Subscribe to Amoolya by R9 Wealth Insights
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Receive expert wealth insights, SIP trends, tax strategies, and market outlook directly in your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                />
              </div>
              <CTAButton variant="green" size="md" icon={false} type="submit" className="!bg-emerald-600 hover:!bg-emerald-700">
                {subscribed ? 'Subscribed!' : 'Subscribe Insights'}
              </CTAButton>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2 font-medium">
                Thank you for subscribing to R9 Wealth Insights.
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Logo />
            <p className="text-xs text-slate-400 leading-relaxed">
              R9 Wealth provides 360° wealth management, mutual funds, PMS, AIFs, loans, real estate, and financial planning solutions for investors across India and globally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {TOP_BAR_CONFIG.socialLinks.map((social) => {
                const IconComp = socialIconMap[social.icon] || Linkedin;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-all"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Links Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 border-b border-slate-800/60 pb-2">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory AMFI Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed my-6 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span>AMFI Registered Mutual Fund Distributor</span>
          </div>
          <p>
            Mutual Fund investments are subject to market risks, read all scheme-related documents carefully. Past performance is not an indicator of future returns. R9 Wealth is an AMFI registered Mutual Fund distributor with <strong>ARN – 334421</strong> (ARN Validity Period: 18-July-2025 to 17-July-2028). R9 Wealth and its brand assets are trademarks of R9 Wealth Financial Services.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-900">
          <p>© 2026 R9 WEALTH INDIA PRIVATE LIMITED All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:text-slate-300 transition-colors">
              Disclaimers
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons: Back to Top & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://api.whatsapp.com/send?phone=919971295533&text=Hello%20R9%20Wealth,%20I%20would%20like%20to%20know%20more%20about%20your%20investment%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};
