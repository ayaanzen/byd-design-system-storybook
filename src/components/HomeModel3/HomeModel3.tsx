import React from 'react';
import './HomeModel3.css';

export interface HomeModel3Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const HomeModel3: React.FC<HomeModel3Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Exterior 360' : 'Interior View');
  return (
    <button
      className={`uedp-component5 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 5"
    >
      {displayLabel}
    </button>
  );
};
