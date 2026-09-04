import React from 'react';
import './CarModelColors.css';

export interface CarModelColorsProps {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const CarModelColors: React.FC<CarModelColorsProps> = ({
  title = 'Car Model Color Visualizer',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper carmodelcolors-wrapper" onClick={onClick} data-layer-name="CarModelColors">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Visualizers</span>
      </div>
      <p className="byd-component-desc">Interactive 360 visualizer with paint swatches (Emperor Red, Cosmos Black, Aurora White, Shark Gray).</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/CarModelColors.png" 
          alt="Car Model Color Visualizer" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
