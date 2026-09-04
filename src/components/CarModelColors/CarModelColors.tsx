import React, { useState } from 'react';
import './CarModelColors.css';

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  border?: string;
  image: string;
}

export interface CarModelColorsProps {
  modelTitle?: string;
  colors?: ColorOption[];
  initialColorId?: string;
}

const defaultColors: ColorOption[] = [
  {
    id: 'atlantis-gray',
    name: 'ATLANTIS GRAY',
    hex: '#2D3B52',
    image: '/figma-assets/car-color-atlantis-gray.png',
  },
  {
    id: 'cosmos-black',
    name: 'COSMOS BLACK',
    hex: '#1B2026',
    image: '/figma-assets/car-color-cosmos-black.png',
  },
  {
    id: 'aurora-white',
    name: 'AURORA WHITE',
    hex: '#D8E0E8',
    border: '#B0BAC5',
    image: '/figma-assets/car-color-aurora-white.png',
  },
  {
    id: 'shark-gray',
    name: 'SHARK GRAY',
    hex: '#545A61',
    image: '/figma-assets/car-color-shark-gray.png',
  },
];

export const CarModelColors: React.FC<CarModelColorsProps> = ({
  modelTitle = 'BYD SEAL Color Visualizer',
  colors = defaultColors,
  initialColorId = 'atlantis-gray',
}) => {
  const [activeColor, setActiveColor] = useState<ColorOption>(
    colors.find((c) => c.id === initialColorId) || colors[0]
  );

  return (
    <div className="byd-car-colors-card" data-layer-name="Car model colors">
      {/* Main Car Color Display Area */}
      <div className="byd-car-colors-display">
        <img
          key={activeColor.id}
          src={activeColor.image}
          alt={activeColor.name}
          className="byd-car-colors-img"
        />
      </div>

      {/* Color Name Label */}
      <div className="byd-car-colors-label-box">
        <h4 className="byd-car-color-name">{activeColor.name}</h4>
      </div>

      {/* Swatch Selection Row */}
      <div className="byd-car-swatches-row">
        {colors.map((color) => (
          <button
            key={color.id}
            className={`byd-car-swatch-circle ${activeColor.id === color.id ? 'is-selected' : ''}`}
            style={{
              backgroundColor: color.hex,
              borderColor: color.border || 'transparent',
            }}
            onClick={() => setActiveColor(color)}
            title={color.name}
            aria-label={color.name}
          />
        ))}
      </div>
    </div>
  );
};
