import type { Meta, StoryObj } from '@storybook/react';
import { CarModelColors } from './CarModelColors';

const meta: Meta<typeof CarModelColors> = {
  title: 'BYD Figma Components/Car Model Colors',
  component: CarModelColors,
};

export default meta;
type Story = StoryObj<typeof CarModelColors>;

export const Default: Story = {
  args: {
    modelTitle: 'BYD SEAL Color Visualizer',
  },
};
