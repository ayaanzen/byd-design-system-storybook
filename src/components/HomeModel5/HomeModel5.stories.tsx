import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel5 } from './HomeModel5';

const meta: Meta<typeof HomeModel5> = {
  title: 'Figma Library/Component 7',
  component: HomeModel5,
  parameters: {
    docs: {
      description: {
        component: '### Component 7 (Figma Layer: "Component 7")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:525 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Action Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof HomeModel5>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
