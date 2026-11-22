import React from 'react';
import { FEATURES_CONTENT } from '../data/content';
import { MultiCurrencyWalletCard } from './MultiCurrencyWalletCard';
import { ProfitLossCard } from './ProfitLossCard';
import { SparkleIcon } from './SvgIcons';
import './FeaturesShowcase.css';

export const FeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="features-section" aria-labelledby="features-heading">
      <div className="features-section__container">
        <div className="features-showcase" data-reveal>
          <div className="features-showcase__head">
            <span className="section-badge">
              <SparkleIcon size={11} />
              <span>{FEATURES_CONTENT.badge}</span>
            </span>

            <h2 id="features-heading" className="section-title-duotone">
              <span className="section-title-duotone__line">
                <span className="text-bright">{FEATURES_CONTENT.titleStart}</span>{' '}
                <span className="text-muted">{FEATURES_CONTENT.titleMuted1}</span>
              </span>
              <span className="section-title-duotone__line">
                <span className="text-muted">{FEATURES_CONTENT.titleMuted2}</span>{' '}
                <span className="text-bright">{FEATURES_CONTENT.titleEnd}</span>
              </span>
            </h2>

            <p className="section-subtitle">{FEATURES_CONTENT.subtitle}</p>
          </div>

          <div className="features-showcase__grid">
            <MultiCurrencyWalletCard />
            <ProfitLossCard />
          </div>
        </div>
      </div>
    </section>
  );
};
