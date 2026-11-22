import React, { useRef, useState } from 'react';
import { INTEGRATIONS_CONTENT } from '../data/content';
import { COSTA_RICA_BANKS, IntegrationTileIcon, SparkleIcon } from './SvgIcons';
import './IntegrationsGrid.css';

const TOP_ROW_IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const BOTTOM_ROW_IDS = [9, 10, 11, 12, 13, 14, 15];

export const IntegrationsGrid: React.FC = () => {
  // Emil Kowalski tooltip pattern: first hover delays slightly; subsequent adjacent hovers open instantly
  const [tooltipInstant, setTooltipInstant] = useState(false);
  const warmTimerRef = useRef<number | null>(null);
  const coolTimerRef = useRef<number | null>(null);

  const handleTileEnter = () => {
    if (coolTimerRef.current) {
      window.clearTimeout(coolTimerRef.current);
      coolTimerRef.current = null;
    }
    if (!tooltipInstant && !warmTimerRef.current) {
      warmTimerRef.current = window.setTimeout(() => {
        setTooltipInstant(true);
        warmTimerRef.current = null;
      }, 140);
    }
  };

  const handleGridLeave = () => {
    if (warmTimerRef.current) {
      window.clearTimeout(warmTimerRef.current);
      warmTimerRef.current = null;
    }
    coolTimerRef.current = window.setTimeout(() => {
      setTooltipInstant(false);
      coolTimerRef.current = null;
    }, 260);
  };

  return (
    <section id="integrations" className="integrations-section" aria-labelledby="integrations-heading">
      <div className="container integrations-section__inner">
        <div className="integrations-section__head" data-reveal>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{INTEGRATIONS_CONTENT.badge}</span>
          </span>

          <h2 id="integrations-heading" className="section-title-duotone">
            <span className="section-title-duotone__line">
              <span className="text-bright">{INTEGRATIONS_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{INTEGRATIONS_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{INTEGRATIONS_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{INTEGRATIONS_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle">{INTEGRATIONS_CONTENT.subtitle}</p>
        </div>

        <div
          className="integrations-grid"
          data-instant={tooltipInstant}
          onMouseLeave={handleGridLeave}
          aria-label="Costa Rica banking and financial ecosystem integrations"
        >
          <div className="integrations-grid__row">
            {TOP_ROW_IDS.map((id, idx) => {
              const bank = COSTA_RICA_BANKS[id];
              return (
                <div
                  key={id}
                  className="integration-tile"
                  data-reveal
                  data-bank={bank?.fullName}
                  aria-label={bank?.fullName}
                  onMouseEnter={handleTileEnter}
                  style={{ '--reveal-delay': `${idx * 32}ms` } as React.CSSProperties}
                >
                  <IntegrationTileIcon index={id} />
                  {bank && <span className="integration-tile__tooltip">{bank.fullName}</span>}
                </div>
              );
            })}
          </div>
          <div className="integrations-grid__row">
            {BOTTOM_ROW_IDS.map((id, idx) => {
              const bank = COSTA_RICA_BANKS[id];
              return (
                <div
                  key={id}
                  className="integration-tile"
                  data-reveal
                  data-bank={bank?.fullName}
                  aria-label={bank?.fullName}
                  onMouseEnter={handleTileEnter}
                  style={{ '--reveal-delay': `${(idx + 3) * 35}ms` } as React.CSSProperties}
                >
                  <IntegrationTileIcon index={id} />
                  {bank && <span className="integration-tile__tooltip">{bank.fullName}</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
