import type { Meta, StoryObj } from '@storybook/react';
import { NavModel3 } from './NavModel3';

const meta: Meta<typeof NavModel3> = {
  title: 'Figma Library/Component 11',
  component: NavModel3,
  parameters: {
    docs: {
      description: {
        component: '### Component 11 (Figma Layer: "Component 11")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:566 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof NavModel3>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
