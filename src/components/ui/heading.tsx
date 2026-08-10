import * as React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'display';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, children, ...props }, ref) => {
    const Tag = level === 'display' ? 'h1' : `h${level}` as React.ElementType;

    const styles = {
      display: 'text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl',
      1: 'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
      2: 'text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl',
      3: 'text-xl font-semibold sm:text-2xl lg:text-3xl',
      4: 'text-lg font-semibold sm:text-xl',
      5: 'text-base font-medium sm:text-lg',
      6: 'text-sm font-medium sm:text-base',
    };

    return (
      <Tag
        ref={ref}
        className={cn('text-foreground font-sans', styles[level], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
