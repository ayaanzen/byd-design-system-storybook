import React from 'react';
import './Component6.css';

export interface Component6Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component6: React.FC<Component6Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Battery 82.5kWh' : 'Battery 61.4kWh');
  return (
    <button
      className={`uedp-component6 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 6"
    >
      {displayLabel}
    </button>
  );
};
