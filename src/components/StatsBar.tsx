import React, { useEffect, useRef, useState } from 'react';
import NumberFlow, { type Format } from '@number-flow/react';
import { STATS_ITEMS } from '../data/content';
import './StatsBar.css';

interface StatConfig {
  start: number;
  end: number;
  format: Format;
  prefix?: string;
  suffix?: string;
}

const STAT_CONFIGS: StatConfig[] = [
  { start: 420, end: 500, format: { maximumFractionDigits: 0 }, suffix: '+' },
  { start: 0.62, end: 0.8, format: { style: 'percent', maximumFractionDigits: 0 } },
  { start: 96, end: 120, format: { maximumFractionDigits: 0 }, prefix: '₡', suffix: 'B+' },
];

export const StatsBar: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section ref={sectionRef} id="stats" className="stats-bar" aria-label="Platform metrics">
      <div className="container">
        <div className="stats-bar__grid">
          {STATS_ITEMS.map((item, idx) => {
            const cfg = STAT_CONFIGS[idx];
            return (
              <div
                key={item.label}
                className="stats-bar__item"
                data-reveal
                style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
              >
                <div className="stats-bar__value tabular-nums">
                  {cfg ? (
                    <NumberFlow
                      value={revealed ? cfg.end : cfg.start}
                      format={cfg.format}
                      prefix={cfg.prefix}
                      suffix={cfg.suffix}
                      trend={1}
                      className="nf-number"
                    />
                  ) : (
                    item.value
                  )}
                </div>
                <div className="stats-bar__label">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
