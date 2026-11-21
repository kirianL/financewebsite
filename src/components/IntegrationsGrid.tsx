import React from 'react';
import { INTEGRATIONS_CONTENT } from '../data/content';
import { IntegrationTileIcon, SparkleIcon } from './SvgIcons';
import './IntegrationsGrid.css';

const TOP_ROW_IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const BOTTOM_ROW_IDS = [9, 10, 11, 12, 13, 14, 15];

export const IntegrationsGrid: React.FC = () => {
  return (
    <section id="integrations" className="integrations-section" aria-labelledby="integrations-heading">
      <div className="container integrations-section__inner">
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

        <div className="integrations-grid" aria-label="Supported financial ecosystem integrations">
          <div className="integrations-grid__row">
            {TOP_ROW_IDS.map((id) => (
              <div key={id} className="integration-tile">
                <IntegrationTileIcon index={id} />
              </div>
            ))}
          </div>
          <div className="integrations-grid__row">
            {BOTTOM_ROW_IDS.map((id) => (
              <div key={id} className="integration-tile">
                <IntegrationTileIcon index={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
