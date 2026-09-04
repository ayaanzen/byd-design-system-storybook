import type { Meta, StoryObj } from '@storybook/react';
import { CarouselSlots2 } from './CarouselSlots2';

const meta: Meta<typeof CarouselSlots2> = {
  title: 'BYD Figma Components/CarouselSlots2',
  component: CarouselSlots2,
};

export default meta;
type Story = StoryObj<typeof CarouselSlots2>;

export const Default: Story = {
  args: {
    title: 'Carousel Slots 2',
  },
};
