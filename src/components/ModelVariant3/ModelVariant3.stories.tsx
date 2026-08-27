import type { Meta, StoryObj } from '@storybook/react';
import { ModelVariant3 } from './ModelVariant3';

const meta: Meta<typeof ModelVariant3> = {
  title: 'Figma Library/Frame 5476',
  component: ModelVariant3,
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
type Story = StoryObj<typeof ModelVariant3>;
export const Default: Story = { args: { property1: 'Default' } };
export const Active: Story = { args: { property1: 'Variant2' } };
