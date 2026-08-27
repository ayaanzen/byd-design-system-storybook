import type { Meta, StoryObj } from '@storybook/react';
import { Features2 } from './Features2';

const meta: Meta<typeof Features2> = {
  title: 'Figma Library/Component 14',
  component: Features2,
  parameters: {
    docs: {
      description: {
        component: '### Component 14 (Figma Layer: "Component 14")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:660 | N/A |\n| Radius | 8px | --uedp-rounded-lg |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5'] }
  }
};
export default meta;
type Story = StoryObj<typeof Features2>;
export const Default: Story = { args: { property1: 'Default' } };
