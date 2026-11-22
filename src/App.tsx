import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { FooterSynais } from './components/FooterSynais';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { BlogPage } from './pages/BlogPage';
import { useReveal } from './hooks/useReveal';
import {
  matchHashRoute,
  resolveRoute,
  ROUTE_PATHS,
  ROUTE_TITLES,
  type Route,
} from './routing/routes';

export const App: React.FC = () => {
  const [route, setRoute] = useState<Route>(resolveRoute);
  const [pageTransition, setPageTransition] = useState<'entering' | 'idle' | 'exiting'>('idle');
  const pendingSection = useRef<string | null>(null);
  const isInitialMount = useRef(true);

  useReveal(route);

  useEffect(() => {
    document.title = ROUTE_TITLES[route];

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const section = pendingSection.current;
    pendingSection.current = null;
    const el = section ? document.querySelector<HTMLElement>(section) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [route]);

  useEffect(() => {
    if (pageTransition !== 'entering') return;
    const t = window.setTimeout(() => setPageTransition('idle'), 270);
    return () => window.clearTimeout(t);
  }, [pageTransition]);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = resolveRoute();
      if (matchHashRoute(window.location.hash)) {
        window.history.replaceState({}, '', ROUTE_PATHS[nextRoute]);
      }
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

  const navigateTo = (next: Route, section?: string) => {
    if (next === route) {
      if (section) {
        document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (window.location.pathname !== ROUTE_PATHS[next] || window.location.hash) {
        window.history.replaceState({}, '', ROUTE_PATHS[next]);
      }
      return;
    }

    setPageTransition('exiting');
    window.setTimeout(() => {
      pendingSection.current = section ?? null;
      const targetUrl = ROUTE_PATHS[next];
      if (window.location.pathname !== targetUrl || window.location.hash) {
        window.history.pushState({}, '', targetUrl);
      }
      setRoute(next);
      setPageTransition('entering');
    }, 165);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      {route === 'login' ? (
        <LoginPage
          transitionState={pageTransition}
          onNavigateHome={() => navigateTo('home')}
        />
      ) : (
        <>
          <Navbar
            isHome={route === 'home'}
            onNavigateLogin={() => navigateTo('login')}
            onNavigateHome={() => navigateTo('home')}
            onNavigateSection={(hash) => navigateTo('home', hash)}
          />
          <div className="app-route-shell" data-transition={pageTransition}>
            {route === 'home' && <HomePage />}
            {route === 'terms' && (
              <LegalPage kind="terms" onNavigateHome={() => navigateTo('home')} />
            )}
            {route === 'privacy' && (
              <LegalPage kind="privacy" onNavigateHome={() => navigateTo('home')} />
            )}
            {route === 'blog' && (
              <BlogPage onNavigateHome={() => navigateTo('home')} />
            )}
            <FooterSynais
              onNavigateHome={() => navigateTo('home')}
              onNavigateRoute={(next) => navigateTo(next)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default App;
