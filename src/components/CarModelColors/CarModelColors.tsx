import React from 'react';
import './CarModelColors.css';

export interface CarModelColorsProps {
  /** Figma Variant: Default (EMPEROR RED) | Variant2 (COSMOS BLACK) | Variant3 (AURORA WHITE) | Variant4 (SHARK GRAY) */
  property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
}

export const CarModelColors: React.FC<CarModelColorsProps> = ({
  property1 = 'Default',
}) => {
  const colorMap: Record<string, { name: string; hex: string; textHex: string }> = {
    Default: { name: 'EMPEROR RED (BYD SIGNATURE)', hex: '#EC1C24', textHex: '#FFFFFF' },
    Variant2: { name: 'COSMOS BLACK', hex: '#0A0A0A', textHex: '#FFFFFF' },
    Variant3: { name: 'AURORA WHITE', hex: '#FFFFFF', textHex: '#0A0A0A' },
    Variant4: { name: 'SHARK GRAY', hex: '#64748B', textHex: '#FFFFFF' }
  };

  const curr = colorMap[property1] || colorMap.Default;

  return (
    <div className="uedp-component-25" data-layer-name="Component 25">
      <div className="uedp-component-25__stage">
        <div className="uedp-component-25__car-silhouette" style={{ backgroundColor: curr.hex, color: curr.textHex }}>
          BYD SEAL 360° Visualizer
        </div>
      </div>
      <div className="uedp-component-25__title">{curr.name}</div>
      <div className="uedp-component-25__badge">BYD OCEAN SERIES DESIGN</div>
    </div>
  );
};
