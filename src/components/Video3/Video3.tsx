import React, { useState } from 'react';
import './Video3.css';

export interface Video3Props {
  title?: string;
  duration?: string;
  modelBadge?: string;
  thumbnail?: string;
}

export const Video3: React.FC<Video3Props> = ({
  title = 'BYD SEALION 7 - Intelligent SUV Coupe Teaser',
  duration = '03:12',
  modelBadge = 'BYD SEALION 7',
  thumbnail = '/figma-assets/Video3.png',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`byd-video-card-container ${isPlaying ? 'is-playing' : ''}`} data-layer-name="Video3">
      <div className="byd-video-preview-wrapper" onClick={togglePlay}>
        <img src={thumbnail} alt={title} className="byd-video-thumbnail" />
        <div className="byd-video-overlay" />

        <span className="byd-video-model-badge">{modelBadge}</span>
        <span className="byd-video-duration-pill">{duration}</span>

        <button className="byd-video-play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <span className="pause-icon">&#10074;&#10074;</span>
          ) : (
            <span className="play-icon">&#9654;</span>
          )}
        </button>

        {isPlaying && (
          <div className="byd-video-playing-indicator">
            <span className="pulse-dot" /> NOW PLAYING
          </div>
        )}

        <div className="byd-video-progress-bar">
          <div className="byd-video-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="byd-video-details">
        <h4 className="byd-video-title">{title}</h4>
        <div className="byd-video-actions-row">
          <button className="byd-video-action-btn" onClick={togglePlay}>
            {isPlaying ? 'PAUSE VIDEO' : 'WATCH PREVIEW'}
          </button>
          <button className="byd-video-share-btn" title="Share Video">
            &#10140;
          </button>
        </div>
      </div>
    </div>
  );
};
