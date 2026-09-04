import React from 'react';
import './HomeModel4.css';

export interface HomeModel4Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const HomeModel4: React.FC<HomeModel4Props> = ({
  modelName = 'HAN',
  tagline = 'Luxury Executive Sedan',
  price = '₹55.00 Lakh*',
  image = '/figma-assets/HomeModel4.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="HomeModel4">
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
