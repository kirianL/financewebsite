import React, { useState } from 'react';
import { HOW_IT_WORKS_CONTENT } from '../data/content';
import {
  COSTA_RICA_BANKS,
  IntegrationTileIcon,
  SparkleIcon,
  SynaisBrandBadge,
} from './SvgIcons';
import './HowItWorks.css';

const BANK_INDICES = [0, 1, 2, 3, 4]; // BAC, BN, BCR, BP, BCCR

// Symmetrical 960x400 coordinate space:
// Left bank badges right edge = 230 (line start x = 234)
// Dead-center Kora emblem = 426..534 (center x = 480, y = 200)
// Right destination icons left edge = 730 (line end x = 726)
const INPUT_PATHS = [
  'M 234 54 C 324 54, 346 200, 426 200',
  'M 234 127 C 320 127, 346 200, 426 200',
  'M 234 200 L 426 200',
  'M 234 273 C 320 273, 346 200, 426 200',
  'M 234 346 C 324 346, 346 200, 426 200',
];

const OUTPUT_PATHS = [
  { id: 'sinpe', d: 'M 534 200 C 614 200, 636 90, 726 90' },
  { id: 'monex', d: 'M 534 200 L 726 200' },
  { id: 'hacienda', d: 'M 534 200 C 614 200, 636 310, 726 310' },
];

// Mobile 350x270 coordinate space (<=540px) matching grid 34px | 1fr | 118px
const MOBILE_INPUT_PATHS = [
  'M 38 40 C 66 40, 76 135, 104 135',
  'M 38 87.5 C 66 87.5, 76 135, 104 135',
  'M 38 135 L 104 135',
  'M 38 182.5 C 66 182.5, 76 135, 104 135',
  'M 38 230 C 66 230, 76 135, 104 135',
];

const MOBILE_OUTPUT_PATHS = [
  { id: 'sinpe', d: 'M 162 135 C 190 135, 200 63, 228 63' },
  { id: 'monex', d: 'M 162 135 L 228 135' },
  { id: 'hacienda', d: 'M 162 135 C 190 135, 200 207, 228 207' },
];

