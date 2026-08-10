import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', fallback = 'R9', className }) => {
  return (
    <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted items-center justify-center text-xs font-semibold text-muted-foreground', className)}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};
