import React, { useState } from 'react';
import './Video2.css';

export interface Video2Props {
  title?: string;
  duration?: string;
  modelBadge?: string;
  thumbnail?: string;
}

export const Video2: React.FC<Video2Props> = ({
  title = 'BYD ATTO 3 - Born Dynamic Electric SUV Showcase',
  duration = '01:58',
  modelBadge = 'BYD ATTO 3',
  thumbnail = '/figma-assets/Video2.png',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`byd-video-card-container ${isPlaying ? 'is-playing' : ''}`} data-layer-name="Video2">
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
