import React from 'react';
import './Features2.css';

export interface Features2Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Features2: React.FC<Features2Props> = ({
  title = 'Features 2 - Interior Luxury',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper features2-wrapper" onClick={onClick} data-layer-name="Features2">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Feature Grids</span>
      </div>
      <p className="byd-component-desc">Interior showcase grid (seats, dashboard, console, ambient lighting, materials).</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Features2.png" 
          alt="Features 2 - Interior Luxury" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
