import React from 'react';
import './HomeModel5.css';

export interface HomeModel5Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel5: React.FC<HomeModel5Props> = ({
  title = 'Home Model - DOLPHIN',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel5-wrapper" onClick={onClick} data-layer-name="HomeModel5">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD DOLPHIN model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel5.png" 
          alt="Home Model - DOLPHIN" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
