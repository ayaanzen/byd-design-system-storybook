import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel5 } from './HomeModel5';

const meta: Meta<typeof HomeModel5> = {
  title: 'BYD Figma Components/HomeModel5',
  component: HomeModel5,
};

export default meta;
type Story = StoryObj<typeof HomeModel5>;

export const Default: Story = {
  args: {
    title: 'Home Model - DOLPHIN',
  },
};
