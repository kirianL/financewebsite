import React, { useState } from 'react';
import { HOW_IT_WORKS_CONTENT } from '../data/content';
import { CanopyMark, COSTA_RICA_BANKS, IntegrationTileIcon, SparkleIcon } from './SvgIcons';
import './HowItWorks.css';

type ProcessPhase = 'all' | 'link' | 'reconcile' | 'report';

const STEP_PHASES: ProcessPhase[] = ['link', 'reconcile', 'report'];
const BANK_INDICES = [0, 1, 2, 3, 4]; // BAC, BN, BCR, BP, BCCR
const OUTPUT_NODES = [
  { id: 'sinpe', label: 'SINPE' },
  { id: 'monex', label: 'MONEX BCCR' },
  { id: 'hacienda', label: 'Hacienda' },
];

const INPUT_PATHS = [
  'M 64 42 C 138 42, 168 170, 212 170',
  'M 64 106 C 134 106, 168 170, 212 170',
  'M 64 170 C 138 170, 174 170, 212 170',
  'M 64 234 C 134 234, 168 170, 212 170',
  'M 64 298 C 138 298, 168 170, 212 170',
];

const OUTPUT_PATHS = [
  { id: 'sinpe', d: 'M 268 170 C 314 170, 336 96, 384 96' },
  { id: 'monex', d: 'M 268 170 C 314 170, 336 170, 384 170' },
  { id: 'hacienda', d: 'M 268 170 C 314 170, 336 244, 384 244' },
];

export const HowItWorks: React.FC = () => {
  const [pinnedPhase, setPinnedPhase] = useState<ProcessPhase>('all');
  const [hoveredPhase, setHoveredPhase] = useState<ProcessPhase | null>(null);

  const activePhase = hoveredPhase ?? pinnedPhase;

  const handleStepClick = (phase: ProcessPhase) => {
    setPinnedPhase((prev) => (prev === phase ? 'all' : phase));
  };

  return (
    <section id="process" className="process-section" aria-labelledby="process-heading">
      <div className="container process-section__inner">
        <div className="process-section__head" data-reveal>
          <span className="section-badge">
            <SparkleIcon size={11} />
            <span>{HOW_IT_WORKS_CONTENT.badge}</span>
          </span>

          <h2 id="process-heading" className="section-title-duotone">
            <span className="section-title-duotone__line">
              <span className="text-bright">{HOW_IT_WORKS_CONTENT.titleStart}</span>{' '}
              <span className="text-muted">{HOW_IT_WORKS_CONTENT.titleMuted1}</span>
            </span>
            <span className="section-title-duotone__line">
              <span className="text-muted">{HOW_IT_WORKS_CONTENT.titleMuted2}</span>{' '}
              <span className="text-bright">{HOW_IT_WORKS_CONTENT.titleEnd}</span>
            </span>
          </h2>

          <p className="section-subtitle">{HOW_IT_WORKS_CONTENT.subtitle}</p>
        </div>

        <div className="process-layout">
          <div className="process-steps">
            {HOW_IT_WORKS_CONTENT.steps.map((step, idx) => {
              const phase = STEP_PHASES[idx] ?? 'all';
              const isSelected = pinnedPhase === phase;
              return (
                <button
                  key={step.number}
                  type="button"
                  className={`process-step-card ${isSelected ? 'is-active' : ''}`}
                  aria-pressed={isSelected}
                  data-reveal
                  style={{ '--reveal-delay': `${idx * 60}ms` } as React.CSSProperties}
                  onMouseEnter={() => setHoveredPhase(phase)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  onFocus={() => setHoveredPhase(phase)}
                  onBlur={() => setHoveredPhase(null)}
                  onClick={() => handleStepClick(phase)}
                >
                  <span className="process-step-card__num tabular-nums">{step.number}</span>
                  <div className="process-step-card__body">
                    <h3 className="process-step-card__title">{step.title}</h3>
                    <p className="process-step-card__desc">{step.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            className="process-visual"
            data-phase={activePhase}
            data-reveal
            style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            role="img"
            aria-label="Diagrama animado de bancos de Costa Rica conectándose a Kora"
          >
            {/* Curved SVG connectors & GPU light pulses */}
            <svg
              className="process-diagram__lines"
              viewBox="0 0 480 340"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {INPUT_PATHS.map((d, i) => (
                <g key={i} className="process-conn process-conn--input">
                  <path d={d} className="process-conn__base" />
                  <path
                    d={d}
                    className="process-conn__pulse"
                    style={{ animationDelay: `${i * -0.32}s` }}
                  />
                </g>
              ))}
              {OUTPUT_PATHS.map((item, i) => (
                <g
                  key={item.id}
                  className={`process-conn process-conn--output process-conn--${item.id}`}
                >
                  <path d={item.d} className="process-conn__base" />
                  <path
                    d={item.d}
                    className="process-conn__pulse process-conn__pulse--out"
                    style={{ animationDelay: `${i * -0.45}s` }}
                  />
                </g>
              ))}
            </svg>

            {/* Clean foreground nodes: pure bank SVG badges (no grey containers) -> Kora Hub -> CR outputs */}
            <div className="process-diagram__nodes">
              <div className="process-diagram__banks">
                {BANK_INDICES.map((bankIdx) => {
                  const bank = COSTA_RICA_BANKS[bankIdx];
                  return (
                    <div
                      key={bankIdx}
                      className="process-bank-node"
                      title={bank?.fullName}
                      aria-label={bank?.fullName}
                    >
                      <IntegrationTileIcon index={bankIdx} />
                    </div>
                  );
                })}
              </div>

              <div className="process-hub">
                <span className="process-hub__ring" aria-hidden="true" />
                <div className="process-hub__core">
                  <CanopyMark size={24} />
                  <span className="process-hub__name">Kora</span>
                </div>
              </div>

              <div className="process-diagram__outputs">
                {OUTPUT_NODES.map((node) => (
                  <div
                    key={node.id}
                    className={`process-output-chip process-output-chip--${node.id}`}
                  >
                    <span className="process-output-chip__dot" aria-hidden="true" />
                    <span>{node.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
