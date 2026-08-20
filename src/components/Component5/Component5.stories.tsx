import type { Meta, StoryObj } from '@storybook/react';
import { Component5 } from './Component5';

const meta: Meta<typeof Component5> = {
  title: 'Figma Library/Component 5',
  component: Component5,
  parameters: {
    docs: {
      description: {
        component: '### Component 5 (Figma Layer: "Component 5")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:509 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component5>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
