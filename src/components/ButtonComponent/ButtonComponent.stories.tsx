import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from './ButtonComponent';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Figma Library/Button component',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: '### Button component (Figma Layer: "Button component")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:791 | N/A |\n| States | Default, Hover, Active, Pressed, Focus, Disabled | N/A |\n| Radius | 12px | --uedp-rounded-xl |'
      }
    }
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hover', 'Active', 'Pressed', 'Focus', 'Disabled'] },
    type: { control: 'select', options: ['Fill', 'Outline'] },
    children: { control: 'text' }
  }
};
export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Default: Story = { args: { state: 'Default', type: 'Fill', children: 'SUBSCRIBE' } };
export const Hover: Story = { args: { state: 'Hover', type: 'Fill' } };
export const Active: Story = { args: { state: 'Active', type: 'Fill' } };
export const Pressed: Story = { args: { state: 'Pressed', type: 'Fill' } };
export const Outline: Story = { args: { state: 'Default', type: 'Outline', children: 'TEST DRIVE' } };
export const Disabled: Story = { args: { state: 'Disabled', type: 'Fill' } };
