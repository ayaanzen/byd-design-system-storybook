import type { Meta, StoryObj } from '@storybook/react';
import { ModelVariant2 } from './ModelVariant2';

const meta: Meta<typeof ModelVariant2> = {
  title: 'Figma Library/Frame 5475',
  component: ModelVariant2,
  parameters: {
    docs: {
      description: {
        component: '### Frame 5475 (Figma Layer: "Frame 5475")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 46:835 | N/A |\n| Trim | PREMIUM | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
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
type Story = StoryObj<typeof ModelVariant2>;
export const Default: Story = { args: { property1: 'Default' } };
export const Active: Story = { args: { property1: 'Variant2' } };
