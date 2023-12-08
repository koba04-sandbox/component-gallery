import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from './InputGroup'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'InputGroup',
  component: InputGroup,
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
    onSubmit: { action: 'clicked' }
  },
} satisfies Meta<typeof InputGroup>;

const defaultArgs = {
  placeholder: "Enter something"
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    ...defaultArgs,
    label: "Signup"
  },
};
