import React from 'react';
import './Features5.css';

export interface Features5Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Features5: React.FC<Features5Props> = ({
  title = 'Features 5 - Safety & Drivetrain',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper features5-wrapper" onClick={onClick} data-layer-name="Features5">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Feature Grids</span>
      </div>
      <p className="byd-component-desc">iTAC, DiPilot ADAS, chassis suspension, and structural safety feature breakdown.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Features5.png" 
          alt="Features 5 - Safety & Drivetrain" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
