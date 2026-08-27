import type { Meta, StoryObj } from '@storybook/react';
import { SlidingRoofAnimation } from './SlidingRoofAnimation';

const meta: Meta<typeof SlidingRoofAnimation> = {
  title: 'Figma Library/Component 18',
  component: SlidingRoofAnimation,
  parameters: {
    docs: {
      description: {
        component: '### Component 18 (Figma Layer: "Component 18")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:855 | N/A |\n| Radius | 24px | --uedp-rounded-3xl |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['MacBook Pro 14" - 1', 'MacBook Pro 14" - 2', 'MacBook Pro 14" - 3'] }
  }
};
export default meta;
type Story = StoryObj<typeof SlidingRoofAnimation>;
export const Default: Story = { args: { property1: 'MacBook Pro 14" - 1' } };
