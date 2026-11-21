# Implementation Plan — `projects/financewebsite` (Hybrid Finance Landing Page)

> Specialist: `implementation-planner` (read-only). Source of truth: `references/` + Phase 1 reports (`visual-analysis.md`, `design-system.md`, `asset-inventory.md`).  
> Implementer hand-off target: `Gemini 4 Hydrogen`. Persist this document to `docs/design/implementation-plan.md`.

---

## 0. Stack & Exact Dependencies

**Stack:** Vite 6 + React 19 + TypeScript 5 + Tailwind CSS v4 (utility layer) + semantic CSS custom properties (design-token layer) + `@fontsource` self-hosted fonts. Matches `projects/legalWebsite` conventions (Vite/React/TS/CSS-modules-free component CSS) with Tailwind v4 added for responsive utilities.

### `package.json`
```json
{
  "name": "finance-hybrid-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource/plus-jakarta-sans": "^5.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.5",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^6.0.7",
    "tailwindcss": "^4.3.5",
    "typescript": "^5.7.2",
    "vite": "^6.0.7"
  }
}
```

### `vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### `tsconfig.json` (copy from `legalWebsite`, unchanged)
Strict mode, `jsx: react-jsx`, `include: ["src"]`.

### `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Synais — Finance Operations Platform</title>
    <meta name="description" content="AI-driven financial insights, automated reporting, and smarter decision-making for finance teams." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
No Google Fonts link — fonts are self-hosted via `@fontsource`.

### `src/main.tsx`
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
```

---

## 1. File Tree & Component Architecture

```
projects/financewebsite/
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── images/
│       ├── hero-coins-moss.webp          # AST-HERO-03 (generated)
│       └── hero-coins-moss.png          # fallback
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── data/
│   │   └── content.ts                   # all copy, nav, stats, plans, footer
│   ├── styles/
│   │   ├── tokens.css                   # CSS vars + Tailwind @theme
│   │   └── global.css                   # @import tailwindcss; resets
│   ├── components/
│   │   ├── SvgIcons.tsx                 # all SVG iconography
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── HeroCanopy.tsx
│   │   ├── HeroCanopy.css
│   │   ├── StatsBar.tsx
│   │   ├── StatsBar.css
│   │   ├── FeaturesShowcase.tsx
│   │   ├── FeaturesShowcase.css
│   │   ├── MultiCurrencyWalletCard.tsx
│   │   ├── MultiCurrencyWalletCard.css
│   │   ├── ProfitLossCard.tsx
│   │   ├── ProfitLossCard.css
│   │   ├── IntegrationsGrid.tsx
│   │   ├── IntegrationsGrid.css
│   │   ├── PricingSection.tsx
│   │   ├── PricingSection.css
│   │   ├── FooterSynais.tsx
│   │   └── FooterSynais.css
│   └── hooks/
│       └── useScrollTheme.ts            # navbar light/dark toggle
└── docs/design/
    └── implementation-plan.md
```

### `src/App.tsx`
```tsx
import { Navbar } from './components/Navbar';
import { HeroCanopy } from './components/HeroCanopy';
import { StatsBar } from './components/StatsBar';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { PricingSection } from './components/PricingSection';
import { FooterSynais } from './components/FooterSynais';

