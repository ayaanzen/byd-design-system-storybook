import React from 'react';
import './HomeModel2.css';

export interface HomeModel2Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const HomeModel2: React.FC<HomeModel2Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'All-Wheel Drive' : 'Rear Drive');
  return (
    <button
      className={`uedp-component4 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 4"
    >
      {displayLabel}
    </button>
  );
};
