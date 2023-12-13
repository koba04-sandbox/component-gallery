import type { Meta, StoryObj } from '@storybook/react';

import { Badges } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Badges',
  component: Badges,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    label: 'Badge'
  },
};
