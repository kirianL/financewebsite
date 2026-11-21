# Design System & UI/UX Specification: Hybrid Finance Landing Page

**Project:** `financewebsite`  
**Specialist Role:** `ui-ux-designer` (Read-Only Analytical Report)  
**Input References:**
- `01-hero-canopy.jpg` (`1440×1024`) — Canopy Light Cream/Olive Hero Section  
- `02-stats-features-integrations.jpg` (`1480×2000`) — Synais Stats, Features Container with Golden Light Beams, Integrations Eyebrow  
- `03-integrations-pricing.jpg` (`1480×2000`) — Synais Ecosystem Integrations & 3-Tier Pricing Section  
- `04-pricing-footer.jpg` (`1480×2000`) — Synais Pricing Cards, Newsletter Subscription, and Deep Black Footer  

---

## 1. Executive Architecture & Hybrid Transition Strategy

The landing page features a **two-tone hybrid aesthetic**:
1. **Light Canopy Hero Phase:** A clean, organic light cream surface (`#f8f7f2` / `#f9f5ea`) with dark olive (`#4c6430`) accents, moss geometry, and soft beige highlights (`#e9e2ce`). It projects calmness, security, and institutional clarity for onchain wealth management.
2. **Dark Synais Enterprise Phase:** Deep espresso brown (`#2d1815` / `#311b18`) transitioning into an illuminated golden-beam feature showcase, dual-surface cream pricing cards (`#ffffff` / `#e4e1d2`), and finally anchoring in a pure black (`#000000`) newsletter and footer ecosystem.
3. **The Hybrid Junction:** The transition between the Canopy light hero and the Synais dark stats section is mediated by either a clean seamless boundary or a soft curved divider to maintain visual continuity without harsh contrast banding.

---

## 2. Color Palette & Semantic Tokens

### 2.1 Canopy Light Hero Tokens (Top Phase)
| Semantic Token | Value / Hex | RGB | Description | Classification |
|---|---|---|---|---|
| `--hero-bg` | `#f8f7f2` / `#f9f5ea` | `rgb(249, 245, 234)` | Primary light canvas background | `[observed]` |
| `--hero-text-primary` | `#0b0a06` / `#15181d` | `rgb(11, 10, 6)` | High-contrast headline & navigation text | `[observed]` |
| `--hero-text-muted` | `#4d4842` / `#5a544c` | `rgb(77, 72, 66)` | Subtitle text, secondary descriptions | `[observed]` |
| `--hero-primary-accent` | `#4c6430` | `rgb(76, 100, 48)` | Signature olive green for main CTA button | `[observed]` |
| `--hero-primary-hover` | `#3e5226` | `rgb(62, 82, 38)` | Darkened olive green for button hover | `[inferred]` |
| `--hero-primary-active` | `#33431f` | `rgb(51, 67, 31)` | Pressed olive green state | `[inferred]` |
| `--hero-badge-bg` | `#e9e2ce` | `rgb(233, 226, 206)` | Warm beige highlight pill / coin badge | `[observed]` |
| `--hero-pill-border` | `rgba(11, 10, 6, 0.08)` | `rgba(11, 10, 6, 0.08)` | Subtle border for login button and navigation | `[inferred]` |
| `--hero-graphic-moss` | `#677844` / `#586838` | `rgb(103, 120, 68)` | Layered curved abstract geometry | `[observed]` |
| `--hero-graphic-sage` | `#98a556` / `#86946e` | `rgb(152, 165, 86)` | Medium tone olive-sage gradients | `[observed]` |

---

