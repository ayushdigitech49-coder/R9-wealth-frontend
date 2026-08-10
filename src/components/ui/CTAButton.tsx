'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CTAButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'green' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  glow?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon = true,
  glow = false,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-brand-blue to-brand-blue-light hover:from-brand-blue-light hover:to-brand-blue text-white shadow-md hover:shadow-xl hover:shadow-brand-blue/25 border border-brand-blue/30',
    gold:
      'bg-gradient-to-r from-brand-green to-brand-green-light text-white font-bold shadow-md hover:shadow-xl hover:shadow-brand-green/30 border border-brand-green/30 hover:brightness-110',
    green:
      'bg-gradient-to-r from-brand-green to-brand-green-light text-white font-bold shadow-md hover:shadow-xl hover:shadow-brand-green/30 border border-brand-green/30 hover:brightness-110',
    outline:
      'border-2 border-brand-blue/40 hover:border-brand-blue text-foreground hover:bg-brand-blue/5 backdrop-blur-sm',
    ghost:
      'text-foreground hover:bg-surface-hover hover:text-brand-blue',
    glass:
      'bg-white/60 backdrop-blur-md border border-white/40 text-foreground hover:bg-white/80 hover:shadow-lg',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const content = (
    <>
      {glow && (
        <span className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 blur-lg animate-pulse" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      {...props}
    >
      {content}
    </motion.button>
  );
};
