import React from 'react';
import { WALLET_DATA } from '../data/content';
import { ChevronDownIcon, TrendUpIcon } from './SvgIcons';

const CURRENCY_BADGE_COLORS: Record<string, string> = {
  USD: '#D9CBB8',
  EUR: '#C8D0D8',
  KRW: '#D8CFC6',
  IDR: '#CFD6CE',
};

export const MultiCurrencyWalletCard: React.FC = () => {
  return (
    <article className="feature-card">
      <div className="feature-card__tray">
        <div className="wallet-ui">
          <div className="wallet-ui__top">
            <div>
              <div className="wallet-ui__label">{WALLET_DATA.balanceLabel}</div>
              <div className="wallet-ui__balance tabular-nums">{WALLET_DATA.balanceValue}</div>
              <div className="wallet-ui__trend">
                <TrendUpIcon size={10} className="wallet-ui__trend-icon" />
                <span>{WALLET_DATA.trendText}</span>
              </div>
            </div>
            <button type="button" className="wallet-ui__selector" aria-label="Selected currency USD">
              <span className="wallet-ui__dot" style={{ backgroundColor: '#6D8468' }} />
              <span>{WALLET_DATA.currencySelector}</span>
              <ChevronDownIcon size={10} />
            </button>
          </div>

          <div className="wallet-ui__subhead">
            <span className="wallet-ui__subhead-title">{WALLET_DATA.walletsHeading}</span>
            <span className="wallet-ui__see-all">{WALLET_DATA.seeAllLabel}</span>
          </div>

          <div className="wallet-ui__grid">
            {WALLET_DATA.currencies.map((item) => (
              <div key={item.code} className="wallet-mini">
                <div className="wallet-mini__code-row">
                  <span
                    className="wallet-mini__coin"
                    style={{ backgroundColor: CURRENCY_BADGE_COLORS[item.code] ?? '#D9D2C5' }}
                  />
                  <span className="wallet-mini__code">{item.code}</span>
                </div>
                <div className="wallet-mini__amount tabular-nums">{item.amount}</div>
                <div className="wallet-mini__status">{item.status}</div>
              </div>
            ))}
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
