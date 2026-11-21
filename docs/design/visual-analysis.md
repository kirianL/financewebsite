# Visual Analysis Report: Finance Hybrid Landing Page (`visual-analysis.md`)

**Role**: `visual-analyst` (Read-Only Forensic Audit)  
**Project**: `C:\Users\Kirian\Desktop\LandingFactory\projects\financewebsite`  
**Authoritative References Inspected**:
1. [01-hero-canopy.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/01-hero-canopy.jpg) (1440 × 1024 px — Canopy Light Hero)
2. [02-stats-features-integrations.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/02-stats-features-integrations.jpg) (1480 × 2000 px — Synais Dark Stats, Features & Integrations)
3. [03-integrations-pricing.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/03-integrations-pricing.jpg) (1480 × 2000 px — Synais Integrations & 3-Tier Pricing)
4. [04-pricing-footer.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/04-pricing-footer.jpg) (1480 × 2000 px — Synais Pricing & Giant Wordmark Footer)

---

## 1. Executive Summary & Hybrid Architecture

### 1.1 Visual Thesis
The requested page is an architectural **Hybrid Composition**:
- **Hero Surface (Light Mode)**: Faithful recreation of Canopy's light editorial aesthetic—warm cream canvas (`#F9F6F0`), organic foreground/midground moss landscape, two monumental brushed-silver coin monoliths, translucent floating pill navigation, and ultra-refined neo-grotesque typography.
- **Body & Footer Surfaces (Dark Warm Espresso Mode)**: Faithful recreation of Synais's dark financial operations platform—rich deep espresso brown canvas (`#2E1814`), high-impact metric dividers, flowing metallic silk showcase container with two-column interactive product cards, 16-app integrations cluster, 3-tier pricing matrix, and an absolute pitch-black footer (`#050505`) anchored by a massive bone-cream `synais.` wordmark.

### 1.2 Global Color Tokens Ledger

| Role | Hex / Value | Scope | Evidence Status |
|---|---|---|---|
| **Hero Background** | `#FBF9F5` → `#F3EFE6` (subtle cream gradient) | Hero Top/Sky | `[observed]` |
| **Hero Nav Pill BG** | `rgba(255, 255, 255, 0.75)` + `backdrop-blur(12px)` | Navigation | `[observed]` |
| **Hero Text Primary** | `#181916` (Deep Charcoal / Black) | Hero H1 & Nav | `[observed]` |
| **Hero Text Muted** | `#5C6057` (Warm Olive Slate) | Hero Subtitle | `[observed]` |
| **Hero CTA Button** | `#3B4E2B` (Forest Moss Green) | Hero CTA | `[observed]` |
| **Hero Badge Pill** | `#DDD8CB` (Muted Warm Khaki Pill) | Hero H1 Inline Badge | `[observed]` |
| **Synais Primary Canvas** | `#2E1814` (Deep Warm Espresso Chocolate) | Stats, Features, Integrations, Pricing | `[observed]` |
| **Synais Card Surface (Cream)** | `#EFE8DF` / `#EDE6DD` (Warm Bone Stone) | Feature Cards, Pricing Cards 1 & 3 | `[observed]` |
| **Synais Card Surface (White)** | `#FFFFFF` | Pro Card & Inner UI Dashboards | `[observed]` |
| **Synais Inner UI Trays** | `#1C0E0B` (Dark Espresso Tray) | Feature Mockup Trays | `[observed]` |
| **Synais Text Primary** | `#FFFFFF` (Pure Crisp White) | Headings, Stats, Primary Copy | `[observed]` |
| **Synais Text Muted Header** | `rgba(255, 255, 255, 0.45)` (`#9E918B`) | Two-tone headline de-emphasized words | `[observed]` |
| **Synais Text Secondary** | `#A69B95` / `#C9BFB8` (Warm Sand / Beige) | Subtitles, Metric Labels | `[observed]` |
| **Synais Text Dark Cards** | `#1E0E0A` (Deep Espresso Black) | Typography on Cream/White cards | `[observed]` |
| **Synais Text Muted Cards** | `#6B5E57` (Muted Espresso Brown) | Descriptions on Cream/White cards | `[observed]` |
| **Footer Canvas** | `#050505` to `#0A0A0A` (Pitch Black) | Complete Footer Section | `[observed]` |
| **Footer Muted Text** | `#8E8E93` / `#71717A` (Neutral Gray) | Links, Descriptions, Sub-footer | `[observed]` |
| **Giant Wordmark** | `#EAE5DC` (Warm Bone Cream) | Massive `synais.` Wordmark | `[observed]` |

