import React from 'react';
import './Features1.css';

export interface Features1Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Features1: React.FC<Features1Props> = ({
  title = 'Features 1 - Exterior Highlights',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper features1-wrapper" onClick={onClick} data-layer-name="Features1">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Feature Grids</span>
      </div>
      <p className="byd-component-desc">Grid of exterior design details (headlights, grille, door handles, wheels, mirrors).</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Features1.png" 
          alt="Features 1 - Exterior Highlights" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
