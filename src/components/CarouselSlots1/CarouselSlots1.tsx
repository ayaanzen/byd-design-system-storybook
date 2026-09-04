import React from 'react';
import './CarouselSlots1.css';

export interface CarouselSlots1Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const CarouselSlots1: React.FC<CarouselSlots1Props> = ({
  title = 'Carousel Slots 1',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper carouselslots1-wrapper" onClick={onClick} data-layer-name="CarouselSlots1">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Banners & Carousels</span>
      </div>
      <p className="byd-component-desc">Vehicle angle thumbnail strip slot variant 1.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/CarouselSlots1.png" 
          alt="Carousel Slots 1" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
