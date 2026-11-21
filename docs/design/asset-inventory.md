# Asset Inventory & Visual Asset Specification: `financewebsite`

**Agent Role:** `asset-researcher` (Specialist Forensics & Visual Assets)  
**Operating Mode:** STRICTLY READ-ONLY (Analysis & Specification)  
**Target Repository:** `C:\Users\Kirian\Desktop\LandingFactory\projects\financewebsite\`  
**Reference Files Examined:**
- [01-hero-canopy.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/01-hero-canopy.jpg) (1440 × 1024 px, AR: 1.406)
- [02-stats-features-integrations.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/02-stats-features-integrations.jpg) (1480 × 2000 px, AR: 0.740)
- [03-integrations-pricing.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/03-integrations-pricing.jpg) (1480 × 2000 px, AR: 0.740)
- [04-pricing-footer.jpg](file:///C:/Users/Kirian/Desktop/LandingFactory/projects/financewebsite/references/04-pricing-footer.jpg) (1480 × 2000 px, AR: 0.740)

---

## 1. Executive Summary & Asset Strategy

This landing page combines two distinct visual environments:
1. **Hero Environment (Organic Calm / Neumorphic Stone & Moss):** Light cream background (`#f8f7f2`), dark forest-olive accents (`#2b3f2c`), floating pill navigation, and high-fidelity studio macro photography depicting two brushed metallic/stone coins nestled in lush green moss.
2. **Platform & Ecosystem Environment (Dark Espresso & Warm Silk Sheen):** Deep dark chocolate/espresso brown canvas (`#1b0e0c` / `#160a08`), warm golden-bronze caustic silk gradients, interactive product dashboard cards ("Multi-Currency Wallet" and "Profit & Loss Tracking"), a 16-app integration grid in cream tiles, multi-tier pricing cards, and a minimalist dark footer anchored by giant cream watermark typography (`synais.`).

### Zero-Slop & Zero-Emoji Mandate
- **All iconography is strictly code-native SVG** (viewBox `0 0 24 24` or `0 0 48 48`). Zero emojis, zero Unicode symbol hacks, and zero raster icon cutouts are permitted.
- **UI Mockups are true HTML/CSS/SVG components**, never flattened screenshots.
- **Only one single raster production asset is required**: the Hero macro photography (`hero-coins-moss.webp`). All other visual elements (gradients, cards, tiles, badges, checkmarks, brandmarks, watermarks) are implemented via code (CSS + SVG).

---

## 2. Evidence Ledger & Authority Status

| Asset / Element | Status | Source Reference | Technical Decision | Validation Criteria |
|---|---|---|---|---|
| **Canopy Nav Logo** | `observed` | `01-hero-canopy.jpg` | Inline SVG circle with centered `$` | Crisp rendering at 24×24px |
| **Hero Title Pill Icon** | `observed` | `01-hero-canopy.jpg` | Overlapping dark olive SVG circle + pill span | Alignment with H1 baseline |
| **Hero Photography** | `observed` | `01-hero-canopy.jpg` | 1440×1024 raster production asset (WebP) | Seamless blend with `#f8f7f2` sky |
| **Features Silk Backdrop** | `observed` | `02-stats-features...` | Multi-stop CSS radial & linear gradients | Zero banding, smooth golden sheen |
| **Wallet UI Mockup** | `observed` | `02-stats-features...` | True HTML/CSS component with SVG trend pill | Live DOM elements, responsive flex |
| **P&L Spending Matrix** | `observed` | `02-stats-features...` | 12×4 CSS Grid with styled indicator pills | Tabular alignment Jan-Dec |
| **16 Integration Tiles** | `observed` | `02` & `03` references | 16 discrete SVG app icons in cream squircle tiles | Identical visual weights & radii |
| **Section Pill Badges** | `observed` | `02`, `03`, `04` references | SVG 8-point asterisk star + uppercase text | Exact padding and border opacity |
| **Social Media Icons** | `observed` | `04-pricing-footer.jpg` | GitHub, X, LinkedIn, YouTube SVGs | Official paths, `currentColor` hover |
| **Footer Watermark** | `observed` | `04-pricing-footer.jpg` | Massive SVG text or clamp() CSS typography | Bleeds cleanly past bottom fold |

---