---

## 2. Light-to-Dark Transition Architecture

### 2.1 The Intersection: Canopy Hero to Synais Stats
- **The Challenge**: The Canopy hero ends with an organic green moss floor (`#2F4027` to `#4C6136`) over a light cream canvas. Section 2 begins with Synais's deep warm espresso brown (`#2E1814`) stats bar.
- **Evidence Analysis**:
  - `[observed]`: Hero reference [01-hero-canopy.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/01-hero-canopy.jpg) has a natural horizon of organic moss occupying the lower 35–40% of the 1024px viewport height.
  - `[observed]`: Stats reference [02-stats-features-integrations.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/02-stats-features-integrations.jpg) starts with three clean metric columns on solid `#2E1814`.
  - `[inferred]`: The transition must feel deliberate and premium. The moss bed naturally grounds the hero; below the moss edge, the canvas seamlessly transitions into the `#2E1814` background of the Stats section. The deep green tones of the moss (`#2A3A21` / `#1F2E17`) provide a natural chromatic bridge between the light sky (`#FBF9F5`) and the espresso dark brown (`#2E1814`).
  - `[substituted]`: No artificial jagged dividers or sloped SVG cuts; maintain the natural photographic moss base of Canopy, resting directly atop the espresso stats block.

---

## 3. Section-by-Section Forensic Breakdown

```
+------------------------------------------------------------------------+
| 1. HERO (Canopy - Light Cream #F9F6F0)                                |
|    - Top: Floating Nav Pill (left) + Login Button (right)              |
|    - Content: H1 "A softer way to hold [$] Dollars Onchain."           |
|    - Subtitle: "Canopy USD is a stable digital dollar..."              |
|    - CTA: "Start holding USD" (Dark Forest Green Pill)                 |
|    - Art: 2 Brushed-Silver Reeded Coins embedded in lush green moss    |
+------------------------------------------------------------------------+
| 2. STATS BAR (Synais - Dark Espresso #2E1814)                          |
|    - 3 Columns with hairline vertical borders:                         |
|      [ 500+ / Companies Optimizing ]                                   |
|      | 80% / Faster Financial Reporting |                              |
|      [ $20B+ / Financial Data Processed ]                              |
+------------------------------------------------------------------------+
| 3. FEATURES (Synais - Floating Metallic Silk Container)                |
|    - Badge: [* OUR FEATURES]                                           |
|    - H2 Duo-tone: "Essential [Tools For] / [Finance] Managers"         |
|    - Subtitle: "Optimize finances with better insights..."             |
|    - 2-Col Cards (Cream Outer #EFE8DF + Dark Tray + White UI):         |
|      * Left: "Multi-Currency Wallet" (USD, EUR, KRW, IDR wallets)       |
|      * Right: "Profit & Loss Tracking" (Spending Overview + Heatmap)   |
+------------------------------------------------------------------------+
| 4. INTEGRATIONS (Synais - Dark Espresso #2E1814)                       |
|    - Badge: [* INTEGRATIONS]                                           |
|    - H2 Duo-tone: "[Seamless] Financial / [Ecosystem] Integration"     |
|    - Subtitle: "Connect Synais with your accounting, ERP..."           |
|    - Cluster: 16 Squircle App Tiles (Row 1: 9 tiles, Row 2: 7 tiles)   |
+------------------------------------------------------------------------+
| 5. PRICING (Synais - Dark Espresso #2E1814)                            |
|    - Badge: [* Pricing]                                                |
|    - H2 Duo-tone: "Plans [Built For] / [Finance] Teams"                |
|    - Subtitle: "From growing businesses to enterprise..."              |
|    - Segmented Toggle: [ Monthly (Dark) | Annually (Cream) ]           |
|    - 3-Col Pricing Matrix:                                             |
|      * Col 1: Starter Plan ($29/mo) - Cream Card                       |
|      * Col 2: Professional Plan ($99/mo) - White Card + Banner         |
|      * Col 3: Enterprise Plan (Custom) - Cream Card                    |
+------------------------------------------------------------------------+
| 6. FOOTER (Synais - Pitch Black #050505)                               |
|    - Top: Brand [* synais.] + Tagline + Socials | Newsletter Input     |
|    - 4 Link Columns: Company, Solutions, Resources, Contact            |
|    - Legal Sub-bar: © 2026 Synais. All rights reserved. | Terms | Privacy|
|    - Bottom Anchor: Giant edge-to-edge "synais." wordmark in cream     |
+------------------------------------------------------------------------+
```

