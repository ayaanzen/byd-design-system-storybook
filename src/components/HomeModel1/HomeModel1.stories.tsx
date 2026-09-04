import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel1 } from './HomeModel1';

const meta: Meta<typeof HomeModel1> = {
  title: 'BYD Figma Components/HomeModel1',
  component: HomeModel1,
};

export default meta;
type Story = StoryObj<typeof HomeModel1>;

export const Default: Story = {
  args: {
    title: 'Home Model - ATTO 3',
  },
};
