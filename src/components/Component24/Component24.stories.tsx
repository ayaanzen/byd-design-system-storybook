import type { Meta, StoryObj } from '@storybook/react';
import { Component24 } from './Component24';

const meta: Meta<typeof Component24> = {
  title: 'Figma Library/Component 24',
  component: Component24,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component24>;
export const Default: Story = { args: { property1: 'Default' } };
