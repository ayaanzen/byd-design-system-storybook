import React from 'react';
import './NavModel4.css';

export interface NavModel4Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const NavModel4: React.FC<NavModel4Props> = ({
  title = 'Nav Model 4',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper navmodel4-wrapper" onClick={onClick} data-layer-name="NavModel4">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Navigation</span>
      </div>
      <p className="byd-component-desc">Interactive vehicle navigation tab card variant 4.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/NavModel4.png" 
          alt="Nav Model 4" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