### 2.2 Synais Dark Espresso & Golden Beam Tokens (Middle Phase)
| Semantic Token | Value / Hex | RGB | Description | Classification |
|---|---|---|---|---|
| `--synais-bg` | `#2d1815` | `rgb(45, 24, 21)` | Rich dark espresso base canvas | `[observed]` |
| `--synais-bg-elevated` | `#341815` / `#381c19` | `rgb(52, 24, 21)` | Slightly lifted espresso surface for cards/panels | `[observed]` |
| `--synais-text-headline` | `#ffffff` / `#f3efe6` | `rgb(243, 239, 230)` | Bright cream white for primary headings | `[observed]` |
| `--synais-text-muted-brown` | `#a8928e` / `#988785` | `rgb(152, 135, 133)` | Warm gray-brown for two-tone headings & labels | `[observed]` |
| `--synais-text-body` | `#ccb8b7` / `#d4c5c4` | `rgb(204, 184, 183)` | Legible paragraph text against dark espresso | `[observed]` |
| `--synais-border-subtle` | `rgba(243, 239, 230, 0.12)` | `rgba(243, 239, 230, 0.12)` | 1px border for containers, cards, and dividers | `[observed]` |
| `--synais-border-active` | `rgba(243, 239, 230, 0.25)` | `rgba(243, 239, 230, 0.25)` | Highlight border for interactive elements | `[inferred]` |

#### Features Container Light Beam Spec (`[observed]` + `[inferred]` formula):
```css
/* Warm golden-brown radial/diagonal light beams inside the Features container */
--beam-origin-highlight: #fbf4e4; /* Bright golden cream peak */
--beam-glow-warm:        #ede2cc; /* Luminous warm amber */
--beam-glow-mid:         #c4aa8b; /* Golden tan mid-glow */
--beam-glow-amber:       #7e5f4b; /* Deep radiant amber */
--beam-glow-shadow:      #3c1e16; /* Transition shadow into espresso */
--beam-bg-dark:          #240f0a; /* Darkest espresso foundation */

/* Applied background gradient */
background: 
  radial-gradient(ellipse 90% 80% at 15% 20%, rgba(251, 244, 228, 0.35) 0%, rgba(196, 170, 139, 0.22) 35%, rgba(126, 95, 75, 0.12) 60%, transparent 85%),
  linear-gradient(135deg, rgba(237, 226, 204, 0.15) 0%, rgba(60, 30, 22, 0.6) 50%, #240f0a 100%),
  #2d1815;
```

---

### 2.3 Synais Dual-Surface Pricing Tokens
| Semantic Token | Value / Hex | RGB | Description | Classification |
|---|---|---|---|---|
| `--card-top-bg` | `#ffffff` | `rgb(255, 255, 255)` | Upper half of card (title, price, CTA) | `[observed]` |
| `--card-bottom-bg` | `#e4e1d2` / `#f3efe6` | `rgb(228, 225, 210)` | Lower half of card ("You'll get" checklist) | `[observed]` |
| `--card-border` | `#ded8c7` / `#e2ded2` | `rgb(222, 216, 199)` | Outer card border | `[observed]` |
| `--card-text-primary` | `#111111` / `#000000` | `rgb(17, 17, 17)` | Title and large price text | `[observed]` |
| `--card-text-secondary`| `#555555` / `#666666` | `rgb(85, 85, 85)` | Card description text | `[observed]` |
| `--card-cta-default-bg`| `#f0eee8` / `#ece7dc` | `rgb(240, 238, 232)` | Starter & Enterprise card CTA button fill | `[observed]` |
| `--card-cta-default-text`| `#1b1b1b` | `rgb(27, 27, 27)` | Starter & Enterprise CTA button text | `[observed]` |
| `--card-pro-cta-bg` | `#341815` | `rgb(52, 24, 21)` | Highlighted Professional CTA button fill | `[observed]` |
| `--card-pro-cta-text` | `#ffffff` | `rgb(255, 255, 255)` | Professional CTA button text | `[observed]` |
| `--card-pro-badge-bg` | `#d9d0c3` / `#e0d8cb` | `rgb(217, 208, 195)` | "Recommended for Finance Managers" pill | `[observed]` |
| `--card-pro-badge-text`| `#311b18` | `rgb(49, 27, 24)` | Text inside the recommended badge | `[observed]` |
| `--toggle-container-bg`| `#482824` / `#503733` | `rgb(72, 40, 36)` | Monthly/Annually segmented pill track | `[observed]` |
| `--toggle-active-bg` | `#f3efe6` | `rgb(243, 239, 230)` | Active segmented pill background | `[observed]` |
| `--toggle-active-text` | `#2d1815` | `rgb(45, 24, 21)` | Active segmented pill text | `[observed]` |
| `--toggle-inactive-text`| `#ccc9bc` | `rgb(204, 201, 188)` | Inactive toggle option label | `[observed]` |

