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
    className: "border-primary",
  },
  render: (args) => {
    return (
      <PhoneMockup {...args}>
        <PhoneMockup.Camera />
        <PhoneMockup.Display>
          <img
            alt="wallpaper"
            src="https://www.iclarified.com/images/news/94911/453966/453966.jpg"
          />
        </PhoneMockup.Display>
      </PhoneMockup>
    );
  },
};
