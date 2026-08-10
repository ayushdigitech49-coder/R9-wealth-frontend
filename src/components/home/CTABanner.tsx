'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, WebsiteContainer } from '@/components/layout/WebsiteContainer';
import { CTAButton } from '@/components/ui/CTAButton';
import { ShieldCheck, PhoneCall } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <SectionWrapper
      variant="default"
      padding="xl"
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-light text-white"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none animate-blob [animation-delay:3s]" />

      <WebsiteContainer size="xl" className="relative z-10 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20"
        >
          <ShieldCheck className="w-4 h-4 text-brand-green-light" />
          Fiduciary Standard Commitment
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight"
        >
          Ready to Elevate Your Capital Management Strategy?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed"
        >
          Schedule a confidential portfolio review with a senior accredited wealth strategist. Discover bespoke quantitative allocation models tailored for your family or firm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <CTAButton href="/consultation" variant="green" size="lg" glow>
            Schedule Private Consultation
          </CTAButton>
          <CTAButton href="/contact" variant="glass" size="lg" icon={false}>
            <PhoneCall className="w-4 h-4 text-brand-green-light mr-1" />
            Contact Advisory Desk
          </CTAButton>
        </motion.div>
      </WebsiteContainer>
    </SectionWrapper>
  );
};
