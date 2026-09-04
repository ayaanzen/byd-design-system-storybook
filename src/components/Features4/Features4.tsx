import React from 'react';
import './Features4.css';

export interface Features4Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Features4: React.FC<Features4Props> = ({
  title = 'Features 4 - Charging & Battery',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper features4-wrapper" onClick={onClick} data-layer-name="Features4">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Feature Grids</span>
      </div>
      <p className="byd-component-desc">e-Platform 3.0 & Blade Battery charging port, V2L, thermal management feature grid.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Features4.png" 
          alt="Features 4 - Charging & Battery" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
