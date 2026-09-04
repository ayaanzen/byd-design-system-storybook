import type { Meta, StoryObj } from '@storybook/react';
import { UltraCarousel } from './UltraCarousel';

const meta: Meta<typeof UltraCarousel> = {
  title: 'BYD Figma Components/UltraCarousel',
  component: UltraCarousel,
};

export default meta;
type Story = StoryObj<typeof UltraCarousel>;

export const Default: Story = {
  args: {
    title: 'Ultra Carousel',
  },
};
