import type { Meta, StoryObj } from '@storybook/react';
import { CarModelColors } from './CarModelColors';

const meta: Meta<typeof CarModelColors> = {
  title: 'Figma Library/Component 25',
  component: CarModelColors,
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
type Story = StoryObj<typeof CarModelColors>;
export const Default: Story = { args: { property1: 'Default' } };
export const CosmosBlack: Story = { args: { property1: 'Variant2' } };
export const AuroraWhite: Story = { args: { property1: 'Variant3' } };
export const SharkGray: Story = { args: { property1: 'Variant4' } };