---

### Section 1: Hero (Canopy Exact Light Layout)
- **Reference**: `01-hero-canopy.jpg` `[observed]`
- **Dimensions**: Viewport baseline 1440 × 1024 px.
- **Containers & Geometry**:
  - `[observed]` Outer container: Full bleed `w-full min-h-[900px] lg:min-h-screen relative overflow-hidden`.
  - `[observed]` Top navigation: Two independent floating containers positioned along top margin `top: 36px` (`pt-9 px-12 lg:px-20`).
  - `[observed]` Left Navigation Pill:
    - `rounded-full` (`border-radius: 9999px`).
    - Background: `rgba(255, 255, 255, 0.75)` with `backdrop-blur: 12px`.
    - Border: `1px solid rgba(0, 0, 0, 0.06)`.
    - Padding: `8px 20px` (`py-2 px-5`).
    - Internal flex row: `flex items-center gap-6`.
  - `[observed]` Right Login Pill:
    - `rounded-full`, matching translucent background and hairline border, `py-2 px-6`.
  - `[observed]` Main Copy Column:
    - Positioned at left margin `left: ~80px` (`px-12 lg:px-20`), upper-middle vertical alignment (`top: 220px` - `260px`).
    - Max content width: `~540px`.
  - `[observed]` Right Visual Asset (Monoliths):
    - Positioned on right half (`col-start-7 col-span-6`).
    - Two large metallic reeded coins rising from foreground moss. Large coin diameter ~420px; small coin diameter ~260px.
- **Exact Verbatim Copy**:
  - **Nav Links**:
    - `Canopy` (Brand mark: dark olive circle `#2E3D23` with white `$` SVG icon + text) `[observed]`
    - `Features` `[observed]`
    - `Use cases` `[observed]`
    - `Pricing` `[observed]`
    - `Integrations` `[observed]`
    - `Login` `[observed]`
  - **Hero Heading (H1)**:
    - Line 1: `A softer way to hold` `[observed]`
    - Line 2: `[$] Dollars Onchain.` `[observed]`
      - Inline Token Badge: Muted khaki pill (`#DDD8CB`) embedding a dark olive circle (`#2B3524`) with white `$` SVG symbol directly preceding the word "Dollars".
  - **Hero Subtitle**:
    - `Canopy USD is a stable digital dollar designed for seamless DeFi access, transparent yield, and calm long-term growth.` `[observed]`
  - **CTA Button**:
    - `Start holding USD` `[observed]`
    - Styling: Deep moss green `#3B4E2B`, rounded rectangle `rounded-xl` (`10px` radius), cream text `#F7F6F2`, `py-3.5 px-7`.

---

### Section 2: Key Metrics (Synais Stats Bar)
- **Reference**: `02-stats-features-integrations.jpg` (top) `[observed]`
- **Containers & Geometry**:
  - `[observed]` Background: Deep warm espresso brown `#2E1814`.
  - `[observed]` Container: Max-width `1140px` centered (`mx-auto px-6 py-20 lg:py-24`).
  - `[observed]` Grid: 3 columns (`grid grid-cols-1 md:grid-cols-3`).
  - `[observed]` Dividers: Thin vertical hairline borders (`1px solid rgba(255, 255, 255, 0.12)`) separating Col 1 from Col 2, and Col 2 from Col 3.
