import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 z-tooltip whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background shadow-md">
          {content}
        </div>
      )}
    </div>
  );
};
