import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Features1 } from './Features1';

const meta: Meta<typeof Features1> = {
  title: 'Figma Library/Component 13',
  component: Features1,
  parameters: {
    docs: {
      description: {
        component: '### Component 13 (Figma Layer: "Component 13")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:583 | N/A |\n| Radius | 16px | --uedp-rounded-2xl |\n| Variants | 5 (Default..Variant5) | N/A |'
      }
    }
  },
  argTypes: {
    property1: { control: 'select', options: ['Default', 'Variant2', 'Variant3', 'Variant4', 'Variant5'] },
    title: { control: 'text' },
    stat: { control: 'text' },
    description: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Features1>;
export const Default: Story = { args: { property1: 'Default' } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Features1 property1="Default" />
      <Features1 property1="Variant2" />
      <Features1 property1="Variant3" />
      <Features1 property1="Variant4" />
      <Features1 property1="Variant5" />
    </div>
  )
};
