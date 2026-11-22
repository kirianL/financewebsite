import { useEffect } from 'react';

/**
 * Observes all `[data-reveal]` elements in the document and sets `data-revealed="true"`
 * as they enter the viewport. Respects `prefers-reduced-motion: reduce` and keeps all
 * sections visible during non-scrolling full-page automated captures (`navigator.webdriver`).
 */
export function useReveal(): void {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (elements.length === 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const isAutomatedCapture =
      typeof navigator !== 'undefined' && Boolean(navigator.webdriver);

    if (prefersReduced || isAutomatedCapture || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.setAttribute('data-revealed', 'true'));
      return;
    }

    const vh = window.innerHeight || 900;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -72px 0px',
      }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= vh * 0.9) {
        el.setAttribute('data-revealed', 'true');
      } else {
        el.setAttribute('data-revealed', 'false');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
