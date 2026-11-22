import React from 'react';
import { STATS_ITEMS } from '../data/content';
import './StatsBar.css';

export const StatsBar: React.FC = () => {
  return (
    <section id="stats" className="stats-bar" aria-label="Platform metrics">
      <div className="container">
        <div className="stats-bar__grid">
          {STATS_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className="stats-bar__item"
              data-reveal
              style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
            >
              <div className="stats-bar__value tabular-nums">{item.value}</div>
              <div className="stats-bar__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
