import React from 'react';
import './Component10.css';

export interface Component10Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component10: React.FC<Component10Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Panoramic Roof' : 'Solid Roof');
  return (
    <button
      className={`uedp-component10 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 10"
    >
      {displayLabel}
    </button>
  );
};
