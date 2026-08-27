import type { Meta, StoryObj } from '@storybook/react';
import { Video3 } from './Video3';

const meta: Meta<typeof Video3> = {
  title: 'Figma Library/Component 21',
  component: Video3,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Video3>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
