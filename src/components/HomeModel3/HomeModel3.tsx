import React from 'react';
import './HomeModel3.css';

export interface HomeModel3Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel3: React.FC<HomeModel3Props> = ({
  title = 'Home Model - SEALION 7',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel3-wrapper" onClick={onClick} data-layer-name="HomeModel3">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD SEALION 7 model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel3.png" 
          alt="Home Model - SEALION 7" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
