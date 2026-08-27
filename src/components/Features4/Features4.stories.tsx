import type { Meta, StoryObj } from '@storybook/react';
import { Features4 } from './Features4';

const meta: Meta<typeof Features4> = {
  title: 'Figma Library/Component 16',
  component: Features4,
  parameters: {
    docs: {
      description: {
        component: '### Component 16 (Figma Layer: "Component 16")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:773 | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3'] }
  }
};
export default meta;
type Story = StoryObj<typeof Features4>;
export const Default: Story = { args: { property1: 'Default' } };
