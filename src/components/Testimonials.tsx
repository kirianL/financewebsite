import React, { useState } from 'react';
import { TESTIMONIALS_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [swapping, setSwapping] = useState(false);

  const items = TESTIMONIALS_CONTENT.items;
  const current = items[activeIdx] ?? items[0];

  const selectIndex = (nextIdx: number) => {
    if (nextIdx === activeIdx) return;
    setSwapping(true);
    window.setTimeout(() => {
      setActiveIdx(nextIdx);
      setSwapping(false);
    }, 120);
  };

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

        <div className="testimonials-stage" data-reveal>
          <div className={`testimonial-feature ${swapping ? 'is-swapping' : ''}`}>
            <div className="testimonial-feature__media">
              <img
                src={current.image}
                alt={current.author}
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="testimonial-feature__img"
              />
            </div>

            <div className="testimonial-feature__body">
              <span className="testimonial-feature__metric tabular-nums">{current.metric}</span>
              <blockquote className="testimonial-feature__quote">“{current.quote}”</blockquote>
              <div className="testimonial-feature__meta">
                <div className="testimonial-feature__author">{current.author}</div>
                <div className="testimonial-feature__role">{current.role}</div>
              </div>
            </div>
          </div>

          <div className="testimonials-controls" role="tablist" aria-label="Seleccionar caso de éxito">
            {items.map((item, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => selectIndex(idx)}
                  className={`testimonials-tab ${isSelected ? 'is-active' : ''}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    width={32}
                    height={32}
                    loading="eager"
                    className="testimonials-tab__avatar"
                  />
                  <span className="testimonials-tab__text">
                    <span className="testimonials-tab__name">{item.author}</span>
                    <span className="testimonials-tab__metric tabular-nums">{item.metric}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
