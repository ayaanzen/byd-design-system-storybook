import type { Meta, StoryObj } from '@storybook/react';
import { Features2 } from './Features2';

const meta: Meta<typeof Features2> = {
  title: 'BYD Figma Components/Features2',
  component: Features2,
};

export default meta;
type Story = StoryObj<typeof Features2>;

export const Default: Story = {
  args: {
    title: 'Features 2 - Interior Luxury',
  },
};
