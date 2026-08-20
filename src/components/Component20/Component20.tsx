import React from 'react';
import './Component20.css';

export interface Component20Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  active?: boolean;
  onClick?: () => void;
}

export const Component20: React.FC<Component20Props> = ({
  property1 = 'Default',
  active = false,
  onClick,
}) => {
  const isChecked = active || property1 === 'Variant2';
  return (
    <div
      className={`uedp-component20 ${isChecked ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Component 20"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {isChecked ? <polyline points="20 6 9 17 4 12" /> : <circle cx="12" cy="12" r="8" />}
      </svg>
    </div>
  );
};
