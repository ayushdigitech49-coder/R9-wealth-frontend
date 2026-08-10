import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, ...props }, ref) => {
    return (
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          className="sr-only peer"
          {...props}
        />
        <div
          className={cn(
            "peer h-6 w-11 rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:after:translate-x-full",
            className
          )}
        />
      </label>
    );
  }
);

Switch.displayName = 'Switch';
