import React from 'react';
import PublicLayout from '../(public)/layout';
import { InternalPageSystem } from '@/components/layout/InternalPageSystem';

export const metadata = {
  title: 'Mutual Fund - R9 Wealth Management',
  description: 'Official Mutual Fund page at R9 Wealth. Discover smart investment solutions, mutual funds, SIPs, loans, and wealth advisory services under AMFI ARN - 334421.',
};

export default function DedicatedPage() {
  return (
    <PublicLayout>
      <InternalPageSystem slug="mutual-fund" formattedTitle="Mutual Fund" />
    </PublicLayout>
  );
}
