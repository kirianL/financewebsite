import React, { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT, NAV_ITEMS } from '../data/content';
import { useScrollTheme } from '../hooks/useScrollTheme';
import { CanopyMark } from './SvgIcons';
import './Navbar.css';

interface NavbarProps {
  onNavigateLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateLogin }) => {
  const isDark = useScrollTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [drawerOpen]);

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDrawerOpen(false);
    onNavigateLogin();
  };

  return (
    <>
      <header className={`site-nav ${isDark && !drawerOpen ? 'site-nav--dark' : ''}`}>
        <div className="site-nav__inner">
          <nav className="site-nav__pill" aria-label="Primary">
            <a
              href="#hero"
              className="site-nav__brand"
              onClick={() => setDrawerOpen(false)}
            >
              <CanopyMark size={18} />
              <span>{HERO_CONTENT.brand}</span>
            </a>

            <ul className="site-nav__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="site-nav__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-nav__actions">
            <a
              href="/login"
              className="site-nav__login"
              onClick={handleLoginClick}
            >
              Ingresar
            </a>
            <button
              ref={burgerRef}
              type="button"
              className="site-nav__burger"
              data-open={drawerOpen}
              aria-label={drawerOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <span className="site-nav__burger-box" aria-hidden="true">
                <span className="site-nav__burger-line site-nav__burger-line--top" />
                <span className="site-nav__burger-line site-nav__burger-line--mid" />
                <span className="site-nav__burger-line site-nav__burger-line--bot" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Persistent Mobile Drawer with smooth entry & exit transitions */}
      <div
        id="mobile-nav-drawer"
        className="nav-drawer"
        data-open={drawerOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!drawerOpen}
        aria-label="Menú de navegación"
      >
        <div
          className="nav-drawer__backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <div className="nav-drawer__sheet">
          <ul className="nav-drawer__list">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.label}
                className="nav-drawer__item"
                style={{ '--i': idx } as React.CSSProperties}
              >
                <a
                  href={item.href}
                  className="nav-drawer__link"
                  tabIndex={drawerOpen ? 0 : -1}
                  onClick={() => setDrawerOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="nav-drawer__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className="nav-drawer__footer"
            style={{ '--i': NAV_ITEMS.length } as React.CSSProperties}
          >
            <a
              href="/login"
              className="nav-drawer__login-btn"
              tabIndex={drawerOpen ? 0 : -1}
              onClick={handleLoginClick}
            >
              Ingresar a {HERO_CONTENT.brand}
            </a>
            <a
              href="#pricing"
              className="nav-drawer__cta"
              tabIndex={drawerOpen ? 0 : -1}
              onClick={() => setDrawerOpen(false)}
            >
              {HERO_CONTENT.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