---

### 2.4 Synais Black Footer & Newsletter Tokens (Bottom Phase)
| Semantic Token | Value / Hex | RGB | Description | Classification |
|---|---|---|---|---|
| `--footer-bg` | `#000000` | `rgb(0, 0, 0)` | Pure black footer & newsletter background | `[observed]` |
| `--footer-heading` | `#ffffff` | `rgb(255, 255, 255)` | "Stay Ahead in Finance" title | `[observed]` |
| `--footer-text-muted` | `#9e9e9e` / `#a0a09b` | `rgb(158, 158, 158)` | Newsletter subtext & copyright | `[observed]` |
| `--footer-input-bg` | `#1a1a1a` / `#161616` | `rgb(26, 26, 26)` | Newsletter email input background | `[observed]` |
| `--footer-input-border`| `rgba(255, 255, 255, 0.15)` | `rgba(255, 255, 255, 0.15)` | Border for newsletter input field | `[observed]` |
| `--footer-input-text` | `#f3efe6` | `rgb(243, 239, 230)` | Typed text in newsletter input | `[inferred]` |
| `--footer-input-ph` | `#6b6b66` | `rgb(107, 107, 102)` | Placeholder "Enter your email" | `[observed]` |
| `--footer-btn-submit` | `#ffffff` | `rgb(255, 255, 255)` | Circular submit button (arrow) fill | `[observed]` |
| `--footer-btn-icon` | `#000000` | `rgb(0, 0, 0)` | Submit button arrow icon | `[observed]` |
| `--footer-link` | `#bebeba` | `rgb(190, 190, 186)` | Navigation links (Solutions, Resources, etc.) | `[observed]` |
| `--footer-link-hover` | `#ffffff` | `rgb(255, 255, 255)` | Hover state for footer links | `[inferred]` |

---

## 3. Typography System & Font Pairings

