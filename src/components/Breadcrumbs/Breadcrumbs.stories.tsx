import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    items: [
      {
        link: "https://example.com",
        text: "Top",
      },
      {
        link: "https://example.com",
        text: "Category",
      },
      {
        link: "https://example.com",
        text: "Item",
      },
    ],
  },
};
