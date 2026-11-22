import React from 'react';
import { HeroCanopy } from '../components/HeroCanopy';
import { StatsBar } from '../components/StatsBar';
import { FeaturesShowcase } from '../components/FeaturesShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { IntegrationsGrid } from '../components/IntegrationsGrid';
import { SecurityCompliance } from '../components/SecurityCompliance';
import { Testimonials } from '../components/Testimonials';
import { PricingSection } from '../components/PricingSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main" tabIndex={-1}>
      <HeroCanopy />
      <StatsBar />
      <FeaturesShowcase />
      <HowItWorks />
      <IntegrationsGrid />
      <SecurityCompliance />
      <Testimonials />
      <PricingSection />
    </main>
  );
};
