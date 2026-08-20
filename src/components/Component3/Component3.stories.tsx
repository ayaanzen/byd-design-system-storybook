import type { Meta, StoryObj } from '@storybook/react';
import { Component3 } from './Component3';

const meta: Meta<typeof Component3> = {
  title: 'Figma Library/Component 3',
  component: Component3,
  parameters: {
    docs: {
      description: {
        component: '### Component 3 (Figma Layer: "Component 3")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:500 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Toggle Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component3>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