## 3. Master Asset Catalog Table

| Asset ID | Asset Name | Section | Category | Classification | Rendered Dimensions | Source / Target Res | Aspect Ratio | Format |
|---|---|---|---|---|---|---|---|---|
| `AST-HERO-01` | Canopy Nav Logo Mark | Navbar | Logo | `USE_CODE_SVG_OR_CSS` | 24 × 24 px | Vector | 1:1 | Inline SVG |
| `AST-HERO-02` | Hero Inline Dollar Badge | Hero H1 | Badge | `USE_CODE_SVG_OR_CSS` | 44 × 44 px (pill: 210×52px) | Vector | ~4:1 (container) | HTML / SVG |
| `AST-HERO-03` | Coins in Moss Macro Photography | Hero Main | Photography | `GENERATE_RASTER` | 1440 × 820 px (responsive) | 2880 × 1640 px (@2x) | ~1.75:1 / 16:9 | WebP / PNG |
| `AST-HERO-04` | Hero CTA Pill Button | Hero Main | Control | `USE_CODE_SVG_OR_CSS` | 178 × 48 px | CSS | ~3.7:1 | CSS / HTML |
| `AST-STAT-01` | Stats Hairline Dividers | Stats Bar | Separator | `USE_CODE_SVG_OR_CSS` | 1 × 48 px | CSS | 1:48 | CSS border |
| `AST-FEAT-01` | Features Caustic Silk Glow | Features | Background | `USE_CODE_SVG_OR_CSS` | 1380 × 840 px | CSS Multi-gradient | ~1.64:1 | CSS gradient |
| `AST-FEAT-02` | "Our Features" Asterisk Star | Features | Badge Icon | `USE_CODE_SVG_OR_CSS` | 14 × 14 px | Vector | 1:1 | Inline SVG |
| `AST-FEAT-03` | Multi-Currency Wallet Mockup | Features Card 1 | UI Component | `USE_CODE_SVG_OR_CSS` | 540 × 440 px | DOM / SVG | ~1.23:1 | HTML / CSS / SVG |
| `AST-FEAT-04` | P&L Calendar Spending Heatmap | Features Card 2 | UI Component | `USE_CODE_SVG_OR_CSS` | 540 × 440 px | DOM Grid | ~1.23:1 | HTML / CSS Grid |
| `AST-INTG-00` | "Integrations" Asterisk Star | Integrations | Badge Icon | `USE_CODE_SVG_OR_CSS` | 14 × 14 px | Vector | 1:1 | Inline SVG |
| `AST-INTG-01` | Tile 1: Dual Teardrop / Infinity | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-02` | Tile 2: 4-Wave Sound / Sine | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-03` | Tile 3: Isometric 3D Cube | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-04` | Tile 4: Racetrack Angular Spiral | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-05` | Tile 5: Dual Overlapping Sheets | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-06` | Tile 6: Segmented Striped Sphere | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-07` | Tile 7: Medical Accounting Cross `+` | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-08` | Tile 8: Eclipse Circle Toggle | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-09` | Tile 9: Bracket Diagonal Arrow `↗` | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-10` | Tile 10: Clockwise Sync Loop | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-11` | Tile 11: Triple Diagonal Pills | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-12` | Tile 12: Triple Ribbon Waves | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-13` | Tile 13: Hex Nut Geometry | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-14` | Tile 14: Crescent Swirl Droplet | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-15` | Tile 15: Dog-Eared Tab Bookmark | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-INTG-16` | Tile 16: Rosette Geometric Labyrinth | Integrations | App Icon | `USE_CODE_SVG_OR_CSS` | 96 × 96 px (tile) | Vector (`0 0 24 24`) | 1:1 | SVG in Cream Tile |
| `AST-PRIC-01` | "Pricing" Asterisk Star | Pricing | Badge Icon | `USE_CODE_SVG_OR_CSS` | 14 × 14 px | Vector | 1:1 | Inline SVG |
| `AST-PRIC-02` | Billing Pill Toggle (Monthly/Annual) | Pricing | Control | `USE_CODE_SVG_OR_CSS` | 210 × 44 px | CSS / HTML | ~4.7:1 | CSS / HTML |
| `AST-PRIC-03` | Feature Checkmark (Light Theme) | Pricing | Status Icon | `USE_CODE_SVG_OR_CSS` | 20 × 20 px | Vector (`0 0 20 20`) | 1:1 | SVG Circle + Check |
| `AST-PRIC-04` | Feature Checkmark (Dark Theme) | Pricing | Status Icon | `USE_CODE_SVG_OR_CSS` | 20 × 20 px | Vector (`0 0 20 20`) | 1:1 | SVG Circle + Check |
| `AST-FOOT-01` | Synais Brand Logo Mark (Asterisk) | Footer | Logo | `USE_CODE_SVG_OR_CSS` | 22 × 22 px | Vector | 1:1 | Inline SVG |
| `AST-FOOT-02` | Social Icon: GitHub | Footer | Social Icon | `USE_CODE_SVG_OR_CSS` | 20 × 20 px | Vector (`0 0 24 24`) | 1:1 | Inline SVG |
| `AST-FOOT-03` | Social Icon: X (Twitter) | Footer | Social Icon | `USE_CODE_SVG_OR_CSS` | 18 × 18 px | Vector (`0 0 24 24`) | 1:1 | Inline SVG |
| `AST-FOOT-04` | Social Icon: LinkedIn | Footer | Social Icon | `USE_CODE_SVG_OR_CSS` | 18 × 18 px | Vector (`0 0 24 24`) | 1:1 | Inline SVG |
| `AST-FOOT-05` | Social Icon: YouTube | Footer | Social Icon | `USE_CODE_SVG_OR_CSS` | 20 × 16 px | Vector (`0 0 24 24`) | ~1.25:1 | Inline SVG |
| `AST-FOOT-06` | Synais Giant Bottom Watermark | Footer Bottom | Typography Mark | `USE_CODE_SVG_OR_CSS` | 1440 × 320 px | Scalable Text / SVG | ~4.5:1 | CSS / SVG Text |

---

## 4. Deep Section Breakdown & Specifications

### 4.1 Hero Section (`01-hero-canopy.jpg`)

#### `AST-HERO-01`: Canopy Logo Mark (Navbar)
- **Visual Description:** Solid dark forest-olive circle (`#2b3f2c`) with a crisp, centered white dollar sign (`$`). The dollar sign features vertical stroke serifs and clean geometric proportions.
- **Implementation:** Code-native inline SVG inside the floating pill navbar.
```html
<svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="#2b3f2c"/>
  <path d="M12 6v12M9.5 8.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### `AST-HERO-02`: Inline Title Dollar Badge ("Dollars")
- **Visual Description:** Integrated directly inside the hero H1 sentence:
  `A softer way to hold [ (S) Dollars ] Onchain.`
  The container is an elongated pill (`#eae6db` or `#e8e4d8`), containing:
  1. A left-aligned dark olive circular emblem (`#2b3f2c`, diameter ~44px) with white `$`.
  2. The text "Dollars" in matching display typography (~48px font-size, `#222222`).
