import type { Meta, StoryObj } from '@storybook/react';
import { NavModel1 } from './NavModel1';

const meta: Meta<typeof NavModel1> = {
  title: 'Figma Library/Component 9',
  component: NavModel1,
  parameters: {
    docs: {
      description: {
        component: '### Component 9 (Figma Layer: "Component 9")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:550 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof NavModel1>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