export const App: React.FC = () => (
  <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main" tabIndex={-1}>
      <HeroCanopy />
      <StatsBar />
      <FeaturesShowcase />
      <IntegrationsGrid />
      <PricingSection />
      <FooterSynais />
    </main>
  </>
);
export default App;
```

### Component responsibilities

| Component | Responsibility |
|---|---|
| `Navbar` | Fixed floating translucent pill (left: logo + 4 links; right: Login). Scroll-aware theme (dark text on hero → white text on dark sections). Mobile hamburger + full-screen drawer. |
| `HeroCanopy` | Light cream hero. H1 with inline Dollar badge pill, subtitle, CTA. Right-side coins `<picture>`. |
| `StatsBar` | 3 metric columns on `#341815` with vertical hairline dividers. |
| `FeaturesShowcase` | Badge + two-tone H2 + subtitle + metallic silk container + 2-col cards. Renders `MultiCurrencyWalletCard` and `ProfitLossCard`. |
| `MultiCurrencyWalletCard` | Cream card shell + dark tray + white dashboard (Total Balance, USD/EUR/KRW/IDR grid, trend pill). |
| `ProfitLossCard` | Cream card shell + dark tray + white dashboard (Spending Overview, metric, legend, 12×4 heatmap). |
| `IntegrationsGrid` | Badge + two-tone H2 + subtitle + 9+7 squircle tile grid (16 `IntegrationIcon`s). |
| `PricingSection` | Badge + two-tone H2 + subtitle + Monthly/Annually toggle + 3 pricing cards. Owns `billing` state. |
| `FooterSynais` | Black footer: brand+tagline+socials, newsletter form (owns form state), 4 link columns, legal bar, giant `synais.` wordmark. |
| `SvgIcons` | Single module exporting every SVG: `LogoMark`, `SparkleIcon`, `DollarIcon`, `ChevronDownIcon`, `CheckmarkIcon`, `MenuIcon`, `CloseIcon`, `ArrowRightIcon`, `GithubIcon`, `XIcon`, `LinkedinIcon`, `YoutubeIcon`, `TrendUpIcon`, `StatusDot`, `IntegrationIcon(id)`. |

---

## 2. Design Tokens & Typography

### `src/styles/tokens.css`
```css
:root {
  /* Hero (Canopy light) */
  --color-hero-bg: #F9F5EA;
  --color-hero-bg-deep: #F3EFE6;
  --color-hero-text: #181916;
  --color-hero-text-muted: #5C6057;
  --color-hero-cta: #476330;
  --color-hero-cta-hover: #3A5226;
  --color-hero-badge-bg: #DDD8CB;
  --color-hero-badge-mark: #2B3524;
  --color-hero-nav-pill: rgba(255, 255, 255, 0.75);
  --color-hero-nav-border: rgba(0, 0, 0, 0.06);

  /* Platform (Synais dark espresso) */
  --color-platform-bg: #341815;
  --color-platform-elevated: #3A1C17;
  --color-platform-text: #FFFFFF;
  --color-platform-text-muted: #A69B95;
  --color-platform-border: rgba(255, 255, 255, 0.12);
  --color-feature-tray: #1C0E0B;
  --color-feature-card: #E4E1D2;
  --color-feature-card-text: #1E0E0A;
  --color-feature-card-muted: #6B5E57;
  --color-tile-bg: #F5EFEB;

  /* Pricing */
  --color-price-top: #FFFFFF;
  --color-price-bottom: #E4E1D2;
  --color-price-border: #DED8C7;
  --color-price-text: #1E0E0A;
  --color-price-muted: #6B5E57;
  --color-price-cta-default: #E2DCD3;
  --color-price-cta-pro: #22110B;
  --color-price-badge-bg: #D9D0C3;
  --color-price-badge-text: #311B18;
  --color-toggle-track: #F5EFEB;
  --color-toggle-active: #341815;
  --color-toggle-active-text: #FFFFFF;
  --color-toggle-inactive-text: #341815;

  /* Footer */
  --color-footer-bg: #050505;
  --color-footer-text: #8E8E93;
  --color-footer-link: #BEBEBA;
  --color-footer-input-bg: #1A1A1A;
  --color-footer-input-border: rgba(255, 255, 255, 0.15);
  --color-footer-wordmark: #EAE5DC;

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;

  /* Layout */
  --container-max: 1280px;
  --container-pad: clamp(20px, 4vw, 64px);
  --header-height: 76px;

  /* Motion */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 160ms;
  --dur-mid: 240ms;
}

@theme {
  --font-sans: 'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, sans-serif;
  --color-hero-bg: #F9F5EA;
  --color-platform-bg: #341815;
  --color-feature-card: #E4E1D2;
  --color-footer-bg: #050505;
}
```

