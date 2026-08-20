import type { Meta, StoryObj } from '@storybook/react';
import { Frame5476 } from './Frame5476';

const meta: Meta<typeof Frame5476> = {
  title: 'Figma Library/Frame 5476',
  component: Frame5476,
  parameters: {
    docs: {
      description: {
        component: '### Frame 5476 (Figma Layer: "Frame 5476")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:848 | N/A |\n| Trim | PERFORMANCE | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
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
type Story = StoryObj<typeof Frame5476>;
export const Default: Story = { args: { property1: 'Default' } };
export const Active: Story = { args: { property1: 'Variant2' } };
