const fs = require('fs');
const path = require('path');

const models = [
  { name: 'HomeModel1', modelName: 'ATTO 3', tagline: 'Dynamic EV SUV', price: '₹24.99 Lakh*' },
  { name: 'HomeModel2', modelName: 'SEAL', tagline: 'Performance EV Sedan', price: '₹41.00 Lakh*' },
  { name: 'HomeModel3', modelName: 'SEALION 7', tagline: 'Intelligent SUV Coupe', price: '₹48.50 Lakh*' },
  { name: 'HomeModel4', modelName: 'HAN', tagline: 'Luxury Executive Sedan', price: '₹55.00 Lakh*' },
  { name: 'HomeModel5', modelName: 'DOLPHIN', tagline: 'Urban Mobility Hatch', price: '₹19.99 Lakh*' },
  { name: 'HomeModel6', modelName: 'TANG', tagline: '7-Seat Luxury SUV', price: '₹62.00 Lakh*' },
];

const srcDir = path.join(process.cwd(), 'src', 'components');

models.forEach(({ name, modelName, tagline, price }) => {
  const compDir = path.join(srcDir, name);
  if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

  const tsx = `import React from 'react';
import './${name}.css';

export interface ${name}Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const ${name}: React.FC<${name}Props> = ({
  modelName = '${modelName}',
  tagline = '${tagline}',
  price = '${price}',
  image = '/figma-assets/${name}.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="${name}">
      <div className="byd-model-img-wrapper">
        <img src={image} alt={modelName} className="byd-model-car-img" />
      </div>
      <div className="byd-model-info">
        <span className="byd-model-red-badge">{modelName}</span>
        <p className="byd-model-tagline">{tagline}</p>
        <div className="byd-model-price">Starting from {price}</div>
      </div>
    </div>
  );
};
`;

  const css = `.byd-home-model-card {
  width: 100%;
  max-width: 380px;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  font-family: var(--byd-font-primary, 'Instrument Sans', sans-serif);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.25s ease;
  cursor: pointer;
  box-sizing: border-box;
}

.byd-home-model-card:hover {
  border-color: var(--byd-brand-primary, #D80B1A);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(216, 11, 26, 0.1);
}

.byd-model-img-wrapper {
  width: 100%;
  aspect-ratio: 1.8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.byd-model-car-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.byd-model-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.byd-model-red-badge {
  font-family: var(--byd-font-display, 'Krona One', sans-serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--byd-brand-primary, #D80B1A);
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.byd-model-tagline {
  font-size: 14px;
  color: #4B5563;
  margin: 0 0 10px 0;
  font-weight: 500;
}

.byd-model-price {
  font-size: 13px;
  color: #9CA3AF;
  font-weight: 400;
}
`;

  const story = `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'BYD Figma Components/${name} (${modelName})',
  component: ${name},
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {};
`;

  fs.writeFileSync(path.join(compDir, `${name}.tsx`), tsx, 'utf8');
  fs.writeFileSync(path.join(compDir, `${name}.css`), css, 'utf8');
  fs.writeFileSync(path.join(compDir, `${name}.stories.tsx`), story, 'utf8');
  console.log(`Generated HomeModel component for ${modelName}`);
});
