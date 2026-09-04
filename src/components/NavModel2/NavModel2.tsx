import React from 'react';
import './NavModel2.css';

export interface NavModel2Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const NavModel2: React.FC<NavModel2Props> = ({
  title = 'Nav Model 2',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper navmodel2-wrapper" onClick={onClick} data-layer-name="NavModel2">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Navigation</span>
      </div>
      <p className="byd-component-desc">Interactive vehicle navigation tab card variant 2.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/NavModel2.png" 
          alt="Nav Model 2" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
