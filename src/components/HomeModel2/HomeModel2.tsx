import React from 'react';
import './HomeModel2.css';

export interface HomeModel2Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const HomeModel2: React.FC<HomeModel2Props> = ({
  modelName = 'SEAL',
  tagline = 'Performance EV Sedan',
  price = '₹41.00 Lakh*',
  image = '/figma-assets/HomeModel2.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="HomeModel2">
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
