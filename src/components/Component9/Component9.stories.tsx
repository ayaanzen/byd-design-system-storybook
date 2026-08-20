import type { Meta, StoryObj } from '@storybook/react';
import { Component9 } from './Component9';

const meta: Meta<typeof Component9> = {
  title: 'Figma Library/Component 9',
  component: Component9,
  parameters: {
    docs: {
      description: {
        component: '### Component 9 (Figma Layer: "Component 9")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:550 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component9>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
