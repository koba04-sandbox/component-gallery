import type { Meta, StoryObj } from '@storybook/react';

import { Step } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Step',
  component: Step,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    items: [
      {
        link: "https://example.com",
        text: "Home",
      },
      {
        link: "https://example.com",
        text: "Shop",
      },
      {
        link: "https://example.com",
        text: "Cart",
      },
      {
        link: "https://example.com",
        text: "Checkout",
        current: true
      },
    ],
  },
};

export const InMiddle: Story = {
  args: {
    items: [
      {
        link: "https://example.com",
        text: "Home",
      },
      {
        link: "https://example.com",
        text: "Shop",
      },
      {
        link: "https://example.com",
        text: "Cart",
        current: true
      },
      {
        link: "https://example.com",
        text: "Checkout",
      },
    ],
  },
};
