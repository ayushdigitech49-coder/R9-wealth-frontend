'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[2000] bg-slate-950 flex flex-col items-center justify-center p-4 pointer-events-none select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="flex flex-col items-center gap-6"
          >
            <Logo />
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-amber-400 to-green-400 rounded-full"
              />
            </div>
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Initializing R9 Advisory Layout
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
