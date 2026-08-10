import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, position = 'right', children }) => {
  if (!isOpen) return null;

  const positionClasses = {
    left: 'left-0 rounded-r-xl',
    right: 'right-0 rounded-l-xl',
  };

  return (
    <div className="fixed inset-0 z-overlay">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          'fixed top-0 bottom-0 z-modal w-80 bg-background p-6 shadow-2xl transition-transform border-border',
          positionClasses[position]
        )}
      >
        {children}
      </div>
    </div>
  );
};
