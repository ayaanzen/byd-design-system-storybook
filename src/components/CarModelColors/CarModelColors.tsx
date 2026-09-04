import React, { useState } from 'react';
import './CarModelColors.css';

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  border?: string;
  image: string;
}

export interface CarModelColorsProps {
  modelTitle?: string;
  swatches?: ColorSwatch[];
}

const defaultSwatches: ColorSwatch[] = [
  {
    id: 'emperor-red',
    name: 'Emperor Red',
    hex: '#D80B1A',
    image: '/figma-assets/CarModelColors.png',
  },
  {
    id: 'cosmos-black',
    name: 'Cosmos Black',
    hex: '#0A0A0A',
    image: '/figma-assets/CarModelColors.png',
  },
  {
    id: 'aurora-white',
    name: 'Aurora White',
    hex: '#FFFFFF',
    border: '#E5E7EB',
    image: '/figma-assets/CarModelColors.png',
  },
  {
    id: 'shark-gray',
    name: 'Shark Gray',
    hex: '#6B7280',
    image: '/figma-assets/CarModelColors.png',
  },
];

export const CarModelColors: React.FC<CarModelColorsProps> = ({
  modelTitle = 'BYD SEAL Color Visualizer',
  swatches = defaultSwatches,
}) => {
  const [selectedColor, setSelectedColor] = useState(swatches[0]);

  return (
    <div className="byd-color-visualizer-card" data-layer-name="Car model colors">
      <div className="byd-visualizer-header">
        <h3 className="byd-visualizer-title">{modelTitle}</h3>
        <span className="byd-visualizer-active-name">{selectedColor.name}</span>
      </div>

      <div className="byd-visualizer-img-area">
        <img
          src={selectedColor.image}
          alt={selectedColor.name}
          className="byd-visualizer-car-img"
        />
        <div className="byd-visualizer-badge-360">360° VIEW</div>
      </div>

      <div className="byd-visualizer-swatches-row">
        <span className="byd-swatch-label">SELECT EXTERIOR COLOR:</span>
        <div className="byd-swatch-list">
          {swatches.map((color) => (
            <button
              key={color.id}
              className={`byd-swatch-btn ${selectedColor.id === color.id ? 'is-selected' : ''}`}
              style={{ backgroundColor: color.hex, borderColor: color.border || 'transparent' }}
              onClick={() => setSelectedColor(color)}
              title={color.name}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
