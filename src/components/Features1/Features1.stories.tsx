import type { Meta, StoryObj } from '@storybook/react';
import { Features1 } from './Features1';

const meta: Meta<typeof Features1> = {
  title: 'BYD Figma Components/Features1',
  component: Features1,
};

export default meta;
type Story = StoryObj<typeof Features1>;

export const Default: Story = {
  args: {
    title: 'Features 1 - Exterior Highlights',
  },
};
