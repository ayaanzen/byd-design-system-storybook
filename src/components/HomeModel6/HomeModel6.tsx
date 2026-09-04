import React from 'react';
import './HomeModel6.css';

export interface HomeModel6Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const HomeModel6: React.FC<HomeModel6Props> = ({
  modelName = 'TANG',
  tagline = '7-Seat Luxury SUV',
  price = '₹62.00 Lakh*',
  image = '/figma-assets/HomeModel6.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="HomeModel6">
      <div className="byd-model-img-wrapper">
        <img src={image} alt={modelName} className="byd-model-car-img" />
      </div>
      <div className="byd-model-info">
        <span className="byd-model-red-badge">{modelName}</span>
        <p className="byd-model-tagline">{tagline}</p>
        <div className="byd-model-price">Starting from {price}</div>
      </div>
    </div>
  );
};
