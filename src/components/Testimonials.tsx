import React, { useState } from 'react';
import { TESTIMONIALS_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './Testimonials.css';

const TILE_SIZE = 116;
const TILE_GAP = 14;
const TILE_STEP = TILE_SIZE + TILE_GAP; // 130px per testimonial step

// Decorative side-column tiles (5 slots each) for smooth vertical parallax
const SIDE_TILES = [0, 1, 2, 3, 4];

// Minimalist SVG company marks (16x16 inline, no grey container)
const COMPANY_LOGOS: Record<string, { company: string; role: string; svg: React.ReactNode }> = {
  'san-jose': {
    company: 'Grupo Valle',
    role: 'Gerente financiera, San José',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9z"
          stroke="#311916"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10l3.5 5.5L15.5 10"
          stroke="#46602E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  heredia: {
    company: 'Nexo CR',
    role: 'CFO, Heredia',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9.5" cy="12" r="5.5" stroke="#311916" strokeWidth="1.9" />
        <circle cx="14.5" cy="12" r="5.5" stroke="#46602E" strokeWidth="1.9" />
      </svg>
    ),
  },
  alajuela: {
    company: 'TicoExport',
    role: 'Directora administrativa, Alajuela',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" stroke="#311916" strokeWidth="1.9" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" stroke="#311916" strokeWidth="1.9" />
        <path
          d="M13.5 7.5h5v5M18.5 7.5L11 15"
          stroke="#46602E"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const items = TESTIMONIALS_CONTENT.items;
  const total = items.length;
  const current = items[activeIdx] ?? items[0];

  const goTo = (nextIdx: number, dir: 'next' | 'prev') => {
    const wrapped = (nextIdx + total) % total;
    if (wrapped === activeIdx) return;
    setDirection(dir);
    setActiveIdx(wrapped);
  };

  const handlePrev = () => goTo(activeIdx - 1, 'prev');
  const handleNext = () => goTo(activeIdx + 1, 'next');

  // Center column interleaves an empty spacer tile between every portrait
  // [empty, p0, empty, p1, empty, p2, empty] so ONLY 1 portrait is visible at rest.
  // Viewport height = 344px -> center slot top = (344 - 116) / 2 = 114px.
  // p0 is at index 1 (130px), so initial offset -16px centers p0 at y = 114px;
  // each testimonial step advances 2 tiles (2 * 130px = 260px).
  const centerTrackY = -16 - activeIdx * (TILE_STEP * 2);
  const leftSideTrackY = -28 - activeIdx * 48;
  const rightSideTrackY = -64 + activeIdx * 40;

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container testimonials-section__inner">
        <div className="testimonials-section__head">
          <span className="section-badge testimonials-badge" data-reveal>
            <SparkleIcon size={11} />
            <span>{TESTIMONIALS_CONTENT.badge}</span>
          </span>

          <h2 id="testimonials-heading" className="section-title-duotone testimonials-title" data-reveal-01="words" data-scroll>
            <span className="section-title-duotone__line">
              <span className="testimonials-text-bright">{TESTIMONIALS_CONTENT.titleStart}</span>{' '}
              <span className="testimonials-text-muted">{TESTIMONIALS_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="testimonials-text-muted">{TESTIMONIALS_CONTENT.titleMuted2}</span>{' '}
              <span className="testimonials-text-bright">{TESTIMONIALS_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="testimonials-subtitle" data-reveal-01="lines" data-scroll>
            {TESTIMONIALS_CONTENT.subtitle}
          </p>
        </div>

        <div className="testimonial-showcase" data-reveal style={{ '--reveal-delay': '60ms' } as React.CSSProperties}>
          {/* Left: 3-column masked tile grid with smooth vertical slide */}
          <div className="testimonial-grid-viewport" aria-hidden="true">
            <div className="testimonial-grid-glow" />

            <div className="testimonial-grid-columns">
              {/* Left decorative column */}
              <div
                className="testimonial-grid-col testimonial-grid-col--side"
                style={{ transform: `translateY(${leftSideTrackY}px)` }}
              >
                {SIDE_TILES.map((slot) => (
                  <div key={`left-${slot}`} className="testimonial-tile testimonial-tile--empty" />
                ))}
              </div>

              {/* Center portrait column: 1 empty tile between each portrait */}
              <div
                className="testimonial-grid-col testimonial-grid-col--center"
                style={{ transform: `translateY(${centerTrackY}px)` }}
              >
                <div className="testimonial-tile testimonial-tile--empty" />
                {items.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <React.Fragment key={item.id}>
                      <button
                        type="button"
                        tabIndex={-1}
                        onClick={() => goTo(idx, idx > activeIdx ? 'next' : 'prev')}
                        className={`testimonial-tile testimonial-tile--portrait ${isActive ? 'is-active' : ''}`}
                      >
                        <img
                          src={item.image}
                          alt={isActive ? item.author : ''}
                          width={232}
                          height={232}
                          loading="eager"
                          decoding="sync"
                          className="testimonial-tile__img"
                        />
                      </button>
                      <div className="testimonial-tile testimonial-tile--empty" />
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Right decorative column */}
              <div
                className="testimonial-grid-col testimonial-grid-col--side"
                style={{ transform: `translateY(${rightSideTrackY}px)` }}
              >
                {SIDE_TILES.map((slot) => (
                  <div key={`right-${slot}`} className="testimonial-tile testimonial-tile--empty" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Editorial quote + arrow navigation */}
          <div className="testimonial-editorial">
            <svg
              className="testimonial-quote-mark"
              width="38"
              height="28"
              viewBox="0 0 38 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15.4 0C7.5 1.9 2.2 8.2 2.2 16.3c0 6.1 3.9 10.7 9.1 10.7 4.4 0 7.7-3.2 7.7-7.4 0-4.1-3-7.1-7-7.1-1 0-2 .2-2.8.6.9-4 3.6-6.9 7.8-8.3L15.4 0zm19.4 0c-7.9 1.9-13.2 8.2-13.2 16.3 0 6.1 3.9 10.7 9.1 10.7 4.4 0 7.7-3.2 7.7-7.4 0-4.1-3-7.1-7-7.1-1 0-2 .2-2.8.6.9-4 3.6-6.9 7.8-8.3L34.8 0z"
                fill="currentColor"
              />
            </svg>

            <div
              key={current.id}
              className={`testimonial-editorial__content testimonial-editorial__content--${direction}`}
              aria-live="polite"
            >
              <blockquote className="testimonial-editorial__quote">
                {current.quote}
              </blockquote>

              <div className="testimonial-editorial__meta">
                <span className="testimonial-editorial__author">{current.author}</span>
                <div className="testimonial-editorial__company-row">
                  <span className="testimonial-editorial__company-mark">
                    {(COMPANY_LOGOS[current.id] ?? COMPANY_LOGOS['san-jose']).svg}
                  </span>
                  <span className="testimonial-editorial__company-name">
                    {(COMPANY_LOGOS[current.id] ?? COMPANY_LOGOS['san-jose']).company}
                  </span>
                  <span className="testimonial-editorial__role">
                    {(COMPANY_LOGOS[current.id] ?? COMPANY_LOGOS['san-jose']).role}
                  </span>
                </div>
              </div>
            </div>

            <div className="testimonial-nav">
              <button
                type="button"
                onClick={handlePrev}
                className="testimonial-nav__btn"
                aria-label="Testimonio anterior"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M12.5 8H3.5m0 0L7 4.5M3.5 8L7 11.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="testimonial-nav__btn"
                aria-label="Siguiente testimonio"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 8h9m0 0L9 4.5M12.5 8L9 11.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <span className="testimonial-nav__counter tabular-nums" aria-hidden="true">
                0{activeIdx + 1} / 0{total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
