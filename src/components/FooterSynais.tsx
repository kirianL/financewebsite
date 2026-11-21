import React, { useState } from 'react';
import { FOOTER_CONTENT } from '../data/content';
import {
  GithubIcon,
  LinkedinIcon,
  SynaisBrandBadge,
  XIcon,
  YoutubeIcon,
} from './SvgIcons';
import './FooterSynais.css';

export const FooterSynais: React.FC = () => {
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
            <a href="#hero" className="footer-synais__brand">
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
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                placeholder={FOOTER_CONTENT.newsletterPlaceholder}
                className="footer-synais__input"
              />
            </form>
            <p className="footer-synais__helper">{FOOTER_CONTENT.newsletterHelper}</p>
            {status === 'error' && (
              <p className="footer-synais__feedback is-error" role="alert">
                Please enter a valid email address.
              </p>
            )}
            {status === 'success' && (
              <p className="footer-synais__feedback is-success" role="status">
                Subscribed to Kora updates.
              </p>
            )}
          </div>
        </div>

        <div className="footer-synais__columns">
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.heading} className="footer-synais__col">
              <h4 className="footer-synais__col-heading">{col.heading}</h4>
              <ul className="footer-synais__col-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-synais__col-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-synais__legal">
          <span>{FOOTER_CONTENT.copyright}</span>
          <div className="footer-synais__legal-links">
            {FOOTER_CONTENT.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-synais__legal-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-synais__wordmark-wrap" aria-hidden="true">
        <div className="footer-synais__wordmark">{FOOTER_CONTENT.brand}</div>
      </div>
    </footer>
  );
};
