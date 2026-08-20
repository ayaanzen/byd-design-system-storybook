import React from 'react';
import './Component23.css';

export interface Component23Props {
  /** Figma Variant: Frame 28 | Frame 29 | Frame 30 | Frame 31 | Frame 32 */
  property1?: 'Frame 28' | 'Frame 29' | 'Frame 30' | 'Frame 31' | 'Frame 32';
  title?: string;
  onClick?: () => void;
}

export const Component23: React.FC<Component23Props> = ({
  property1 = 'Frame 28',
  title,
  onClick,
}) => {
  const angles: Record<string, string> = {
    'Frame 28': 'Front 3/4 Angle',
    'Frame 29': 'Side Profile',
    'Frame 30': 'Rear 3/4 View',
    'Frame 31': 'Cockpit Interior',
    'Frame 32': 'Aero Wheels'
  };
  return (
    <div className="uedp-component-23" onClick={onClick} data-layer-name="Component 23">
      <div className="uedp-component-23__preview">{property1}</div>
      <div className="uedp-component-23__title">{title || angles[property1] || property1}</div>
    </div>
  );
};
