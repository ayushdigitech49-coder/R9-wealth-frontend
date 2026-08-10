import type { Metadata } from 'next';
import './globals.css';
import { buildMetadata } from '@/lib/seo/metadata';
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import { PageLoader } from '@/components/ui/PageLoader';

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <SmoothScrollProvider>
          <PageLoader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
