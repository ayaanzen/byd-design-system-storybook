import type { Meta, StoryObj } from '@storybook/react';
import { ModelVariant3 } from './ModelVariant3';

const meta: Meta<typeof ModelVariant3> = {
  title: 'BYD Figma Components/ModelVariant3',
  component: ModelVariant3,
  argTypes: {
    isActive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ModelVariant3>;

export const Default: Story = {
  args: {
    title: 'PERFORMANCE',
    price: '₹53 15 000',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    title: 'PERFORMANCE',
    price: '₹53 15 000',
    isActive: true,
  },
};
