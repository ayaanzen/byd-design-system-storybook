import React from 'react';
import './NavModel3.css';

export interface NavModel3Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const NavModel3: React.FC<NavModel3Props> = ({
  title = 'Nav Model 3',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper navmodel3-wrapper" onClick={onClick} data-layer-name="NavModel3">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Navigation</span>
      </div>
      <p className="byd-component-desc">Interactive vehicle navigation tab card variant 3.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/NavModel3.png" 
          alt="Nav Model 3" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
