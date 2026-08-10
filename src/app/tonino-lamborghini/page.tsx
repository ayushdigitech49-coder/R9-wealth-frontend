import React from 'react';
import PublicLayout from '../(public)/layout';
import { InternalPageSystem } from '@/components/layout/InternalPageSystem';

export const metadata = {
  title: 'Tonino Lamborghini Residences - R9 Wealth Management',
  description: 'Official Tonino Lamborghini Residences page at R9 Wealth. Discover smart investment solutions, mutual funds, SIPs, loans, and wealth advisory services under AMFI ARN - 334421.',
};

export default function DedicatedPage() {
  return (
    <PublicLayout>
      <InternalPageSystem slug="tonino-lamborghini" formattedTitle="Tonino Lamborghini Residences" />
    </PublicLayout>
  );
}
