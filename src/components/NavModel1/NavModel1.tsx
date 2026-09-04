import React from 'react';
import './NavModel1.css';

export interface NavModel1Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const NavModel1: React.FC<NavModel1Props> = ({
  title = 'Nav Model 1',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper navmodel1-wrapper" onClick={onClick} data-layer-name="NavModel1">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Navigation</span>
      </div>
      <p className="byd-component-desc">Interactive vehicle navigation tab card variant 1.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/NavModel1.png" 
          alt="Nav Model 1" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
