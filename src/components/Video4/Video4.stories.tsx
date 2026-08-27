import type { Meta, StoryObj } from '@storybook/react';
import { Video4 } from './Video4';

const meta: Meta<typeof Video4> = {
  title: 'Figma Library/Component 22',
  component: Video4,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Video4>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
