import React from 'react';
import './Component9.css';

export interface Component9Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component9: React.FC<Component9Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Head-up Display' : 'Standard Cluster');
  return (
    <button
      className={`uedp-component9 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 9"
    >
      {displayLabel}
    </button>
  );
};
