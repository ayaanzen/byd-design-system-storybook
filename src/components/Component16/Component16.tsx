import React from 'react';
import './Component16.css';

export interface Component16Props {
  /** Figma Variant: Default | Variant2 | Variant3 */
  property1?: 'Default' | 'Variant2' | 'Variant3';
  title?: string;
}

export const Component16: React.FC<Component16Props> = ({
  property1 = 'Default',
  title = 'Highlighted Features.',
}) => {
  const featureSets: Record<string, string[]> = {
    Default: ['Blade Ultra-Safe Battery Chemistries', 'Cell-to-Body Structural Integrity', '8-in-1 Electric Powertrain System'],
    Variant2: ['15.6-inch Adaptive Rotatable Screen', 'Dynaudio 12-Speaker Surround Sound', 'Intelligent Head-up Display (W-HUD)'],
    Variant3: ['Electronic Torque Adaption Control', 'High-performance AWD Dual Motors', 'Frequency Selective Damping (FSD) Suspension']
  };

  const list = featureSets[property1] || featureSets.Default;

  return (
    <div className="uedp-component16" data-layer-name="Component 16">
      <div className="uedp-component16__title">{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {list.map((item, idx) => (
          <div key={idx} className="uedp-component16__feature">
            <span className="uedp-component16__dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
