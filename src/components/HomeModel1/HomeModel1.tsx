import React from 'react';
import './HomeModel1.css';

export interface HomeModel1Props {
  modelName?: string;
  tagline?: string;
  price?: string;
  image?: string;
  onClick?: () => void;
}

export const HomeModel1: React.FC<HomeModel1Props> = ({
  modelName = 'ATTO 3',
  tagline = 'Dynamic EV SUV',
  price = '₹24.99 Lakh*',
  image = '/figma-assets/HomeModel1.png',
  onClick,
}) => {
  return (
    <div className="byd-home-model-card" onClick={onClick} data-layer-name="HomeModel1">
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
