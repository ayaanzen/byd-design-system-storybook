import React from 'react';
import './NavModel3.css';

export interface NavModel3Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const NavModel3: React.FC<NavModel3Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Leather Seats' : 'Fabric Seats');
  return (
    <button
      className={`uedp-component11 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 11"
    >
      {displayLabel}
    </button>
  );
};
