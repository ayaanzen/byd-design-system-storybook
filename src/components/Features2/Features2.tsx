import React from 'react';
import './Features2.css';

export interface Features2Props {
  /** Figma Variant: Default | Variant2 | Variant3 | Variant4 | Variant5 */
  property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5';
  heading?: string;
  subtitle?: string;
}

export const Features2: React.FC<Features2Props> = ({
  property1 = 'Default',
  heading,
  subtitle,
}) => {
  const items: Record<string, { h: string; s: string }> = {
    Default: { h: 'Cell-to-Body (CTB) Architecture', s: 'Battery integrated as structural chassis component' },
    Variant2: { h: 'e-Platform 3.0 EV Chassis', s: 'Dedicated 800V high efficiency architecture' },
    Variant3: { h: 'iTAC Intelligent Torque Adaption', s: 'Millisecond torque distribution response' },
    Variant4: { h: 'Dynaudio 12-Speaker Sound', s: '770W premium spatial automotive acoustic audio' },
    Variant5: { h: 'Frequency Selective Damping', s: 'Adaptive hydraulic suspension smoothness' }
  };
  const curr = items[property1] || items.Default;
  return (
    <div className="uedp-component-14" data-layer-name="Component 14">
      <div className="uedp-component-14__heading">{heading || curr.h}</div>
      <div className="uedp-component-14__sub">{subtitle || curr.s}</div>
    </div>
  );
};
