import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

interface MetadataOptions {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata(options: MetadataOptions = {}): Metadata {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    canonicalUrl = SITE_CONFIG.url,
    ogImage = SITE_CONFIG.ogImage,
    noIndex = false,
  } = options;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
