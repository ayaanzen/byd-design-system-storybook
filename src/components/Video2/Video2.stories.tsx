import type { Meta, StoryObj } from '@storybook/react';
import { Video2 } from './Video2';

const meta: Meta<typeof Video2> = {
  title: 'Figma Library/Component 20',
  component: Video2,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Video2>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
