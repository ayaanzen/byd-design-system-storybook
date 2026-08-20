import type { Meta, StoryObj } from '@storybook/react';
import { Component14 } from './Component14';

const meta: Meta<typeof Component14> = {
  title: 'Figma Library/Component 14',
  component: Component14,
  parameters: {
    docs: {
      description: {
        component: '### Component 14 (Figma Layer: "Component 14")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:660 | N/A |\n| Radius | 8px | --uedp-rounded-lg |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component14>;
export const Default: Story = { args: { property1: 'Default' } };