### `src/styles/global.css`
```css
@import "tailwindcss";
@import "./tokens.css";

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-hero-bg);
  color: var(--color-hero-text);
  font-family: var(--font-sans);
}

body {
  min-height: 100svh;
  overflow-x: clip;
  line-height: 1.5;
  font-size: 16px;
}

img, svg { display: block; max-width: 100%; }
button, input { font: inherit; color: inherit; }
button { cursor: pointer; background: none; border: none; }
a { color: inherit; text-decoration: none; }
h1, h2 { text-wrap: balance; }

.skip-link { /* same as legalWebsite */ }
.container { width: 100%; max-width: var(--container-max); margin-inline: auto; padding-inline: var(--container-pad); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

### Typography scale (apply via component CSS / Tailwind arbitrary values)

| Level | Size | Weight | Line Height | Tracking | Color |
|---|---|---|---|---|---|
| Giant Wordmark | `clamp(110px, 19vw, 250px)` | 800 | 0.85 | `-0.05em` | `#EAE5DC` |
| Hero H1 | `clamp(42px, 5vw, 72px)` | 400 | 1.08 | `-0.035em` | `#181916` |
| Section H2 | `clamp(32px, 3.5vw, 48px)` | 600 (white) / 400 (muted) | 1.15 | `-0.025em` | white / `rgba(255,255,255,0.45)` |
| Stats Metric | `clamp(38px, 4vw, 56px)` | 400 | 1.1 | `-0.02em` | `#FFFFFF` |
| Price Number | `clamp(36px, 3.5vw, 44px)` | 700 | 1.1 | `-0.02em` | `#1E0E0A` |
| Card H3 | `19px–20px` | 700 | 1.25 | `-0.015em` | `#1E0E0A` |
| Body / Subtitle | `15px–17px` | 400 | 1.55 | normal | `#5C6057` / `#C9BFB8` |
| Pill Badge | `10px–11px` | 700 (uppercase) | 1.2 | `0.1em` | `#2E1814` |
| Footnote | `12px–13px` | 400 | 1.45 | normal | `#71717A` / `#8E8E93` |

Use `font-variant-numeric: tabular-nums` on all stat/price/balance figures.

---

## 3. Exact Copy, Numbers, Toggle & Form State

