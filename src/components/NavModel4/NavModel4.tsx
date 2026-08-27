import React from 'react';
import './NavModel4.css';

export interface NavModel4Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const NavModel4: React.FC<NavModel4Props> = ({
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
