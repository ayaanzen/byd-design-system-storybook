import React, { useState } from 'react';
import './UltraCarousel.css';

export interface UltraCarouselProps {
  /** Figma Variant: Frame 28 | Frame 29 | Frame 30 | Frame 31 | Frame 32 */
  initialActiveFrame?: 'Frame 28' | 'Frame 29' | 'Frame 30' | 'Frame 31' | 'Frame 32';
  onFrameChange?: (frame: string) => void;
}

export const UltraCarousel: React.FC<UltraCarouselProps> = ({
  initialActiveFrame = 'Frame 28',
  onFrameChange,
}) => {
  const [activeFrame, setActiveFrame] = useState(initialActiveFrame);

  const frames = [
    { id: 'Frame 28', label: 'Front 3/4' },
    { id: 'Frame 29', label: 'Side Profile' },
    { id: 'Frame 30', label: 'Rear 3/4' },
    { id: 'Frame 31', label: 'Cockpit' },
    { id: 'Frame 32', label: 'Aero Wheels' }
  ];

  const handleFrameClick = (id: string) => {
    setActiveFrame(id as any);
    if (onFrameChange) onFrameChange(id);
  };

  return (
    <div className="ultra-carousel" data-layer-name="Ultra carousel">
      <div className="ultra-carousel-track">
        {frames.map((frame) => (
          <div 
            key={frame.id}
            className={`ultra-carousel-item ${activeFrame === frame.id ? 'is-active' : ''}`}
            onClick={() => handleFrameClick(frame.id)}
          >
            <div className="ultra-carousel-placeholder-img">
              {/* This represents the car angle image in Figma */}
              <span className="ultra-carousel-label">{frame.label}</span>
            </div>
            {activeFrame === frame.id && <div className="ultra-carousel-active-indicator" />}
          </div>
        ))}
      </div>
    </div>
  );
};
