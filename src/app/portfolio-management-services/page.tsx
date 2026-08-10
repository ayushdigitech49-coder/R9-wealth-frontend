import React from 'react';
import PublicLayout from '../(public)/layout';
import { InternalPageSystem } from '@/components/layout/InternalPageSystem';

export const metadata = {
  title: 'Portfolio Management Services (PMS) - R9 Wealth Management',
  description: 'Official Portfolio Management Services (PMS) page at R9 Wealth. Discover smart investment solutions, mutual funds, SIPs, loans, and wealth advisory services under AMFI ARN - 334421.',
};

export default function DedicatedPage() {
  return (
    <PublicLayout>
      <InternalPageSystem slug="portfolio-management-services" formattedTitle="Portfolio Management Services (PMS)" />
    </PublicLayout>
  );
}