### `src/data/content.ts` (excerpt)
```ts
export const NAV_LINKS = ['Features', 'Use cases', 'Pricing', 'Integrations'] as const;

export const HERO = {
  h1Line1: 'A softer way to hold',
  badgeWord: 'Dollars',
  h1Line2: 'Onchain.',
  subtitle: 'Canopy USD is a stable digital dollar designed for seamless DeFi access, transparent yield, and calm long-term growth.',
  cta: 'Start holding USD',
} as const;

export const STATS = [
  { value: '500+', label: 'Companies Optimizing' },
  { value: '80%',  label: 'Faster Financial Reporting' },
  { value: '$20B+', label: 'Financial Data Processed' },
] as const;

export const FEATURES = {
  badge: 'OUR FEATURES',
  h2: { white: ['Essential', 'Managers'], muted: ['Tools For', 'Finance'] },
  subtitle: 'Optimize finances with better insights and forecasting.',
  cards: {
    wallet: {
      title: 'Multi-Currency Wallet',
      desc: 'Manage multiple currencies from a single dashboard. Monitor balances, track account activity, and gain full visibility.',
    },
    pnl: {
      title: 'Profit & Loss Tracking',
      desc: 'Visualize profits and losses with clear charts and reports. Track financial trends and make informed decisions.',
    },
  },
} as const;

export const WALLET_ROWS = [
  { code: 'USD', value: '$263,724.32', dot: '#22C55E', status: 'Active' },
  { code: 'EUR', value: '€ 63,275.45',  dot: '#EAB308', status: 'Active' },
  { code: 'KRW', value: '₩ 3,253.12',   dot: '#22C55E', status: 'Active' },
  { code: 'IDR', value: 'Rp 963,164.98', dot: '#22C55E', status: 'Active' },
] as const;

export const PNL = {
  title: 'Spending Overview',
  metric: '$33,624.32',
  of: 'of $50,000.00',
  legend: [{ label: '<$500', color: '#9CA3AF' }, { label: '>$500', color: '#111827' }],
  months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
} as const;

export const INTEGRATIONS = {
  badge: 'INTEGRATIONS',
  h2: { muted: ['Seamless', 'Ecosystem'], white: ['Financial', 'Integration'] },
  subtitle: 'Connect Synais with your accounting, ERP, banking, and BI systems.',
} as const;

export const PRICING = {
  badge: 'Pricing',
  h2: { white: ['Plans', 'Teams'], muted: ['Built For', 'Finance'] },
  subtitle: 'From growing businesses to enterprise finance departments.',
  toggle: { monthly: 'Monthly', annually: 'Annually' },
  plans: [
    {
      id: 'starter',
      name: 'Starter Plan',
      desc: 'Perfect for small finance teams getting started with AI-powered financial analysis.',
      priceMonthly: '$29',
      priceAnnual: '$23',
      period: 'month',
      cta: 'Get Started',
      ctaVariant: 'default',
      badge: null,
      features: ['AI-powered financial insights','Basic reporting dashboards','Cash flow monitoring','Up to 3 team members','Email support'],
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      desc: 'Built for growing organizations that need deeper financial visibility and forecasting capabilities.',
      priceMonthly: '$99',
      priceAnnual: '$79',
      period: 'month',
      cta: 'Start Free Trial',
      ctaVariant: 'pro',
      badge: 'Recommended for Finance Managers',
      features: ['Everything in Starter','Advanced forecasting & scenario planning','Automated management reports','Custom KPI dashboards','Up to 20 team members','Priority support'],
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      desc: 'Designed for large organizations requiring advanced controls, integrations, and scalability.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      period: null,
      cta: 'Contact Sales',
      ctaVariant: 'default',
      badge: null,
      features: ['Everything in Professional','Unlimited users','ERP & accounting integrations','Custom AI models and workflows','Enterprise-grade security & compliance','Dedicated success manager'],
    },
  ],
} as const;

export const FOOTER = {
  brand: 'synais.',
  tagline: 'Empower finance teams with AI-driven insights, automated reporting, and smarter decision-making.',
  socials: ['github','x','linkedin','youtube'] as const,
  newsletter: {
    heading: 'Stay Ahead in Finance',
    subhead: 'Get the latest finance insights, AI trends, and product updates delivered to your inbox.',
    placeholder: 'Enter your email',
  },
  columns: {
    Company: ['Platform','About','Features','Pricing','Careers','Help'],
    Solutions: ['Financial Planning','Budget Management','Cash Flow Forecasting','Financial Reporting','Variance Analysis','Executive Dashboards'],
    Resources: ['Blog','AI for Finance Guide','Case Studies','Knowledge Base','API Documentation','Product Updates'],
    Contact: ['hello@synais.ai','+62 21 5555 8888','Surakarta, Indonesia'],
  },
  legal: '© 2026 Synais. All rights reserved.',
  links: ['Terms & Conditions','Privacy Policy'],
  wordmark: 'synais.',
} as const;
```

### Pricing toggle behavior
- State: `const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly')` (default **Monthly active**, matching reference).
- Segmented control: cream track `#F5EFEB`, active Monthly pill dark espresso `#341815` with white text; inactive Annually text `#341815` on track.
- On toggle, swap `priceMonthly` ↔ `priceAnnual` with `200ms` cross-fade (`opacity` + `translate-y` micro-motion). Enterprise stays `Custom`.
- Annual prices are monthly-equivalent at **20% discount** (inferred). Show no extra badge to match reference.
- `aria-pressed` on each toggle option; keyboard operable (Enter/Space).