### 3.1 Recommended Font Family
- **Primary Typeface:** `Plus Jakarta Sans` *(Google Font)* `[substituted]`  
  - *Rationale:* Perfectly replicates the clean geometry, slightly rounded modern terminals, high legibility at micro sizes, and crisp numeric tabular figures seen in both Canopy and Synais references.
  - *Alternative fallbacks:* `Inter`, `Geist Sans`, system neo-grotesk (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
- **Code / Monospace (Financial Data Figures):** `JetBrains Mono` or `font-feature-settings: "tnum"` on `Plus Jakarta Sans` `[inferred]`.

### 3.2 Modular Scale & Weights
| Level | Font Size (Desktop) | Line Height | Weight | Letter Spacing (Tracking) | Usage Examples | Classification |
|---|---|---|---|---|---|---|
| **Display H1** | `64px` (`4rem`) | `1.08` (`69px`) | `700` Bold | `-0.025em` | Hero: "A softer way to hold Dollars Onchain." | `[observed]` |
| **Section H2** | `44px` (`2.75rem`)| `1.15` (`51px`) | `700` Bold | `-0.02em` | Features: "Essential Tools For Finance Managers", Pricing: "Plans Built For Finance Teams" | `[observed]` |
| **Section H3** | `24px` (`1.5rem`) | `1.30` (`31px`) | `600` SemiBold | `-0.015em` | Card Titles: "Multi-Currency Wallet", "Profit & Loss Tracking", "Professional Plan" | `[observed]` |
| **Stat Numbers**| `56px` (`3.5rem`) | `1.10` (`62px`) | `700` Bold | `-0.02em` | Stats: `500+`, `80%`, `$20B+` | `[observed]` |
| **Price Hero** | `48px` (`3rem`) | `1.10` (`53px`) | `700` Bold | `-0.02em` | Pricing: `$29`, `$99`, `Custom` | `[observed]` |
| **Subhead** | `18px` (`1.125rem`)| `1.50` (`27px`) | `400` Regular | `-0.01em` | Canopy subhead, Synais section intros | `[observed]` |
| **Body Large** | `16px` (`1rem`) | `1.55` (`25px`) | `400` Regular | `0em` | Feature descriptions, pricing bullets | `[observed]` |
| **Body Regular**| `14px` (`0.875rem`)| `1.50` (`21px`) | `400` Regular | `0em` | Footer links, card checklist items | `[observed]` |
| **Eyebrow / Pill**| `12px` (`0.75rem`) | `1.20` (`14px`) | `600` SemiBold | `+0.06em` Uppercase | Badges: "RECOMMENDED FOR FINANCE MANAGERS", "INTEGRATIONS" | `[observed]` |
| **Micro Caption**| `11px` (`0.6875rem`)| `1.40` (`15px`) | `400` Regular | `+0.02em` | Terms, Privacy Policy, subtext | `[observed]` |

---

### 3.3 Two-Tone Heading Implementation Spec
In the Synais dark sections (`02-stats-features-integrations.jpg` and `03-integrations-pricing.jpg`), headings feature a **distinctive two-tone split**:
- **Tone A (Bright Highlight):** `#ffffff` / `#f3efe6` (Full luminosity, emphasis).
- **Tone B (Muted Tan/Brown):** `#a8928e` / `#988785` (Warm muted tone, balanced contrast).

#### Code-Ready Implementation Pattern:
```html
<!-- Example 1: Features Section Heading -->
<h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center">
  <span class="text-[#f3efe6]">Essential Tools </span>
  <span class="text-[#a8928e]">For Finance Managers</span>
</h2>

<!-- Example 2: Pricing Section Heading -->
<h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center">
  <span class="text-[#f3efe6]">Plans Built For </span>
  <span class="text-[#a8928e]">Finance Teams</span>
</h2>

<!-- Example 3: Integrations Section Heading -->
<h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center">
  <span class="text-[#f3efe6]">Seamless Financial </span>
  <span class="text-[#a8928e]">Ecosystem Integration</span>
</h2>
```
`[observed]` — verified through color sampling where text luminance shifts between `#f2ecea` and `#988785`.

---

## 4. Spacing, Layout, Surfaces & Visual Depth

### 4.1 Max Width Containers & Grid Architecture
- **Desktop Max Container:** `1280px` (`max-w-7xl`), centered with `mx-auto` and `px-6` (`24px` gutter) `[inferred]`.
- **Hero Inner Width:** `1200px` `[observed]`.
- **Section Vertical Padding:**
  - Hero Section: `py-20 md:py-28` (`80px` to `112px`) `[observed]`.
  - Stats Row: `py-12 md:py-16` (`48px` to `64px`) `[observed]`.
  - Features Section: `py-20 md:py-24` (`80px` to `96px`) `[observed]`.
  - Integrations Section: `py-20 md:py-24` (`80px` to `96px`) `[observed]`.
  - Pricing Section: `py-20 md:py-28` (`80px` to `112px`) `[observed]`.
  - Footer & Newsletter: `pt-20 pb-12` (`80px` top, `48px` bottom) `[observed]`.

---

### 4.2 Concentric Border Radii
Concentric corner curvature ensures smooth nesting of child elements inside parents:
| Component | Radius Token | CSS Value | Classification |
|---|---|---|---|
| Outer Feature Container | `--radius-2xl` | `28px` / `32px` | `[observed]` |
| Pricing Cards (Outer) | `--radius-xl` | `24px` | `[observed]` |
| Pricing Card Bottom Sheet | `--radius-xl-b` | `0px 0px 24px 24px` | `[observed]` |
| Dashboard Nested Cards | `--radius-lg` | `16px` | `[observed]` |
| Interactive Buttons / Pills | `--radius-full` | `9999px` | `[observed]` |
| Newsletter Input Box | `--radius-full` | `9999px` | `[observed]` |
| Feature Badges | `--radius-full` | `9999px` | `[observed]` |

---

### 4.3 Surface Depth & Shadows
1. **Hero Floating Elements:**
   - Nav pill: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);` `[inferred]`.
   - Hero CTA: `box-shadow: 0 2px 8px rgba(76, 100, 48, 0.25);` `[inferred]`.
2. **Features Glow & Depth:**
   - Feature Container Inner Shadow: `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.5);` `[observed]`.
   - Feature Sub-Cards (Total / Spending): Pure white surfaces with crisp light borders:
     `background: #ffffff; box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.25);` `[observed]`.