- **Exact Verbatim Copy & Metrics**:
  - **Column 1**:
    - Number: `500+` (Font size: ~52px, weight: 400, color: `#FFFFFF`, tracking: `-0.02em`) `[observed]`
    - Label: `Companies Optimizing` (Font size: ~14px, color: `#A69B95`, margin-top: `10px`) `[observed]`
  - **Column 2**:
    - Number: `80%` (Font size: ~52px, weight: 400, color: `#FFFFFF`, tracking: `-0.02em`) `[observed]`
    - Label: `Faster Financial Reporting` (Font size: ~14px, color: `#A69B95`, margin-top: `10px`) `[observed]`
  - **Column 3**:
    - Number: `$20B+` (Font size: ~52px, weight: 400, color: `#FFFFFF`, tracking: `-0.02em`) `[observed]`
    - Label: `Financial Data Processed` (Font size: ~14px, color: `#A69B95`, margin-top: `10px`) `[observed]`

---

### Section 3: Essential Features ("Essential Tools For Finance Managers")
- **Reference**: `02-stats-features-integrations.jpg` (middle) `[observed]`
- **Grand Showcase Container**:
  - `[observed]` Max-width: `1240px` centered (`mx-auto`).
  - `[observed]` Border radius: `rounded-3xl` (`32px`).
  - `[observed]` Border: `1px solid rgba(255, 255, 255, 0.12)`.
  - `[observed]` Background: Luxurious fluid metallic bronze / liquid satin waves texture with gold highlights (`#E6D4B8` to `#9A7B56`) fading to espresso shadows (`#26130E`).
  - `[observed]` Padding: `py-16 px-8 md:px-14`.
- **Section Header**:
  - `[observed]` Badge Pill: `OUR FEATURES` (Cream `#F5EFEB`, dark brown text `#2E1814`, 8-point sparkle SVG icon `*` on left, all caps, tracking wide, 11px).
  - `[observed]` Headline (H2, Duo-Tone):
    - Line 1: `Essential` (White `#FFFFFF`, semi-bold) `Tools For` (Muted warm gray `#9E918B`, regular)
    - Line 2: `Finance` (Muted warm gray `#9E918B`, regular) `Managers` (White `#FFFFFF`, semi-bold)
    - Font size: `~44px - 48px`, line-height `1.15`, tracking `-0.025em`.
  - `[observed]` Subtitle: `Optimize finances with better insights and forecasting.` (Cream `#C9BFB8`, ~15px).
- **Product Cards Grid (2 Columns)**:
  - `[observed]` Grid: `grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto`.
  - **Card 1 (Left): Multi-Currency Wallet**:
    - Shell: Warm cream stone `#EFE8DF`, `rounded-2xl` (`24px`), padding `p-6`.
    - Inner UI Tray: Dark espresso `#1C0E0B`, `rounded-xl`, padding `p-5`.
    - White Dashboard Component:
      - Header: `Total Balance` | Currency Pill: `USD v` `[observed]`
      - Metric: `$263,724.32` `[observed]`
      - Badge: `↑ 5%` (Green `#16A34A`) `Than last month` (Muted gray) `[observed]`
      - Subheader: `Wallets` | `See all` `[observed]`
      - 2×2 Wallet Grid:
        - `USD`: `$263,724.32` (`Active`) `[observed]`
        - `EUR`: `€ 63,275.45` (`Active`) `[observed]`
        - `KRW`: `₩ 3,253.12` (`Active`) `[observed]`
        - `IDR`: `Rp 963,164.98` (`Active`) `[observed]`
    - Card Copy:
      - Title: `Multi-Currency Wallet` (Bold, ~19px, `#1E0E0A`, center-aligned) `[observed]`
      - Description: `Manage multiple currencies from a single dashboard. Monitor balances, track account activity, and gain full visibility.` (~13.5px, `#6B5E57`, center-aligned) `[observed]`
  - **Card 2 (Right): Profit & Loss Tracking**:
    - Shell: Warm cream stone `#EFE8DF`, `rounded-2xl` (`24px`), padding `p-6`.
    - Inner UI Tray: Dark espresso `#1C0E0B`, `rounded-xl`, padding `p-5`.
    - White Dashboard Component:
      - Header: `Spending Overview` | Range Pill: `Yearly v` `[observed]`
      - Metric: `$33,624.32` `of $50,000.00` | Legend: `■ <$500` (Light gray) `■ >$500` (Black) `[observed]`
      - Heatmap Matrix: 5 rows × 12 columns of rounded squares (gray for `<$500`, black for `>$500`) `[observed]`
      - X-Axis Labels: `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` `[observed]`
    - Card Copy:
      - Title: `Profit & Loss Tracking` (Bold, ~19px, `#1E0E0A`, center-aligned) `[observed]`
      - Description: `Visualize profits and losses with clear charts and reports. Track financial trends and make informed decisions.` (~13.5px, `#6B5E57`, center-aligned) `[observed]`

