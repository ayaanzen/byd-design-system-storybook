import type { Meta, StoryObj } from '@storybook/react';
import { Component4 } from './Component4';

const meta: Meta<typeof Component4> = {
  title: 'Figma Library/Component 4',
  component: Component4,
  parameters: {
    docs: {
      description: {
        component: '### Component 4 (Figma Layer: "Component 4")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:541 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Filter Badge | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component4>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
