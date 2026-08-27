import type { Meta, StoryObj } from '@storybook/react';
import { NavModel4 } from './NavModel4';

const meta: Meta<typeof NavModel4> = {
  title: 'Figma Library/Component 12',
  component: NavModel4,
  parameters: {
    docs: {
      description: {
        component: '### Component 12 (Figma Layer: "Component 12")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:574 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof NavModel4>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
