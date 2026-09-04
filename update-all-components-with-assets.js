import fs from 'fs';
import path from 'path';

const componentsMap = {
  'HeroCarousel': {
    title: 'Hero Carousel',
    category: 'Banners & Carousels',
    desc: 'High-impact Hero Banner & Carousel with BYD brand imagery, headline typography, and model badge overlays.',
  },
  'HomeModel1': { title: 'Home Model - ATTO 3', category: 'Vehicle Cards', desc: 'BYD ATTO 3 model showcase card with side profile asset and red typography badge.' },
  'HomeModel2': { title: 'Home Model - SEAL', category: 'Vehicle Cards', desc: 'BYD SEAL model showcase card with side profile asset and red typography badge.' },
  'HomeModel3': { title: 'Home Model - SEALION 7', category: 'Vehicle Cards', desc: 'BYD SEALION 7 model showcase card with side profile asset and red typography badge.' },
  'HomeModel4': { title: 'Home Model - HAN', category: 'Vehicle Cards', desc: 'BYD HAN model showcase card with side profile asset and red typography badge.' },
  'HomeModel5': { title: 'Home Model - DOLPHIN', category: 'Vehicle Cards', desc: 'BYD DOLPHIN model showcase card with side profile asset and red typography badge.' },
  'HomeModel6': { title: 'Home Model - TANG', category: 'Vehicle Cards', desc: 'BYD TANG model showcase card with side profile asset and red typography badge.' },
  'NavModel1': { title: 'Nav Model 1', category: 'Navigation', desc: 'Interactive vehicle navigation tab card variant 1.' },
  'NavModel2': { title: 'Nav Model 2', category: 'Navigation', desc: 'Interactive vehicle navigation tab card variant 2.' },
  'NavModel3': { title: 'Nav Model 3', category: 'Navigation', desc: 'Interactive vehicle navigation tab card variant 3.' },
  'NavModel4': { title: 'Nav Model 4', category: 'Navigation', desc: 'Interactive vehicle navigation tab card variant 4.' },
  'Features1': { title: 'Features 1 - Exterior Highlights', category: 'Feature Grids', desc: 'Grid of exterior design details (headlights, grille, door handles, wheels, mirrors).' },
  'Features2': { title: 'Features 2 - Interior Luxury', category: 'Feature Grids', desc: 'Interior showcase grid (seats, dashboard, console, ambient lighting, materials).' },
  'Features3': { title: 'Features 3 - Smart Cockpit', category: 'Feature Grids', desc: 'Smart tech feature grid (rotating screen, HUD, digital cluster, wireless charger).' },
  'Features4': { title: 'Features 4 - Charging & Battery', category: 'Feature Grids', desc: 'e-Platform 3.0 & Blade Battery charging port, V2L, thermal management feature grid.' },
  'Features5': { title: 'Features 5 - Safety & Drivetrain', category: 'Feature Grids', desc: 'iTAC, DiPilot ADAS, chassis suspension, and structural safety feature breakdown.' },
  'SlidingRoofAnimation': { title: 'Sliding Roof Animation', category: 'Interactive Modules', desc: 'Panoramic sunroof interactive toggle view module.' },
  'Video1': { title: 'Video Preview 1', category: 'Media Players', desc: 'BYD Seal dynamic video player preview module.' },
  'Video2': { title: 'Video Preview 2', category: 'Media Players', desc: 'BYD Atto 3 promo video player preview module.' },
  'Video3': { title: 'Video Preview 3', category: 'Media Players', desc: 'BYD Sealion 7 feature video player preview module.' },
  'Video4': { title: 'Video Preview 4', category: 'Media Players', desc: 'BYD Tang adventure video player preview module.' },
  'UltraCarousel': { title: 'Ultra Carousel', category: 'Banners & Carousels', desc: 'Specs & feature highlight multi-card carousel strip.' },
  'CarouselSlots1': { title: 'Carousel Slots 1', category: 'Banners & Carousels', desc: 'Vehicle angle thumbnail strip slot variant 1.' },
  'CarouselSlots2': { title: 'Carousel Slots 2', category: 'Banners & Carousels', desc: 'Vehicle angle thumbnail strip slot variant 2.' },
  'CarModelColors': { title: 'Car Model Color Visualizer', category: 'Visualizers', desc: 'Interactive 360 visualizer with paint swatches (Emperor Red, Cosmos Black, Aurora White, Shark Gray).' },
};

const srcDir = path.join(process.cwd(), 'src', 'components');

for (const [compName, info] of Object.entries(componentsMap)) {
  const compDir = path.join(srcDir, compName);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  const tsxPath = path.join(compDir, `${compName}.tsx`);
  const cssPath = path.join(compDir, `${compName}.css`);
  const storyPath = path.join(compDir, `${compName}.stories.tsx`);

  const tsxContent = `import React from 'react';
import './${compName}.css';

export interface ${compName}Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const ${compName}: React.FC<${compName}Props> = ({
  title = '${info.title}',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper ${compName.toLowerCase()}-wrapper" onClick={onClick} data-layer-name="${compName}">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">${info.category}</span>
      </div>
      <p className="byd-component-desc">${info.desc}</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/${compName}.png" 
          alt="${info.title}" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
`;

  const cssContent = `.byd-figma-component-wrapper {
  background: #0A0A0A;
  border: 1px solid #262626;
  border-radius: 16px;
  padding: 24px;
  color: #FFFFFF;
  font-family: var(--byd-font-primary, 'Instrument Sans', sans-serif);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s ease, transform 0.2s ease;
  max-width: 100%;
  box-sizing: border-box;
}

.byd-figma-component-wrapper:hover {
  border-color: var(--byd-brand-primary, #D80B1A);
}

.byd-component-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 16px;
}

.byd-component-title {
  font-family: var(--byd-font-display, 'Krona One', sans-serif);
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.02em;
}

.byd-component-badge {
  background: rgba(216, 11, 26, 0.15);
  color: var(--byd-brand-primary, #D80B1A);
  border: 1px solid rgba(216, 11, 26, 0.4);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.byd-component-desc {
  font-size: 14px;
  color: #A3A3A3;
  margin: 0 0 20px 0;
  line-height: 1.5;
}

.byd-component-asset-container {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #171717;
  border: 1px solid #333333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.byd-component-figma-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
`;

  const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${compName} } from './${compName}';

const meta: Meta<typeof ${compName}> = {
  title: 'BYD Figma Components/${compName}',
  component: ${compName},
};

export default meta;
type Story = StoryObj<typeof ${compName}>;

export const Default: Story = {
  args: {
    title: '${info.title}',
  },
};
`;

  fs.writeFileSync(tsxPath, tsxContent, 'utf8');
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  fs.writeFileSync(storyPath, storyContent, 'utf8');
  console.log(`Updated ${compName}`);
}

console.log('All components updated with Figma high-resolution renders!');
