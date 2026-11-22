import React from 'react';
import { SECURITY_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './SecurityCompliance.css';

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  sugef: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5.5c0 4.5-3 8.3-7 9.5-4-1.2-7-5-7-9.5V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2l2.1 2.1 4-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bccr: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M14.8 9.2a3.8 3.8 0 00-5.4 0 3.9 3.9 0 000 5.6 3.8 3.8 0 005.4 0M11 6.5l-1.5 11M14 6.5l-1.5 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  hacienda: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 9h7M8.5 13h7M8.5 17h4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  tls: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 10.5V7.5a4 4 0 118 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const SecurityCompliance: React.FC = () => {
  return (
    <section id="security" className="security-section" aria-labelledby="security-heading">
      <div className="container security-layout">
        <div className="security-visual" data-reveal>
          <img
            src="/images/security-desk.webp"
            alt="Entorno corporativo financiero en Costa Rica"
            width={1152}
            height={896}
            loading="lazy"
            decoding="async"
            className="security-visual__img"
          />
        </div>

        <div className="security-content" data-reveal style={{ '--reveal-delay': '60ms' } as React.CSSProperties}>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{SECURITY_CONTENT.badge}</span>
          </span>

          <h2 id="security-heading" className="section-title-duotone security-title">
            <span className="section-title-duotone__line">
              <span className="text-bright">{SECURITY_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{SECURITY_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{SECURITY_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{SECURITY_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle security-subtitle">{SECURITY_CONTENT.subtitle}</p>

          <div className="security-grid">
            {SECURITY_CONTENT.pillars.map((pillar, idx) => (
              <article
                key={pillar.id}
                className="security-pillar"
                data-reveal
                style={{ '--reveal-delay': `${idx * 40}ms` } as React.CSSProperties}
              >
                <span className="security-pillar__icon">{PILLAR_ICONS[pillar.id]}</span>
                <div>
                  <h3 className="security-pillar__title">{pillar.title}</h3>
                  <p className="security-pillar__desc">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
