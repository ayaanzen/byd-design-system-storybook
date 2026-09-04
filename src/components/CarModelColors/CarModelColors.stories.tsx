import type { Meta, StoryObj } from '@storybook/react';
import { CarModelColors } from './CarModelColors';

const meta: Meta<typeof CarModelColors> = {
  title: 'BYD Figma Components/CarModelColors',
  component: CarModelColors,
};

export default meta;
type Story = StoryObj<typeof CarModelColors>;

export const Default: Story = {
  args: {
    title: 'Car Model Color Visualizer',
  },
};
