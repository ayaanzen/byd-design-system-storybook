import type { Meta, StoryObj } from '@storybook/react';
import { CarouselSlots2 } from './CarouselSlots2';

const meta: Meta<typeof CarouselSlots2> = {
  title: 'Figma Library/Component 24',
  component: CarouselSlots2,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5'] }
  }
};
export default meta;
type Story = StoryObj<typeof CarouselSlots2>;
export const Default: Story = { args: { property1: 'Default' } };
