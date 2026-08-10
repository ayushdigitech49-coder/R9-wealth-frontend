'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });
  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  staggerDelay = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

interface BrandTaglineProps {
  className?: string;
  animated?: boolean;
}

export const BrandTagline: React.FC<BrandTaglineProps> = ({ className, animated = true }) => {
  const words = [
    { text: 'INVEST', color: 'text-brand-blue' },
    { text: 'GROW', color: 'text-brand-green' },
    { text: 'SUCCEED', color: 'text-brand-blue' },
  ];

  return (
    <div className={cn('flex items-center gap-3 sm:gap-4', className)}>
      {words.map((word, i) => (
        <React.Fragment key={word.text}>
          <motion.span
            initial={animated ? { opacity: 0, y: 10 } : undefined}
            animate={animated ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
            className={cn('text-xs sm:text-sm font-bold tracking-[0.2em]', word.color)}
          >
            {word.text}
          </motion.span>
          {i < words.length - 1 && (
            <motion.span
              initial={animated ? { opacity: 0, scaleY: 0 } : undefined}
              animate={animated ? { opacity: 1, scaleY: 1 } : undefined}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
              className="w-px h-4 bg-brand-green/60"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
