import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
    shape: "squircle",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Heart: Story = {
  ...Default,
  args: {
    shape: "heart",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Hexagon: Story = {
  ...Default,
  args: {
    shape: "hexagon",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Hexagon2: Story = {
  ...Default,
  args: {
    shape: "hexagon-2",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Decagon: Story = {
  ...Default,
  args: {
    shape: "decagon",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Pentagon: Story = {
  ...Default,
  args: {
    shape: "pentagon",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Diamond: Story = {
  ...Default,
  args: {
    shape: "diamond",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Square: Story = {
  ...Default,
  args: {
    shape: "square",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Circle: Story = {
  ...Default,
  args: {
    shape: "circle",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Parallelogram: Story = {
  ...Default,
  args: {
    shape: "parallelogram",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Parallelogram2: Story = {
  ...Default,
  args: {
    shape: "parallelogram-2",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Parallelogram3: Story = {
  ...Default,
  args: {
    shape: "parallelogram-3",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Parallelogram4: Story = {
  ...Default,
  args: {
    shape: "parallelogram-4",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Star: Story = {
  ...Default,
  args: {
    shape: "star",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Star2: Story = {
  ...Default,
  args: {
    shape: "star-2",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};

export const Triangle: Story = {
  ...Default,
  args: {
    shape: "triangle",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Triangle2: Story = {
  ...Default,
  args: {
    shape: "triangle-2",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Triangle3: Story = {
  ...Default,
  args: {
    shape: "triangle-3",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
export const Triangle4: Story = {
  ...Default,
  args: {
    shape: "triangle-4",
    src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  },
};
