# HyperFlow Design System — NorthStar v2

A comprehensive design system extracted from the HyperFlow NorthStar v2 application. This document defines every visual token, component, motion pattern, and usage rule governing the product experience.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing Scale](#spacing-scale)
5. [Border Radius](#border-radius)
6. [Shadows](#shadows)
7. [Gradients](#gradients)
8. [Iconography](#iconography)
9. [Token Naming](#token-naming)
10. [Component Library](#component-library)
11. [Data Visualization](#data-visualization)
12. [Motion Design](#motion-design)
13. [Layout Patterns](#layout-patterns)
14. [Usage Rules](#usage-rules)
15. [Do's & Don'ts](#dos--donts)
16. [Accessibility](#accessibility)

---

## Design Principles

### 1. Flow, not friction
Activation should feel like the product naturally steering you toward mastery, not a separate onboarding layer bolted on top.

### 2. Reality over demo
Users practice with their real inbox data wherever possible. Synthetic examples are a last resort.

### 3. One journey across devices
Desktop and mobile share a single activation narrative. Progress syncs, sessions adapt, habits carry over.

### 4. AI as coach, not nag
Contextual, explainable suggestions that are easy to dismiss. The AI earns trust through transparency, not persistence.

### 5. Experimentation as a feature
Every activation module is built with A/B test hooks. What works for one cohort may not work for another.

---

## Color Palette

### Background Colors

| Token | Value       | Usage                |
|-------|-------------|----------------------|
| `bg`  | `#ffffff`   | Primary background   |
| `s1`  | `#fafafb`   | Surface 1 — subtle   |
| `s2`  | `#f4f4f6`   | Surface 2 — medium   |
| `s3`  | `#ededf0`   | Surface 3 — dark     |

### Text Colors

| Token | Value       | Usage                |
|-------|-------------|----------------------|
| `t1`  | `#1a1a1f`   | Primary text         |
| `t2`  | `#6b6b75`   | Secondary text       |
| `t3`  | `#9b9ba5`   | Tertiary text        |

### Border Colors

| Token | Value       | Usage                |
|-------|-------------|----------------------|
| `bd`  | `#dcdce0`   | Default border       |
| `bL`  | `#ededf0`   | Light border         |

### Accent Colors

| Token | Value                          | Usage                    |
|-------|--------------------------------|--------------------------|
| `ac`  | `#cbb7fb`                      | Accent primary (lavender)|
| `acB` | `rgba(203,183,251,0.06)`       | Accent background        |
| `acD` | `rgba(203,183,251,0.25)`       | Accent muted             |
| `tl`  | `#714cb6`                      | Theme primary (purple)   |
| `tlB` | `rgba(113,76,182,0.06)`        | Theme background         |
| `tlD` | `rgba(113,76,182,0.18)`        | Theme dark               |

### Semantic Colors

| Token | Value       | Usage                |
|-------|-------------|----------------------|
| `gn`  | `#4a9e6d`   | Success — green      |
| `am`  | `#c4952e`   | Warning — amber      |
| `rd`  | `#c45454`   | Critical — red       |
| `bl`  | `#5b7fc4`   | Info — blue          |

### Special Colors

| Token | Value       | Usage                |
|-------|-------------|----------------------|
| `hr`  | `#1b1938`   | Dark hero            |

---

## Typography

### Font Family

```
font-family: 'Outfit', system-ui, sans-serif
```

Loaded from Google Fonts with weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold).

Special weight: **460** used for calendar headers and subtle hierarchy.

### Type Scale

| Name        | Size | Weight | Usage                              |
|-------------|------|--------|------------------------------------|
| Headline    | 36px | 600    | Hero text, focus timer             |
| Page Title  | 26px | 700    | Top-level page headers             |
| Title XL    | 24px | 700    | Major section headers              |
| Title LG    | 20px | 600    | Screen titles                      |
| Title MD    | 18px | 600    | Section headers                    |
| Title SM    | 16px | 600    | Sub-section headers                |
| Body LG     | 15px | 500    | Large body text                    |
| Body        | 14px | 500    | Default body text                  |
| Body SM     | 13px | 500    | Dense body text, buttons           |
| Caption     | 12px | 500    | Captions, helper text              |
| Small       | 11px | 500    | Tabs, small buttons, secondary     |
| Micro       | 10px | 600    | Labels, badges, KPI headers        |

### Letter Spacing

| Context            | Value     |
|--------------------|-----------|
| Default            | `normal`  |
| Badges             | `0.3px`   |
| Uppercase headers  | `0.06em`  |
| Hero text          | `-0.03em` |

---

## Spacing Scale

### Base Spacing Tokens

| Value  | Common Usage                        |
|--------|-------------------------------------|
| `2px`  | Minimal gaps (tab items)            |
| `3px`  | Extra small gaps                    |
| `4px`  | Very small (button groups, badge)   |
| `6px`  | Medium-small                        |
| `8px`  | Medium (card internals)             |
| `10px` | Medium-large (KPI grid)             |
| `12px` | Large (main sections)               |
| `14px` | Card default vertical               |
| `16px` | Section padding, extra large gaps   |
| `20px` | Large card padding                  |
| `24px` | Major section spacing               |
| `28px` | Page header vertical                |
| `32px` | Large section dividers              |
| `40px` | Hero section spacing                |
| `48px` | Page horizontal padding             |

### Padding Patterns

```
Badge:         2px 8px
Small Button:  3px 10px
Tab Button:    5px 14px
Button:        7px 16px
KPI Box:       10px 14px
Card Compact:  12px 16px
Card Default:  14px 16px
Section:       16px 20px
Large Card:    20px 24px
Page Header:   28px 48px
```

---

## Border Radius

HyperFlow uses a **progressive radius system** — smaller values for interactive elements, larger for containers:

| Value  | Usage                         |
|--------|-------------------------------|
| `2px`  | Subtle rounding               |
| `3px`  | Minimal (scrollbar thumb)     |
| `4px`  | Badges                        |
| `6px`  | Buttons, tabs                 |
| `8px`  | KPI boxes, medium elements    |
| `10px` | Cards                         |
| `12px` | Large cards                   |
| `16px` | Containers, modals            |
| `20px` | Pill shapes                   |
| `22px` | Pill tab containers           |
| `50%`  | Circles (avatars)             |

---

## Shadows

### Elevation Levels

| Name        | Value                                                                     | Usage                    |
|-------------|---------------------------------------------------------------------------|--------------------------|
| Subtle      | `0 1px 4px rgba(113,76,182,.12)`                                          | Active tabs, buttons     |
| Medium      | `0 4px 12px rgba(0,0,0,.08)`                                             | Elevated cards           |
| Large       | `0 12px 40px rgba(0,0,0,.3)`                                             | Modals, popovers         |
| XL          | `0 20px 60px rgba(0,0,0,.3)`                                             | Welcome overlay          |
| Glow Base   | `0 0 6px rgba(203,183,251,.3), 0 0 16px rgba(113,76,182,.1)`             | Accent glow idle         |
| Glow Active | `0 0 14px rgba(203,183,251,.6), 0 0 32px rgba(113,76,182,.2)`            | Accent glow hover/active |

---

## Gradients

### Primary Gradient (GRAD)

```css
background: linear-gradient(135deg,
  #e4ddf4 0%,
  #e8e4f8 25%,
  #e6eafc 50%,
  #dce6fa 75%,
  #d4e2f6 100%
);
```

**Usage:** Page backgrounds (Process, Overview), focus mode, accent card surfaces.

---

## Iconography

HyperFlow uses Unicode symbols instead of an icon library for maximum performance and zero dependencies.

### Navigation Icons

| Symbol | Unicode  | Section          | Screens |
|--------|----------|------------------|---------|
| ◷      | U+25F7   | Command Center   | 2       |
| ✉      | U+2709   | Mail             | 2       |
| ≡      | U+2261   | Workflows        | 3       |
| ◆      | U+25C6   | Activation       | 2       |
| ▥      | U+25A5   | Analytics        | 2       |
| ⊞      | U+229E   | Team             | 2       |
| ⚙      | U+2699   | Settings         | 2       |

### Status Indicators

| State               | Visual                      | Usage                           |
|----------------------|-----------------------------|---------------------------------|
| Active / Live        | Filled green circle         | Success badge, live systems     |
| Attention / Warning  | Filled amber circle         | Items needing prep or review    |
| Critical / Urgent    | Filled red circle           | Overdue, deal-breaking issues   |
| Inactive / Muted     | Filled gray circle          | Neutral, disabled states        |
| Syncing              | Pulsing lavender dot (`tw`) | Background sync in progress     |

### Priority & Unread Markers

- **Unread dot:** 6px circle, `C.ac` lavender, placed right-aligned in inbox rows
- **Priority PREP badge:** 10px uppercase, amber background at 15% opacity
- **LIVE badge:** Success-type Badge component

---

## Token Naming

Understanding the shorthand naming convention used throughout the codebase.

### Color Tokens

| Token           | Expansion              | Description                        |
|-----------------|------------------------|------------------------------------|
| `C.bg`          | Background             | Primary page background            |
| `C.s1 / s2 / s3` | Surface 1-3          | Progressively darker surface layers |
| `C.bd / bL`     | Border / Border Light  | Default and light border variants  |
| `C.t1 / t2 / t3` | Text 1-3             | Primary, secondary, tertiary text  |
| `C.ac`          | Accent                 | Primary accent (lavender)          |
| `C.acB / acD`   | Accent Bg / Dark       | Accent at 6% and 25% opacity      |
| `C.tl`          | Theme Lead             | Primary interactive color (purple) |
| `C.tlB / tlD`   | Theme Bg / Dark        | Theme at 6% and 18% opacity       |
| `C.gn / am / rd / bl` | Green / Amber / Red / Blue | Semantic status colors    |
| `C.hr`          | Hero                   | Dark hero background               |

### System Variables

| Variable | Description                                    |
|----------|------------------------------------------------|
| `FT`     | Font family (`'Outfit', system-ui, sans-serif`) |
| `GRAD`   | Primary gradient (lavender-to-blue, 135deg)    |
| `CSS`    | Global stylesheet (animations, resets, scrollbar) |
| `NAV`    | Navigation structure (7 sections, 15 screens)  |
| `SL`     | Screen labels map                              |
| `SD`     | Screen descriptions map                        |

### Naming Conventions

```
Backgrounds:  bg, s1, s2, s3  (bg = lightest, s3 = darkest)
Text:         t1, t2, t3       (t1 = highest contrast, t3 = lowest)
Borders:      bd (default), bL (light)
Accent:       ac (base), acB (background/6%), acD (dark/25%)
Theme:        tl (base), tlB (background/6%), tlD (dark/18%)
Semantic:     gn (green), am (amber), rd (red), bl (blue)
Special:      hr (hero dark)

Opacity suffixes: +'15' = 15% overlay, +'08' = 8% tint
```

---

## Component Library

### Button (`Btn`)

Interactive button with three variants and a size modifier.

**Props:**
| Prop      | Type     | Default | Description                          |
|-----------|----------|---------|--------------------------------------|
| `primary` | boolean  | false   | Fills with accent background         |
| `active`  | boolean  | false   | Outlined accent border, bold text    |
| `sm`      | boolean  | false   | Smaller padding and font size        |
| `onClick` | function | —       | Click handler                        |
| `style`   | object   | —       | Override styles                       |

**Variants:**

- **Default:** White background, gray border, normal weight
- **Primary:** Lavender background (`#ede8f5`), purple text, no border
- **Active:** White background, purple border, bold text

**States:**
- Hover: lighten background, shift border color
- Loading: opacity 0.6, spinner icon, pointer-events none
- Disabled: opacity 0.4, pointer-events none

**Specs:**
```
fontSize: 13px (default) / 11px (sm)
fontWeight: 600 (active/primary) / 500 (default)
padding: 7px 16px (default) / 3px 10px (sm)
borderRadius: 6px
```

---

### Badge

Status indicator with six semantic color variants.

**Props:**
| Prop     | Type   | Description                                  |
|----------|--------|----------------------------------------------|
| `type`   | string | `critical`, `warning`, `success`, `info`, `neutral`, `cyan` |

**Color Mapping:**
| Type     | Color   | Hex       |
|----------|---------|-----------|
| critical | Red     | `#c45454` |
| warning  | Amber   | `#c4952e` |
| success  | Green   | `#4a9e6d` |
| info     | Blue    | `#5b7fc4` |
| neutral  | Gray    | `#9b9ba5` |
| cyan     | Purple  | `#714cb6` |

**Specs:**
```
fontSize: 10px
fontWeight: 600
padding: 2px 8px
borderRadius: 4px
textTransform: uppercase
letterSpacing: 0.3px
background: color + 15% opacity
```

---

### Card

Container component for grouping related content.

**Props:**
| Prop      | Type     | Default      | Description                        |
|-----------|----------|--------------|------------------------------------|
| `p`       | string   | `14px 16px`  | Custom padding                     |
| `bc`      | string   | `C.bd`       | Border color                       |
| `mb`      | number   | `0`          | Margin bottom                      |
| `anim`    | boolean  | false        | Fade-up entrance animation         |
| `onClick` | function | —            | Makes card clickable (pointer)     |
| `style`   | object   | —            | Override styles                    |

**Variants:**
- Default: white background, gray border
- Accent border: using `bc` prop with `C.acD`
- Animated: fade-up on mount via `.fu` class
- Clickable: pointer cursor, left-accent border
- Gradient: background override with `GRAD`

**Specs:**
```
borderRadius: 10px
border: 1px solid
background: #ffffff
```

---

### KPI

Metric display for dashboards.

**Props:**
| Prop    | Type   | Description                  |
|---------|--------|------------------------------|
| `label` | string | Uppercase header label       |
| `value` | string | Large metric value           |
| `sub`   | string | Optional subtext below value |

**Specs:**
```
Container: padding 10px 14px, background C.s1, borderRadius 8px
Label: 10px, weight 600, uppercase, letterSpacing 0.06em
Value: 14px, weight 600, lineHeight 1
Sub: 10px, color C.t3
```

---

### Avatar (`Av`)

Initial-based circular avatar with deterministic color from name.

**Props:**
| Prop   | Type   | Default | Description                     |
|--------|--------|---------|---------------------------------|
| `name` | string | —       | Full name (extracts initials)   |
| `size` | number | 24      | Width/height in px              |

**Color Mapping (first initial → HSL hue):**
```
S → 270  |  M → 200  |  L → 30  |  J → 150
A → 340  |  P → 180  |  D → 220  |  * → 260
```

**Specs:**
```
borderRadius: 50%
background: hsl(hue, 25%, 88%)
color: hsl(hue, 30%, 40%)
fontSize: size × 0.36
fontWeight: 600
```

---

### Sliding Tabs

Animated tab selector with pill-style active state.

**Props:**
| Prop       | Type     | Description                    |
|------------|----------|--------------------------------|
| `items`    | string[] | Tab labels                     |
| `active`   | string   | Currently active tab           |
| `onSelect` | function | Callback when tab is clicked   |
| `label`    | string   | Optional label above tabs      |
| `mb`       | number   | Margin bottom                  |

**Specs:**
```
Container:
  display: inline-flex
  borderRadius: 22px
  background: rgba(255,255,255,0.3)
  border: 1px solid #ccc

Active Tab:
  background: white
  color: #714cb6
  fontWeight: 700
  boxShadow: 0 1px 4px rgba(113,76,182,.12)

Inactive Tab:
  background: transparent
  color: #999
  fontWeight: 500

Transition: all .3s cubic-bezier(.4,0,.2,1)
```

---

### Input

Text input following the design system tokens.

**States:**
- **Default:** border `C.bd`, white background
- **Focused:** border `C.tl`, box-shadow `0 0 0 3px C.tlD`
- **Disabled:** background `C.s2`, color `C.t3`, cursor not-allowed
- **Error:** border `C.rd`, box-shadow `0 0 0 3px C.rd + 18`

**Specs:**
```
padding: 7px 12px
fontSize: 13px
borderRadius: 6px
fontFamily: 'Outfit', system-ui, sans-serif
```

---

### Toggle

Binary switch for settings and preferences.

**Specs:**
```
Track: 40×22px, borderRadius 11px
Thumb: 18×18px, borderRadius 50%
Transition: left .2s cubic-bezier(.4,0,.2,1)
On: background C.tl, thumb left 20px
Off: background C.bd, thumb left 2px
```

---

### Checkbox

Multi-select checkbox component.

**Specs:**
```
Box: 18×18px, borderRadius 4px
Checked: background C.tl, border C.tl, white checkmark
Unchecked: background white, border C.bd
Transition: all .15s ease
```

---

### Modal

Overlay dialog for focused interactions.

**Backdrop Variants:**
```
Light:  rgba(0,0,0,.5)
Medium: rgba(0,0,0,.6)
Heavy:  rgba(0,0,0,.75) (tour overlay)
```

**Dialog Specs:**
```
borderRadius: 16px
padding: 28px 32px (standard) / 36px 40px (welcome)
boxShadow: 0 20px 60px rgba(0,0,0,.3)
maxWidth: 400-420px
```

---

### Progress Bar

Animated progress indicator for completion tracking.

**Specs:**
```
Track: height 6px, background C.s2, borderRadius 3px
Fill: borderRadius 3px, transition width .15s ease
Colors: C.tl (default), C.gn (success), C.am (warning), C.rd (critical)
```

---

### Tooltip

Contextual information on hover.

**Specs:**
```
background: C.hr (#1b1938)
color: white
fontSize: 11px
borderRadius: 6px
padding: 6px 12px
Arrow: 4px CSS triangle
```

---

### Logo

SVG brand mark with three curved paths.

**Specs:**
```
Default size: 20px
Colors: C.tl (primary paths), C.ac (accent path + dots)
Elements: 3 curved paths + 2 endpoint circles
```

---

## Data Visualization

Chart patterns and data display components used across Analytics, Team, and KPI screens.

### Horizontal Bar Chart

Used for team adoption rates, feature adoption, and any percentage-based metric.

```
Structure:  Avatar + Label + Bar Track + Percentage
Bar Track:  height 6-8px, background C.s2, borderRadius 3-4px
Bar Fill:   semantic color by threshold, borderRadius matching track
Transition: width .8s cubic-bezier(.4,0,.2,1)
```

### Color Thresholds

| Range    | Color  | Meaning                  |
|----------|--------|--------------------------|
| 90-100%  | `C.gn` | Success — on track       |
| 75-89%   | `C.tl` | Good — theme accent      |
| 60-74%   | `C.am` | Warning — needs attention |
| 0-59%    | `C.rd` | Critical — intervention  |

### KPI Trends

KPI components support trend indicators in the `sub` text:

```
▲ prefix: positive trend (green context)
▼ prefix: negative trend (red context)
Steady:   neutral phrasing
```

### Avatar + Bar Combo

Team adoption views pair an Avatar component with a horizontal bar:

```
┌──────────────────────────────────────────┐
│ [AV] Name    ████████████░░░░░░░  85%    │
│ [AV] Name    ██████░░░░░░░░░░░░░  60%    │
└──────────────────────────────────────────┘
```

---

## Motion Design

### CSS Transitions

| Name           | Value                                        | Usage                          |
|----------------|----------------------------------------------|--------------------------------|
| Standard UI    | `all .3s cubic-bezier(.4,0,.2,1)`            | Tabs, hover states             |
| Quick          | `all .15s ease`                               | Checkboxes, small toggles     |
| Position       | `left 0.2s ease`                              | Toggle thumb, sliding          |
| Sizing         | `width .8s cubic-bezier(.4,0,.2,1)`          | Progress bars, expanding       |
| Transform      | `transform .8s cubic-bezier(.4,0,.2,1)`      | Card flips, 3D transforms     |
| Fade Delayed   | `opacity 0.3s ease 0.2s`                     | Staggered fade-ins             |

### Keyframe Animations

| Name      | Duration | Timing              | Description                    |
|-----------|----------|----------------------|--------------------------------|
| `fu`      | 0.4s     | ease-out             | Fade up entrance (12px)        |
| `tw`      | 2s       | ease-in-out infinite | Opacity pulse (0.15 ↔ 0.8)    |
| `mg`      | 2s       | ease-in-out infinite | Purple glow box-shadow         |
| `fl`      | 2s       | ease-in-out infinite | Vertical float (-5px)          |
| `dc`      | 6s       | linear infinite      | Horizontal ticker scroll       |
| `tilt`    | 6s       | ease-in-out infinite | 3D Y-axis rotation (±8°)      |
| `wave`    | 14s      | ease infinite        | Gradient background animation  |
| `pcGlow`  | 4s       | ease-in-out infinite | Card glow pulse                |
| `cf`      | varies   | —                    | Confetti fall with rotation    |
| `lava`    | varies   | —                    | Background position animation  |
| `d1`      | 17-28s   | ease-in-out infinite | Floating decorative card 1     |
| `d2`      | 17-28s   | ease-in-out infinite | Floating decorative card 2     |
| `d3`      | 17-28s   | ease-in-out infinite | Floating decorative card 3     |

### Entrance Animation Pattern

```css
@keyframes fu {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fu { animation: fu .4s ease-out both; }
```

**Staggering:** Add `animationDelay` per item (100ms increments).

---

## Layout Patterns

### Sidebar + Content + Panel

```
┌──────────┬───────────────────────┬──────────┐
│ Sidebar  │      Content          │  Panel   │
│  200px   │      flex: 1          │  300px   │
│          │                       │          │
└──────────┴───────────────────────┴──────────┘
```

Used in: Command Center (Today), Workflow Detail.

### Max-Width Container

```
maxWidth: 1000px
margin: 0 auto
padding: 28px 48px
```

Used in: Process, Overview, Docs, Field Notes.

### Grid Layouts

| Columns           | Usage                     |
|-------------------|---------------------------|
| `1fr 1fr`         | Business outcomes, KPIs   |
| `1fr 1fr 1fr`     | Tech stack, shadows       |
| `repeat(7, 1fr)` | Information architecture  |

---

## Usage Rules

### One primary action per section
Avoid competing CTAs. Each card or section should have one clear primary button.

### Badges for status, not decoration
Every badge must convey actionable information. Do not use badges for aesthetic purposes.

### Cards for grouping related content
A card boundary means the content inside is semantically related. Do not split related info across cards.

### KPIs in rows of 3-4
Metric grids should be scannable at a glance. More than 4 KPIs in a row loses clarity.

### Accent color for interactive elements
`C.tl` is reserved for clickable or active elements. Do not use it for static decorative text.

### Progressive disclosure over information dumping
Use details/summary, expandable sections, and drill-down navigation. Show less, reveal on demand.

### Consistent animation timing
All entrance animations use `.4s ease-out`. All hover transitions use `.2-.3s`. Do not mix timing functions arbitrarily.

### Left-accent border for detail panels
When showing a detail/drill-down, use a `3px` left border in `C.tl` to indicate depth.

### Typography hierarchy must be visible
Every section needs exactly one h1-equivalent, supporting body text, and tertiary metadata.

### Copilot panel is always 300px
The AI copilot sidebar is fixed-width and right-aligned. Do not vary this across screens.

---

## Do's & Don'ts

Per-component guidance for consistent implementation across all screens.

### Button

**Do:**
- Use Primary for the single main action per section
- Use Active state for current selection in nav groups
- Use sm size for inline actions in cards and table rows
- Keep labels concise: 1-3 words

**Don't:**
- Don't place more than one primary-styled button per section
- Don't mix sm and regular buttons in the same row
- Don't use buttons inside clickable cards — the card itself is the target

### Badge

**Do:**
- Map types to semantics consistently: critical=urgent, warning=attention, success=live, info=metadata
- Place badges inline near the item they describe
- Keep text to 1-2 words, always uppercase

**Don't:**
- Don't stack more than 2 badges on a single item
- Don't use badges for actions — use buttons instead
- Don't create custom badge colors outside the 6 defined types

### Card

**Do:**
- Use anim prop for cards entering the viewport
- Use bc prop with C.acD for highlighted/accent cards
- Add left-accent border (3px C.tl) for detail/drill-down panels
- Combine with KPIs, badges, and timelines inside

**Don't:**
- Don't nest cards inside other cards
- Don't use shadows on cards in default state — shadows are for hover/active
- Don't split semantically related content across separate cards

### KPI

**Do:**
- Place KPIs in horizontal rows of 3-4
- Include trend indicators (sub text) when data supports it
- Use as entry points that lead to detail views

**Don't:**
- Don't show more than 4 KPIs in a single row
- Don't use KPIs for non-numeric information
- Don't omit the label — every metric needs context

### Color

**Do:**
- Use C.tl for all interactive/clickable elements
- Use semantic colors only for status: gn=success, am=warning, rd=critical, bl=info
- Use opacity suffixes (+'15', +'08') for tinted backgrounds

**Don't:**
- Don't use C.tl for static decorative text
- Don't use C.ac and C.tl interchangeably — ac is decorative, tl is interactive
- Don't introduce colors outside the defined palette

### Motion

**Do:**
- Use .fu (fade-up) for all card/section entrance animations
- Keep hover transitions at .2-.3s with cubic-bezier(.4,0,.2,1)
- Stagger entrance delays by 80-100ms per item

**Don't:**
- Don't animate exit transitions — content should leave immediately
- Don't mix timing functions arbitrarily across the same screen
- Don't use animations longer than 2s for interactive feedback

---

## Accessibility

### Color Contrast Ratios

| Combination    | Ratio   | WCAG Level |
|----------------|---------|------------|
| `t1` on `bg`   | 15.4:1  | AAA        |
| `t2` on `bg`   | 5.1:1   | AA         |
| `t3` on `bg`   | 3.2:1   | AA Large   |
| `tl` on `bg`   | 5.6:1   | AA         |
| `t1` on `s1`   | 14.8:1  | AAA        |

### Guidelines

- All interactive elements use native `<button>` for keyboard accessibility
- Minimum font size is 10px for labels and metadata
- Color is never the sole status indicator — badges include text labels
- Focus states are visible via ring/outline on interactive elements
- Keyboard shortcuts support rapid triage throughout the app

---

*Generated from HyperFlow NorthStar v2 — April 2026*
