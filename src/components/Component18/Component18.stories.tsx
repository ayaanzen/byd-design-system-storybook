import type { Meta, StoryObj } from '@storybook/react';
import { Component18 } from './Component18';

const meta: Meta<typeof Component18> = {
  title: 'Figma Library/Component 18',
  component: Component18,
  parameters: {
    docs: {
      description: {
        component: '### Component 18 (Figma Layer: "Component 18")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:855 | N/A |\n| Radius | 24px | --uedp-rounded-3xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['MacBook Pro 14" - 1', 'MacBook Pro 14" - 2', 'MacBook Pro 14" - 3'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component18>;
export const Default: Story = { args: { property1: 'MacBook Pro 14" - 1' } };
