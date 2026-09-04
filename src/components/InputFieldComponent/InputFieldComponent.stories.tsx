import type { Meta, StoryObj } from '@storybook/react';
import { InputFieldComponent } from './InputFieldComponent';

const meta: Meta<typeof InputFieldComponent> = {
  title: 'BYD Figma Components/InputFieldComponent',
  component: InputFieldComponent,
  argTypes: {
    state: {
      control: 'select',
      options: ['inactive', 'active', 'filled', 'success', 'failure', 'disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputFieldComponent>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter your email address',
    hint: '@gmail.com / @yahoo.com / @outlook.com',
    state: 'inactive',
  },
};

export const Active: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter your email address',
    hint: '@gmail.com / @yahoo.com / @outlook.com',
    state: 'active',
  },
};

export const Success: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter your email address',
    hint: 'Valid email address',
    state: 'success',
  },
};

export const Failure: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter your email address',
    hint: 'Invalid email address',
    state: 'failure',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter your email address',
    hint: 'Field disabled',
    state: 'disabled',
  },
};
