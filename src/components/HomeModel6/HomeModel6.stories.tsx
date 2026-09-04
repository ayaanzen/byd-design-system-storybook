import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel6 } from './HomeModel6';

const meta: Meta<typeof HomeModel6> = {
  title: 'BYD Figma Components/HomeModel6',
  component: HomeModel6,
};

export default meta;
type Story = StoryObj<typeof HomeModel6>;

export const Default: Story = {
  args: {
    title: 'Home Model - TANG',
  },
};
