import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { HeroDollarBadgeIcon } from './SvgIcons';
import './HeroCanopy.css';

export const HeroCanopy: React.FC = () => {
  return (
    <section id="hero" className="hero-canopy" aria-labelledby="hero-heading">
      <div className="container hero-canopy__inner">
        <div className="hero-canopy__copy">
          <h1 id="hero-heading" className="hero-canopy__title">
            <span className="hero-canopy__line">{HERO_CONTENT.line1}</span>
            <span className="hero-canopy__line hero-canopy__line--accent">
              <span className="hero-canopy__pill">
                <HeroDollarBadgeIcon className="hero-canopy__pill-icon" />
                <span>{HERO_CONTENT.line2Highlight}</span>
              </span>{' '}
              <span>{HERO_CONTENT.line2End}</span>
            </span>
          </h1>

          <p className="hero-canopy__subtitle" data-reveal-01="lines" data-delay="0.06">
            {HERO_CONTENT.subtitle}
          </p>

          <a href={HERO_CONTENT.ctaHref} className="hero-canopy__cta">
            <span>{HERO_CONTENT.ctaLabel}</span>
          </a>
        </div>
      </div>

      {/* Single integrated Hero photograph: 100 Colones coins in rolling moss hillside */}
      <div className="hero-canopy__visual" aria-hidden="true">
        <img
          src="/images/hero-colones-moss.jpg"
          alt=""
          width={2000}
          height={1117}
          className="hero-canopy__img"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};
