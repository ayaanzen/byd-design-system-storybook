import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Component1 } from './Component1';

const meta: Meta<typeof Component1> = {
  title: 'Figma Library/Component 1',
  component: Component1,
  parameters: {
    docs: {
      description: {
        component: '### Component 1 (Figma Layer: "Component 1")\n\n| Property | Value | Bound Variable |\n| :--- | :--- | :--- |\n| Node ID | 13:328 | N/A |\n| Variants | 6 (Frame 26..31) | N/A |\n| Radius | 16px | --uedp-rounded-2xl |'
      }
    }
  },
  argTypes: {
    property1: {
      control: 'select',
      options: ['Frame 26', 'Frame 27', 'Frame 28', 'Frame 29', 'Frame 30', 'Frame 31'],
    },
    label: { control: 'text' },
    badge: { control: 'text' },
    active: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Component1>;

export const Default: Story = {
  args: {
    property1: 'Frame 26',
    label: 'BYD SEAL Dynamic',
    badge: 'EV SEDAN',
    active: true
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Component1 property1="Frame 26" label="SEAL DYNAMIC" active />
      <Component1 property1="Frame 27" label="SEAL PREMIUM" />
      <Component1 property1="Frame 28" label="SEAL PERFORMANCE" />
      <Component1 property1="Frame 29" label="ATTO 3 EXTENDED" />
      <Component1 property1="Frame 30" label="DOLPHIN SURF" />
      <Component1 property1="Frame 31" label="SEALION 7" />
    </div>
  )
};
