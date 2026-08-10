'use client';

import React from 'react';
import { TOP_BAR_CONFIG } from '@/config/navigation';
import { Phone, Mail, Clock, Linkedin, Twitter, Facebook, Youtube, Instagram, Calendar } from 'lucide-react';
import Link from 'next/link';

const socialIconMap: Record<string, React.FC<{ className?: string }>> = {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
};

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#05061A] text-white text-xs py-2 border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{TOP_BAR_CONFIG.workingHours}</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <a
            href={`tel:${TOP_BAR_CONFIG.phone}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors duration-200 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{TOP_BAR_CONFIG.phone}</span>
          </a>
          <span className="hidden md:inline text-white/20">|</span>
          <a
            href={`mailto:${TOP_BAR_CONFIG.email}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{TOP_BAR_CONFIG.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {TOP_BAR_CONFIG.socialLinks.map((social) => {
              const IconComponent = socialIconMap[social.icon] || Linkedin;
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

          <span className="text-white/20">|</span>

          {/* Schedule Consultation Button Moved to TopBar */}
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs rounded-full transition-all duration-200 shadow-sm hover:shadow-emerald-500/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Consultation →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
