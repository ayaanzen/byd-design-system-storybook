import React from 'react';
import './Component24.css';

export interface Component24Props {
  /** Figma Variant: Default | Variant2 | Variant3 | Variant4 | Variant5 */
  property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5';
  onSelect?: (variant: string) => void;
}

export const Component24: React.FC<Component24Props> = ({
  property1 = 'Default',
  onSelect,
}) => {
  const colors = [
    { id: 'Default', hex: '#EC1C24', name: 'BYD Emperor Red' },
    { id: 'Variant2', hex: '#0A0A0A', name: 'Cosmos Black' },
    { id: 'Variant3', hex: '#FFFFFF', name: 'Aurora White' },
    { id: 'Variant4', hex: '#4B5563', name: 'Atlantis Gray' },
    { id: 'Variant5', hex: '#64748B', name: 'Shark Gray' },
  ];

  return (
    <div className="uedp-component-24" data-layer-name="Component 24">
      {colors.map(c => (
        <div
          key={c.id}
          className={`uedp-component-24__swatch ${property1 === c.id ? 'active' : ''}`}
          style={{ backgroundColor: c.hex }}
          title={c.name}
          onClick={() => onSelect && onSelect(c.id)}
        />
      ))}
    </div>
  );
};
