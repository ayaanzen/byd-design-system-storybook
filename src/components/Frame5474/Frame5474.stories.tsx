import type { Meta, StoryObj } from '@storybook/react';
import { Frame5474 } from './Frame5474';

const meta: Meta<typeof Frame5474> = {
  title: 'Figma Library/Frame 5474',
  component: Frame5474,
  parameters: {
    docs: {
      description: {
        component: '### Frame 5474 (Figma Layer: "Frame 5474")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:822 | N/A |\n| Trim | DYNAMIC | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    trim: { control: 'text' },
    price: { control: 'text' },
    range: { control: 'text' }
  }
};
export default meta;
type Story = StoryObj<typeof Frame5474>;
export const Default: Story = { args: { property1: 'Default' } };
export const Active: Story = { args: { property1: 'Variant2' } };
