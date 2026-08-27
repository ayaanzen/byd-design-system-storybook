import type { Meta, StoryObj } from '@storybook/react';
import { Video1 } from './Video1';

const meta: Meta<typeof Video1> = {
  title: 'Figma Library/Component 19',
  component: Video1,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    active: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Video1>;
export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
