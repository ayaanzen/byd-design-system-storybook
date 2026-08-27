import React from 'react';
import './ModelVariant3.css';

export interface ModelVariant3Props {
  title?: string;
  price?: string;
  description?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const ModelVariant3: React.FC<ModelVariant3Props> = ({
  title = 'PERFORMANCE',
  price = '₹53 15 000',
  description = (
    <>
      (Ex-showroom price)<br />
      AWD<br />
      580km* Range
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
