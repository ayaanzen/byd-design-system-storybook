import React from 'react';
import './ModelVariant2.css';

export interface ModelVariant2Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  image?: string;
  trim?: string;
  price?: string;
  range?: string;
  onClick?: () => void;
}

export const ModelVariant2: React.FC<ModelVariant2Props> = ({
  property1 = 'Default',
  image = 'https://via.placeholder.com/280x180?text=Car+Image',
  trim = 'PREMIUM',
  price = '₹45 70 000',
  range = "(Ex-showroom price)\nRear Drive\n650km* Range",
  onClick,
}) => {
  return (
    <div
      className={`uedp-frame5475 ${property1 === 'Variant2' ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Frame 5475"
    >
      <img src={image} alt={trim} className="uedp-frame5475__image" />
      <div>
        <div className="uedp-frame5475__trim">{trim}</div>
        <div className="uedp-frame5475__price">{price}</div>
      </div>
      <div className="uedp-frame5475__range">{range}</div>
    </div>
  );
};
