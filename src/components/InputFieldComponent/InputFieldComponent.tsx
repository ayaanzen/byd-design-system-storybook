import React from 'react';
import './InputFieldComponent.css';

export interface InputFieldComponentProps {
  /** Figma State Variant: Inactive | Active | Filled | Success | Failure | Disabled */
  state?: 'Inactive' | 'Active' | 'Filled' | 'Success' | 'Failure' | 'Disabled';
  label?: string;
  placeholder?: string;
  value?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  state = 'Inactive',
  label = 'Email Address',
  placeholder = 'name@example.com',
  value = '',
  helperText,
  onChange,
}) => {
  const displayVal = state === 'Filled' ? (value || 'user@byd.com') : value;
  const isSuccess = state === 'Success';
  const isFailure = state === 'Failure';
  const isDisabled = state === 'Disabled';

  return (
    <div className="uedp-input-field" data-layer-name="Input field component">
      {label && <label className="uedp-input-field__label">{label}</label>}
      <div className={`uedp-input-field__wrapper state-${state.toLowerCase()}`}>
        <input
          type="text"
          className="uedp-input-field__input"
          placeholder={placeholder}
          value={displayVal}
          disabled={isDisabled}
          onChange={onChange}
        />
      </div>
      {isSuccess && <div className="uedp-input-field__message success">{helperText || '✓ Email verified successfully.'}</div>}
      {isFailure && <div className="uedp-input-field__message failure">{helperText || '✕ Please enter a valid email address.'}</div>}
    </div>
  );
};
