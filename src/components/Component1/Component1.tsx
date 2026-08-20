import React from 'react';
import './Component1.css';

export interface Component1Props {
  /** Figma Variant: Frame 26 | Frame 27 | Frame 28 | Frame 29 | Frame 30 | Frame 31 */
  property1?: 'Frame 26' | 'Frame 27' | 'Frame 28' | 'Frame 29' | 'Frame 30' | 'Frame 31';
  label?: string;
  badge?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Component1: React.FC<Component1Props> = ({
  property1 = 'Frame 26',
  label,
  badge = 'EV SEDAN',
  active = false,
  onClick,
}) => {
  const modelNames: Record<string, string> = {
    'Frame 26': 'SEAL DYNAMIC',
    'Frame 27': 'SEAL PREMIUM',
    'Frame 28': 'SEAL PERFORMANCE',
    'Frame 29': 'ATTO 3 EXTENDED',
    'Frame 30': 'DOLPHIN SURF',
    'Frame 31': 'SEALION 7'
  };

  const displayLabel = label || modelNames[property1] || property1;

  return (
    <div
      className={`uedp-component-1 ${active || property1 === 'Frame 26' ? 'active' : ''}`}
      onClick={onClick}
      data-layer-name="Component 1"
    >
      <span className="uedp-component-1__badge">{badge}</span>
      <div className="uedp-component-1__label">{displayLabel}</div>
    </div>
  );
};
