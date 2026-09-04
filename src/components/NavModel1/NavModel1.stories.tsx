import type { Meta, StoryObj } from '@storybook/react';
import { NavModel1 } from './NavModel1';

const meta: Meta<typeof NavModel1> = {
  title: 'BYD Figma Components/NavModel1',
  component: NavModel1,
};

export default meta;
type Story = StoryObj<typeof NavModel1>;

export const Default: Story = {
  args: {
    title: 'Nav Model 1',
  },
};
