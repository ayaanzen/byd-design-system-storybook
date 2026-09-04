import React from 'react';
import './Features3.css';

export interface Features3Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Features3: React.FC<Features3Props> = ({
  title = 'Features 3 - Smart Cockpit',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper features3-wrapper" onClick={onClick} data-layer-name="Features3">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Feature Grids</span>
      </div>
      <p className="byd-component-desc">Smart tech feature grid (rotating screen, HUD, digital cluster, wireless charger).</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Features3.png" 
          alt="Features 3 - Smart Cockpit" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
