import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCanopy } from './components/HeroCanopy';
import { StatsBar } from './components/StatsBar';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { PricingSection } from './components/PricingSection';
import { FooterSynais } from './components/FooterSynais';

export const App: React.FC = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <HeroCanopy />
        <StatsBar />
        <FeaturesShowcase />
        <IntegrationsGrid />
        <PricingSection />
        <FooterSynais />
      </main>
    </>
  );
};

export default App;
