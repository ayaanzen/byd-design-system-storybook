import type { Meta, StoryObj } from '@storybook/react';
import { Component23 } from './Component23';

const meta: Meta<typeof Component23> = {
  title: 'Figma Library/Component 23',
  component: Component23,
  argTypes: {
    property1: { control: 'select', options: ['Frame 28', 'Frame 29', 'Frame 30', 'Frame 31', 'Frame 32'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component23>;
export const Default: Story = { args: { property1: 'Frame 28' } };
