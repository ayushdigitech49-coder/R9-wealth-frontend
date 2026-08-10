import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          'relative z-modal w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-xl animate-fade-up',
          className
        )}
      >
        {title && <h3 className="mb-4 text-xl font-semibold text-foreground">{title}</h3>}
        {children}
      </div>
    </div>
  );
};
