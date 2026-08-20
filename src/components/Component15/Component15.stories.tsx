import type { Meta, StoryObj } from '@storybook/react';
import { Component15 } from './Component15';

const meta: Meta<typeof Component15> = {
  title: 'Figma Library/Component 15',
  component: Component15,
  parameters: {
    docs: {
      description: {
        component: '### Component 15 (Figma Layer: "Component 15")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:732 | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component15>;
export const Default: Story = { args: { property1: 'Default' } };
