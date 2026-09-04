import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel3 } from './HomeModel3';

const meta: Meta<typeof HomeModel3> = {
  title: 'BYD Figma Components/HomeModel3',
  component: HomeModel3,
};

export default meta;
type Story = StoryObj<typeof HomeModel3>;

export const Default: Story = {
  args: {
    title: 'Home Model - SEALION 7',
  },
};
