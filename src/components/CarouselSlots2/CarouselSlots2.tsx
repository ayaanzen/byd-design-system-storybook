import React from 'react';
import './CarouselSlots2.css';

export interface CarouselSlots2Props {
  /** Optional custom title overlay */
  title?: string;
  /** Interactive click handler */
  onClick?: () => void;
}

export const CarouselSlots2: React.FC<CarouselSlots2Props> = ({
  title = 'Carousel Slots 2',
  onClick,
}) => {
  return (
    <div className="byd-figma-component-wrapper carouselslots2-wrapper" onClick={onClick} data-layer-name="CarouselSlots2">
      <div className="byd-component-header">
        <div className="byd-component-title">{title}</div>
        <span className="byd-component-badge">Banners & Carousels</span>
      </div>
      <p className="byd-component-desc">Vehicle angle thumbnail strip slot variant 2.</p>
      <div className="byd-component-asset-container">
        <img 
          src="/figma-assets/CarouselSlots2.png" 
          alt="Carousel Slots 2" 
          className="byd-component-figma-img" 
          loading="lazy"
        />
      </div>
    </div>
  );
};
