import type { Meta, StoryObj } from '@storybook/react';
import { Video1 } from './Video1';

const meta: Meta<typeof Video1> = {
  title: 'BYD Figma Components/Video1',
  component: Video1,
};

export default meta;
type Story = StoryObj<typeof Video1>;

export const Default: Story = {};
