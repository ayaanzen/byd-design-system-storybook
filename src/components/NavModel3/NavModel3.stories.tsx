import type { Meta, StoryObj } from '@storybook/react';
import { NavModel3 } from './NavModel3';

const meta: Meta<typeof NavModel3> = {
  title: 'BYD Figma Components/NavModel3',
  component: NavModel3,
};

export default meta;
type Story = StoryObj<typeof NavModel3>;

export const Default: Story = {
  args: {
    title: 'Nav Model 3',
  },
};
