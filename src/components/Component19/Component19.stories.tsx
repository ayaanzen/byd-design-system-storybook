import type { Meta, StoryObj } from '@storybook/react';
import { Component19 } from './Component19';

const meta: Meta<typeof Component19> = {
  title: 'Figma Library/Component 19',
  component: Component19,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Component19>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
