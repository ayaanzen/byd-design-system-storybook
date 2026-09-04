import React, { useState } from 'react';
import './Video1.css';

export interface Video1Props {
  title?: string;
  duration?: string;
  modelBadge?: string;
  thumbnail?: string;
}

export const Video1: React.FC<Video1Props> = ({
  title = 'BYD SEAL - Dynamic Performance & Aerodynamics',
  duration = '02:45',
  modelBadge = 'BYD SEAL',
  thumbnail = '/figma-assets/Video1.png',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`byd-video-card-container ${isPlaying ? 'is-playing' : ''}`} data-layer-name="Video1">
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
