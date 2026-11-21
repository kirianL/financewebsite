import React from 'react';
import { PROFIT_LOSS_DATA } from '../data/content';
import { ChevronDownIcon } from './SvgIcons';

// 4 rows x 12 columns (Jan..Dec) matching the reference 02-stats-features-integrations.jpg heatmap
const HEATMAP_ROWS: number[][] = [
  [3, 1, 3, 2, 1, 1, 1, 3, 1, 1, 3, 1],
  [0, 0, 0, 1, 0, 3, 0, 0, 0, 2, 0, 0],
  [0, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0],
];

const CELL_COLORS = ['#E8E9EC', '#D6D8DC', '#9FA3AA', '#2B2B2E'];

export const ProfitLossCard: React.FC = () => {
  return (
    <article className="feature-card">
      <div className="feature-card__tray">
        <div className="pnl-ui">
          <div className="pnl-ui__top">
            <span className="pnl-ui__label">{PROFIT_LOSS_DATA.overviewLabel}</span>
            <button type="button" className="wallet-ui__selector" aria-label="Timeframe Yearly">
              <span>{PROFIT_LOSS_DATA.timeframeLabel}</span>
              <ChevronDownIcon size={10} />
            </button>
          </div>

          <div className="pnl-ui__metric-row">
            <div className="pnl-ui__metric">
              <span className="pnl-ui__amount tabular-nums">{PROFIT_LOSS_DATA.spentValue}</span>
              <span className="pnl-ui__budget tabular-nums">{PROFIT_LOSS_DATA.budgetValue}</span>
            </div>
            <div className="pnl-ui__legend" aria-hidden="true">
              <span className="pnl-ui__legend-item">
                <span className="pnl-ui__legend-box" style={{ backgroundColor: '#D6D8DC' }} />
                <span>{PROFIT_LOSS_DATA.legendLow}</span>
              </span>
              <span className="pnl-ui__legend-item">
                <span className="pnl-ui__legend-box" style={{ backgroundColor: '#2B2B2E' }} />
                <span>{PROFIT_LOSS_DATA.legendHigh}</span>
              </span>
            </div>
          </div>

          <div className="pnl-ui__heatmap" role="img" aria-label="Monthly spending heatmap from January to December">
            {HEATMAP_ROWS.map((row, rIdx) => (
              <div key={rIdx} className="pnl-ui__heatmap-row">
                {row.map((level, cIdx) => (
                  <span
                    key={cIdx}
                    className="pnl-ui__cell"
                    style={{ backgroundColor: CELL_COLORS[level] }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="pnl-ui__months">
            {PROFIT_LOSS_DATA.months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="feature-card__body">
        <h3 className="feature-card__title">{PROFIT_LOSS_DATA.title}</h3>
        <p className="feature-card__desc">{PROFIT_LOSS_DATA.description}</p>
      </div>
    </article>
  );
};
