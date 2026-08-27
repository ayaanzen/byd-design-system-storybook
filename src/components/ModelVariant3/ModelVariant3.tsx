import React from 'react';
import './ModelVariant3.css';

export interface ModelVariant3Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  image?: string;
  trim?: string;
  price?: string;
  range?: string;
  onClick?: () => void;
}

export const ModelVariant3: React.FC<ModelVariant3Props> = ({
  property1 = 'Default',
  image = 'https://via.placeholder.com/280x180?text=Car+Image',
  trim = 'PERFORMANCE',
  price = '₹53 15 000',
  range = "(Ex-showroom price)\nAll-Wheel Drive\n580km* Range",
  onClick,
}) => {
  return (
    <div
      className={`uedp-frame5476 ${property1 === 'Variant2' ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Frame 5476"
    >
      <img src={image} alt={trim} className="uedp-frame5476__image" />
      <div>
        <div className="uedp-frame5476__trim">{trim}</div>
        <div className="uedp-frame5476__price">{price}</div>
      </div>
      <div className="uedp-frame5476__range">{range}</div>
    </div>
  );
};
