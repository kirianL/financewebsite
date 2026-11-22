import React from 'react';
import { HOW_IT_WORKS_CONTENT } from '../data/content';
import { CanopyMark, COSTA_RICA_BANKS, IntegrationTileIcon, SparkleIcon } from './SvgIcons';
import './HowItWorks.css';

const BANK_INDICES = [0, 1, 2, 3, 4]; // BAC, BN, BCR, BP, BCCR

const INPUT_PATHS = [
  'M 128 48 C 235 48, 290 170, 382 170',
  'M 128 109 C 228 109, 290 170, 382 170',
  'M 128 170 L 382 170',
  'M 128 231 C 228 231, 290 170, 382 170',
  'M 128 292 C 235 292, 290 170, 382 170',
];

const OUTPUT_PATHS = [
  { id: 'sinpe', d: 'M 478 170 C 568 170, 610 78, 692 78' },
  { id: 'monex', d: 'M 478 170 L 692 170' },
  { id: 'hacienda', d: 'M 478 170 C 568 170, 610 262, 692 262' },
];

const OUTPUT_NODES = [
  {
    id: 'sinpe',
    title: 'SINPE',
    subtitle: 'Transferencias al instante',
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4.5 7.5h11m0 0L12.5 4.5m3 3l-3 3M15.5 12.5h-11m0 0l3-3m-3 3l3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'monex',
    title: 'MONEX BCCR',
    subtitle: 'Tipo de cambio oficial',
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12.4 7.8a3.2 3.2 0 00-4.6 0 3.3 3.3 0 000 4.4 3.2 3.2 0 004.6 0M9.3 5.2l-1.2 9.6M11.7 5.2l-1.2 9.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'hacienda',
    title: 'Hacienda',
    subtitle: 'Comprobantes XML',
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="2.8" width="12" height="14.4" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M7.2 7.5h5.6M7.2 10.5h5.6M7.2 13.5h3.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="process-section" aria-labelledby="process-heading">
      <div className="container process-section__inner">
        <div className="process-section__head" data-reveal>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{HOW_IT_WORKS_CONTENT.badge}</span>
          </span>

          <h2 id="process-heading" className="section-title-duotone">
            <span className="section-title-duotone__line">
              <span className="text-bright">{HOW_IT_WORKS_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{HOW_IT_WORKS_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{HOW_IT_WORKS_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{HOW_IT_WORKS_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle">{HOW_IT_WORKS_CONTENT.subtitle}</p>
        </div>

        {/* Centered, clean, borderless architectural flow directly on #311916 */}
        <div
          className="process-stage"
          data-reveal
          style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
          role="img"
          aria-label="Sincronización en tiempo real de bancos de Costa Rica hacia Kora, SINPE, MONEX BCCR y Hacienda"
        >
          <svg
            className="process-stage__lines"
            viewBox="0 0 860 340"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {INPUT_PATHS.map((d, i) => (
              <g key={i}>
                <path d={d} className="process-line__base" />
                <path
                  d={d}
                  className="process-line__pulse"
                  style={{ animationDelay: `${i * -0.38}s` }}
                />
              </g>
            ))}
            {OUTPUT_PATHS.map((item, i) => (
              <g key={item.id}>
                <path d={item.d} className="process-line__base" />
                <path
                  d={item.d}
                  className="process-line__pulse process-line__pulse--out"
                  style={{ animationDelay: `${i * -0.52}s` }}
                />
              </g>
            ))}
          </svg>

          <div className="process-stage__grid">
            {/* Left: Pure Costa Rican Bank SVG Logos (no grey outer containers) */}
            <div className="process-banks-col">
              {BANK_INDICES.map((bankIdx) => {
                const bank = COSTA_RICA_BANKS[bankIdx];
                return (
                  <div
                    key={bankIdx}
                    className="process-bank-item"
                    title={bank?.fullName}
                    aria-label={bank?.fullName}
                  >
                    <IntegrationTileIcon index={bankIdx} />
                  </div>
                );
              })}
            </div>

            {/* Center: Minimalist Kora Hub */}
            <div className="process-hub">
              <span className="process-hub__halo" aria-hidden="true" />
              <div className="process-hub__card">
                <CanopyMark size={26} />
                <span className="process-hub__label">Kora</span>
              </div>
            </div>

            {/* Right: Clean Architectural Destination Nodes */}
            <div className="process-outputs-col">
              {OUTPUT_NODES.map((node) => (
                <div key={node.id} className="process-output-card">
                  <span className="process-output-card__icon">{node.icon}</span>
                  <div className="process-output-card__text">
                    <span className="process-output-card__title">{node.title}</span>
                    <span className="process-output-card__sub">{node.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