const OUTPUT_NODES = [
  {
    id: 'sinpe',
    label: 'SINPE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4.5 7.5h11m0 0L12.5 4.5m3 3l-3 3M15.5 12.5h-11m0 0l3-3m-3 3l3 3"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'monex',
    label: 'MONEX BCCR',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12.4 7.8a3.2 3.2 0 00-4.6 0 3.3 3.3 0 000 4.4 3.2 3.2 0 004.6 0M9.3 5.2l-1.2 9.6M11.7 5.2l-1.2 9.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'hacienda',
    label: 'Hacienda',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="2.8" width="12" height="14.4" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M7.2 7.5h5.6M7.2 10.5h5.6M7.2 13.5h3.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

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

        {/* Borderless, box-free symmetrical flow centered directly on #311916 */}
        <div
          className="process-stage"
          data-active={activeNode ?? 'none'}
          data-reveal
          style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
          role="img"
          aria-label="Sincronización en tiempo real de bancos de Costa Rica hacia Kora, SINPE, MONEX BCCR y Hacienda"
        >
          <svg
            className="process-stage__lines process-stage__lines--desktop"
            viewBox="0 0 960 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="koraBaseLineIn"
                gradientUnits="userSpaceOnUse"
                x1="234"
                y1="0"
                x2="426"
                y2="0"
              >
                <stop offset="0%" stopColor="#F5EFEB" stopOpacity="0" />
                <stop offset="22%" stopColor="#F5EFEB" stopOpacity="0.14" />
                <stop offset="80%" stopColor="#F5EFEB" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraBaseLineOut"
                gradientUnits="userSpaceOnUse"
                x1="534"
                y1="0"
                x2="726"
                y2="0"
              >
                <stop offset="0%" stopColor="#F5EFEB" stopOpacity="0" />
                <stop offset="20%" stopColor="#F5EFEB" stopOpacity="0.14" />
                <stop offset="78%" stopColor="#F5EFEB" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraPulseIn"
                gradientUnits="userSpaceOnUse"
                x1="234"
                y1="0"
                x2="426"
                y2="0"
              >
                <stop offset="0%" stopColor="#EAE4DA" stopOpacity="0" />
                <stop offset="35%" stopColor="#EAE4DA" stopOpacity="0.45" />
                <stop offset="65%" stopColor="#EAE4DA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#EAE4DA" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraPulseOut"
                gradientUnits="userSpaceOnUse"
                x1="534"
                y1="0"
                x2="726"
                y2="0"
              >
                <stop offset="0%" stopColor="#B7CE9E" stopOpacity="0" />
                <stop offset="35%" stopColor="#B7CE9E" stopOpacity="0.48" />
                <stop offset="65%" stopColor="#B7CE9E" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#B7CE9E" stopOpacity="0" />
              </linearGradient>
            </defs>
            {INPUT_PATHS.map((d, i) => {
              const nodeId = `bank-${i}`;
              const isHighlighted = activeNode === nodeId;
              const isDimmed = activeNode !== null && activeNode.startsWith('bank-') && !isHighlighted;
              return (
                <g
                  key={nodeId}
                  className="process-conn"
                  style={{ opacity: isDimmed ? 0.22 : 1 }}
                >
                  <path d={d} className="process-line__base process-line__base--in" />
                  <path
                    d={d}
                    className="process-line__pulse process-line__pulse--in"
                    style={{ animationDelay: `${i * -0.65}s` }}
                  />
                </g>
              );
            })}
            {OUTPUT_PATHS.map((item, i) => {
              const nodeId = `out-${item.id}`;
              const isHighlighted = activeNode === nodeId;
              const isDimmed = activeNode !== null && activeNode.startsWith('out-') && !isHighlighted;
              return (
                <g
                  key={item.id}
                  className="process-conn"
                  style={{ opacity: isDimmed ? 0.22 : 1 }}
                >
                  <path d={item.d} className="process-line__base process-line__base--out" />
                  <path
                    d={item.d}
                    className="process-line__pulse process-line__pulse--out"
                    style={{ animationDelay: `${i * -0.9}s` }}
                  />
                </g>
              );
            })}
          </svg>

          <svg
            className="process-stage__lines process-stage__lines--mobile"
            viewBox="0 0 350 270"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="koraMobileBaseIn"
                gradientUnits="userSpaceOnUse"
                x1="38"
                y1="0"
                x2="104"
                y2="0"
              >
                <stop offset="0%" stopColor="#F5EFEB" stopOpacity="0" />
                <stop offset="22%" stopColor="#F5EFEB" stopOpacity="0.16" />
                <stop offset="80%" stopColor="#F5EFEB" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraMobileBaseOut"
                gradientUnits="userSpaceOnUse"
                x1="162"
                y1="0"
                x2="228"
                y2="0"
              >
                <stop offset="0%" stopColor="#F5EFEB" stopOpacity="0" />
                <stop offset="20%" stopColor="#F5EFEB" stopOpacity="0.16" />
                <stop offset="78%" stopColor="#F5EFEB" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraMobilePulseIn"
                gradientUnits="userSpaceOnUse"
                x1="38"
                y1="0"
                x2="104"
                y2="0"
              >
                <stop offset="0%" stopColor="#EAE4DA" stopOpacity="0" />
                <stop offset="35%" stopColor="#EAE4DA" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#EAE4DA" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#EAE4DA" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="koraMobilePulseOut"
                gradientUnits="userSpaceOnUse"
                x1="162"
                y1="0"
                x2="228"
                y2="0"
              >
                <stop offset="0%" stopColor="#B7CE9E" stopOpacity="0" />
                <stop offset="35%" stopColor="#B7CE9E" stopOpacity="0.52" />
                <stop offset="65%" stopColor="#B7CE9E" stopOpacity="0.52" />
                <stop offset="100%" stopColor="#B7CE9E" stopOpacity="0" />
              </linearGradient>
            </defs>
            {MOBILE_INPUT_PATHS.map((d, i) => (
              <g key={`m-in-${i}`} className="process-conn">
                <path d={d} className="process-line__base process-line__base--m-in" />
                <path
                  d={d}
                  className="process-line__pulse process-line__pulse--m-in"
                  style={{ animationDelay: `${i * -0.65}s` }}
                />
              </g>
            ))}
            {MOBILE_OUTPUT_PATHS.map((item, i) => (
              <g key={`m-out-${item.id}`} className="process-conn">
                <path d={item.d} className="process-line__base process-line__base--m-out" />
                <path
                  d={item.d}
                  className="process-line__pulse process-line__pulse--m-out"
                  style={{ animationDelay: `${i * -0.9}s` }}
                />
              </g>
            ))}
          </svg>

          <div className="process-stage__grid">
            {/* Left: Pure Costa Rican Bank SVG Logos */}
            <div className="process-banks-col">
              {BANK_INDICES.map((bankIdx, i) => {
                const bank = COSTA_RICA_BANKS[bankIdx];
                const nodeId = `bank-${i}`;
                return (
                  <div
                    key={bankIdx}
                    className="process-bank-item"
                    title={bank?.fullName}
                    aria-label={bank?.fullName}
                    onMouseEnter={() => setActiveNode(nodeId)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <IntegrationTileIcon index={bankIdx} />
                  </div>
                );
              })}
            </div>

            {/* Center: Pure Box-Free Kora Emblem */}
            <div className="process-hub">
              <span className="process-hub__ring" aria-hidden="true" />
              <div className="process-hub__mark">
                <SynaisBrandBadge size={54} />
                <span className="process-hub__wordmark">kora.</span>
              </div>
            </div>

            {/* Right: Clean Box-Free Icon + Label Destinations */}
            <div className="process-outputs-col">
              {OUTPUT_NODES.map((node) => {
                const nodeId = `out-${node.id}`;
                return (
                  <div
                    key={node.id}
                    className="process-output-node"
                    onMouseEnter={() => setActiveNode(nodeId)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <span className="process-output-node__icon">{node.icon}</span>
                    <span className="process-output-node__label">{node.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
