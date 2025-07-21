import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Mask } from ".";

const meta: Meta<typeof Mask> = {
  title: "Layout/Mask",
  component: Mask,
  argTypes: toArgTypes(getVariantConfig(Mask)),
};

export default meta;
type Story = StoryObj<typeof Mask>;

export const Default: Story = {
  args: {
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
  render: (args) => {
    return <Mask {...args} as="img" />;
  },
};
export const Squircle: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "squircle",
  },
};

export const Heart: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "heart",
  },
};

export const Hexagon: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "hexagon",
  },
};

export const Hexagon2: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "hexagon-2",
  },
};

export const Decagon: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "decagon",
  },
};
export const Pentagon: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "pentagon",
  },
};
export const Diamond: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "diamond",
  },
};
export const Square: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "square",
  },
};
export const Circle: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "circle",
  },
};

export const Star: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "star",
  },
};
export const Star2: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "star-2",
  },
};

export const Triangle: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "triangle",
  },
};
export const Triangle2: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "triangle-2",
  },
};
export const Triangle3: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "triangle-3",
  },
};
export const Triangle4: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: "triangle-4",
  },
};
