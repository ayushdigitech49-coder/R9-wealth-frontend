import PublicLayout from './(public)/layout';
import { Hero } from '@/components/home/Hero';
import { PartnersMarquee } from '@/components/home/PartnersMarquee';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { WhyChooseUsSixPs } from '@/components/home/WhyChooseUsSixPs';
import { ServicesSection } from '@/components/home/ServicesSection';
import { RealEstateSection } from '@/components/home/RealEstateSection';
import { InvestmentProcess } from '@/components/home/InvestmentProcess';
import { CalculatorPreviewGrid } from '@/components/home/CalculatorPreviewGrid';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogPreviewSection } from '@/components/home/BlogPreviewSection';
import { FAQSection } from '@/components/home/FAQSection';
import { PopularSearchesSection } from '@/components/home/PopularSearchesSection';

export default function HomePage() {
  return (
    <PublicLayout>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. AMC & Bank Partners Ticker */}
      <PartnersMarquee />

      {/* 3. Company Key Statistics */}
      <StatisticsSection />

      {/* 4. Why Choose R9 Wealth - The 6 P's Framework */}
      <WhyChooseUsSixPs />

      {/* 5. 360° Financial Investment Services */}
      <ServicesSection />

      {/* 6. Luxury Real Estate Portfolio Showcase */}
      <RealEstateSection />

      {/* 7. Investment Journey & Approach */}
      <InvestmentProcess />

      {/* 8. Financial Calculator Suite */}
      <CalculatorPreviewGrid />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Latest Blogs & Financial Insights */}
      <BlogPreviewSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Popular Searches & Tag Cloud */}
      <PopularSearchesSection />
    </PublicLayout>
  );
}
