import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from './HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'BYD Figma Components/Hero Carousel',
  component: HeroCarousel,
};

export default meta;
type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {};
