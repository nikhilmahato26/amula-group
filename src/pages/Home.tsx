import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { JobSearch } from '../components/JobSearch';
import { OverseasRecruitment } from '../components/OverseasRecruitment';
import { JobConsultancy } from '../components/JobConsultancy';
import { JobCategories } from '../components/JobCategories';
import { HowItWorks } from '../components/HowItWorks';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Branches } from '../components/Branches';
import { CareerCTA } from '../components/CareerCTA';
import { TravelPreview } from '../components/TravelPreview';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Job Consultancy • Career Guidance & Travel Services" 
        description="AMULA GROUP is a premier job consultancy offering career opportunities, candidate assistance, and recruitment support alongside Tours, Travel, and Car Rental across Dubai and India."
      />
      
      {/* 1. Hero (Job Consultancy Focused) */}
      <Hero />

      {/* 2. Job Search / Quick Profile Submission Box */}
      <JobSearch />

      {/* 3. Overseas Recruitment (Zero Advance Payment, 14+ Countries & In-Demand Roles) */}
      <OverseasRecruitment />

      {/* 4. Job Consultancy Services */}
      <JobConsultancy />

      {/* 5. Job Categories Grid */}
      <JobCategories />

      {/* 5. How It Works 4-Step Process */}
      <HowItWorks />

      {/* 6. Why Choose AMULA GROUP */}
      <WhyChooseUs />

      {/* 7. Our Physical Branches */}
      <Branches />

      {/* 8. Career CTA Full-width banner */}
      <CareerCTA />

      {/* 9. Secondary Business: Travel & Car Rental Preview */}
      <TravelPreview />

      {/* 10. Contact Section */}
      <ContactSection />
    </>
  );
};
