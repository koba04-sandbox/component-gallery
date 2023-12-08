import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: "grey",
      values: [
        { name: "grey", value: "hsl(216, 33%, 97%)" }
      ]
    },
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof Input>;

const defaultArgs = {
  placeholder: "Enter something"
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultArgs,
    label: "username"
  },
};

export const InLabel: Story = {
  args: {
    ...defaultArgs,
    label: "username",
    labelPosition: "in"
  }
}

export const OverlapLabel: Story = {
  args: {
    ...defaultArgs,
    label: "username",
    labelPosition: "overlap"
  }
}