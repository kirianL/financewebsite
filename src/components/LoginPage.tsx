import React, { useEffect, useRef, useState } from 'react';
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
  transitionState?: 'entering' | 'idle' | 'exiting';
  onNavigateHome: () => void;
}

const SHOWCASE_BANK_IDS = [0, 1, 2, 3, 4, 6];

const MINI_BALANCES = [
  { code: 'CRC', symbol: '₡', amount: '₡138,450,200', status: 'Activa' },
  { code: 'USD', symbol: '$', amount: '$263,724.32', status: 'Activa' },
  { code: 'EUR', symbol: '€', amount: '€ 63,275.45', status: 'Activa' },
  { code: 'USDC', symbol: '$', amount: '$ 48,920.00', status: 'Activa' },
];

export const LoginPage: React.FC<LoginPageProps> = ({
  transitionState = 'idle',
  onNavigateHome,
}) => {
  const [authMode, setAuthMode] = useState<'password' | 'magic'>('password');
  const [modeMorphing, setModeMorphing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fieldError, setFieldError] = useState<'email' | 'password' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitPhase, setSubmitPhase] = useState<'form' | 'loading' | 'verify' | 'verified'>('form');
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateHome();
  };

  const handleSwitchMode = (nextMode: 'password' | 'magic') => {
    if (nextMode === authMode) return;
    setFieldError(null);
    setErrorMessage(null);
    setModeMorphing(true);
    window.setTimeout(() => {
      setAuthMode(nextMode);
      setModeMorphing(false);
    }, 110);
  };

  const handleSsoClick = (provider: string) => {
    setFieldError(null);
    setErrorMessage(null);
    setActiveProvider(provider);
    setSubmitPhase('loading');
    window.setTimeout(() => {
      setOtpDigits(['4', '8', '2', '', '', '']);
      setSubmitPhase('verify');
    }, 340);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitPhase === 'loading') return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setFieldError('email');
      setErrorMessage('Correo requerido');
      return;
    }

    if (authMode === 'password' && password.trim().length < 6) {
      setFieldError('password');
      setErrorMessage('Mín. 6 caracteres');
      return;
    }

    setFieldError(null);
    setErrorMessage(null);
    setActiveProvider(null);
    setSubmitPhase('loading');

    window.setTimeout(() => {
      setOtpDigits(['', '', '', '', '', '']);
      setSubmitPhase('verify');
    }, 360);
  };

  useEffect(() => {
    if (submitPhase === 'verify') {
      const firstEmptyIdx = otpDigits.findIndex((d) => d === '');
      const targetIdx = firstEmptyIdx === -1 ? 5 : firstEmptyIdx;
      otpRefs.current[targetIdx]?.focus();
    }
  }, [submitPhase]);

  const handleOtpChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1);
    const next = [...otpDigits];
    next[index] = digit;
    setOtpDigits(next);

    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    if (next.every((d) => d.length === 1)) {
      window.setTimeout(() => {
        setSubmitPhase('verified');
      }, 220);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleAutofillDemoCode = () => {
    const demo = ['7', '3', '9', '1', '0', '4'];
    setOtpDigits(demo);
    window.setTimeout(() => {
      setSubmitPhase('verified');
    }, 240);
  };

  const handleResetToForm = () => {
    setSubmitPhase('form');
    setActiveProvider(null);
    setOtpDigits(['', '', '', '', '', '']);
  };

  const displayTarget = activeProvider
    ? `${activeProvider} SSO`
    : email.trim() || 'finanzas@empresa.co.cr';

  return (
    <div className="login-page" data-transition={transitionState}>
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
          {/* Left Column — Editorial Form Card with fixed geometry (zero layout shift) */}
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
                Accede a tu panel multibanco conectado a BAC, BCR, Banco Nacional, SINPE empresarial y tipo de cambio MONEX.
              </p>
            </div>

            {/* Fixed-height interactive stage: Form <-> OTP Verification without shifting outer card height */}
            <div className="login-stage">
              {submitPhase === 'form' || submitPhase === 'loading' ? (
                <div className="login-stage__panel" data-active="true">
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
                      onClick={() => handleSwitchMode('password')}
                    >
                      Contraseña
                    </button>
                    <button
                      type="button"
                      className={`login-mode-switch__btn ${authMode === 'magic' ? 'is-active' : ''}`}
                      aria-pressed={authMode === 'magic'}
                      onClick={() => handleSwitchMode('magic')}
                    >
                      Enlace mágico
                    </button>
                  </div>

                  {/* SSO Providers */}
                  <div className="login-sso-grid">
                    <button
                      type="button"
                      className="login-sso-btn"
                      onClick={() => handleSsoClick('Google')}
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
                    <div className={`login-field ${fieldError === 'email' ? 'is-invalid' : ''}`}>
                      <div className="login-field__label-row">
                        <label htmlFor="kora-login-email" className="login-field__label">
                          Correo corporativo
                        </label>
                        {fieldError === 'email' && errorMessage && (
                          <span className="login-field__error-pill" role="alert">
                            {errorMessage}
                          </span>
                        )}
                      </div>
                      <input
                        id="kora-login-email"
                        type="email"
                        autoComplete="email"
                        placeholder="finanzas@empresa.co.cr"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (fieldError === 'email') {
                            setFieldError(null);
                            setErrorMessage(null);
                          }
                        }}
                        className="login-field__input"
                      />
                    </div>

                    {/* Fixed-Height Second Field Slot (72px) — Never changes height when switching Contraseña <-> Enlace mágico */}
                    <div
                      className={`login-field-slot ${modeMorphing ? 'is-morphing' : ''} ${
                        fieldError === 'password' ? 'is-invalid' : ''
                      }`}
                    >
                      {authMode === 'password' ? (
                        <div className="login-field">
                          <div className="login-field__label-row">
                            <label htmlFor="kora-login-password" className="login-field__label">
                              Contraseña
                            </label>
                            {fieldError === 'password' && errorMessage ? (
                              <span className="login-field__error-pill" role="alert">
                                {errorMessage}
                              </span>
                            ) : (
                              <button
                                type="button"
                                className="login-field__forgot"
                                onClick={() => handleSwitchMode('magic')}
                              >
                                ¿Usar llave sin contraseña?
                              </button>
                            )}
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
                                if (fieldError === 'password') {
                                  setFieldError(null);
                                  setErrorMessage(null);
                                }
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
                      ) : (
                        <div className="login-field">
                          <div className="login-field__label-row">
                            <span className="login-field__label">Llave instantánea por correo</span>
                            <span className="login-field__magic-tag">Sin contraseña</span>
                          </div>
                          <div className="login-magic-box">
                            <span className="login-magic-box__icon" aria-hidden="true">
                              <SparkleIcon size={12} />
                            </span>
                            <span className="login-magic-box__text">
                              Recibirás un código de 6 dígitos y enlace directo válido por 15 min.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="login-submit-cta"
                      disabled={submitPhase === 'loading'}
                    >
                      <span
                        className={`login-submit-cta__content ${
                          modeMorphing || submitPhase === 'loading' ? 'is-morphing' : ''
                        }`}
                      >
                        {submitPhase === 'loading' ? (
                          <>
                            <span className="login-spinner" aria-hidden="true" />
                            <span>Generando llave de acceso...</span>
                          </>
                        ) : (
                          <>
                            <span>
                              {authMode === 'password'
                                ? 'Ingresar a tesorería'
                                : 'Continuar con código único'}
                            </span>
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path
                                d="M3.5 8h9M8.75 4.25L12.5 8l-3.75 3.75"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Tactile In-Place Verification Card (Emil Design Engineering style) */
                <div className="login-verify-card" role="region" aria-label="Verificación de acceso">
                  <div className="login-verify-card__top">
                    <div className="login-verify-card__badge-row">
                      <span className="login-verify-card__icon" data-verified={submitPhase === 'verified'}>
                        {submitPhase === 'verified' ? (
                          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <path
                              d="M4.5 9.3l3 3 6-6.2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <rect
                              x="2"
                              y="3.5"
                              width="12"
                              height="9"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M2.5 4.5L8 8.5l5.5-4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <div>
                        <div className="login-verify-card__title">
                          {submitPhase === 'verified'
                            ? 'Identidad corporativa verificada'
                            : 'Ingresa tu código de 6 dígitos'}
                        </div>
                        <div className="login-verify-card__target">
                          <span>Enviado a </span>
                          <strong>{displayTarget}</strong>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="login-verify-card__change"
                      onClick={handleResetToForm}
                    >
                      Cambiar
                    </button>
                  </div>

                  <div className="login-otp-grid" role="group" aria-label="Código de verificación de 6 dígitos">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          otpRefs.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        aria-label={`Dígito ${idx + 1}`}
                        disabled={submitPhase === 'verified'}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                        className={`login-otp-input tabular-nums ${digit ? 'is-filled' : ''} ${
                          submitPhase === 'verified' ? 'is-verified' : ''
                        }`}
                      />
                    ))}
                  </div>

                  <div className="login-verify-card__actions">
                    {submitPhase === 'verified' ? (
                      <button
                        type="button"
                        className="login-submit-cta login-submit-cta--verified"
                        onClick={onNavigateHome}
                      >
                        <span>Abrir panel de tesorería Kora</span>
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M3.5 8h9M8.75 4.25L12.5 8l-3.75 3.75"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : (
                      <div className="login-verify-card__subactions">
                        <button
                          type="button"
                          className="login-verify-card__autofill"
                          onClick={handleAutofillDemoCode}
                        >
                          Autocompletar código demo (739-104)
                        </button>
                        <span className="login-verify-card__timer tabular-nums">Expira en 14:58</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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

          {/* Right Column — Dark Espresso & Recraft Caustic Showcase */}
          <aside className="login-showcase" aria-label="Vista previa de tesorería Kora Costa Rica">
            <div className="login-showcase__content">
              <div className="login-showcase__top-bar">
                <span className="section-badge">
                  <SparkleIcon size={10} />
                  <span>TESORERÍA EN VIVO</span>
                </span>
              </div>

              <div className="login-showcase__heading">
                <h2 className="login-showcase__title">
                  <span className="text-bright">Liquidez</span>{' '}
                  <span className="text-muted">consolidada</span>
                  <br />
                  <span className="text-muted">en tiempo</span>{' '}
                  <span className="text-bright">real</span>
                </h2>
              </div>

              {/* Embedded Obsidian Tray with White Treasury Card */}
              <div className="login-showcase__tray">
                <div className="login-showcase__card">
                  <div className="login-showcase__card-head">
                    <div>
                      <div className="login-showcase__card-label">Liquidez total</div>
                      <div className="login-showcase__card-balance tabular-nums">₡138,450,200</div>
                      <div className="login-showcase__card-trend">
                        <TrendUpIcon size={9} className="wallet-ui__trend-icon" />
                        <span>6.4% vs. mes anterior</span>
                      </div>
                    </div>
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

              {/* Connected Costa Rican Banks Row — Clean direct rounded badges without grey outer containers */}
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
                        className="login-showcase__bank-badge"
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
