import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from './HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'BYD Figma Components/HeroCarousel',
  component: HeroCarousel,
};

export default meta;
type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: {
    title: 'Hero Carousel',
  },
};
