import type { Meta, StoryObj } from '@storybook/react';
import { Features4 } from './Features4';

const meta: Meta<typeof Features4> = {
  title: 'BYD Figma Components/Features4',
  component: Features4,
};

export default meta;
type Story = StoryObj<typeof Features4>;

export const Default: Story = {
  args: {
    title: 'Features 4 - Charging & Battery',
  },
};
