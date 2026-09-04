import type { Meta, StoryObj } from '@storybook/react';
import { ModelVariant1 } from './ModelVariant1';

const meta: Meta<typeof ModelVariant1> = {
  title: 'BYD Figma Components/ModelVariant1',
  component: ModelVariant1,
  argTypes: {
    isActive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ModelVariant1>;

export const Default: Story = {
  args: {
    title: 'DYNAMIC',
    price: '₹41 00 000',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    title: 'DYNAMIC',
    price: '₹41 00 000',
    isActive: true,
  },
};
