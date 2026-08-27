import type { Meta, StoryObj } from '@storybook/react';
import { UltraCarousel } from './UltraCarousel';

const meta: Meta<typeof UltraCarousel> = {
  title: 'Figma Library/Component 23',
  component: UltraCarousel,
  argTypes: {
    property1: { control: 'select', options: ['Frame 28', 'Frame 29', 'Frame 30', 'Frame 31', 'Frame 32'] }
  }
};
export default meta;
type Story = StoryObj<typeof UltraCarousel>;
export const Default: Story = { args: { property1: 'Frame 28' } };
