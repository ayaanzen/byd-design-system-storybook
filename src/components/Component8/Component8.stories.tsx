import type { Meta, StoryObj } from '@storybook/react';
import { Component8 } from './Component8';

const meta: Meta<typeof Component8> = {
  title: 'Figma Library/Component 8',
  component: Component8,
  parameters: {
    docs: {
      description: {
        component: '### Component 8 (Figma Layer: "Component 8")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:533 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component8>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
