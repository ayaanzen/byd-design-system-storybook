import React from 'react';
import './Video1.css';

export interface Video1Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Video1: React.FC<Video1Props> = ({
  title = 'Video Preview 1',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper video1-wrapper" onClick={onClick} data-layer-name="Video1">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Media Players</span>
      </div>
      <p className="byd-component-desc">BYD Seal dynamic video player preview module.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Video1.png" 
          alt="Video Preview 1" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
