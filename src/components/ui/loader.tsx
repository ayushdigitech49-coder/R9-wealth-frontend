import * as React from 'react';
import { cn } from '@/lib/utils';

export const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center p-4', className)}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
};

export const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span className={cn('inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent', className)} />
  );
};
