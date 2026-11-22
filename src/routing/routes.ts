export type Route = 'home' | 'login' | 'terms' | 'privacy' | 'blog';

export const ROUTE_PATHS: Record<Route, string> = {
  home: '/',
  login: '/login',
  terms: '/terminos',
  privacy: '/privacidad',
  blog: '/blog',
};

export const ROUTE_TITLES: Record<Route, string> = {
  home: 'Kora — Tesorería multibanco, colones y SINPE en Costa Rica',
  login: 'Ingresar — Kora',
  terms: 'Términos y condiciones — Kora',
  privacy: 'Política de privacidad — Kora',
  blog: 'Blog financiero CR — Kora',
};

const HASH_ROUTES: Record<string, Route> = {
  '#terms': 'terms',
  '#/terms': 'terms',
  '#terminos': 'terms',
  '#/terminos': 'terms',
  '#privacy': 'privacy',
  '#/privacy': 'privacy',
  '#privacidad': 'privacy',
  '#/privacidad': 'privacy',
  '#blog': 'blog',
  '#/blog': 'blog',
  '#login': 'login',
  '#/login': 'login',
};

const PATH_ROUTES: Record<string, Route> = {
  '/': 'home',
  '/login': 'login',
  '/terminos': 'terms',
  '/terms': 'terms',
  '/privacidad': 'privacy',
  '/privacy': 'privacy',
  '/blog': 'blog',
};

/** Returns the route a hash alias points to, or null for plain in-page anchors (#features, #pricing…). */
export function matchHashRoute(hash: string): Route | null {
  return HASH_ROUTES[hash.toLowerCase()] ?? null;
}

export function resolveRoute(): Route {
  if (typeof window === 'undefined') return 'home';
  const byHash = matchHashRoute(window.location.hash);
  if (byHash) return byHash;
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_ROUTES[path.toLowerCase()] ?? 'home';
}
