import type { Meta, StoryObj } from '@storybook/react';
import { ModelVariant2 } from './ModelVariant2';

const meta: Meta<typeof ModelVariant2> = {
  title: 'BYD Figma Components/ModelVariant2',
  component: ModelVariant2,
  argTypes: {
    isActive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ModelVariant2>;

export const Default: Story = {
  args: {
    title: 'PREMIUM',
    price: '₹45 70 000',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    title: 'PREMIUM',
    price: '₹45 70 000',
    isActive: true,
  },
};
