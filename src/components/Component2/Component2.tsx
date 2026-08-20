import React from 'react';
import './Component2.css';

export interface Component2Props {
  /** Figma Variant: Group 151 | Group 156 | Group 152 | Group 153 | Group 154 | Group 155 */
  property1?: 'Group 151' | 'Group 156' | 'Group 152' | 'Group 153' | 'Group 154' | 'Group 155';
  value?: string;
  unit?: string;
  label?: string;
}

export const Component2: React.FC<Component2Props> = ({
  property1 = 'Group 151',
  value,
  unit,
  label,
}) => {
  const specs: Record<string, { v: string; u: string; l: string }> = {
    'Group 151': { v: '3.8', u: 'sec', l: '0-100 km/h Acceleration' },
    'Group 156': { v: '650', u: 'km', l: 'Maximum NEDC Range' },
    'Group 152': { v: '530', u: 'PS', l: 'Dual Motor Power' },
    'Group 153': { v: '82.5', u: 'kWh', l: 'Blade Battery Pack' },
    'Group 154': { v: '150', u: 'kW', l: 'DC Fast Charging' },
    'Group 155': { v: '0.219', u: 'Cd', l: 'Ultra-low Drag Coeff' },
  };

  const current = specs[property1] || specs['Group 151'];

  return (
    <div className="uedp-component-2" data-layer-name="Component 2">
      <div className="uedp-component-2__value">
        {value || current.v}
        <span className="uedp-component-2__unit">{unit || current.u}</span>
      </div>
      <div className="uedp-component-2__label">{label || current.l}</div>
    </div>
  );
};
