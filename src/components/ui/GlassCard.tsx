'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'light' | 'white' | 'gold' | 'subtle' | 'darkNavy';
  hoverEffect?: boolean;
  glow?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'white',
  hoverEffect = true,
  glow = false,
  className,
  ...props
}) => {
  const variantStyles = {
    white:
      'bg-white border border-slate-200/80 text-slate-900 shadow-lg shadow-slate-200/50',
    light:
      'bg-slate-50/80 border border-slate-200/60 text-slate-900 shadow-md shadow-slate-100/60 backdrop-blur-md',
    gold:
      'bg-brand-green/5 border border-brand-green/20 text-slate-900 shadow-lg shadow-brand-green/5',
    subtle:
      'bg-white/90 border border-slate-100 text-slate-900 backdrop-blur-md',
    darkNavy:
      'bg-brand-blue border border-brand-blue/80 text-white shadow-2xl',
  };

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.2, ease: 'easeOut' },
            }
          : undefined
      }
      className={cn(
        'relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300',
        variantStyles[variant],
        hoverEffect && 'hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-green/40',
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
