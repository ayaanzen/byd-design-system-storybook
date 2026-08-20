import type { Meta, StoryObj } from '@storybook/react';
import { Component21 } from './Component21';

const meta: Meta<typeof Component21> = {
  title: 'Figma Library/Component 21',
  component: Component21,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Component21>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
