import type { Meta, StoryObj } from '@storybook/react';
import { Component22 } from './Component22';

const meta: Meta<typeof Component22> = {
  title: 'Figma Library/Component 22',
  component: Component22,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Component22>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