### Newsletter form state
- State: `const [email, setEmail] = useState('')`, `const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle')`.
- Validation: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- Submit: prevent default → if invalid, `status='error'` → else `status='submitting'` → `setTimeout(800)` → `status='success'`, clear email.
- UI:
  - idle: white circular submit arrow button.
  - submitting: button shows spinner (SVG) + disabled.
  - success: input replaced by `Thanks! You're subscribed.` (white, 14px).
  - error: input border `#EF4444` + helper text `Please enter a valid email.` (red, 12px).
- No network call (static landing). Mark as `[inferred]` behavior.

---

## 4. Asset Integration Plan

### Raster asset (single)
- **File:** `public/images/hero-coins-moss.webp` (master 2880×1640, delivery ≤350 KB) + `public/images/hero-coins-moss.png` fallback.
- **Generation prompt:** use the production prompt in `asset-inventory.md` §5 verbatim.
- **Usage in `HeroCanopy.tsx`:**
```tsx
<picture>
  <source srcSet="/images/hero-coins-moss.webp" type="image/webp" />
  <img
    src="/images/hero-coins-moss.png"
    alt="Two brushed metal coins resting in lush green moss"
    width={1440} height={820}
    loading="eager" fetchPriority="high" decoding="async"
    className="hero-coins"
  />
</picture>
```
- CSS: `.hero-coins { width: 100%; height: auto; object-fit: cover; object-position: right center; max-width: 100%; }`

### Everything else = code (SVG + CSS)
- **Features silk backdrop:** pure multi-stop CSS gradient (no image) per `asset-inventory.md` §4.2 `AST-FEAT-01`.
- **UI mockups (`MultiCurrencyWalletCard`, `ProfitLossCard`):** real DOM/HTML/CSS with SVG trend pill and 12×4 CSS grid heatmap. Never flattened screenshots.
- **16 integration tiles:** inline SVGs in `SvgIcons.tsx` via `IntegrationIcon({ id: 1..16 })` using exact colors/geometries from `asset-inventory.md` §4.3.
- **Badges:** 8-point sparkle SVG (`SparkleIcon`) + uppercase text.
- **Checkmarks:** `CheckmarkIcon` with `variant="light"` (beige circle + dark check) for Starter/Enterprise, `variant="dark"` (dark circle + white check) for Professional.
- **Socials:** official brand SVGs (`GithubIcon`, `XIcon`, `LinkedinIcon`, `YoutubeIcon`), 18–20px, `currentColor`, hover to white.
- **Footer wordmark:** CSS `clamp()` text (not SVG) with `pointer-events: none`, `overflow: hidden` on footer.
- **Zero emojis** enforced: `grep -R` check in CI/verification.

---

## 5. Responsive Rules (Zero Horizontal Overflow)

Breakpoints: Tailwind defaults (`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`). Test at `1440×900`, `768×1024`, `390×844`.

### Overflow prevention (global)
- `body { overflow-x: clip; }` (already in global.css).
- Every section root: `w-full max-w-full overflow-hidden`.
- `.container`: `max-width: min(var(--container-max), 100%)`.
- Grid children: `min-w-0` to allow shrinking.
- Images: `max-w-full h-auto`.
- Wordmark: `font-size: clamp(3rem, 18vw, 20rem); white-space: nowrap;` inside footer `overflow: hidden`.
- Integrations: `flex flex-wrap justify-center gap-3` (no fixed row widths).

### Per-viewport behavior

