import React from 'react';
import './HomeModel4.css';

export interface HomeModel4Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel4: React.FC<HomeModel4Props> = ({
  title = 'Home Model - HAN',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel4-wrapper" onClick={onClick} data-layer-name="HomeModel4">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD HAN model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel4.png" 
          alt="Home Model - HAN" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
