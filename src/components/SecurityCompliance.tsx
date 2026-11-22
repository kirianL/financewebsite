import React from 'react';
import { SECURITY_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './SecurityCompliance.css';

export const SecurityCompliance: React.FC = () => {
  return (
    <section id="security" className="security-section" aria-labelledby="security-heading">
      <div className="container">
        <header className="security-head" data-reveal>
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
        </header>

        <div className="security-bento">
          {/* 01 — Cream, elevated */}
          <article
            className="sec-card sec-card--cream"
            data-reveal
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">01 / TRAZABILIDAD</span>
            <div className="sec-card__visual">
              <img
                src="/images/sec-tiles.webp"
                alt="Mosaicos metálicos entrelazados de trazabilidad SUGEF"
                width={1024}
                height={1024}
                loading="eager"
                decoding="async"
                className="sec-card__img"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">100%</span>
              <span className="sec-card__caption">Trazabilidad estándar SUGEF</span>
            </div>
          </article>

          {/* 02 — Warm stone, staggered down */}
          <article
            className="sec-card sec-card--stone sec-card--offset"
            data-reveal
            style={{ '--reveal-delay': '40ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">02 / LIQUIDEZ BCCR</span>
            <div className="sec-card__visual sec-card__visual--ui">
              <div className="sec-balance">
                <div className="sec-balance__top">
                  <span className="sec-balance__label">Liquidez total</span>
                  <span className="sec-balance__dot" aria-hidden="true" />
                </div>
                <span className="sec-balance__value tabular-nums">₡138,450,200</span>
                <span className="sec-balance__trend">↑ 6.4% este mes</span>
              </div>
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat">MONEX</span>
              <span className="sec-card__caption">Tipo de cambio oficial BCCR</span>
            </div>
          </article>

          {/* 03 — Cream, elevated */}
          <article
            className="sec-card sec-card--cream"
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">03 / MULTIMONEDA</span>
            <div className="sec-card__visual">
              <img
                src="/images/sec-coins.webp"
                alt="Monedas en colones, dólares y euros"
                width={1024}
                height={1024}
                loading="eager"
                decoding="async"
                className="sec-card__img"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">16+</span>
              <span className="sec-card__caption">Bancos y cooperativas CR</span>
            </div>
          </article>

          {/* 04 — Warm stone, staggered down */}
          <article
            className="sec-card sec-card--stone sec-card--offset"
            data-reveal
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">04 / SEGURIDAD</span>
            <div className="sec-card__visual">
              <img
                src="/images/sec-shields.webp"
                alt="Escudos de seguridad bancaria y validación Hacienda"
                width={1024}
                height={1024}
                loading="eager"
                decoding="async"
                className="sec-card__img"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">99.99%</span>
              <span className="sec-card__caption">Cifrado TLS 1.3 y validación Hacienda</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
