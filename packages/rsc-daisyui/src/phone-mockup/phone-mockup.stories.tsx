import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { PhoneMockup } from ".";

const meta: Meta<typeof PhoneMockup> = {
  title: "Mockup/Phone",
  component: PhoneMockup,
  argTypes: toArgTypes(getVariantConfig(PhoneMockup)),
};

export default meta;
type Story = StoryObj<typeof PhoneMockup>;

export const Default: Story = {
  render: (args) => {
    return (
      <PhoneMockup {...args}>
        <PhoneMockup.Camera />
        <PhoneMockup.Display className="text-white grid place-content-center">
          It's Glowtime.
        </PhoneMockup.Display>
      </PhoneMockup>
    );
  },
};

export const ColorAndWallpaper: Story = {
  args: {
    className: "border-[#ff8938]",
  },
  render: (args) => {
    return (
      <PhoneMockup {...args}>
        <PhoneMockup.Camera />
        <PhoneMockup.Display>
          <img
            alt="wallpaper"
            src="https://img.daisyui.com/images/stock/453966.webp"
          />
        </PhoneMockup.Display>
      </PhoneMockup>
    );
  },
};
