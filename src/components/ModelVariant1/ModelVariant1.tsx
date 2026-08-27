import React from 'react';
import './ModelVariant1.css';

export interface ModelVariant1Props {
  /** Title of the trim card */
  title?: string;
  /** Price displayed on the card */
  price?: string;
  /** Description lines */
  description?: React.ReactNode;
  /** If true, shows the active red border variant */
  isActive?: boolean;
  onClick?: () => void;
}

export const ModelVariant1: React.FC<ModelVariant1Props> = ({
  title = 'DYNAMIC',
  price = '₹41 00 000',
  description = (
    <>
      (Ex-showroom price)<br />
      Rear Drive<br />
      510km* Range
    </>
  ),
  isActive = false,
  onClick,
}) => {
  return (
    <div 
      className={`model-variant-card ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
    >
      <div className="model-variant-top-bar" />
      <div className="model-variant-content">
        <h3 className="model-variant-title">{title}</h3>
        <div className="model-variant-price">{price}</div>
        <p className="model-variant-description">{description}</p>
      </div>
    </div>
  );
};