- **Implementation:** Inline HTML/CSS flex pill:
```html
<span class="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#eae6db] rounded-full align-middle mx-2 border border-black/5">
  <span class="w-10 h-10 rounded-full bg-[#2b3f2c] text-white flex items-center justify-center font-bold text-xl shadow-inner">$</span>
  <span class="font-medium text-[#1e1e1e] pr-2">Dollars</span>
</span>
```

#### `AST-HERO-03`: Hero Macro Photography (Coins in Moss)
- **Role:** High-fidelity production photography asset.
- **Compositional Analysis:**
  - **Focal Objects:** Two heavy circular machined metal/stone coins with knurled/milled edges.
    - Right coin: Large primary disk (~420px diameter on 1440w canvas), angled ~15° right.
    - Left coin: Smaller secondary disk (~280px diameter), positioned in front and slightly left, angled ~10° left.
  - **Environment:** Clumps of organic, hyper-textured green moss with microscopic moisture droplets, golden-green tips, and rich forest-green shadows. The moss layer slopes upward from left to right, covering the bottom 35-45% of the viewport.
  - **Sky & Horizon:** Warm, diffuse off-white cream sky (`#f8f7f2` shifting subtly to `#f3efe6` near the horizon). High key, calm morning lighting from top-left, casting soft shadows across the coin faces.
  - **Negative Space:** The entire left 55% of the upper frame is clean off-white canvas, perfectly weighted to host the hero heading, paragraph, and CTA button.
