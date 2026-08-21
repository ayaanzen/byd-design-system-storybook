import React from 'react';
import './Frame5474.css';

export interface Frame5474Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  image?: string;
  trim?: string;
  price?: string;
  range?: string;
  onClick?: () => void;
}

export const Frame5474: React.FC<Frame5474Props> = ({
  property1 = 'Default',
  image = 'https://via.placeholder.com/280x180?text=Car+Image',
  trim = 'DYNAMIC',
  price = '₹41 00 000',
  range = "(Ex-showroom price)\nRear Drive\n510km* Range",
  onClick,
}) => {
  return (
    <div
      className={`uedp-frame5474 ${property1 === 'Variant2' ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Frame 5474"
    >
      <img src={image} alt={trim} className="uedp-frame5474__image" />
      <div>
        <div className="uedp-frame5474__trim">{trim}</div>
        <div className="uedp-frame5474__price">{price}</div>
      </div>
      <div className="uedp-frame5474__range">{range}</div>
    </div>
  );
};
