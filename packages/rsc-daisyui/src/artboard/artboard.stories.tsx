import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Artboard } from ".";

const meta: Meta<typeof Artboard> = {
  title: "Layout/Artboard",
  component: Artboard,
  argTypes: toArgTypes(getVariantConfig(Artboard)),
};

export default meta;
type Story = StoryObj<typeof Artboard>;
export const Default: Story = {
  args: {
    children: "320×568",
  },
  render: (args) => {
    return <Artboard {...args} />;
  },
};

export const Size2: Story = {
  ...Default,
  args: {
    size: "2",
    children: "375×667",
  },
};
export const Size3: Story = {
  ...Default,
  args: {
    size: "3",
    children: "414×736",
  },
};
export const Size4: Story = {
  ...Default,
  args: {
    size: "4",
    children: "375×812",
  },
};
export const Size5: Story = {
  ...Default,
  args: {
    size: "5",
    children: "414×896",
  },
};
export const Size6: Story = {
  ...Default,
  args: {
    size: "6",
    children: "320×1024",
  },
};
export const HorizontalSize1: Story = {
  ...Default,
  args: {
    children: "320×568",
    horizontal: true,
  },
};

export const HorizontalSize2: Story = {
  ...Default,
  args: {
    size: "2",
    children: "375×667",
    horizontal: true,
  },
};
export const HorizontalSize3: Story = {
  ...Default,
  args: {
    size: "3",
    children: "414×736",
    horizontal: true,
  },
};
export const HorizontalSize4: Story = {
  ...Default,
  args: {
    size: "4",
    children: "375×812",
    horizontal: true,
  },
};
export const HorizontalSize5: Story = {
  ...Default,
  args: {
    size: "5",
    children: "414×896",
    horizontal: true,
  },
};
export const HorizontalSize6: Story = {
  ...Default,
  args: {
    size: "6",
    children: "320×1024",
    horizontal: true,
  },
};