3. **Pricing Cards:**
   - Starter & Enterprise: `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);` `[observed]`.
   - Professional Card (Featured): Raised elevation `scale-[1.02]` or `z-10` with stronger amber-toned ambient drop:
     `box-shadow: 0 20px 45px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1);` `[observed]`.

---

## 5. Detailed Component Specifications

### 5.1 Canopy Header & Hero (`01-hero-canopy.jpg`)
1. **Navbar:**
   - Position: Sticky or top fixed with transparent/cream background.
   - Logo: Left-aligned "Canopy" wordmark preceded by a circular green/white compass/target glyph (`w-6 h-6`).
   - Links: Center/left grouped: `Features`, `Use cases`, `Pricing`, `Integrations` (14px font, `#0b0a06`, hover: `#4c6430`).
   - Right Action: "Login" pill button (`px-5 py-2`, `rounded-full`, border: `1px solid rgba(11, 10, 6, 0.15)`).
2. **Hero Copy & CTA:**
   - Headline: "A softer way to hold Dollars Onchain."
     - Preceded by a circular token icon representing Canopy Dollar (dark olive circle with embedded graphic).
   - Paragraph: "Canopy USD is a stable digital dollar designed for seamless DeFi access, transparent yield, and calm long-term growth." (`max-w-xl`, text `#4d4842`).
   - Main Button: "Start holding USD" (`bg-[#4c6430]`, `text-white`, `px-7 py-3.5`, `rounded-full`, bold 15px, hover: `bg-[#3e5226]`).
3. **Hero 3D Illustration:**
   - Layered organic curved topography rendered in olive (`#4c6430`), sage (`#677844`, `#98a556`), and cream ribs (`#e9e2ce`).
   - Sits on the right and extends down toward the section fold.

---

### 5.2 Synais Stats Banner (`02-stats-features-integrations.jpg`)
- **Background:** Deep espresso `#2d1815` seamlessly starting below Hero.
- **Layout:** 3 horizontally aligned stat columns separated by subtle vertical borders `rgba(243, 239, 230, 0.1)`:
  1. `500+` / `Companies Optimizing`
  2. `80%` / `Faster Financial Reporting`
  3. `$20B+` / `Financial Data Processed`
- **Typography:** Numbers `56px` bold in `#f3efe6`; labels `14px` in `#a8928e`.

---

### 5.3 Synais Features Showcase (`02-stats-features-integrations.jpg`)
1. **Section Header:**
   - Centered two-tone heading: "Essential Tools For Finance Managers".
   - Subhead: "Optimize finances with better insights and forecasting." (`#ccb8b7`, 16px).
2. **Main Feature Container:**
   - Rounded rectangular frame (`rounded-3xl`, `border border-[rgba(243,239,230,0.1)]`).
   - Background illuminated with the warm diagonal light beam (`135deg` from top-left).
3. **Nested Feature Cards (Grid 2-Col):**
   - **Left Card: Multi-Currency Wallet & Total Balance**
     - Floating white card preview: "Total $263,724.32", currency list (USD, EUR, GBP) with balance rows and green change pills.
     - Card caption: Title "Multi-Currency Wallet" (18px bold cream `#f3efe6`), text: "Manage multiple currencies from a single dashboard. Monitor balances, track account activity, and gain full visibility." (`#ccb8b7`).
   - **Right Card: Spending Overview & Profit/Loss**
     - Floating white card preview: "Spending Overview $33,624.32", monthly financial trend graph / bar chart.
     - Card caption: Title "Profit & Loss Tracking" (18px bold cream `#f3efe6`), text: "Visualize profits and losses with clear charts and reports. Track financial trends and make informed decisions." (`#ccb8b7`).

---