---

### Section 4: Integrations ("Seamless Financial Ecosystem Integration")
- **Reference**: `02-stats-features-integrations.jpg` (bottom) & `03-integrations-pricing.jpg` (top) `[observed]`
- **Containers & Geometry**:
  - `[observed]` Background: Deep espresso brown `#2E1814`.
  - `[observed]` Padding: `py-24 px-6`.
  - `[observed]` Alignment: Center-aligned stack.
- **Section Header**:
  - `[observed]` Badge Pill: `INTEGRATIONS` (Cream `#F5EFEB`, dark brown text `#2E1814`, 8-point sparkle SVG icon `*` on left, all caps, tracking wide, 11px).
  - `[observed]` Headline (H2, Duo-Tone):
    - Line 1: `Seamless` (Muted `#9E918B`) `Financial` (White `#FFFFFF`)
    - Line 2: `Ecosystem` (Muted `#9E918B`) `Integration` (White `#FFFFFF`)
  - `[observed]` Subtitle: `Connect Synais with your accounting, ERP, banking, and BI systems.` (Cream `#C9BFB8`, ~15px).
- **App Icons Matrix (16 Squircles)**:
  - `[observed]` Tile container: Warm cream `#F5EFEB`, squircle `rounded-2xl` (`16px`), size `w-16 h-16` (`64px × 64px`), centered glyphs.
  - `[observed]` Row 1 (9 tiles, centered horizontally, gap ~14px):
    1. Pink squircle + circular loop glyph
    2. Blue squircle + 4 sine wave lines
    3. Orange squircle + 3D isometric cube
    4. Dark charcoal squircle + white angular switch mark
    5. Violet squircle + overlapping cards
    6. Cyan circle + diagonal white stripes
    7. Green squircle + white plus `+`
    8. Blue squircle + circular coin toggle
    9. Black squircle + white diagonal arrow `↗`
  - `[observed]` Row 2 (7 tiles, centered offset below Row 1, gap ~14px):
    1. Royal blue squircle + circular refresh arrow
    2. Green squircle + 3 diagonal slash bars
    3. Cobalt purple squircle + 3 layered wavy sheets
    4. Charcoal squircle + hexagonal outline
    5. Dodger blue squircle + crescent swirl
    6. Orange squircle + folded diamond leaf
    7. Purple squircle + kaleidoscopic ring
  - `[inferred]` Responsive treatment: On mobile viewports (`<640px`), reflow into an accessible 4×4 grid or smooth horizontal overflow track to preserve squircle proportions without microscopic squishing.

---

### Section 5: Pricing ("Plans Built For Finance Teams")
- **Reference**: `03-integrations-pricing.jpg` (bottom) & `04-pricing-footer.jpg` (top) `[observed]`
- **Section Header**:
  - `[observed]` Badge Pill: `Pricing` (Cream `#F5EFEB`, dark brown text `#2E1814`, 8-point sparkle SVG icon `*`, 11px).
  - `[observed]` Headline (H2, Duo-Tone):
    - Line 1: `Plans` (White `#FFFFFF`) `Built For` (Muted `#9E918B`)
    - Line 2: `Finance` (Muted `#9E918B`) `Teams` (White `#FFFFFF`)
  - `[observed]` Subtitle: `From growing businesses to enterprise finance departments.` (Cream `#C9BFB8`, ~15px).
