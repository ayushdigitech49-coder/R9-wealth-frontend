import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const WebsiteContainer: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className,
}) => {
  const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeMap[size], className)}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'dark' | 'glass' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  padding = 'lg',
  id,
  className,
}) => {
  const variantStyles = {
    default: 'bg-background text-foreground',
    muted: 'bg-slate-50 dark:bg-slate-900/50 text-foreground border-y border-slate-200/60 dark:border-slate-800/60',
    dark: 'bg-slate-950 text-white',
    glass: 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-y border-white/20',
    accent: 'bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white',
  };

  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-24 sm:py-32',
  };

  return (
    <section id={id} className={cn('w-full relative overflow-hidden', variantStyles[variant], paddingStyles[padding], className)}>
      {children}
    </section>
  );
};
