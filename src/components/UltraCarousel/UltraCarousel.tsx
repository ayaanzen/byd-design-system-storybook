import React from 'react';
import './UltraCarousel.css';

export interface UltraCarouselProps {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const UltraCarousel: React.FC<UltraCarouselProps> = ({
  title = 'Ultra Carousel',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper ultracarousel-wrapper" onClick={onClick} data-layer-name="UltraCarousel">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Banners & Carousels</span>
      </div>
      <p className="byd-component-desc">Specs & feature highlight multi-card carousel strip.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/UltraCarousel.png" 
          alt="Ultra Carousel" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
