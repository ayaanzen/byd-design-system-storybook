import type { Meta, StoryObj } from '@storybook/react';
import { Component16 } from './Component16';

const meta: Meta<typeof Component16> = {
  title: 'Figma Library/Component 16',
  component: Component16,
  parameters: {
    docs: {
      description: {
        component: '### Component 16 (Figma Layer: "Component 16")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:773 | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component16>;
export const Default: Story = { args: { property1: 'Default' } };
