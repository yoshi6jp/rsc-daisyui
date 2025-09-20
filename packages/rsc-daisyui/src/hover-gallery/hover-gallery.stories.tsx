import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { Card } from "..";
import { toArgTypes } from "../storybook-helpers";
import { HoverGallery } from "./hover-gallery";

const meta: Meta<typeof HoverGallery> = {
  title: "Data Display/Hover Gallery",
  component: HoverGallery,
  argTypes: toArgTypes(getVariantConfig(HoverGallery)),
};

export default meta;
type Story = StoryObj<typeof HoverGallery>;

export const Default: Story = {
  name: "Hover Gallery",
  args: {
    className: "max-w-60",
  },
  render: (args) => (
    <HoverGallery {...args}>
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
      <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
    </HoverGallery>
  ),
};

export const InACard: Story = {
  name: "Hover Gallery in a card",
  args: {
    className: "max-w-60",
  },
  render: (args) => (
    <Card size="sm" className="bg-base-200 max-w-60 shadow">
      <HoverGallery {...args}>
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
      </HoverGallery>
      <Card.Body>
        <Card.Title className="flex justify-between">
          daisyUI Hat
          <span className="font-normal">$25</span>
        </Card.Title>
        <p>High Quality classic cap hat with stitch logo</p>
      </Card.Body>
    </Card>
  ),
};
