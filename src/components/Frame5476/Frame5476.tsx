import React from 'react';
import './Frame5476.css';

export interface Frame5476Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  trim?: string;
  price?: string;
  range?: string;
  onClick?: () => void;
}

export const Frame5476: React.FC<Frame5476Props> = ({
  property1 = 'Default',
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
      <div>
        <div className="uedp-frame5476__trim">{trim}</div>
        <div className="uedp-frame5476__price">{price}</div>
      </div>
      <div className="uedp-frame5476__range">{range}</div>
    </div>
  );
};
