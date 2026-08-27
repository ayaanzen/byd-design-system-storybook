import React from 'react';
import './InputFieldComponent.css';

export interface InputFieldComponentProps {
  /** Label for the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Hint text below the input */
  hint?: string;
  /** Current state of the input */
  state?: 'inactive' | 'active' | 'filled' | 'success' | 'failure' | 'disabled';
  /** Value of the input */
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  label = 'Label',
  placeholder = 'Enter your email address',
  hint = '@gmail.com / @yahoo.com / @outlook.com',
  state = 'inactive',
  value,
  onChange,
}) => {
  return (
    <div className={`uedp-input-wrapper state-${state}`}>
      {label && <label className="uedp-input-label">{label}</label>}
      <div className="uedp-input-container">
        <input
          type="text"
          className="uedp-input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={state === 'disabled'}
        />
        {/* Decorative active underline indicator from Figma */}
        <div className="uedp-input-active-indicator" />
      </div>
      {hint && (
        <div className="uedp-input-hint">
          {state === 'failure' && <span className="error-icon">⚠</span>}
          {hint}
        </div>
      )}
    </div>
  );
};
