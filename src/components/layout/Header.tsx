'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Navbar } from './Navbar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';
import { Menu, UserCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar with Schedule Consultation */}
      <TopBar />

      {/* Full-Width Luxury Header Bar with Sign In / Sign Up */}
      <div className="w-full bg-transparent py-2.5 pointer-events-auto">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between bg-white/95 backdrop-blur-xl px-4 xl:px-6 py-2 rounded-full shadow-lg shadow-brand-blue/5 border border-slate-200/80 relative">
            {/* Logo inside navbar container */}
            <Logo size="sm" className="shrink-0" />

            {/* Navbar links with compact spacing */}
            <Navbar />

            {/* Sign In / Sign Up Button in Navbar */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="!rounded-full px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold shadow-md shrink-0 whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 flex items-center gap-1.5"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>Sign In / Sign Up</span>
            </button>
          </div>

          {/* Mobile Navigation Header Bar */}
          <div className="flex lg:hidden items-center justify-between bg-white/95 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-md border border-slate-200/80">
            <Logo size="sm" />
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-3 py-1.5 text-xs font-bold rounded-full bg-slate-900 text-white flex items-center gap-1"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Login</span>
              </button>
              <button
                onClick={() => setMobileNavOpen(true)}
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Client Login Access Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 max-w-md w-full relative overflow-hidden"
            >
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-3">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">R9 Wealth Client Portal</h3>
                <p className="text-xs text-slate-500 mt-1">Access your portfolio, track investments & statements</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert("Redirecting to secure R9 Wealth investor portal..."); setIsLoginOpen(false); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">PAN or Mobile Number</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Registered PAN / Phone"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Password / OTP</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter Password"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-md transition-colors"
                >
                  Secure Login
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                New investor? <a href="/contact-us" className="text-emerald-600 font-semibold hover:underline">Get your account setup with an advisor</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
