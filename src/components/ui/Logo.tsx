'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { height: 36, width: 140 },
  md: { height: 48, width: 180 },
  lg: { height: 64, width: 240 },
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-lg p-1 transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="R9 Wealth Home"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="relative"
        style={{ height: dimensions.height, width: dimensions.width }}
      >
        <Image
          src="/images/logo.svg"
          alt="R9 Wealth — Invest | Grow | Succeed"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="h-full w-auto object-contain"
        />
      </motion.div>
    </Link>
  );
};
