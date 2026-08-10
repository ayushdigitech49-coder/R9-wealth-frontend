import * as React from 'react';
import { cn } from '@/lib/utils';

export const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn('h-px w-full bg-border my-4', className)} {...props} />;
};
