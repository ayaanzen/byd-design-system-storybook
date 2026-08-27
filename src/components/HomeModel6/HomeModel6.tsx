import React from 'react';
import './HomeModel6.css';

export interface HomeModel6Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const HomeModel6: React.FC<HomeModel6Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Dynaudio Audio' : 'Standard Audio');
  return (
    <button
      className={`uedp-component8 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 8"
    >
      {displayLabel}
    </button>
  );
};