- **Production Path:** `GENERATE_RASTER` (or high-resolution raster asset).
- **Target File:** `assets/hero-coins-moss.webp` (with fallback PNG).
- **Export Dimensions:** 2880 × 1640 px (@2x master), compressed WebP delivery size ~250–350 KB.

---

### 4.2 Features Section (`02-stats-features-integrations.jpg`)

#### `AST-FEAT-01`: Caustic Silk Gradient Backdrop
- **Visual Description:** Large container card (`rounded-3xl` / 32px radius) with an organic, flowing diagonal golden-bronze caustic sheen across a dark espresso foundation.
- **Color Stops:**
  - Base canvas: `#180d0b` (Deep Espresso)
  - Dark Bronze: `#3d2115`
  - Warm Caramel Sheen: `#7a4e2d`
  - High Caustic Highlight: `#b58153` (soft 45° diagonal beam)
- **Implementation:** Multi-layered pure CSS background gradient:
```css
background: 
  radial-gradient(ellipse 90% 60% at 90% 10%, rgba(181, 129, 83, 0.45) 0%, transparent 65%),
  radial-gradient(ellipse 70% 50% at 10% 90%, rgba(122, 78, 45, 0.35) 0%, transparent 70%),
  linear-gradient(135deg, #1b0e0c 0%, #2e1710 35%, #462619 55%, #24120d 80%, #150b09 100%);
```

#### `AST-FEAT-03`: "Multi-Currency Wallet" UI Mockup Card
- **Outer Frame:** Cream rounded card (`#f4f0e6`, radius 24px, padding 32px).
- **Inner Dashboard Canvas:** Dark graphite charcoal (`#191919`, radius 16px, padding 24px).
- **Components:**
  1. Header: "Total Balance" + bold "$263,724.32" + currency dropdown `(●) USD ▾`.
  2. Trend Pill: Green badge with SVG up-arrow (`↑ 5.1% Than last month`, text `#4ade80`).
  3. 2×2 Currency Grid Cards (`#262626` background, rounded-xl):
     - **USD:** Green dot (`#22c55e`), "USD", "$263,724.32", "Active"
     - **EUR:** Yellow dot (`#eab308`), "EUR", "€ 63,275.45", "Active"
     - **KRW:** Green dot (`#22c55e`), "KRW", "₩ 3,253.12", "Active"
     - **IDR:** Green dot (`#22c55e`), "IDR", "Rp 963,164.98", "Active"
- **Classification:** `USE_CODE_SVG_OR_CSS` (Production React/HTML component).

#### `AST-FEAT-04`: "Profit & Loss Tracking" UI Mockup Card
- **Outer Frame:** Cream rounded card (`#f4f0e6`, radius 24px, padding 32px).
- **Inner Dashboard Canvas:** Dark graphite charcoal (`#191919`, radius 16px, padding 24px).
- **Components:**
  1. Header: "Spending Overview" + dropdown `Yearly ▾`.
  2. Metric: Large "$33,624.32" + "of $50,000.00" label.
  3. Legend: Light gray square `<$500` (`#9ca3af`) | Dark charcoal square `>$500` (`#111827`).
  4. 12×4 Heatmap Grid: 12 vertical column flexboxes (Jan to Dec), each containing 4 rounded vertical capsule cells with variable fill intensities (`#eae6df`, `#1c1c1e`, `#71717a`, `rgba(255,255,255,0.1)`).
- **Classification:** `USE_CODE_SVG_OR_CSS` (Pure CSS Grid/Flexbox).

---

### 4.3 Integrations Section (`02` & `03` references)

The integrations section showcases **16 distinct square app tiles** arranged in a centered staggered layout:
- **Top Row:** 9 tiles
- **Bottom Row:** 7 tiles (offset / centered under the top row)
- **Tile Dimensions:** 96 × 96 px cream cards (`#f4f0e6`), 18px border radius, soft drop shadow (`0 4px 14px rgba(0,0,0,0.25)`).
- **Inner Icon Dimensions:** Squircle badge ~56 × 56 px with centered white SVG geometry (~28 × 28 px).

#### Detailed Specifications for All 16 App Tiles

