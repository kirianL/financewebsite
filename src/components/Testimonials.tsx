import React, { useState } from 'react';
import { TESTIMONIALS_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './Testimonials.css';

const TILE_SIZE = 116;
const TILE_GAP = 14;
const TILE_STEP = TILE_SIZE + TILE_GAP; // 130px per testimonial step

// Decorative side-column tiles (5 slots each) for smooth vertical parallax
const SIDE_TILES = [0, 1, 2, 3, 4];

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

  // Center column: 1 top spacer + N portraits + 1 bottom spacer.
  // Viewport height = 344px -> center slot top = (344 - 116) / 2 = 114px.
  // Spacer (116px) + gap (14px) = 130px, so initial offset -16px centers item 0 at y = 114px.
  const centerTrackY = -16 - activeIdx * TILE_STEP;
  const leftSideTrackY = -28 - activeIdx * 42;
  const rightSideTrackY = -64 + activeIdx * 36;

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container testimonials-section__inner">
        <div className="testimonials-section__head" data-reveal>
          <span className="section-badge testimonials-badge">
            <SparkleIcon size={11} />
            <span>{TESTIMONIALS_CONTENT.badge}</span>
          </span>

          <h2 id="testimonials-heading" className="section-title-duotone testimonials-title">
            <span className="section-title-duotone__line">
              <span className="testimonials-text-bright">{TESTIMONIALS_CONTENT.titleStart}</span>{' '}
              <span className="testimonials-text-muted">{TESTIMONIALS_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="testimonials-text-muted">{TESTIMONIALS_CONTENT.titleMuted2}</span>{' '}
              <span className="testimonials-text-bright">{TESTIMONIALS_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="testimonials-subtitle">{TESTIMONIALS_CONTENT.subtitle}</p>
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

              {/* Center portrait column */}
              <div
                className="testimonial-grid-col testimonial-grid-col--center"
                style={{ transform: `translateY(${centerTrackY}px)` }}
              >
                <div className="testimonial-tile testimonial-tile--empty" />
                {items.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      tabIndex={-1}
                      onClick={() => goTo(idx, idx > activeIdx ? 'next' : 'prev')}
                      className={`testimonial-tile testimonial-tile--portrait ${isActive ? 'is-active' : ''}`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        width={232}
                        height={232}
                        loading="eager"
                        decoding="async"
                        className="testimonial-tile__img"
                      />
                    </button>
                  );
                })}
                <div className="testimonial-tile testimonial-tile--empty" />
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
                <span className="testimonial-editorial__role">
                  {current.role} · <span className="testimonial-editorial__metric">{current.metric}</span>
                </span>
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
