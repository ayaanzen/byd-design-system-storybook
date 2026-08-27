import React from 'react';
import './Video3.css';

export interface Video3Props {
  /** Figma Variant: Default | Variant2 */
  property1?: 'Default' | 'Variant2';
  active?: boolean;
  onClick?: () => void;
}

export const Video3: React.FC<Video3Props> = ({
  property1 = 'Default',
  active = false,
  onClick,
}) => {
  const isChecked = active || property1 === 'Variant2';
  return (
    <div
      className={`uedp-component21 ${isChecked ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Component 21"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {isChecked ? <polyline points="20 6 9 17 4 12" /> : <circle cx="12" cy="12" r="8" />}
      </svg>
    </div>
  );
};
