import React from 'react';
import './HomeModel3.css';

export interface HomeModel3Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const HomeModel3: React.FC<HomeModel3Props> = ({
  modelName = 'SEALION 7',
  tagline = 'Intelligent SUV Coupe',
  price = '₹48.50 Lakh*',
  image = '/figma-assets/HomeModel3.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="HomeModel3">
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
