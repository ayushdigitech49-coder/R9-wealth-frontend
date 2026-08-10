import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <div key={item.id} className="py-3">
          <button
            onClick={() => toggle(item.id)}
            className="flex w-full justify-between items-center text-left text-sm font-medium text-foreground"
          >
            {item.title}
            <span className="ml-2 text-lg">{openId === item.id ? '−' : '+'}</span>
          </button>
          {openId === item.id && <div className="mt-2 text-sm text-muted-foreground">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
