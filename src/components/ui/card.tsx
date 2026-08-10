import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md',
          glass && 'glass',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
