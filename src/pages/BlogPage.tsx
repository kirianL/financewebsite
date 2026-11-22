import React, { useEffect, useRef, useState } from 'react';
import {
  BLOG_CATEGORIES,
  BLOG_CONTENT,
  type BlogArticle,
  type BlogCategory,
} from '../data/pagesContent';
import { SparkleIcon } from '../components/SvgIcons';
import './pages.css';

interface BlogPageProps {
  onNavigateHome: () => void;
}

const BlogCoverGraphic: React.FC<{ accent: BlogArticle['accent'] }> = ({ accent }) => {
  return (
    <div className={`blog-cover blog-cover--${accent}`} aria-hidden="true">
      <svg className="blog-cover__svg" viewBox="0 0 320 140" fill="none">
        <circle cx="268" cy="28" r="76" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="268" cy="28" r="46" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
        <path
          d="M24 112C76 74 128 96 178 62C222 32 264 46 300 22"
          stroke="currentColor"
          strokeOpacity="0.34"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="178" cy="62" r="4" fill="currentColor" fillOpacity="0.6" />
        <circle cx="24" cy="112" r="3" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </div>
  );
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateHome }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('Todos');
  const [openArticleId, setOpenArticleId] = useState<string | null>(
    BLOG_CONTENT.articles[0]?.id ?? null,
  );
  const readerRef = useRef<HTMLElement | null>(null);

  const filtered =
    activeCategory === 'Todos'
      ? BLOG_CONTENT.articles
      : BLOG_CONTENT.articles.filter((a) => a.category === activeCategory);

  const activeArticle =
    BLOG_CONTENT.articles.find((a) => a.id === openArticleId) ?? null;

  useEffect(() => {
    if (openArticleId && readerRef.current) {
      readerRef.current.focus({ preventScroll: true });
    }
  }, [openArticleId]);

  const handleOpenArticle = (id: string) => {
    setOpenArticleId(id);
    window.setTimeout(() => {
      readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 40);
  };

  return (
    <main id="main" tabIndex={-1} className="subpage subpage--blog">
      <div className="container subpage__container subpage__container--wide">
        <header className="subpage-hero subpage-hero--center" data-reveal>
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
            <span>{BLOG_CONTENT.badge}</span>
          </span>

          <h1 className="subpage-title">
            <span>{BLOG_CONTENT.titleStart}</span>{' '}
            <span className="subpage-title__muted">{BLOG_CONTENT.titleEnd}</span>
          </h1>
          <p className="subpage-subtitle">{BLOG_CONTENT.subtitle}</p>

          <div
            className="blog-tabs"
            role="tablist"
            aria-label="Filtrar artículos por categoría"
          >
            {BLOG_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`blog-tab ${isSelected ? 'is-active' : ''}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </header>

        {filtered.length === 0 ? (
          <p className="blog-empty">No hay artículos en esta categoría todavía.</p>
        ) : (
          <div className="blog-grid" data-reveal>
            {filtered.map((article) => {
              const isOpen = openArticleId === article.id;
              return (
                <article
                  key={article.id}
                  className={`blog-card ${article.featured ? 'blog-card--featured' : ''} ${
                    isOpen ? 'is-selected' : ''
                  }`}
                >
                  <BlogCoverGraphic accent={article.accent} />

                  <div className="blog-card__body">
                    <div className="blog-card__top">
                      <span className="blog-chip">{article.category}</span>
                      <span className="blog-card__meta tabular-nums">
                        {article.readingMinutes} min de lectura
                      </span>
                    </div>

                    <h2 className="blog-card__title">{article.title}</h2>
                    <p className="blog-card__excerpt">{article.excerpt}</p>

                    <div className="blog-card__footer">
                      <div className="blog-card__author">
                        <span className="blog-card__author-name">{article.author}</span>
                        <span className="blog-card__date">{article.date}</span>
                      </div>

                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => handleOpenArticle(article.id)}
                        className="blog-card__btn"
                      >
                        <span>{isOpen ? 'Leyendo' : 'Leer artículo'}</span>
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M3.5 8h9m0 0L9 4.5M12.5 8L9 11.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {activeArticle && (
          <section
            ref={readerRef}
            key={activeArticle.id}
            tabIndex={-1}
            className="blog-reader"
            aria-label={activeArticle.title}
          >
            <div className="blog-reader__head">
              <div className="blog-reader__meta">
                <span className="blog-chip">{activeArticle.category}</span>
                <span className="blog-card__meta tabular-nums">
                  {activeArticle.date} · {activeArticle.readingMinutes} min de lectura
                </span>
              </div>

              <button
                type="button"
                className="blog-reader__close"
                onClick={() => setOpenArticleId(null)}
                aria-label="Cerrar artículo"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Cerrar</span>
              </button>
            </div>

            <h2 className="blog-reader__title">{activeArticle.title}</h2>
            <p className="blog-reader__byline">
              Por {activeArticle.author}, {activeArticle.authorRole}
            </p>

            <div className="blog-reader__content">
              {activeArticle.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h3 key={i} className="blog-reader__h2">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === 'ul' && block.items) {
                  return (
                    <ul key={i} className="blog-reader__list">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="blog-reader__p">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
