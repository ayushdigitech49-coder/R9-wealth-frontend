'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/config/navigation';
import { MegaMenu } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
    setTimeoutId(id);
  };

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        const isOpen = activeDropdown === item.title;

        if (item.type === 'megamenu' && item.megaMenuColumns) {
          return (
            <div
              key={item.title}
              className="py-1 shrink-0"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-full transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? 'text-brand-green bg-brand-green/10'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100'
                }`}
                style={{ fontFamily: 'var(--font-primary)' }}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-green' : 'text-slate-400'
                  }`}
                />
              </button>

              <MegaMenu
                columns={item.megaMenuColumns}
                isOpen={isOpen}
                onClose={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(item.title)}
              />
            </div>
          );
        }

        if (item.type === 'dropdown' && item.items) {
          return (
            <div
              key={item.title}
              className="relative py-1 shrink-0"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-full transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? 'text-brand-green bg-brand-green/10'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100'
                }`}
                style={{ fontFamily: 'var(--font-primary)' }}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-green' : 'text-slate-400'
                  }`}
                />
              </button>

              <DropdownMenu
                items={item.items}
                isOpen={isOpen}
                onClose={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(item.title)}
              />
            </div>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-full transition-colors duration-200 focus:outline-none shrink-0 ${
              isActive
                ? 'text-brand-green font-bold bg-brand-green/10'
                : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100'
            }`}
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            <span>{item.title}</span>
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-brand-green rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
