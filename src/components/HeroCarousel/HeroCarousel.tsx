import React from 'react';
import './HeroCarousel.css';

export interface HeroCarouselProps {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  title = 'Hero Carousel',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper herocarousel-wrapper" onClick={onClick} data-layer-name="HeroCarousel">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Banners & Carousels</span>
      </div>
      <p className="byd-component-desc">High-impact Hero Banner & Carousel with BYD brand imagery, headline typography, and model badge overlays.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/HeroCarousel.png" 
          alt="Hero Carousel" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