### 5.4 Synais Ecosystem Integrations (`02-stats-features-integrations.jpg` & `03-integrations-pricing.jpg`)
- **Eyebrow:** `INTEGRATIONS` uppercase pill or text badge.
- **Heading:** "Seamless Financial Ecosystem Integration" (two-tone).
- **Subhead:** "Connect Synais with your accounting, ERP, banking, and BI systems."
- **Visual:** Central Synais hub logo with radiating orbital connection lines linking to partner badges (QuickBooks, NetSuite, SAP, Xero, Stripe, Plaid).

---

### 5.5 Synais 3-Tier Dual-Surface Pricing (`03-integrations-pricing.jpg` & `04-pricing-footer.jpg`)
1. **Header & Billing Toggle:**
   - Heading: "Plans Built For Finance Teams" (two-tone).
   - Subhead: "From growing businesses to enterprise finance departments."
   - Segmented Pill Toggle:
     - Track: `#482824` rounded-full with `p-1`.
     - "Monthly" (Active): `#f3efe6` pill with `#2d1815` bold text.
     - "Annually" (Inactive): `#ccc9bc` text.
2. **Card Structure (Dual-Surface Treatment):**
   - **Top Surface (`#ffffff`):**
     - Plan name (e.g., `Starter Plan`, 20px bold `#111111`).
     - Plan description (14px `#666666`).
     - Price block (e.g., `$29` in 48px bold, `/ month` in 14px muted).
     - Full-width CTA button.
   - **Bottom Surface (`#e4e1d2` / `#f3efe6`):**
     - Section divider line.
     - "You'll get:" (14px bold `#333333`).
     - Feature checklist items with circular checkmark icons (`w-4 h-4`).
3. **Plan Specifics:**
   - **Starter Plan:**
     - Top: `$29 / month` — CTA: `Get Started` (`bg-[#ece7dc] text-[#1b1b1b]`, border: `1px solid #ded8c7`).
     - Features: AI-powered financial insights, Basic reporting dashboards, Cash flow monitoring, Up to 3 team members, Email support.
   - **Professional Plan (Recommended):**
     - Top Badge: `Recommended for Finance Managers` (`bg-[#d9d0c3] text-[#311b18]`, rounded-full, 12px semi-bold).
     - Top: `$99 / month` — CTA: `Start Free Trial` (`bg-[#341815] text-white hover:bg-[#240b07]`).
     - Features: Everything in Starter, Advanced forecasting & scenario planning, Automated management reports, Custom KPI dashboards, Up to 20 team members, Priority support.
   - **Enterprise Plan:**
     - Top: `Custom` — CTA: `Contact Sales` (`bg-[#ece7dc] text-[#1b1b1b]`, border: `1px solid #ded8c7`).
     - Features: Everything in Professional, Unlimited users, ERP & accounting integrations, Custom AI models and workflows, Enterprise-grade security & compliance, Dedicated success manager.

---

### 5.6 Synais Newsletter & Black Footer (`04-pricing-footer.jpg`)
1. **Newsletter Block:**
   - Background: Pure black `#000000`.
   - Heading: "Stay Ahead in Finance" (`#ffffff`, 28px bold).
   - Subhead: "Get the latest finance insights, AI trends, and product updates delivered to your inbox." (`#9e9e9e`, 14px).
   - Input Group:
     - Pill container (`bg-[#1a1a1a]`, `border border-[rgba(255,255,255,0.15)]`, `rounded-full`, `p-1.5 pl-5`).
     - Input: Placeholder "Enter your email" (`text-[#f3efe6]`, `bg-transparent`, `outline-none`).
     - Submit: Round circular button (`w-10 h-10`, `bg-white`, `text-black`, arrow icon).
2. **Footer Navigation Columns:**
   - Brand column (Left):
     - Logo: `synais.` (lowercase with terminal dot, white 22px bold).
     - Tagline: "Empower finance teams with AI-driven insights, automated reporting, and smarter decision-making." (`#9e9e9e`, max-w-xs).
   - Column 1 (`Platform`): About, Features, Pricing, Help.
   - Column 2 (`Solutions`): Financial Planning, Budget Management, Cash Flow Forecasting, Financial Reporting, Variance Analysis, Executive Dashboards.
   - Column 3 (`Resources`): Blog, AI for Finance Guide, Case Studies, Knowledge Base, API Documentation, Product Updates.
   - Contact block: `hello@synais.ai`, `+62 21 5555 8888`, `Surakarta, Indonesia`.
