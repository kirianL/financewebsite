import { useEffect, useState } from 'react';

/**
 * Tracks whether the viewport has scrolled past the light Canopy hero
 * into the dark Synais espresso sections, so the floating navbar adapts contrast.
 */
export function useScrollTheme(enabled = true): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsDark(false);
      return;
    }

    const hero = document.getElementById('hero');
    if (!hero) {
      setIsDark(false);
      return;
    }

    const update = () => {
      const rect = hero.getBoundingClientRect();
      setIsDark(rect.bottom <= 84);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [enabled]);

  return isDark;
}
