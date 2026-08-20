import React from 'react';
import './Component12.css';

export interface Component12Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component12: React.FC<Component12Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? '19-inch Alloys' : '18-inch Aero');
  return (
    <button
      className={`uedp-component12 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 12"
    >
      {displayLabel}
    </button>
  );
};
