import type { Meta, StoryObj } from '@storybook/react';
import { Component7 } from './Component7';

const meta: Meta<typeof Component7> = {
  title: 'Figma Library/Component 7',
  component: Component7,
  parameters: {
    docs: {
      description: {
        component: '### Component 7 (Figma Layer: "Component 7")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:525 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component7>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
