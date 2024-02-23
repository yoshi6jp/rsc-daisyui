import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Artboard } from "..";
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
        <PhoneMockup.Display className="display">
          <Artboard size="1">Hi.</Artboard>
        </PhoneMockup.Display>
      </PhoneMockup>
    );
  },
};

export const WithColor: Story = {
  ...Default,
  args: {
    className: "border-primary",
  },
};
