import React from 'react';
import './Video4.css';

export interface Video4Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Video4: React.FC<Video4Props> = ({
  title = 'Video Preview 4',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper video4-wrapper" onClick={onClick} data-layer-name="Video4">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Media Players</span>
      </div>
      <p className="byd-component-desc">BYD Tang adventure video player preview module.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Video4.png" 
          alt="Video Preview 4" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
