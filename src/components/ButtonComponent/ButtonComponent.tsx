import React from 'react';
import './ButtonComponent.css';

export interface ButtonComponentProps {
  /** Figma State: Default | Hover | Active | Focus | Disabled */
  state?: 'Default' | 'Hover' | 'Active' | 'Focus' | 'Disabled';
  /** Figma Type: Fill | Outline */
  type?: 'Fill' | 'Outline';
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  state = 'Default',
  type = 'Fill',
  children = 'SUBSCRIBE',
  onClick,
}) => {
  const isDisabled = state === 'Disabled';
  return (
    <button
      className={`uedp-button-component type-${type.toLowerCase()} state-${state.toLowerCase()}`}
      disabled={isDisabled}
      onClick={onClick}
      data-layer-name="Button component"
    >
      {children}
    </button>
  );
};
