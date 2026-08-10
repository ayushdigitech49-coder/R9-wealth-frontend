import React from 'react';
import PublicLayout from '../(public)/layout';
import { ConsultationFormSection } from '@/components/home/ConsultationFormSection';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Contact Us - R9 Wealth Management',
  description: 'Get in touch with certified wealth managers at R9 Wealth. Schedule a private consultation or send your advisory query.',
};

export default function ContactUsPage() {
  return (
    <PublicLayout>
      <div className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            customItems={[
              { label: 'Home', href: '/' },
              { label: 'Contact Us', href: '/contact-us' },
            ]}
          />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Contact Advisory Desk
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed font-normal">
            Have questions about mutual funds, PMS, loans, or tax planning? Reach out to our accredited wealth strategists today.
          </p>
        </div>
      </div>

      <ConsultationFormSection />
    </PublicLayout>
  );
}
