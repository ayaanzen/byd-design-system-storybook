import type { Meta, StoryObj } from '@storybook/react';
import { InputFieldComponent } from './InputFieldComponent';

const meta: Meta<typeof InputFieldComponent> = {
  title: 'Figma Library/Input field component',
  component: InputFieldComponent,
  parameters: {
    docs: {
      description: {
        component: '### Input field component (Figma Layer: "Input field component")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:726 | N/A |\n| States | Inactive, Active, Filled, Success, Failure, Disabled | N/A |\n| Border Radius | 8px | --uedp-rounded-lg |'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Inactive', 'Active', 'Filled', 'Success', 'Failure', 'Disabled']
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' }
  }
};
export default meta;
type Story = StoryObj<typeof InputFieldComponent>;

export const Inactive: Story = { args: { state: 'Inactive' } };
export const Active: Story = { args: { state: 'Active' } };
export const Filled: Story = { args: { state: 'Filled', value: 'driver@bydseal.com' } };
export const Success: Story = { args: { state: 'Success', value: 'contact@byd.com', helperText: 'Email is registered' } };
export const Failure: Story = { args: { state: 'Failure', value: 'invalid-email', helperText: 'Invalid email format' } };
export const Disabled: Story = { args: { state: 'Disabled', placeholder: 'Disabled input' } };
