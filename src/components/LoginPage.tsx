import React, { useState } from 'react';
import { HERO_CONTENT } from '../data/content';
import {
  AppleIcon,
  CanopyMark,
  COSTA_RICA_BANKS,
  GoogleIcon,
  HeroDollarBadgeIcon,
  IntegrationTileIcon,
  SparkleIcon,
  TrendUpIcon,
} from './SvgIcons';
import './LoginPage.css';

interface LoginPageProps {
  onNavigateHome: () => void;
}

const SHOWCASE_BANK_IDS = [0, 1, 2, 3, 4, 6, 9];

const MINI_BALANCES = [
  { code: 'CRC', symbol: '₡', amount: '₡138,450,200', status: 'SINPE Activo' },
  { code: 'USD', symbol: '$', amount: '$263,724.32', status: 'MONEX Activo' },
  { code: 'EUR', symbol: '€', amount: '€ 63,275.45', status: 'IBAN Activo' },
  { code: 'USDC', symbol: '$', amount: '$ 48,920.00', status: 'Onchain CR' },
];

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigateHome }) => {
  const [authMode, setAuthMode] = useState<'password' | 'magic'>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'info' | 'error' | 'success';
    message: string;
  } | null>(null);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateHome();
  };

  const handleSsoClick = (provider: string) => {
    setFeedback({
      type: 'info',
      message: `Conectando con ${provider} SSO corporativo (entorno de demostración Kora CR).`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setFeedback({
        type: 'error',
        message: 'Por favor ingresa un correo corporativo válido (ej. finanzas@empresa.co.cr).',
      });
      return;
    }

    if (authMode === 'password' && password.trim().length < 6) {
      setFeedback({
        type: 'error',
        message: 'Ingresa tu contraseña corporativa (mínimo 6 caracteres).',
      });
      return;
    }

    if (authMode === 'magic') {
      setFeedback({
        type: 'success',
        message: `Enlace de acceso seguro enviado a ${trimmedEmail}. Revisa tu bandeja corporativa.`,
      });
    } else {
      setFeedback({
        type: 'success',
        message: `Sesión verificada para ${trimmedEmail}. Redirigiendo a tu tesorería Kora CR...`,
      });
    }
  };

  return (
    <div className="login-page">
      <header className="login-topbar">
        <div className="container login-topbar__inner">
          <a href="/" className="login-topbar__brand" onClick={handleBackClick}>
            <CanopyMark size={20} />
            <span>{HERO_CONTENT.brand}</span>
          </a>

          <a href="/" className="login-topbar__back" onClick={handleBackClick}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M12.5 8H3.5M3.5 8L7.25 4.25M3.5 8L7.25 11.75"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Volver al inicio</span>
          </a>
        </div>
      </header>

      <main id="main" className="login-main" tabIndex={-1}>
        <div className="container login-layout">
          {/* Left Column — Editorial Form Card matching Hero warm cream palette */}
          <section className="login-form-card" aria-labelledby="login-heading">
            <div className="login-form-card__head">
              <span className="login-badge">
                <SparkleIcon size={10} />
                <span>ACCESO CORPORATIVO CR</span>
              </span>

              <h1 id="login-heading" className="login-title">
                <span className="login-title__line">Ingresa a tu tesorería</span>
                <span className="login-title__line login-title__line--accent">
                  <span className="hero-canopy__pill login-title__pill">
                    <HeroDollarBadgeIcon className="hero-canopy__pill-icon" />
                    <span>Colones</span>
                  </span>{' '}
                  <span>y SINPE.</span>
                </span>
              </h1>

              <p className="login-subtitle">
                Accede a tu panel multi-banco conectado a BAC, BCR, Banco Nacional, SINPE Empresarial y tipo de cambio MONEX.
              </p>
            </div>

            {/* Segmented Mode Switch (Password vs Magic Link) */}
            <div
              className="login-mode-switch"
              role="group"
              aria-label="Método de ingreso"
              data-mode={authMode}
            >
              <span className="login-mode-switch__thumb" aria-hidden="true" />
              <button
                type="button"
                className={`login-mode-switch__btn ${authMode === 'password' ? 'is-active' : ''}`}
                aria-pressed={authMode === 'password'}
                onClick={() => {
                  setAuthMode('password');
                  setFeedback(null);
                }}
              >
                Contraseña
              </button>
              <button
                type="button"
                className={`login-mode-switch__btn ${authMode === 'magic' ? 'is-active' : ''}`}
                aria-pressed={authMode === 'magic'}
                onClick={() => {
                  setAuthMode('magic');
                  setFeedback(null);
                }}
              >
                Enlace mágico
              </button>
            </div>

            {/* SSO Providers */}
            <div className="login-sso-grid">
              <button
                type="button"
                className="login-sso-btn"
                onClick={() => handleSsoClick('Google Workspace')}
              >
                <GoogleIcon size={17} />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="login-sso-btn"
                onClick={() => handleSsoClick('Apple')}
              >
                <AppleIcon size={17} />
                <span>Apple</span>
              </button>
            </div>

            <div className="login-divider" aria-hidden="true">
              <span>o con correo corporativo</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="login-field">
                <label htmlFor="kora-login-email" className="login-field__label">
                  Correo corporativo
                </label>
                <input
                  id="kora-login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="finanzas@empresa.co.cr"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (feedback) setFeedback(null);
                  }}
                  className="login-field__input"
                />
              </div>

              {authMode === 'password' && (
                <div className="login-field">
                  <div className="login-field__label-row">
                    <label htmlFor="kora-login-password" className="login-field__label">
                      Contraseña
                    </label>
                    <button
                      type="button"
                      className="login-field__forgot"
                      onClick={() =>
                        setFeedback({
                          type: 'info',
                          message:
                            'Ingresa tu correo corporativo arriba y cambia a "Enlace mágico" para recuperar tu acceso.',
                        })
                      }
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="login-field__password-wrap">
                    <input
                      id="kora-login-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (feedback) setFeedback(null);
                      }}
                      className="login-field__input login-field__input--password"
                    />
                    <button
                      type="button"
                      className="login-field__eye"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M3 3l18 18M10.58 10.58a2 2 0 102.83 2.83M9.88 5.09A9.77 9.77 0 0112 5c5 0 9.27 3.11 11 7.5a11.78 11.78 0 01-4.18 5.19M6.61 6.61A11.83 11.83 0 001 12.5C2.73 16.89 7 20 12 20c1.78 0 3.46-.41 4.95-1.14"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <button type="submit" className="login-submit-cta">
                <span>
                  {authMode === 'password' ? 'Ingresar a Tesorería' : 'Enviar enlace de acceso'}
                </span>
                <span className="hero-canopy__cta-crc" aria-hidden="true">
                  ₡1 : 1
                </span>
              </button>
            </form>

            {feedback && (
              <div
                className={`login-feedback login-feedback--${feedback.type}`}
                role="status"
                aria-live="polite"
              >
                {feedback.message}
              </div>
            )}

            <div className="login-security-note">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect
                  x="3.2"
                  y="7"
                  width="9.6"
                  height="6.8"
                  rx="1.8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M5.4 7V5.2a2.6 2.6 0 115.2 0V7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <span>Protegido bajo estándares SUGEF y BCCR · Cifrado TLS 1.3</span>
            </div>
          </section>

          {/* Right Column — Dark Espresso & Recraft Caustic Showcase matching Features & Integrations */}
          <aside className="login-showcase" aria-label="Vista previa de tesorería Kora Costa Rica">
            <div className="login-showcase__content">
              <div className="login-showcase__top-bar">
                <span className="section-badge">
                  <SparkleIcon size={10} />
                  <span>TESORERÍA EN VIVO</span>
                </span>

                <div className="login-showcase__monex">
                  <span className="login-showcase__monex-dot" aria-hidden="true" />
                  <span className="login-showcase__monex-label">MONEX BCCR</span>
                  <span className="login-showcase__monex-rate tabular-nums">₡512.40</span>
                </div>
              </div>

              <div className="login-showcase__heading">
                <h2 className="login-showcase__title">
                  <span className="text-bright">Liquidez</span>{' '}
                  <span className="text-muted">Consolidada</span>
                  <br />
                  <span className="text-muted">En Tiempo</span>{' '}
                  <span className="text-bright">Real</span>
                </h2>
              </div>

              {/* Embedded Glass/Obsidian Tray with White Treasury Card */}
              <div className="login-showcase__tray">
                <div className="login-showcase__card">
                  <div className="login-showcase__card-head">
                    <div>
                      <div className="login-showcase__card-label">Liquidez Total Consolidada</div>
                      <div className="login-showcase__card-balance tabular-nums">₡138,450,200</div>
                      <div className="login-showcase__card-trend">
                        <TrendUpIcon size={9} className="wallet-ui__trend-icon" />
                        <span>6.4% vs. mes anterior · Conciliado hoy</span>
                      </div>
                    </div>
                    <span className="login-showcase__status-pill">SINPE Activo</span>
                  </div>

                  <div className="login-showcase__mini-grid">
                    {MINI_BALANCES.map((item) => (
                      <div key={item.code} className="login-showcase__mini-card">
                        <div className="login-showcase__mini-top">
                          <span className="wallet-mini__coin" aria-hidden="true">
                            {item.symbol}
                          </span>
                          <span className="login-showcase__mini-code">{item.code}</span>
                        </div>
                        <div className="login-showcase__mini-amount tabular-nums">{item.amount}</div>
                        <div className="login-showcase__mini-status">{item.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connected Costa Rican Banks Row */}
              <div className="login-showcase__banks">
                <div className="login-showcase__banks-label">
                  Sincronización directa con 16 entidades financieras de Costa Rica
                </div>
                <div className="login-showcase__banks-row">
                  {SHOWCASE_BANK_IDS.map((id) => {
                    const bank = COSTA_RICA_BANKS[id];
                    return (
                      <div
                        key={id}
                        className="login-showcase__bank-tile"
                        title={bank?.fullName}
                        aria-label={bank?.fullName}
                      >
                        <IntegrationTileIcon index={id} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
