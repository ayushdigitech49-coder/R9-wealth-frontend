'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NavSubItem } from '@/types/navigation';
import { ChevronRight } from 'lucide-react';

interface DropdownMenuProps {
  items: NavSubItem[];
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen, onClose, onMouseEnter }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute top-full left-0 pt-2 w-72 z-50 pointer-events-auto"
        onMouseLeave={onClose}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xl p-2">
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.description}
                  </span>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
            </Link>
          ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
