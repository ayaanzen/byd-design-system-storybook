import type { Meta, StoryObj } from '@storybook/react';
import { Component10 } from './Component10';

const meta: Meta<typeof Component10> = {
  title: 'Figma Library/Component 10',
  component: Component10,
  parameters: {
    docs: {
      description: {
        component: '### Component 10 (Figma Layer: "Component 10")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:558 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component10>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
