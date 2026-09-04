import React from 'react';
import './SlidingRoofAnimation.css';

export interface SlidingRoofAnimationProps {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const SlidingRoofAnimation: React.FC<SlidingRoofAnimationProps> = ({
  title = 'Sliding Roof Animation',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper slidingroofanimation-wrapper" onClick={onClick} data-layer-name="SlidingRoofAnimation">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Interactive Modules</span>
      </div>
      <p className="byd-component-desc">Panoramic sunroof interactive toggle view module.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/SlidingRoofAnimation.png" 
          alt="Sliding Roof Animation" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
