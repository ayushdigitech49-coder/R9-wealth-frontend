import React from 'react';
import PublicLayout from '../(public)/layout';
import { InternalPageSystem } from '@/components/layout/InternalPageSystem';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const pageSlug = resolvedParams.slug.join(' / ');
  const title = pageSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} - R9 Wealth Management`,
    description: `Official ${title} page at R9 Wealth. Discover smart investment solutions, mutual funds, SIPs, loans, and wealth advisory services under AMFI ARN - 334421.`,
  };
}

export default async function SubPage({ params }: PageProps) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug.join('/');
  const rawTitle = resolvedParams.slug[resolvedParams.slug.length - 1];
  const formattedTitle = rawTitle
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <PublicLayout>
      <InternalPageSystem slug={currentSlug} formattedTitle={formattedTitle} />
    </PublicLayout>
  );
}
