import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar, BackToTopButton } from '@/components/layout/ScrollFeatures';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-brand-green selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Main Header & Nav */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full">{children}</main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Back To Top Action */}
      <BackToTopButton />
    </div>
  );
}
