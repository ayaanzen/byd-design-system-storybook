import type { Meta, StoryObj } from '@storybook/react';
import { Features5 } from './Features5';

const meta: Meta<typeof Features5> = {
  title: 'BYD Figma Components/Features5',
  component: Features5,
};

export default meta;
type Story = StoryObj<typeof Features5>;

export const Default: Story = {
  args: {
    title: 'Features 5 - Safety & Drivetrain',
  },
};
