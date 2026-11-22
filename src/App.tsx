import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCanopy } from './components/HeroCanopy';
import { StatsBar } from './components/StatsBar';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { HowItWorks } from './components/HowItWorks';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { SecurityCompliance } from './components/SecurityCompliance';
import { Testimonials } from './components/Testimonials';
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
  const [pageTransition, setPageTransition] = useState<'entering' | 'idle' | 'exiting'>('idle');

  useReveal();

  useEffect(() => {
    if (pageTransition !== 'entering') return;
    const t = window.setTimeout(() => setPageTransition('idle'), 270);
    return () => window.clearTimeout(t);
  }, [pageTransition]);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = resolveRoute();
      setRoute((prevRoute) => {
        if (nextRoute !== prevRoute) {
          setPageTransition('entering');
        }
        return nextRoute;
      });
    };
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const navigateTo = (next: 'home' | 'login') => {
    if (next === route) return;
    setPageTransition('exiting');
    window.setTimeout(() => {
      const targetUrl = next === 'login' ? '/login' : '/';
      if (window.location.pathname !== targetUrl || window.location.hash) {
        window.history.pushState({}, '', targetUrl);
      }
      setRoute(next);
      setPageTransition('entering');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 165);
  };

  if (route === 'login') {
    return (
      <LoginPage
        transitionState={pageTransition}
        onNavigateHome={() => navigateTo('home')}
      />
    );
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar onNavigateLogin={() => navigateTo('login')} />
      <div className="app-route-shell" data-transition={pageTransition}>
        <main id="main" tabIndex={-1}>
          <HeroCanopy />
          <StatsBar />
          <FeaturesShowcase />
          <HowItWorks />
          <IntegrationsGrid />
          <SecurityCompliance />
          <Testimonials />
          <PricingSection />
          <FooterSynais />
        </main>
      </div>
    </>
  );
};

export default App;
