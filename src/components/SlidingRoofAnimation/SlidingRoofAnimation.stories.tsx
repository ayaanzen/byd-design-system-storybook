import type { Meta, StoryObj } from '@storybook/react';
import { SlidingRoofAnimation } from './SlidingRoofAnimation';

const meta: Meta<typeof SlidingRoofAnimation> = {
  title: 'BYD Figma Components/SlidingRoofAnimation',
  component: SlidingRoofAnimation,
};

export default meta;
type Story = StoryObj<typeof SlidingRoofAnimation>;

export const Default: Story = {
  args: {
    title: 'Sliding Roof Animation',
  },
};
