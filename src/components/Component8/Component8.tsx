import React from 'react';
import './Component8.css';

export interface Component8Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  label?: string;
  onClick?: () => void;
}

export const Component8: React.FC<Component8Props> = ({
  property1 = 'Default',
  label,
  onClick,
}) => {
  const displayLabel = label || (property1 === 'Default' ? 'Dynaudio Audio' : 'Standard Audio');
  return (
    <button
      className={`uedp-component8 variant-${property1.toLowerCase()}`}
      onClick={onClick}
      data-layer-name="Component 8"
    >
      {displayLabel}
    </button>
  );
};
