import React from 'react';
import { PRIVACY_CONTENT, TERMS_CONTENT } from '../data/pagesContent';
import { SparkleIcon } from '../components/SvgIcons';
import './pages.css';

interface LegalPageProps {
  kind: 'terms' | 'privacy';
  onNavigateHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ kind, onNavigateHome }) => {
  const content = kind === 'terms' ? TERMS_CONTENT : PRIVACY_CONTENT;

  return (
    <main id="main" tabIndex={-1} className="subpage subpage--legal">
      <div className="container subpage__container">
        <header className="subpage-hero" data-reveal>
          <a
            href="/"
            className="subpage-back"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M12.5 8H3.5m0 0L7 4.5M3.5 8L7 11.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Volver al inicio</span>
          </a>

          <span className="section-badge subpage-badge">
            <SparkleIcon size={11} />
            <span>{content.badge}</span>
          </span>

          <h1 className="subpage-title">{content.title}</h1>
          <p className="subpage-subtitle">{content.subtitle}</p>
          <div className="subpage-meta">
            <span>{content.updatedAt}</span>
            <span>{content.entity}</span>
          </div>
        </header>

        <div className="legal-layout">
          <aside className="legal-toc" aria-label="Índice de contenido" data-reveal>
            <div className="legal-toc__card">
              <span className="legal-toc__title">Contenido</span>
              <nav>
                <ul className="legal-toc__list">
                  {content.sections.map((sec, idx) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} className="legal-toc__link">
                        <span className="legal-toc__num tabular-nums">{idx + 1}.</span>
                        <span>{sec.heading}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <details className="legal-toc__mobile">
              <summary className="legal-toc__mobile-trigger">Índice de contenido</summary>
              <ul className="legal-toc__list">
                {content.sections.map((sec, idx) => (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`} className="legal-toc__link">
                      <span className="legal-toc__num tabular-nums">{idx + 1}.</span>
                      <span>{sec.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </aside>

          <article className="legal-card" data-reveal style={{ '--reveal-delay': '60ms' } as React.CSSProperties}>
            {content.sections.map((sec) => (
              <section key={sec.id} id={sec.id} aria-labelledby={`${sec.id}-heading`} className="legal-section">
                <h2 id={`${sec.id}-heading`} className="legal-section__heading">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="legal-section__p">
                    {p}
                  </p>
                ))}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="legal-section__list">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
};
