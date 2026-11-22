import React, { useState } from 'react';
import { PRICING_CONTENT } from '../data/content';
import { CheckCircleIcon, SparkleIcon } from './SvgIcons';
import './PricingSection.css';

export const PricingSection: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');
  const [swapping, setSwapping] = useState(false);

  const handleSelectBilling = (next: 'monthly' | 'annually') => {
    if (next === billing) return;
    setSwapping(true);
    window.setTimeout(() => {
      setBilling(next);
      setSwapping(false);
    }, 110);
  };

  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="container pricing-section__inner">
        <div className="pricing-section__head" data-reveal>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{PRICING_CONTENT.badge}</span>
          </span>

          <h2 id="pricing-heading" className="section-title-duotone">
            <span className="section-title-duotone__line">
              <span className="text-bright">{PRICING_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{PRICING_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{PRICING_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{PRICING_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle">{PRICING_CONTENT.subtitle}</p>

          <div
            className="pricing-toggle"
            role="group"
            aria-label="Billing frequency"
            data-billing={billing}
          >
            <span className="pricing-toggle__thumb" aria-hidden="true" />
            <button
              type="button"
              className={`pricing-toggle__btn ${billing === 'monthly' ? 'is-active' : ''}`}
              aria-pressed={billing === 'monthly'}
              onClick={() => handleSelectBilling('monthly')}
            >
              Mensual
            </button>
            <button
              type="button"
              className={`pricing-toggle__btn ${billing === 'annually' ? 'is-active' : ''}`}
              aria-pressed={billing === 'annually'}
              onClick={() => handleSelectBilling('annually')}
            >
              Anual
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {PRICING_CONTENT.tiers.map((tier, idx) => {
            const price = billing === 'monthly' ? tier.monthlyPrice : tier.annualPrice;
            const isPro = Boolean(tier.recommended);

            return (
              <article
                key={tier.id}
                className={`price-card ${isPro ? 'price-card--pro' : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
              >
                {isPro && tier.recommendedLabel && (
                  <div className="price-card__banner">{tier.recommendedLabel}</div>
                )}

                <div className="price-card__frame">
                  <div className="price-card__top">
                    <h3 className="price-card__name">{tier.name}</h3>
                    <p className="price-card__desc">{tier.description}</p>

                    <div className="price-card__price-row">
                      <span
                        className={`price-card__amount tabular-nums ${
                          swapping && price !== 'A medida' ? 'is-swapping' : ''
                        }`}
                      >
                        {price}
                      </span>
                      {tier.periodLabel && (
                        <span className="price-card__period">{tier.periodLabel}</span>
                      )}
                    </div>

                    <a
                      href="#footer"
                      className={`price-card__cta ${isPro ? 'price-card__cta--pro' : ''}`}
                    >
                      {tier.ctaLabel}
                    </a>
                  </div>

                  <div className={`price-card__bottom ${isPro ? 'price-card__bottom--dark' : ''}`}>
                    <div className="price-card__list-title">Incluye:</div>
                    <ul className="price-card__list">
                      {tier.features.map((feat) => (
                        <li key={feat} className="price-card__list-item">
                          <CheckCircleIcon variant={isPro ? 'dark' : 'light'} className="shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
