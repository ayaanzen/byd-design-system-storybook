import React, { useState } from 'react';
import './SlidingRoofAnimation.css';

export interface SlidingRoofAnimationProps {
  title?: string;
  initialSlidePosition?: number; // 0 to 100
}

export const SlidingRoofAnimation: React.FC<SlidingRoofAnimationProps> = ({
  title = 'Interactive Panoramic Sunroof Control',
  initialSlidePosition = 50,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(initialSlidePosition);

  return (
    <div className="byd-roof-interactive-container" data-layer-name="Sliding roof animation">
      <div className="byd-roof-header">
        <div>
          <h2 className="byd-roof-title">{title}</h2>
          <p className="byd-roof-subtitle">Drag slider below to reveal open panoramic glass roof views.</p>
        </div>
        <div className="byd-roof-status-pill">
          {sliderPos}% SHADE OPEN
        </div>
      </div>

      <div className="byd-roof-view-wrapper">
        {/* Closed Roof View (Background) */}
        <img
          src="/figma-assets/roof-closed.png"
          alt="Sunroof Closed"
          className="byd-roof-img byd-roof-img-closed"
        />

        {/* Open Roof View (Foreground clipped by sliderPos %) */}
        <div
          className="byd-roof-open-overlay"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/figma-assets/roof-open.png"
            alt="Sunroof Open"
            className="byd-roof-img byd-roof-img-open"
          />
        </div>

        {/* Vertical Divider Line */}
        <div
          className="byd-roof-divider-line"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="byd-roof-divider-handle">
            <span>&lsaquo;</span>
            <span>&rsaquo;</span>
          </div>
        </div>
      </div>

      <div className="byd-roof-controls">
        <span className="byd-roof-control-label">CLOSED</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="byd-roof-slider"
          aria-label="Sunroof position slider"
        />
        <span className="byd-roof-control-label">FULLY OPEN</span>
      </div>
    </div>
  );
};
