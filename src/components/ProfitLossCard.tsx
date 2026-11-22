import React, { useEffect, useRef, useState } from 'react';
import { PROFIT_LOSS_DATA } from '../data/content';
import { ChevronDownIcon } from './SvgIcons';

type TimeframeKey = 'Anual' | 'Trimestral' | 'Mensual';

interface TimeframeConfig {
  label: TimeframeKey;
  spent: string;
  budget: string;
  rows: number[][];
}

// 4 rows x 12 columns (Ene..Dic) matching the reference 02-stats-features-integrations.jpg heatmap
const TIMEFRAMES: Record<TimeframeKey, TimeframeConfig> = {
  Anual: {
    label: 'Anual',
    spent: PROFIT_LOSS_DATA.spentValue,
    budget: PROFIT_LOSS_DATA.budgetValue,
    rows: [
      [3, 1, 3, 2, 1, 1, 1, 3, 1, 1, 3, 1],
      [0, 0, 0, 1, 0, 3, 0, 0, 0, 2, 0, 0],
      [0, 0, 3, 0, 0, 3, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0],
    ],
  },
  Trimestral: {
    label: 'Trimestral',
    spent: '₡4,605,000',
    budget: 'de ₡6,250,000',
    rows: [
      [2, 3, 1, 3, 2, 1, 3, 1, 2, 3, 1, 2],
      [1, 0, 2, 0, 1, 2, 0, 1, 0, 1, 2, 0],
      [0, 2, 0, 1, 0, 1, 2, 0, 1, 0, 0, 1],
      [0, 0, 1, 0, 2, 0, 0, 2, 0, 1, 0, 0],
    ],
  },
  Mensual: {
    label: 'Mensual',
    spent: '₡1,535,000',
    budget: 'de ₡2,100,000',
    rows: [
      [1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1],
      [0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 1],
      [0, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0],
    ],
  },
};

const TIMEFRAME_KEYS: TimeframeKey[] = ['Anual', 'Trimestral', 'Mensual'];
const CELL_COLORS = ['#E4E5E9', '#D3D5DA', '#9FA3AA', '#2B2B2E'];

export const ProfitLossCard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<TimeframeKey>('Anual');
  const [swapping, setSwapping] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = TIMEFRAMES[timeframe];

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleSelectTimeframe = (next: TimeframeKey) => {
    setMenuOpen(false);
    if (next === timeframe) return;
    setSwapping(true);
    window.setTimeout(() => {
      setTimeframe(next);
      setSwapping(false);
    }, 110);
  };

  return (
    <article className="feature-card feature-card--pnl">
      <div className="feature-card__tray">
        <div className="pnl-ui">
          <div className="pnl-ui__top">
            <span className="pnl-ui__label">{PROFIT_LOSS_DATA.overviewLabel}</span>

            <div className="ui-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`wallet-ui__selector ${menuOpen ? 'is-open' : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
                aria-label={`Timeframe ${timeframe}`}
              >
                <span>{timeframe}</span>
                <ChevronDownIcon
                  size={10}
                  className={`wallet-ui__chevron ${menuOpen ? 'is-open' : ''}`}
                />
              </button>

              <div
                className="ui-dropdown__menu"
                role="listbox"
                aria-label="Select timeframe"
                data-open={menuOpen}
              >
                {TIMEFRAME_KEYS.map((key) => {
                  const isCurrent = key === timeframe;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="option"
                      aria-selected={isCurrent}
                      className={`ui-dropdown__option ${isCurrent ? 'is-selected' : ''}`}
                      onClick={() => handleSelectTimeframe(key)}
                    >
                      <span>{key}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pnl-ui__metric-row">
            <div className="pnl-ui__metric">
              <span className={`pnl-ui__amount tabular-nums ${swapping ? 'is-swapping' : ''}`}>
                {current.spent}
              </span>
              <span className="pnl-ui__budget tabular-nums">{current.budget}</span>
            </div>
            <div className="pnl-ui__legend" aria-hidden="true">
              <span className="pnl-ui__legend-item">
                <span className="pnl-ui__legend-box" style={{ backgroundColor: '#D3D5DA' }} />
                <span>{PROFIT_LOSS_DATA.legendLow}</span>
              </span>
              <span className="pnl-ui__legend-item">
                <span className="pnl-ui__legend-box" style={{ backgroundColor: '#2B2B2E' }} />
                <span>{PROFIT_LOSS_DATA.legendHigh}</span>
              </span>
            </div>
          </div>

          <div
            className="pnl-ui__heatmap"
            role="img"
            aria-label={`${timeframe} spending heatmap from January to December`}
            onMouseLeave={() => setHoveredCol(null)}
          >
            {current.rows.map((row, rIdx) => (
              <div key={rIdx} className="pnl-ui__heatmap-row">
                {row.map((level, cIdx) => (
                  <span
                    key={cIdx}
                    className="pnl-ui__cell"
                    onMouseEnter={() => setHoveredCol(cIdx)}
                    style={
                      {
                        backgroundColor: CELL_COLORS[level],
                        '--cell-delay': `${cIdx * 10 + rIdx * 6}ms`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="pnl-ui__months">
            {PROFIT_LOSS_DATA.months.map((m, idx) => (
              <span
                key={m}
                className={`pnl-ui__month ${hoveredCol === idx ? 'is-active' : ''}`}
              >
                {m}
              </span>
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
