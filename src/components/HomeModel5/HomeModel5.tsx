import React from 'react';
import './HomeModel5.css';

export interface HomeModel5Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const HomeModel5: React.FC<HomeModel5Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Blade Technology' : 'Standard Battery');
  return (
    <button
      className={`uedp-component7 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 7"
    >
      {displayLabel}
    </button>
  );
};