```
Top Row (9 tiles):
[ 01: Pink Infinity ]  [ 02: Blue Waves ]  [ 03: Orange Cube ]  [ 04: Black Spiral ]
[ 05: Purple Cards ]   [ 06: Cyan Sphere ] [ 07: Green Cross ]  [ 08: Blue Toggle ]
[ 09: Black Arrow ↗ ]

Bottom Row (7 tiles):
[ 10: Blue Sync ]      [ 11: Green Slash ] [ 12: Purple Flags ] [ 13: Black HexNut ]
[ 14: Blue Swirl ]     [ 15: Orange Tab ]  [ 16: Violet Rosette ]
```

1. **Tile 01 (`AST-INTG-01`):** Magenta/pink squircle (`#db2777`). Icon: Two overlapping rounded teardrop/infinity loops.
2. **Tile 02 (`AST-INTG-02`):** Royal blue squircle (`#2563eb`). Icon: 4 horizontal wavy sinusoidal audio/water lines.
3. **Tile 03 (`AST-INTG-03`):** Tangerine orange squircle (`#ea580c`). Icon: Isometric 3D wireframe box/cube.
4. **Tile 04 (`AST-INTG-04`):** Dark charcoal/black squircle (`#18181b`). Icon: Angular continuous track/ribbon labyrinth loop.
5. **Tile 05 (`AST-INTG-05`):** Purple squircle (`#7c3aed`). Icon: Two overlapping stacked document cards with rounded corners.
6. **Tile 06 (`AST-INTG-06`):** Cerulean cyan squircle (`#0284c7`). Icon: Circular globe sphere with 5 diagonal sliced lines.
7. **Tile 07 (`AST-INTG-07`):** Emerald green squircle (`#16a34a`). Icon: Heavy equal-armed rounded medical/finance plus `+`.
8. **Tile 08 (`AST-INTG-08`):** Sky blue squircle (`#0ea5e9`). Icon: Elliptical orbit toggle with centered inner solid dot.
9. **Tile 09 (`AST-INTG-09`):** Pure black squircle (`#09090b`). Icon: Bold diagonal arrow pointing top-right inside bracket `↗`.
10. **Tile 10 (`AST-INTG-10`):** Cobalt blue squircle (`#3b82f6`). Icon: Circular clockwise sync/refresh arrow loop.
11. **Tile 11 (`AST-INTG-11`):** Forest green squircle (`#15803d`). Icon: 3 parallel diagonal rounded capsule slashes (`///`).
12. **Tile 12 (`AST-INTG-12`):** Indigo/purple squircle (`#6366f1`). Icon: 3 stacked horizontal wavy ribbon banners with notched ends.
13. **Tile 13 (`AST-INTG-13`):** Dark charcoal squircle (`#18181b`). Icon: Outer hexagon enclosing a hollow geometric inner hexagon nut.
14. **Tile 14 (`AST-INTG-14`):** Blue squircle (`#2563eb`). Icon: Swirling spiral crescent wave droplet.
15. **Tile 15 (`AST-INTG-15`):** Amber orange squircle (`#f97316`). Icon: Folded corner bookmark / dog-eared sheet.
16. **Tile 16 (`AST-INTG-16`):** Deep violet squircle (`#9333ea`). Icon: Intricate 8-spoke circular rosette geometric knot.

---

### 4.4 Pricing Section (`03` & `04` references)

#### `AST-PRIC-02`: Monthly / Annually Pill Toggle
- **Dimensions:** 210 × 44 px, border radius 9999px.
- **Container:** Light cream (`#f4f0e6`) with subtle inner padding (4px).
- **Active Tab ("Monthly"):** Dark brown background (`#23120f`), crisp white text (`#ffffff`), rounded-full.
- **Inactive Tab ("Annually"):** Transparent background, muted brown text (`#7a6e69`).

#### `AST-PRIC-03` & `AST-PRIC-04`: Feature Checkmark Icons
- **Light Theme Checkmark (Starter & Enterprise Cards):**
  - Light beige circle (`#ded9cc` or `#e2ddd0`), diameter 18px.
  - Checkmark icon: Dark charcoal stroke (`#222222`), stroke-width 2, round linecaps.