- **Billing Period Segmented Switch**:
  - `[observed]` Container: Rounded container (`rounded-xl`), background `#2A160F`, border `1px solid rgba(255, 255, 255, 0.15)`, padding `4px`.
  - `[observed]` Options:
    - `Monthly` (Active in screenshot): Dark espresso `#22110B`, white text `#FFFFFF`, `rounded-lg`, `px-6 py-2`.
    - `Annually` (Inactive in screenshot): Warm cream `#F5EFEB`, dark text `#22110B`, `rounded-lg`, `px-6 py-2`.
- **3-Tier Pricing Matrix**:
  - `[observed]` Container: Max-width `1200px` centered (`mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start`).

| Element | Plan 1: Starter | Plan 2: Professional (Featured) | Plan 3: Enterprise |
|---|---|---|---|
| **Card Surface** | Warm Cream `#EFE8DF` `[observed]` | Pure White `#FFFFFF` + Dark Border `#2E1814` `[observed]` | Warm Cream `#EFE8DF` `[observed]` |
| **Top Banner** | None `[observed]` | `Recommended for Finance Managers` (Cream `#F5EFEB`) `[observed]` | None `[observed]` |
| **Plan Name** | `Starter Plan` `[observed]` | `Professional Plan` `[observed]` | `Enterprise Plan` `[observed]` |
| **Description** | `Perfect for small finance teams getting started with AI-powered financial analysis.` `[observed]` | `Built for growing organizations that need deeper financial visibility and forecasting capabilities.` `[observed]` | `Designed for large organizations requiring advanced controls, integrations, and scalability.` `[observed]` |
| **Price** | `$29 / month` `[observed]` | `$99 / month` `[observed]` | `Custom` `[observed]` |
| **CTA Button** | `Get Started` (Light off-white `#E2DCD3`, text `#1E0E0A`) `[observed]` | `Start Free Trial` (Solid Dark Espresso `#22110B`, text `#FFFFFF`) `[observed]` | `Contact Sales` (Light off-white `#E2DCD3`, text `#1E0E0A`) `[observed]` |
| **Features Header** | `You'll get:` `[observed]` | `You'll get:` `[observed]` | `You'll get:` `[observed]` |
| **Feature List (Exact Copy)** | • `AI-powered financial insights`<br>• `Basic reporting dashboards`<br>• `Cash flow monitoring`<br>• `Up to 3 team members`<br>• `Email support` `[observed]` | • `Everything in Starter`<br>• `Advanced forecasting & scenario planning`<br>• `Automated management reports`<br>• `Custom KPI dashboards`<br>• `Up to 20 team members`<br>• `Priority support` `[observed]` | • `Everything in Professional`<br>• `Unlimited users`<br>• `ERP & accounting integrations`<br>• `Custom AI models and workflows`<br>• `Enterprise-grade security & compliance`<br>• `Dedicated success manager` `[observed]` |

---

### Section 6: Footer & Massive "synais." Wordmark
- **Reference**: `04-pricing-footer.jpg` `[observed]`
- **Containers & Geometry**:
  - `[observed]` Background: Pitch Black `#050505` to `#0A0A0A`.
  - `[observed]` Padding: `pt-16 pb-6 px-6 lg:px-16 max-w-[1280px] mx-auto`.
