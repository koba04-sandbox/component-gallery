import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

export const WithError: Story = {
  args: {
    ...defaultArgs,
    label: "username",
    error: "username is required"
  }
}

export const WithErrorInline: Story = {
  args: {
    ...defaultArgs,
    label: "username",
    error: "username is required",
    errorPosition: "inline"
  }
}

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

export const FilledInput: Story = {
  args: {
    ...defaultArgs,
    label: "username",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>("username");

    await userEvent.type(input, "Hello", { delay: 100 });

    expect(input.value).toBe("Hello");
  }
}