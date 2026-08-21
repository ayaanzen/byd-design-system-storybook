import type { Meta, StoryObj } from '@storybook/react';
import { InputFieldComponent } from './InputFieldComponent';

const meta: Meta<typeof InputFieldComponent> = {
  title: 'Figma Library/Input field component',
  component: InputFieldComponent,
  parameters: {
    docs: {
      description: {
        component: '### Input field component (Figma Layer: "Input field component")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:726 | N/A |\n| States | Default, Selected, Active, Success, Error, Disabled | N/A |\n| Border Radius | 8px | --uedp-rounded-lg |'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Selected', 'Active', 'Success', 'Error', 'Disabled']
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    helperText: { control: 'text' },
    showIcon: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof InputFieldComponent>;

export const Default: Story = { args: { state: 'Default', placeholder: 'Enter your email address' } };
export const Selected: Story = { args: { state: 'Selected', value: '' } };
export const Active: Story = { args: { state: 'Active', placeholder: 'Type here' } };
export const Success: Story = { args: { state: 'Success', value: 'user@example.com', helperText: 'Email verified.' } };
export const Error: Story = { args: { state: 'Error', value: 'invalid', helperText: 'Invalid email format.' } };
export const Disabled: Story = { args: { state: 'Disabled', placeholder: 'Disabled input' } };
