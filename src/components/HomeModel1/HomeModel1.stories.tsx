import type { Meta, StoryObj } from '@storybook/react';
import { HomeModel1 } from './HomeModel1';

const meta: Meta<typeof HomeModel1> = {
  title: 'Figma Library/Component 3',
  component: HomeModel1,
  parameters: {
    docs: {
      description: {
        component: '### Component 3 (Figma Layer: "Component 3")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:500 | N/A |\n| Radius | 9999px | --uedp-rounded-full |\n| Type | Toggle Pill | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2'] },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof HomeModel1>;

export const Default: Story = { args: { property1: 'Default' } };
export const Variant2: Story = { args: { property1: 'Variant2' } };
