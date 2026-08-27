import React from 'react';
import './Features5.css';

export interface Features5Props {
  /** Figma Variant: Default | Variant2 | Variant3 */
  property1?: 'Default' | 'Variant2' | 'Variant3';
  title?: string;
}

export const Features5: React.FC<Features5Props> = ({
  property1 = 'Default',
  title = 'Vehicle Drivetrain Features.',
}) => {
  const featureSets: Record<string, string[]> = {
    Default: ['Blade Ultra-Safe Battery Chemistries', 'Cell-to-Body Structural Integrity', '8-in-1 Electric Powertrain System'],
    Variant2: ['15.6-inch Adaptive Rotatable Screen', 'Dynaudio 12-Speaker Surround Sound', 'Intelligent Head-up Display (W-HUD)'],
    Variant3: ['Electronic Torque Adaption Control', 'High-performance AWD Dual Motors', 'Frequency Selective Damping (FSD) Suspension']
  };

  const list = featureSets[property1] || featureSets.Default;

  return (
    <div className="uedp-component17" data-layer-name="Component 17">
      <div className="uedp-component17__title">{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {list.map((item, idx) => (
          <div key={idx} className="uedp-component17__feature">
            <span className="uedp-component17__dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
