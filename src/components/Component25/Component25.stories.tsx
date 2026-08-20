import type { Meta, StoryObj } from '@storybook/react';
import { Component25 } from './Component25';

const meta: Meta<typeof Component25> = {
  title: 'Figma Library/Component 25',
  component: Component25,
  parameters: {
    docs: {
      description: {
        component: '### Component 25 (Figma Layer: "Component 25")\n\n360-degree vehicle color visualizer.\n| Variant | Name | Color |\n| :--- | :--- | :--- |\n| Default | ATLANTIS GRAY | #4B5563 |\n| Variant2 | COSMOS BLACK | #0F172A |\n| Variant3 | AURORA WHITE | #F8FAFC |\n| Variant4 | SHARK GRAY | #64748B |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4'] }
  }
};
export default meta;
type Story = StoryObj<typeof Component25>;
export const Default: Story = { args: { property1: 'Default' } };
export const CosmosBlack: Story = { args: { property1: 'Variant2' } };
export const AuroraWhite: Story = { args: { property1: 'Variant3' } };
export const SharkGray: Story = { args: { property1: 'Variant4' } };
