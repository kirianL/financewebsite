import React, { useEffect, useRef, useState } from 'react';
import { WALLET_DATA } from '../data/content';
import { ChevronDownIcon, TrendUpIcon } from './SvgIcons';

interface WalletOption {
  code: string;
  symbol: string;
  amount: string;
  totalEquiv: string;
  trend: string;
  status: string;
}

const WALLET_CURRENCIES: WalletOption[] = [
  {
    code: 'CRC',
    symbol: '₡',
    amount: '₡138,450,200',
    totalEquiv: '₡138,450,200',
    trend: '6.4% vs. mes anterior',
    status: 'SINPE Activo',
  },
  {
    code: 'USD',
    symbol: '$',
    amount: '$263,724.32',
    totalEquiv: '$263,724.32',
    trend: '5.0% vs. mes anterior',
    status: 'MONEX Activo',
  },
  {
    code: 'EUR',
    symbol: '€',
    amount: '€ 63,275.45',
    totalEquiv: '€ 242,626.37',
    trend: '4.8% vs. mes anterior',
    status: 'IBAN Activo',
  },
  {
    code: 'USDC',
    symbol: '$',
    amount: '$ 48,920.00',
    totalEquiv: '$ 263,724.32',
    trend: '5.2% vs. mes anterior',
    status: 'Onchain CR',
  },
];

export const MultiCurrencyWalletCard: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCurrency = WALLET_CURRENCIES[selectedIdx] ?? WALLET_CURRENCIES[0];

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

  const selectCurrency = (nextIdx: number) => {
    setMenuOpen(false);
    if (nextIdx === selectedIdx) return;
    setSwapping(true);
    window.setTimeout(() => {
      setSelectedIdx(nextIdx);
      setSwapping(false);
    }, 110);
  };

  return (
    <article className="feature-card feature-card--wallet">
      <div className="feature-card__tray">
        <div className="wallet-ui">
          <div className="wallet-ui__top">
            <div className="wallet-ui__summary">
              <div className="wallet-ui__label">{WALLET_DATA.balanceLabel}</div>
              <div className={`wallet-ui__balance tabular-nums ${swapping ? 'is-swapping' : ''}`}>
                {activeCurrency.totalEquiv}
              </div>
              <div className="wallet-ui__trend">
                <TrendUpIcon size={9} className="wallet-ui__trend-icon" />
                <span>{activeCurrency.trend}</span>
              </div>
            </div>

            <div className="ui-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`wallet-ui__selector ${menuOpen ? 'is-open' : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
                aria-label={`Currency ${activeCurrency.code}`}
              >
                <span className="wallet-ui__dot" aria-hidden="true">
                  {activeCurrency.symbol}
                </span>
                <span>{activeCurrency.code}</span>
                <ChevronDownIcon
                  size={10}
                  className={`wallet-ui__chevron ${menuOpen ? 'is-open' : ''}`}
                />
              </button>

              <div
                className="ui-dropdown__menu"
                role="listbox"
                aria-label="Seleccionar moneda principal"
                data-open={menuOpen}
              >
                {WALLET_CURRENCIES.map((item, idx) => {
                  const isCurrent = idx === selectedIdx;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={isCurrent}
                      className={`ui-dropdown__option ${isCurrent ? 'is-selected' : ''}`}
                      onClick={() => selectCurrency(idx)}
                    >
                      <span className="ui-dropdown__option-left">
                        <span className="wallet-mini__coin" aria-hidden="true">
                          {item.symbol}
                        </span>
                        <span>{item.code}</span>
                      </span>
                      <span className="ui-dropdown__option-symbol">{item.symbol}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="wallet-ui__subhead">
            <span className="wallet-ui__subhead-title">{WALLET_DATA.walletsHeading}</span>
            <button
              type="button"
              className="wallet-ui__see-all"
              onClick={() => selectCurrency((selectedIdx + 1) % WALLET_CURRENCIES.length)}
            >
              {WALLET_DATA.seeAllLabel}
            </button>
          </div>

          <div className="wallet-ui__grid">
            {WALLET_CURRENCIES.map((item, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => selectCurrency(idx)}
                  className={`wallet-mini ${isSelected ? 'is-selected' : ''}`}
                  aria-pressed={isSelected}
                >
                  <div className="wallet-mini__code-row">
                    <span className="wallet-mini__coin" aria-hidden="true">
                      {item.symbol}
                    </span>
                    <span className="wallet-mini__code">{item.code}</span>
                  </div>
                  <div className="wallet-mini__amount tabular-nums">{item.amount}</div>
                  <div className="wallet-mini__status">{item.status}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="feature-card__body">
        <h3 className="feature-card__title">{WALLET_DATA.title}</h3>
        <p className="feature-card__desc">{WALLET_DATA.description}</p>
      </div>
    </article>
  );
};
