import type { Meta, StoryObj } from '@storybook/react';
import { CarouselSlots1 } from './CarouselSlots1';

const meta: Meta<typeof CarouselSlots1> = {
  title: 'BYD Figma Components/CarouselSlots1',
  component: CarouselSlots1,
};

export default meta;
type Story = StoryObj<typeof CarouselSlots1>;

export const Default: Story = {
  args: {
    title: 'Carousel Slots 1',
  },
};
