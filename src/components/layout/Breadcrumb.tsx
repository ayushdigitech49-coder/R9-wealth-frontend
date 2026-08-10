'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ customItems, className = '' }) => {
  const pathname = usePathname();

  const generateItems = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const segments = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    let accumPath = '';
    segments.forEach((seg) => {
      accumPath += `/${seg}`;
      const formattedLabel = seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

      items.push({
        label: formattedLabel,
        href: accumPath,
      });
    });

    return items;
  };

  const items = generateItems();

  if (items.length <= 1) return null;

  // JSON-LD Structured Data for Search Engines
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `https://www.r9wealth.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className={`py-4 text-xs font-medium text-slate-500 dark:text-slate-400 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}

                {isLast ? (
                  <span className="font-semibold text-slate-900 dark:text-slate-100" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
