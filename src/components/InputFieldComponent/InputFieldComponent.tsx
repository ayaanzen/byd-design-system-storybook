import React from 'react';
import './InputFieldComponent.css';

export interface InputFieldComponentProps {
  /** Figma State Variant: Default | Selected | Active | Success | Error | Disabled */
  state?: 'Default' | 'Selected' | 'Active' | 'Success' | 'Error' | 'Disabled';
  label?: string;
  placeholder?: string;
  value?: string;
  helperText?: string;
  showIcon?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  state = 'Default',
  label = 'Email Address',
  placeholder = 'Enter your email address',
  value = '',
  helperText,
  showIcon = true,
  onChange,
}) => {
  const isSuccess = state === 'Success';
  const isError = state === 'Error';
  const isDisabled = state === 'Disabled';

  return (
    <div className="uedp-input-field" data-layer-name="Input field component">
      {label && <label className="uedp-input-field__label">{label}</label>}
      <div className={`uedp-input-field__wrapper state-${state.toLowerCase()}`}>
        <input
          type="text"
          className="uedp-input-field__input"
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          onChange={onChange}
        />
        {showIcon && (
          <svg className="uedp-input-field__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </div>
      {isSuccess && <div className="uedp-input-field__message success">{helperText || 'Email verified successfully.'}</div>}
      {isError && <div className="uedp-input-field__message error">{helperText || 'Please enter a valid email address.'}</div>}
    </div>
  );
};
