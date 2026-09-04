import React from 'react';
import './Video2.css';

export interface Video2Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Video2: React.FC<Video2Props> = ({
  title = 'Video Preview 2',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper video2-wrapper" onClick={onClick} data-layer-name="Video2">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Media Players</span>
      </div>
      <p className="byd-component-desc">BYD Atto 3 promo video player preview module.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Video2.png" 
          alt="Video Preview 2" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
