import React, { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT } from '../data/content';
import { AppleIcon, CanopyMark, CloseIcon, GoogleIcon } from './SvgIcons';
import './LoginModal.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [notice, setNotice] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setNotice(null);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleInertAction = (provider: string) => {
    setNotice(`El acceso con ${provider} está deshabilitado en esta vista previa.`);
  };

  return (
    <div
      className="login-modal-overlay"
      data-open={isOpen}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="login-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="login-modal-card">
        <div className="login-modal__top">
          <div className="login-modal__brand">
            <CanopyMark size={22} />
            <span>{HERO_CONTENT.brand}</span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="login-modal__close"
            aria-label="Cerrar ventana de acceso"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <h2 id="login-modal-title" className="login-modal__title">
          Bienvenido de nuevo
        </h2>
        <p className="login-modal__subtitle">
          Ingresa a tu tesorería multi-banco de {HERO_CONTENT.brand} conectada a SINPE, BCCR y banca nacional.
        </p>

        <div className="login-modal__providers">
          <button
            type="button"
            className="login-modal__btn"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleInertAction('Google')}
          >
            <GoogleIcon size={18} />
            <span>Continuar con Google</span>
          </button>

          <button
            type="button"
            className="login-modal__btn"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleInertAction('Apple')}
          >
            <AppleIcon size={18} />
            <span>Continuar con Apple</span>
          </button>
        </div>

        <div className="login-modal__divider" aria-hidden="true">
          <span>o</span>
        </div>

        <form
          className="login-modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            handleInertAction('Correo corporativo');
          }}
        >
          <label htmlFor="login-work-email" className="sr-only">
            Correo corporativo
          </label>
          <input
            id="login-work-email"
            type="email"
            placeholder="finanzas@empresa.co.cr"
            className="login-modal__input"
            tabIndex={isOpen ? 0 : -1}
            readOnly
            onClick={() => handleInertAction('Correo corporativo')}
          />
          <button
            type="submit"
            className="login-modal__btn login-modal__btn--primary"
            tabIndex={isOpen ? 0 : -1}
          >
            Continuar con Correo
          </button>
        </form>

        {notice && (
          <p className="login-modal__feedback" role="status">
            {notice}
          </p>
        )}

        <p className="login-modal__terms">
          Protegido bajo estándares de seguridad SUGEF y BCCR. Entorno de vista previa.
        </p>
      </div>
    </div>
  );
};
