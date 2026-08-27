import React from 'react';
import './HomeModel1.css';

export interface HomeModel1Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const HomeModel1: React.FC<HomeModel1Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Performance' : 'Eco Mode');
  return (
    <button
      className={`uedp-component3 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 3"
    >
      {displayLabel}
    </button>
  );
};