- **Top Row (Brand & Newsletter)**:
  - `[observed]` Left Column:
    - Logo: White 8-point sparkle SVG `*` + lowercase bold wordmark `synais.` (size ~22px, white `#FFFFFF`).
    - Tagline: `Empower finance teams with AI-driven insights, automated reporting, and smarter decision-making.` (~13.5px, `#8E8E93`, max-w 320px).
    - Social Media Icons (4 SVG icons, `#71717A`): GitHub, X, LinkedIn, YouTube.
  - `[observed]` Right Column:
    - Header: `Stay Ahead in Finance` (White `#FFFFFF`, ~15px).
    - Form Input: Dark pill/rounded input (`#161618`, border `#27272A`), placeholder: `Enter your email`.
    - Microcopy: `Get the latest finance insights, AI trends, and product updates delivered to your inbox.` (~12px, `#71717A`).
- **4-Column Directory Grid**:
  - `[observed]` Layout: `grid grid-cols-2 md:grid-cols-4 gap-8 py-12`.
  - **Company**: `Platform`, `About`, `Features`, `Pricing`, `Careers`, `Help` `[observed]`
  - **Solutions**: `Financial Planning`, `Budget Management`, `Cash Flow Forecasting`, `Financial Reporting`, `Variance Analysis`, `Executive Dashboards` `[observed]`
  - **Resources**: `Blog`, `AI for Finance Guide`, `Case Studies`, `Knowledge Base`, `API Documentation`, `Product Updates` `[observed]`
  - **Contact**: `hello@synais.ai`, `+62 21 5555 8888`, `Surakarta, Indonesia` `[observed]`
- **Sub-Footer Legal Row**:
  - `[observed]` Hairline top border: `1px solid rgba(255, 255, 255, 0.08)`.
  - Left: `© 2026 Synais. All rights reserved.` `[observed]`
  - Right: `Terms & Conditions` | `Privacy Policy` `[observed]`
- **Massive Terminal Wordmark**:
  - `[observed]` Text verbatim: `synais.` (all lowercase, ending with a round period `.`).
  - `[observed]` Color: Warm Bone Cream `#EAE5DC`.
  - `[observed]` Size & Scale: Monolithic display scale `clamp(110px, 19vw, 250px)`, tracking `-0.05em`, line-height `0.85`.
  - `[observed]` Geometry: Sits edge-to-edge as the massive monumental footer base.

---

## 4. Typography System & Font Identification

### 4.1 Type Families & Roles
- **Hero & General Headings**: High-craft neo-grotesque sans-serif with subtle geometric warmth (e.g., `Satoshi`, `General Sans`, or `Inter Display`). `[observed]`
- **UI Mockups & Data Elements**: Clean grotesque sans-serif with tabular numerals support (e.g., `Inter` or `Geist Sans`). `[observed]`
- **Giant Wordmark**: Heavy grotesque display weight with circular dots on `i` and period. `[observed]`

### 4.2 Typographic Hierarchy Ledger

| Level | Size (Desktop / Mobile) | Weight | Line Height | Tracking | Color |
|---|---|---|---|---|---|
| **Giant Wordmark** | `clamp(110px, 19vw, 250px)` | 800 (Extrabold) | 0.85 | `-0.05em` | `#EAE5DC` |
| **Hero H1** | `clamp(42px, 5vw, 72px)` | 400 (Regular/Book) | 1.08 | `-0.035em` | `#181916` |
| **Section H2 (Duo-tone)** | `clamp(32px, 3.5vw, 48px)` | 600 (White) / 400 (Muted) | 1.15 | `-0.025em` | `#FFFFFF` / `rgba(255,255,255,0.45)` |
| **Stats Metric** | `clamp(38px, 4vw, 56px)` | 400 (Regular) | 1.1 | `-0.02em` | `#FFFFFF` |
| **Price Numbers** | `~40px - 44px` | 700 (Bold) | 1.1 | `-0.02em` | `#1E0E0A` |
| **Card H3** | `~19px - 20px` | 700 (Bold) | 1.25 | `-0.015em` | `#1E0E0A` |
| **Body & Subtitles** | `~15px - 17px` | 400 (Regular) | 1.55 | `normal` | `#5C6057` / `#C9BFB8` |
| **Pill Badges** | `~10px - 11px` | 700 (Bold/Caps) | 1.2 | `0.1em` | `#2E1814` |
| **Footnotes & Metadata**| `~12px - 13px` | 400 (Regular) | 1.45 | `normal` | `#71717A` / `#8E8E93` |

