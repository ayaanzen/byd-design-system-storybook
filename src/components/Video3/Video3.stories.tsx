import type { Meta, StoryObj } from '@storybook/react';
import { Video3 } from './Video3';

const meta: Meta<typeof Video3> = {
  title: 'BYD Figma Components/Video3',
  component: Video3,
};

export default meta;
type Story = StoryObj<typeof Video3>;

export const Default: Story = {
  args: {
    title: 'Video Preview 3',
  },
};
