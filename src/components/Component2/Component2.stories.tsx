import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Component2 } from './Component2';

const meta: Meta<typeof Component2> = {
  title: 'Figma Library/Component 2',
  component: Component2,
  parameters: {
    docs: {
      description: {
        component: '### Component 2 (Figma Layer: "Component 2")\n\nSpecification metric card with 6 variant groups.\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:456 | N/A |\n| Radius | 12px | --uedp-rounded-xl |'
      }
    }
  },
  argTypes: {
    property1: {
      control: 'select',
      options: ['Group 151', 'Group 156', 'Group 152', 'Group 153', 'Group 154', 'Group 155']
    },
    value: { control: 'text' },
    unit: { control: 'text' },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Component2>;

export const Default: Story = {
  args: { property1: 'Group 151' }
};

export const AllMetrics: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '520px' }}>
      <Component2 property1="Group 151" />
      <Component2 property1="Group 156" />
      <Component2 property1="Group 152" />
      <Component2 property1="Group 153" />
      <Component2 property1="Group 154" />
      <Component2 property1="Group 155" />
    </div>
  )
};