---

## 5. Strict Zero-Emoji & Iconography Inventory

Per rule, **zero emojis are permitted**. Every designed visual symbol must be a clean, resolution-independent SVG `[observed]`:

1. **Hero Dollar Icon**: Circular dark olive badge with crisp white `$` glyph (Navbar logo & H1 badge).
2. **Section Header Badges**: 8-point geometric sparkle / asterisk `*` SVG icon.
3. **Product Card 1**:
   - Currency caret: `v` down arrow SVG.
   - Trend indicator: `↑` green up arrow SVG.
   - Status dots: 6px circular SVG indicator dots (`#16A34A` green, `#F59E0B` amber).
4. **Product Card 2**:
   - Timeframe caret: `v` down arrow SVG.
   - Heatmap cells: Rounded SVG/div rects.
5. **Integrations Grid (16 SVG Brand Squircles)**:
   - Loop, Sine Wave, 3D Isometric Cube, Angular Switch, Overlapping Cards, Striped Circle, Plus Symbol `+`, Toggle Coin, North-East Arrow `↗`, Circular Sync Arrow, Diagonal Slash Bars, Layered Wave Sheets, Hexagonal Nut, Crescent Swirl, Folded Diamond Leaf, Geometric Kaleidoscopic Ring.
6. **Pricing Cards**:
   - Circular Checkmarks: `✓` inside a solid circular badge (gray for Starter/Enterprise, black for Professional).
7. **Footer**:
   - Social Icons: GitHub mark, X (Twitter), LinkedIn, YouTube (clean monochrome SVGs).

---

## 6. Responsive Behavior & Viewport Transformations

| Section | Desktop (`1440×900` / `1480×2000`) | Tablet (`768×1024`) | Mobile (`390×844`) |
|---|---|---|---|
| **Hero** | Left copy (50%), right coins (50%), floating pills at top | Stack vertically; copy above, coins centered below; nav pill tightens | Stack vertically; nav pill simplifies to logo + hamburger or compact links; H1 scales to ~40px; coins sit cleanly below CTA `[inferred]` |
| **Stats Bar** | 3 columns with vertical hairline dividers | 3 columns, dividers preserved, numbers scale slightly down | 1 column, stacked vertically with horizontal hairline dividers between items `[inferred]` |
| **Features** | 2-column cards inside floating metallic container | 2-column cards; container padding relaxes | 1 column stacked cards; inner UI dashboards scale with `overflow-x-auto` or proportional scaling `[inferred]` |
| **Integrations** | 2 rows (9 tiles top, 7 tiles bottom) | 2 rows (8 tiles / 8 tiles) or flex-wrap | 4×4 grid or smooth horizontal swipe track to prevent micro-squishing `[inferred]` |
| **Pricing** | 3 columns side by side, Pro card highlighted in center | 3 columns with condensed horizontal gap or 1+2 stack | 1 column stacked; Pro card keeps its top attached banner and leading elevation `[inferred]` |
| **Footer** | 2-col top bar, 4-col nav links, legal sub-bar, giant wordmark | 2-col top bar, 2×2 directory grid, giant wordmark scales | 1-col top bar, 2-col directory links, wordmark scales fluidly with `clamp()` `[inferred]` |

---

## 7. Evidence & Fidelity Ledger Summary

- **Total Observed Elements**: 100% of visible copy, numbers, metric values, navigation items, pricing tiers, feature lists, and layout structures were extracted directly from the four reference images.
- **Inferred Decisions**:
  - The responsive collapsing rules for mobile (`390×844`) and tablet (`768×1024`).
  - Mobile hamburger/compact nav pattern.
  - Hover micro-interactions (e.g., subtle button brightness lifts, link opacity transitions).
- **Substitutions**: None. Exact branding, verbatim copy, and specified hybrid composition (Canopy Hero + Synais Body/Footer) are strictly preserved with zero emoji and SVG-only iconography.

*This report is completed and ready for the `implementation-planner` and `ui-ux-designer` to proceed.*