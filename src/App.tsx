import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCanopy } from './components/HeroCanopy';
import { StatsBar } from './components/StatsBar';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { PricingSection } from './components/PricingSection';
import { FooterSynais } from './components/FooterSynais';
import { LoginPage } from './components/LoginPage';
import { useReveal } from './hooks/useReveal';

function resolveRoute(): 'home' | 'login' {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/+$/, '');
  const hash = window.location.hash;
  if (path === '/login' || hash === '#/login' || hash === '#login') {
    return 'login';
  }
  return 'home';
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<'home' | 'login'>(resolveRoute);

  useReveal();

  useEffect(() => {
    const syncRoute = () => setRoute(resolveRoute());
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const navigateTo = (next: 'home' | 'login') => {
    const targetUrl = next === 'login' ? '/login' : '/';
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  if (route === 'login') {
    return <LoginPage onNavigateHome={() => navigateTo('home')} />;
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigateLogin={() => navigateTo('login')} />
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
