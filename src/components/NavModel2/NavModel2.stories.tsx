import type { Meta, StoryObj } from '@storybook/react';
import { NavModel2 } from './NavModel2';

const meta: Meta<typeof NavModel2> = {
  title: 'BYD Figma Components/NavModel2',
  component: NavModel2,
};

export default meta;
type Story = StoryObj<typeof NavModel2>;

export const Default: Story = {
  args: {
    title: 'Nav Model 2',
  },
};
