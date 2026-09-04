import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel2 } from './HomeModel2';

const meta: Meta<typeof HomeModel2> = {
  title: 'BYD Figma Components/HomeModel2',
  component: HomeModel2,
};

export default meta;
type Story = StoryObj<typeof HomeModel2>;

export const Default: Story = {
  args: {
    title: 'Home Model - SEAL',
  },
};
