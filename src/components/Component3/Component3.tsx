import React from 'react';
import './Component3.css';

export interface Component3Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component3: React.FC<Component3Props> = ({
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
