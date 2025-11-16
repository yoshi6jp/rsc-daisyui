import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  argTypes: toArgTypes(getVariantConfig(Skeleton)),
};

export default meta;
type Story = StoryObj<typeof Skeleton>;
export const Default: Story = {
  args: {
    className: "w-32 h-32",
  },
  render: (args) => <Skeleton {...args} />,
};

export const CircleWithContent: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-52">
      <div className="flex gap-4 items-center">
        <Skeleton {...args} className="w-16 h-16 rounded-full shrink-0" />
        <div className="flex flex-col gap-4">
          <Skeleton {...args} className="h-4 w-20" />
          <Skeleton {...args} className="h-4 w-28" />
        </div>
      </div>
      <Skeleton {...args} className="h-32 w-full" />
    </div>
  ),
};

export const RectangleWithContent: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton {...args} className="h-32 w-full" />
      <Skeleton {...args} className="h-4 w-28" />
      <Skeleton {...args} className="h-4 w-full" />
      <Skeleton {...args} className="h-4 w-full" />
    </div>
  ),
};

export const AnimatedGradientText: Story = {
  args: {
    text: true,
  },
  render: (args) => (
    <div>
      <Skeleton {...args}>AI is thinking harder...</Skeleton>
    </div>
  ),
};
