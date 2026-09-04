import type { Meta, StoryObj } from '@storybook/react';
import { NavModel4 } from './NavModel4';

const meta: Meta<typeof NavModel4> = {
  title: 'BYD Figma Components/NavModel4',
  component: NavModel4,
};

export default meta;
type Story = StoryObj<typeof NavModel4>;

export const Default: Story = {
  args: {
    title: 'Nav Model 4',
  },
};