- **Dark Theme Checkmark (Professional Plan Featured Card):**
  - Solid dark brown/charcoal circle (`#2b1812`), diameter 18px.
  - Checkmark icon: Clean white stroke (`#ffffff`), stroke-width 2, round linecaps.

---

### 4.5 Footer Section (`04-pricing-footer.jpg`)

#### `AST-FOOT-01`: Synais Footer Brandmark
- **Visual Description:** Leading 8-point geometric star glyph nested inside an off-white rounded squircle, followed by lowercase bold geometric text `"synais."`.
- **Implementation:** Vector SVG / semantic typography.

#### `AST-FOOT-02` through `05`: Social Media Icon Suite
- **Mandate:** Zero emojis. Official brand vector SVGs only.
- **Styling:** Uniform 18–20px sizing, muted warm gray (`#71717a`), smooth hover transition to solid white (`#ffffff`).
- **Icons Included:**
  1. **GitHub:** Standard Octocat outline silhouette (viewBox `0 0 24 24`).
  2. **X:** Official stylized diagonal cross `𝕏` vector (viewBox `0 0 24 24`).
  3. **LinkedIn:** Rounded square with clean `in` glyph (viewBox `0 0 24 24`).
  4. **YouTube:** Rounded play button rectangle with centered equilateral triangle (viewBox `0 0 24 24`).

#### `AST-FOOT-06`: Giant Background Watermark (`synais.`)
- **Visual Description:** Monolithic geometric grotesque typography spelling `"synais."` in all-lowercase across the full 1440px width of the page footer.
- **Styling:**
  - Color: Off-white / pale cream (`#eae6df`).
  - Font Size: ~280px to 320px (`clamp(8rem, 18vw, 20rem)`).
  - Letter Spacing: Tight (`tracking-tighter`).
  - Positioning: Bleeds partially beneath the bottom edge of the viewport (`overflow: hidden; line-height: 0.8`).
- **Classification:** `USE_CODE_SVG_OR_CSS` (Semantic SVG `<text>` or pure CSS heading with `pointer-events-none`).

---

## 5. Production Prompt Specification for `AST-HERO-03` (Coins in Moss)

To generate the single raster asset with exact visual parity against `01-hero-canopy.jpg`:

```text
Prompt:
Macro studio photography of two thick, solid brushed metal and machined silver-bronze coins resting nestled half-submerged in a dense bed of vibrant, lush green organic moss. The right coin is larger, standing at a slight angle, with fine milled coin ridges on its outer rim. The left coin is smaller, nestled slightly forward in the moss. Natural morning studio key light from top-left creating soft specular reflections on the coin edges and deep organic shadows in the moss fronds. The upper portion of the frame is a completely clean, solid warm off-white cream sky background (#f8f7f2), transitioning seamlessly into negative space with no clouds, no sky clutter, and no artifacts. Shot on Hasselblad H6D-100c with 120mm macro lens, f/8, crisp textures, award-winning architectural and product photography aesthetic.

Negative Prompt:
text, letters, words, dollar signs, currency symbols, watermark, logo, border, frames, oversaturated, blurry, 3d render plastic look, cartoon, painting, leaves, trees, dirt, mud, insects.

Target Aspect Ratio: 16:9 (or 1.4:1)
Target Resolution: 2880 × 1640 px
Deliverable: assets/hero-coins-moss.webp
```

---

## 6. Verification & Implementation Hand-off Checklist

For the implementer (**Gemini 4 Hydrogen**):
- [ ] Save the generated raster hero asset to `assets/hero-coins-moss.webp`.
- [ ] Implement all 16 integration app tiles as inline SVGs or a shared `<IntegrationIcon id={n} />` component using the exact colors and geometric paths documented in Section 4.3.
- [ ] Construct the Features backdrop using pure multi-stop CSS radial/linear gradients (no background images).
- [ ] Build the "Multi-Currency Wallet" and "Profit & Loss Tracking" cards as real DOM/HTML/CSS components.
- [ ] Ensure the footer watermark `"synais."` is implemented using fluid CSS text sizing or SVG vector text with zero horizontal scroll overflow.
- [ ] Verify zero emoji presence across the entire codebase (`grep -r` check).
- [ ] Validate Playwright viewports at `1440×900`, `768×1024`, and `390×844`.