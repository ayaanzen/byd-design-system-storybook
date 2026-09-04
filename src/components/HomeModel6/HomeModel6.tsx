import React from 'react';
import './HomeModel6.css';

export interface HomeModel6Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HomeModel6: React.FC<HomeModel6Props> = ({
  title = 'Home Model - TANG',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper homemodel6-wrapper" onClick={onClick} data-layer-name="HomeModel6">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Vehicle Cards</span>
      </div>
      <p className="byd-component-desc">BYD TANG model showcase card with side profile asset and red typography badge.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HomeModel6.png" 
          alt="Home Model - TANG" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
