import React from 'react';
import './HomeModel1.css';

export interface HomeModel1Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel1: React.FC<HomeModel1Props> = ({
  title = 'Home Model - ATTO 3',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel1-wrapper" onClick={onClick} data-layer-name="HomeModel1">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD ATTO 3 model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel1.png" 
          alt="Home Model - ATTO 3" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
