import type { Meta, StoryObj } from '@storybook/react';
import { Features5 } from './Features5';

const meta: Meta<typeof Features5> = {
  title: 'Figma Library/Component 17',
  component: Features5,
  parameters: {
    docs: {
      description: {
        component: '### Component 17 (Figma Layer: "Component 17")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:814 | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3'] }
  }
};
export default meta;
type Story = StoryObj<typeof Features5>;
export const Default: Story = { args: { property1: 'Default' } };
