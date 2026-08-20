import type { Meta, StoryObj } from '@storybook/react';
import { Component6 } from './Component6';

const meta: Meta<typeof Component6> = {
  title: 'Figma Library/Component 6',
  component: Component6,
  parameters: {
    docs: {
      description: {
        component: '### Component 6 (Figma Layer: "Component 6")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:517 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component6>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
