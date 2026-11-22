import React, { useState } from 'react';
import { FOOTER_CONTENT } from '../data/content';
import { matchHashRoute, ROUTE_PATHS, type Route } from '../routing/routes';
import {
  GithubIcon,
  LinkedinIcon,
  SynaisBrandBadge,
  XIcon,
  YoutubeIcon,
} from './SvgIcons';
import './FooterSynais.css';

interface FooterSynaisProps {
  onNavigateHome?: () => void;
  onNavigateRoute?: (route: Route) => void;
}

export const FooterSynais: React.FC<FooterSynaisProps> = ({
  onNavigateHome,
  onNavigateRoute,
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer id="footer" className="footer-synais">
      <div className="container footer-synais__inner">
        <div className="footer-synais__top">
          <div className="footer-synais__brand-col">
            <a
              href="/"
              className="footer-synais__brand"
              onClick={(e) => {
                if (!onNavigateHome) return;
                e.preventDefault();
                onNavigateHome();
              }}
            >
              <SynaisBrandBadge size={20} />
              <span>{FOOTER_CONTENT.brand}</span>
            </a>
            <p className="footer-synais__tagline">{FOOTER_CONTENT.tagline}</p>

            <div className="footer-synais__socials" aria-label="Social links">
              <a href="#footer" aria-label="GitHub" className="footer-synais__social-link">
                <GithubIcon size={17} />
              </a>
              <a href="#footer" aria-label="X" className="footer-synais__social-link">
                <XIcon size={16} />
              </a>
              <a href="#footer" aria-label="LinkedIn" className="footer-synais__social-link">
                <LinkedinIcon size={16} />
              </a>
              <a href="#footer" aria-label="YouTube" className="footer-synais__social-link">
                <YoutubeIcon size={17} />
              </a>
            </div>
          </div>

          <div className="footer-synais__newsletter">
            <h3 className="footer-synais__newsletter-title">{FOOTER_CONTENT.newsletterTitle}</h3>
            <form onSubmit={handleSubmit} noValidate className="footer-synais__form">
              <label htmlFor="footer-email" className="sr-only">
                Correo electrónico
              </label>
              <div className="footer-synais__input-group">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder={FOOTER_CONTENT.newsletterPlaceholder}
                  className={`footer-synais__input ${status === 'error' ? 'is-error' : ''}`}
                />
                <button
                  type="submit"
                  className={`footer-synais__submit ${status === 'success' ? 'is-success' : ''}`}
                  aria-label="Suscribirse al boletín"
                >
                  {status === 'success' ? (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 8.3l2.8 2.8 6.2-6.2"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 8h9M8.75 4.25L12.5 8l-3.75 3.75"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
            <p className="footer-synais__helper">{FOOTER_CONTENT.newsletterHelper}</p>
            <div className="footer-synais__feedback-slot" aria-live="polite">
              {status === 'error' && (
                <p className="footer-synais__feedback is-error" role="alert">
                  Por favor ingresa un correo electrónico válido.
                </p>
              )}
              {status === 'success' && (
                <p className="footer-synais__feedback is-success" role="status">
                  Suscrito a las actualizaciones de Kora CR.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="footer-synais__columns">
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.heading} className="footer-synais__col">
              <h4 className="footer-synais__col-heading">{col.heading}</h4>
              <ul className="footer-synais__col-list">
                {col.links.map((link) => {
                  const targetRoute = matchHashRoute(link.href);
                  const href = targetRoute ? ROUTE_PATHS[targetRoute] : link.href;
                  return (
                    <li key={link.label}>
                      <a
                        href={href}
                        className="footer-synais__col-link"
                        onClick={(e) => {
                          if (!targetRoute || !onNavigateRoute) return;
                          e.preventDefault();
                          onNavigateRoute(targetRoute);
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-synais__legal">
          <span>{FOOTER_CONTENT.copyright}</span>
          <div className="footer-synais__legal-links">
            {FOOTER_CONTENT.legalLinks.map((link) => {
              const targetRoute = matchHashRoute(link.href);
              const href = targetRoute ? ROUTE_PATHS[targetRoute] : link.href;
              return (
                <a
                  key={link.label}
                  href={href}
                  className="footer-synais__legal-link"
                  onClick={(e) => {
                    if (!targetRoute || !onNavigateRoute) return;
                    e.preventDefault();
                    onNavigateRoute(targetRoute);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-synais__wordmark-wrap" aria-hidden="true" data-reveal>
        <div className="footer-synais__wordmark">{FOOTER_CONTENT.brand}</div>
      </div>
    </footer>
  );
};