| Section | 1440×900 (Desktop) | 768×1024 (Tablet) | 390×844 (Mobile) |
|---|---|---|---|
| Navbar | Full floating pill: logo + 4 links + Login | Compact pill: logo + hamburger + Login | Compact pill: logo + hamburger; drawer on open |
| HeroCanopy | 2-col: copy left (5/12), coins right (7/12); H1 ~72px | 2-col tighter; H1 ~48px; coins scale | 1-col stack: copy then coins; H1 ~38px; coins 100% width |
| StatsBar | 3 cols, vertical hairline dividers | 3 cols compact, dividers kept | 1 col stacked, horizontal hairline dividers |
| FeaturesShowcase | 2-col cards inside metallic container | 2-col, container padding relaxes | 1-col stacked; inner dashboards `overflow-x-auto` |
| IntegrationsGrid | 9 + 7 tiles, centered | 8 + 8 (flex-wrap) | 4×4 grid, tiles 72px |
| PricingSection | 3 cols, Pro elevated center | 3 cols condensed or 1+2 stack | 1 col stacked, Pro keeps badge + elevation |
| FooterSynais | 2-col top (brand/newsletter), 4-col links | 2-col top, 2×2 links | 1-col top, 2-col links, wordmark fluid |

### Mobile navbar drawer
- Reuse legalWebsite pattern: full-screen overlay, body scroll lock, Escape to close, focus management (`burgerRef`/`closeRef`), accordion sections (none here — flat links), CTA at bottom.

---

## 6. Verification & Quality Gate

### Build & runtime
- [ ] `npm install` completes with zero errors.
- [ ] `npm run build` (`tsc -b && vite build`) passes with zero TS errors.
- [ ] `npm run dev` serves at `http://localhost:5173` with zero console errors.
- [ ] `npm run preview` serves production build.

### Visual fidelity (Playwright)
- [ ] Capture full-page screenshots at `1440×900`, `768×1024`, `390×844` → save to `docs/design/captures/` (naming: `desktop-1440x900-*.png`, etc.).
- [ ] Hero H1, Dollar badge pill, CTA, coins image render without layout shift.
- [ ] Stats numbers use tabular nums; dividers visible.
- [ ] Features metallic gradient has no banding; both cards render with correct data.
- [ ] Integrations shows exactly 16 tiles in 9+7 (desktop) layout.
- [ ] Pricing toggle switches Monthly↔Annually prices and active pill.
- [ ] Footer newsletter: idle → submitting → success and error states all render.

### Zero-overflow assertion (run in Playwright for each viewport)
```js
() => document.documentElement.scrollWidth <= window.innerWidth
```
- [ ] Passes at all 3 viewports.

### Content & a11y
- [ ] All verbatim copy matches §3 (no typos, no invented sections).
- [ ] Zero emojis: `grep -R` over `src/` returns none.
- [ ] All icons are inline SVG (no raster icon files, no Unicode symbols).
- [ ] Skip link works; focus-visible rings present; drawer focus trap works.
- [ ] `alt` text on hero image; form inputs have labels/aria.

### Asset checks
- [ ] `public/images/hero-coins-moss.webp` exists and loads (200) with PNG fallback.
- [ ] No full screenshot used as background.
- [ ] `features` backdrop is CSS gradient (no background image).

### Code review hand-off
- [ ] `code-reviewer` (read-only) audits `src/` for duplication, a11y, SEO, perf, console errors.

---

## 7. Implementation Notes for Gemini 4 Hydrogen

1. **Start from `legalWebsite` skeleton** (Vite/TS/CSS conventions) then add Tailwind v4 via `@tailwindcss/vite`.
2. **Implement `SvgIcons.tsx` first** — every other component depends on it.
3. **Tokens before components** — populate `tokens.css` and verify Tailwind `@theme` resolves custom colors.
4. **Hero image last** — generate `hero-coins-moss.webp` via the asset prompt, drop into `public/images/`, verify `<picture>` fallback.
5. **Pricing toggle + newsletter form** are the only stateful pieces; keep them local (`useState`), no external state library.
6. **Do not add sections** not listed in §1. Do not use emojis. Do not use raster icons.
7. **Run the §6 checklist** before declaring fidelity; save captures to `docs/design/captures/`.

---

*Plan complete. Ready for implementer hand-off.*