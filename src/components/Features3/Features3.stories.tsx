import type { Meta, StoryObj } from '@storybook/react';
import { Features3 } from './Features3';

const meta: Meta<typeof Features3> = {
  title: 'BYD Figma Components/Features3',
  component: Features3,
};

export default meta;
type Story = StoryObj<typeof Features3>;

export const Default: Story = {
  args: {
    title: 'Features 3 - Smart Cockpit',
  },
};