3. **Bottom Bar:**
   - Separator line `rgba(255, 255, 255, 0.08)`.
   - Left: `© 2026 Synais. All rights reserved.` (`#666666`, 12px).
   - Right: `Terms & Conditions` · `Privacy Policy` (`#888888`, hover: `#ffffff`).

---

## 6. Interactive States & Micro-Interactions

Based on the `transitions-dev` guidelines, interactions must feel snappy, physical, and restrained:

### 6.1 Interactive States Matrix
| Component | Default State | Hover State | Active / Pressed | Focus-Visible |
|---|---|---|---|---|
| **Canopy Nav Links** | Text `#0b0a06` | Text `#4c6430`, subtle underline or opacity | Text `#33431f` | `outline: 2px solid #4c6430; outline-offset: 2px` |
| **Canopy Login Button**| Border `rgba(0,0,0,0.15)`, bg transparent | Bg `rgba(0,0,0,0.05)`, border `rgba(0,0,0,0.3)` | Scale `0.98` | Focus ring |
| **Canopy Hero CTA** | Bg `#4c6430`, text white | Bg `#3e5226`, `translate-y-[-1px]`, shadow | Bg `#33431f`, `translate-y-[0px]` | 2px ring offset |
| **Billing Toggle** | Monthly active (`#f3efe6`), Annually text (`#ccc9bc`) | Inactive text brightens to `#ffffff` | Pill sliding animation (`200ms ease-out`) | Focus outline on tab |
| **Pricing Card (Pro)** | Scale 1.02, subtle amber shadow | `translate-y-[-4px]`, shadow depth increases | `scale-[1.01]` | Outline ring |
| **Pricing Card CTA (Pro)**| Bg `#341815`, text white | Bg `#240b07`, border `rgba(255,255,255,0.2)` | Scale `0.98` | 2px focus ring |
| **Pricing Card CTA (Std)**| Bg `#ece7dc`, text `#1b1b1b` | Bg `#dfd9cd`, border `#ccc5b5` | Scale `0.98` | Focus ring |
| **Newsletter Input** | Bg `#1a1a1a`, border `rgba(255,255,255,0.15)`| Border `rgba(255,255,255,0.3)` | Bg `#202020` | Border `#ffffff`, ring `1px rgba(255,255,255,0.3)` |
| **Newsletter Submit**| Bg `#ffffff`, text black | Bg `#f3efe6`, `scale-105` | Scale `0.95` | Focus ring |
| **Footer Links** | Text `#bebeba` | Text `#ffffff`, `translate-x-[2px]` | Text `#e0e0e0` | Text outline |

---

## 7. Responsive Viewport Strategy

### 7.1 Viewport Breakpoints & Matrix
```
1440×900 (Desktop)  ──► Full multi-column grid, horizontal stats, side-by-side dashboard cards, 3-card pricing grid
768×1024 (Tablet)   ──► Compact 3-col or 2-col stats, 2-col feature cards stacked, 3-card pricing stacked or carousel
390×844  (Mobile)   ──► 1-col vertical stack throughout, drawer/hamburger menu, full-width pricing cards
```

| Component | Desktop (`1440×900`) | Tablet (`768×1024`) | Mobile (`390×844`) |
|---|---|---|---|
| **Header Nav** | Full horizontal links + Login button | Links collapsed into hamburger; Login visible | Full hamburger menu or top sticky pill with CTA |
| **Hero Title** | `64px` font, 2 lines, token icon | `48px` font, 2–3 lines | `34px`–`38px` font, clean wrapped |
| **Hero Layout** | 2-column: text left, 3D graphic right | Vertical stack: text top, graphic below | Single column stack, graphic scaled to 100% width |
| **Stats Row** | 3 columns horizontal with vertical dividers | 3 columns compact or 3 stacked rows | 3 stacked cards, large numbers centered |
| **Features Container**| Side-by-side dashboard previews + light beam | Light beam preserved; preview cards stack vertically | 1-column stack, full width cards, touch-scrollable charts |
| **Integrations** | Orbiting nodes layout around center logo | Condensed orbital diameter or 4×3 logo grid | 2-column grid of integrated tools with Synais badge |
| **Pricing Cards** | 3 columns equal width, Pro card elevated | 1 column or 3 stacked cards, Pro on top/highlighted | 1 column stacked cards (Pro highlighted with badge) |
| **Newsletter** | Right-aligned input with left heading | Centered heading + full-width input container | Full width stacked, input + submit button full width |
| **Footer Links** | 4-column layout (Brand + 3 link columns) | 2×2 grid of link columns below brand | 1-column accordion or stacked link groups |

