import React from 'react';
import { HOW_IT_WORKS_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './HowItWorks.css';

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

        <div className="process-layout">
          <div className="process-steps">
            {HOW_IT_WORKS_CONTENT.steps.map((step, idx) => (
              <article
                key={step.number}
                className="process-step-card"
                data-reveal
                style={{ '--reveal-delay': `${idx * 60}ms` } as React.CSSProperties}
              >
                <span className="process-step-card__num tabular-nums">{step.number}</span>
                <div className="process-step-card__body">
                  <h3 className="process-step-card__title">{step.title}</h3>
                  <p className="process-step-card__desc">{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div
            className="process-visual"
            data-reveal
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <img
              src="/images/how-it-works.webp"
              alt="Conexión de cuentas bancarias de Costa Rica al panel de tesorería Kora"
              width={1344}
              height={768}
              loading="eager"
              decoding="async"
              className="process-visual__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
