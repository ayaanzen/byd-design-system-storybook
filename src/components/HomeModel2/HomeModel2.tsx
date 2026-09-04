import React from 'react';
import './HomeModel2.css';

export interface HomeModel2Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel2: React.FC<HomeModel2Props> = ({
  title = 'Home Model - SEAL',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel2-wrapper" onClick={onClick} data-layer-name="HomeModel2">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD SEAL model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel2.png" 
          alt="Home Model - SEAL" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
