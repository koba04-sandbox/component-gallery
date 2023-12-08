import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    label: 'click'
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    label: 'click'
  },
};
