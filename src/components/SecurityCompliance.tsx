import React, { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';
import { SECURITY_CONTENT } from '../data/content';
import { SparkleIcon } from './SvgIcons';
import './SecurityCompliance.css';

export const SecurityCompliance: React.FC = () => {
  const bentoRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = bentoRef.current;
    if (!el || revealed) return;

    if (!('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section id="security" className="security-section" aria-labelledby="security-heading">
      <div className="container">
        <header className="security-head" data-reveal>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{SECURITY_CONTENT.badge}</span>
          </span>

          <h2 id="security-heading" className="section-title-duotone security-title" data-reveal-01="words" data-scroll>
            <span className="section-title-duotone__line">
              <span className="text-bright">{SECURITY_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{SECURITY_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{SECURITY_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{SECURITY_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle security-subtitle" data-reveal-01="lines" data-scroll>
            {SECURITY_CONTENT.subtitle}
          </p>
        </header>

        <div ref={bentoRef} className="security-bento">
          {/* 01 — Cream, elevated */}
          <article
            className="sec-card sec-card--cream"
            data-reveal
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">01 / TRAZABILIDAD</span>
            <div className="sec-card__visual sec-card__visual--bleed">
              <img
                src="/images/sec-tiles.png"
                alt="Mosaicos metálicos entrelazados de trazabilidad SUGEF"
                width={1024}
                height={600}
                loading="eager"
                decoding="sync"
                className="sec-card__img"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">
                <NumberFlow
                  value={revealed ? 1 : 0.84}
                  format={{ style: 'percent', maximumFractionDigits: 0 }}
                  trend={1}
                  className="nf-number"
                />
              </span>
              <span className="sec-card__caption">Trazabilidad estándar SUGEF</span>
            </div>
          </article>

          {/* 02 — Warm stone, staggered down */}
          <article
            className="sec-card sec-card--stone sec-card--offset"
            data-reveal
            style={{ '--reveal-delay': '50ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">02 / MULTIMONEDA</span>
            <div className="sec-card__visual sec-card__visual--bleed">
              <img
                src="/images/sec-coins.png"
                alt="Monedas en colones, dólares y euros"
                width={1024}
                height={600}
                loading="eager"
                decoding="sync"
                className="sec-card__img"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">
                <NumberFlow
                  value={revealed ? 16 : 11}
                  format={{ maximumFractionDigits: 0 }}
                  suffix="+"
                  trend={1}
                  className="nf-number"
                />
              </span>
              <span className="sec-card__caption">Bancos y cooperativas CR</span>
            </div>
          </article>

          {/* 03 — Cream, elevated */}
          <article
            className="sec-card sec-card--cream"
            data-reveal
            style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
          >
            <span className="sec-card__label">03 / SEGURIDAD</span>
            <div className="sec-card__visual sec-card__visual--shield">
              <img
                src="/images/sec-shields.png"
                alt="Escudos de seguridad bancaria y validación Hacienda"
                width={900}
                height={900}
                loading="eager"
                decoding="sync"
                className="sec-card__img sec-card__img--contain"
              />
            </div>
            <div className="sec-card__bottom">
              <span className="sec-card__stat tabular-nums">
                <NumberFlow
                  value={revealed ? 0.9999 : 0.985}
                  format={{
                    style: 'percent',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }}
                  trend={1}
                  className="nf-number"
                />
              </span>
              <span className="sec-card__caption">Cifrado TLS 1.3 y validación Hacienda</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
