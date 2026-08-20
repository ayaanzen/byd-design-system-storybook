# 🏎️ BYD Design System & Storybook Showcase

> High-fidelity, interactive React + TypeScript Design System and Storybook showcase synchronized with Figma Design Tokens and preserved layer specifications.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Interactive Storybook (Localhost)
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to explore all interactive component stories and design token galleries.

### 3. Build Static Storybook (for Production / Vercel)
```bash
npm run build-storybook
```

---

## 🎨 Official BYD Brand Color System

| Token | CSS Variable | Hex | Description |
| :--- | :--- | :--- | :--- |
| **BYD Signature Red** | `--byd-brand-primary` | `#EC1C24` | Primary brand CTA, highlights, active states |
| **BYD Red Hover** | `--byd-brand-primary-hover` | `#C4151C` | Interactive hover state |
| **BYD Red Pressed** | `--byd-brand-primary-pressed` | `#8C0711` | Interactive pressed state |
| **BYD Carbon Black** | `--byd-brand-black` | `#000000` / `#0A0A0A` | Surface inverse, typography, hero backdrops |
| **BYD Pure White** | `--byd-brand-white` | `#FFFFFF` | Primary card surfaces, clean background |
| **BYD Neutrals** | `--uedp-neutral-50..950` | `#FAFAFA` ~ `#171717` | Dividers, subtle borders, muted text |

---

## 🧩 Component Inventory (30 Discovered Components)

All components are organized with exact preserved Figma layer names inside `src/components/`:

- **Component 1**: Car Model Tab Cards (6 variants: Frame 26 to Frame 31)
- **Component 2**: Vehicle Specification Metric Group Cards (Group 151 to 156)
- **Component 3 to 12**: Interactive Filter Pills, Feature Badges & Mode Toggles
- **Component 13**: High-impact Spec Detail Cards (5 variants)
- **Component 14**: Feature Breakdown Cards (5 variants)
- **Component 15**: Highlighted Technology Features Card (Blade Battery, CTB, 8-in-1 Powertrain)
- **Component 16**: Highlighted Features Card (15.6" Rotatable Screen, Dynaudio, W-HUD)
- **Component 17**: Vehicle Drivetrain Features Card (iTAC, Dual Motor AWD, FSD Suspension)
- **Component 18**: MacBook Pro 14" Responsive Showcase Hero Banners (3 variants)
- **Component 19 to 22**: Action & Checkbox Indicator Toggles
- **Component 23**: Vehicle Angle Preview Carousel Cards (Frame 28 to 32)
- **Component 24**: Interactive Exterior Paint Swatch Selectors (5 colors)
- **Component 25**: 360-degree Vehicle Visualizer (Emperor Red, Cosmos Black, Aurora White, Shark Gray)
- **Input field component**: Form Input with 6 validation states (Inactive, Active, Filled, Success, Failure, Disabled)
- **Button component**: High-energy CTA Buttons with 5 states (Default, Hover, Active, Focus, Disabled) + Fill & Outline
- **Frame 5474**: BYD SEAL DYNAMIC trim card (₹41,00,000)
- **Frame 5475**: BYD SEAL PREMIUM trim card (₹45,70,000)
- **Frame 5476**: BYD SEAL PERFORMANCE trim card (₹53,15,000)

---

## 📦 Single Barrel Export

```typescript
import {
  Component1,
  Component2,
  Component25,
  InputFieldComponent,
  ButtonComponent,
  Frame5474,
  Frame5475,
  Frame5476,
} from './src';
```

---

## 🚢 Vercel Deployment

Deploy directly using Vercel CLI or Git integration:
```bash
node scripts/deploy-vercel.js
```
The output directory is configured as `storybook-static` in `vercel.json`.

---

## 📊 Analytics Tracking

Google Analytics 4 is integrated inside `.storybook/preview-head.html` with route listeners tracking all story tab changes via `hashchange` and `popstate`.