---

## 8. Classification Summary (Observed / Inferred / Substituted)

| Area | Decision Item | Value / Standard | Status | Rationale |
|---|---|---|---|---|
| **Hero Palette** | Background | `#f8f7f2` / `#f9f5ea` | `[observed]` | Exact pixel sample from `01-hero-canopy.jpg` |
| **Hero Palette** | Primary CTA Fill | `#4c6430` | `[observed]` | Sampled from "Start holding USD" button |
| **Hero Palette** | Highlight Tone | `#e9e2ce` | `[observed]` | Extracted from token icon and graphic ribbons |
| **Synais Palette** | Main Background | `#2d1815` / `#311b18` | `[observed]` | Extracted from `02-stats-features-integrations.jpg` |
| **Synais Palette** | Cream Highlights | `#f3efe6` | `[observed]` | Extracted from heading text and toggle active state |
| **Features Light Beam**| Radial/Diagonal Beam | Warm amber stops (`#fbf4e4` → `#c4aa8b` → `#240f0a`) | `[observed]` | Sampled across x=150..1330 at y=650..1150 in `02` |
| **Pricing Cards** | Dual-Surface split | White `#ffffff` top, Cream `#e4e1d2` bottom | `[observed]` | Verified via vertical segment scan at y=1020..1520 |
| **Footer Palette** | Footer Canvas | Pure black `#000000` | `[observed]` | Extracted from `04-pricing-footer.jpg` at y=1025..1829 |
| **Headings** | Two-Tone Split | Bright cream `#f3efe6` + Muted tan `#a8928e` | `[observed]` | Verified via per-word luminance extraction |
| **Stats Values** | Stat 2 Label & Value | `80% Faster Financial Reporting` | `[observed]` | Solved via high-contrast pixel bitmap extraction |
| **Typography** | Font Family | `Plus Jakarta Sans` | `[substituted]` | Closest geometric Google Font matching neo-grotesk |
| **Micro-Interactions**| Hover & Transitions | Transitions duration `200ms cubic-bezier(0.16, 1, 0.3, 1)` | `[inferred]` | Standard `transitions-dev` spring/snappy curves |
| **Breakpoints** | Responsive Grid | `1440px` (3 col), `768px` (2/1 col), `390px` (1 col) | `[inferred]` | Industry standard container adaptation matrix |

---

## 9. Implementation Guidance for Coordinator (Gemini 4 Hydrogen)

1. **Install Dependencies:**
   - Font: `@fontsource/plus-jakarta-sans` or Google Fonts link in `<head>`.
   - Icons: `lucide-react` (clean SVG icons for checkmarks, arrows, finance metrics).
2. **Tailwind Config Extensions:**
   - Register colors: `hero: { bg: '#f8f7f2', primary: '#4c6430', beige: '#e9e2ce' }`.
   - Register synais: `synais: { bg: '#2d1815', elevated: '#341815', cream: '#f3efe6', muted: '#a8928e', cardCream: '#e4e1d2' }`.
3. **Dual-Surface Card Construction:**
   - Structure each pricing card with a flex container:
     `<div class="rounded-3xl border border-[#ded8c7] overflow-hidden">`
     - Upper pane: `<div class="bg-white p-8">` (title, price, CTA button).
     - Lower pane: `<div class="bg-[#e4e1d2] p-8 border-t border-[#ded8c7]">` ("You'll get" checklist).
4. **Features Beam Implementation:**
   - Use the CSS background formula defined in Section 2.2 to recreate the ambient diagonal illumination.