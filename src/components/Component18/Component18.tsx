import React from 'react';
import './Component18.css';

export interface Component18Props {
  /** Figma Variant: MacBook Pro 14" - 1 | MacBook Pro 14" - 2 | MacBook Pro 14" - 3 */
  property1?: 'MacBook Pro 14" - 1' | 'MacBook Pro 14" - 2' | 'MacBook Pro 14" - 3';
  modelName?: string;
}

export const Component18: React.FC<Component18Props> = ({
  property1 = 'MacBook Pro 14" - 1',
  modelName = 'BYD SEAL All-Electric Sedan',
}) => {
  return (
    <div className="uedp-component-18" data-layer-name="Component 18">
      <div>
        <div className="uedp-component-18__tag">Flagship Electric</div>
        <div className="uedp-component-18__title">{modelName}</div>
      </div>
      <div className="uedp-component-18__specs">
        <div className="uedp-component-18__spec-item">
          <span className="uedp-component-18__spec-val">3.8s</span>
          <span className="uedp-component-18__spec-lbl">0-100 km/h</span>
        </div>
        <div className="uedp-component-18__spec-item">
          <span className="uedp-component-18__spec-val">650 km</span>
          <span className="uedp-component-18__spec-lbl">NEDC Range</span>
        </div>
        <div className="uedp-component-18__spec-item">
          <span className="uedp-component-18__spec-val">530 PS</span>
          <span className="uedp-component-18__spec-lbl">AWD Power</span>
        </div>
      </div>
    </div>
  );
};
