import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'subtitle' | 'body-lg' | 'body-md' | 'body-sm' | 'caption' | 'label';
  muted?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'body-md', muted = false, children, ...props }, ref) => {
    const styles = {
      subtitle: 'text-lg sm:text-xl font-normal leading-relaxed',
      'body-lg': 'text-base sm:text-lg font-normal leading-relaxed',
      'body-md': 'text-sm sm:text-base font-normal leading-normal',
      'body-sm': 'text-xs sm:text-sm font-normal leading-normal',
      caption: 'text-xs font-normal leading-tight tracking-wide',
      label: 'text-xs sm:text-sm font-medium tracking-wide uppercase',
    };

    return (
      <p
        ref={ref}
        className={cn(
          muted ? 'text-muted-foreground' : 'text-foreground',
          styles[variant],
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';
