import React from 'react';
import './Features1.css';

export interface Features1Props {
  /** Figma Variant: Default | Variant2 | Variant3 | Variant4 | Variant5 */
  property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5';
  title?: string;
  stat?: string;
  description?: string;
}

export const Features1: React.FC<Features1Props> = ({
  property1 = 'Default',
  title,
  stat,
  description,
}) => {
  const configs: Record<string, { t: string; s: string; d: string }> = {
    Default: { t: 'Acceleration', s: '3.8 s', d: '0 to 100 km/h sprint powered by dual electric motors' },
    Variant2: { t: 'Total Range', s: '650 km', d: 'High energy density Blade Battery with heat pump system' },
    Variant3: { t: 'Max Output', s: '530 PS', d: 'High performance synchronous magnet electric drivetrain' },
    Variant4: { t: 'Fast Charge', s: '37 min', d: '30% to 80% ultra-fast DC high voltage charging' },
    Variant5: { t: 'Aerodynamics', s: '0.219 Cd', d: 'Streamlined ocean aesthetic drag coefficient' },
  };

  const curr = configs[property1] || configs.Default;

  return (
    <div className="uedp-component-13" data-layer-name="Component 13">
      <div className="uedp-component-13__title">{title || curr.t}</div>
      <div className="uedp-component-13__stat">{stat || curr.s}</div>
      <div className="uedp-component-13__desc">{description || curr.d}</div>
    </div>
  );
};
