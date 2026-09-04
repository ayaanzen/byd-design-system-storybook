import React from 'react';
import './Video3.css';

export interface Video3Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const Video3: React.FC<Video3Props> = ({
  title = 'Video Preview 3',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper video3-wrapper" onClick={onClick} data-layer-name="Video3">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Media Players</span>
      </div>
      <p className="byd-component-desc">BYD Sealion 7 feature video player preview module.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/Video3.png" 
          alt="Video Preview 3" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
