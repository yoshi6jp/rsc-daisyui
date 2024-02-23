import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { BrowserMockup } from ".";

const meta: Meta<typeof BrowserMockup> = {
  title: "Mockup/Browser",
  component: BrowserMockup,
  argTypes: toArgTypes(getVariantConfig(BrowserMockup)),
};

export default meta;
type Story = StoryObj<typeof BrowserMockup>;

export const Default: Story = {
  args: {
    className: "border-base-300 w-full",
  },
  render: (args) => {
    return (
      <BrowserMockup {...args}>
        <BrowserMockup.Toolbar>https://daisyui.com</BrowserMockup.Toolbar>
        <BrowserMockup.Content className="border-t border-base-300">
          Hello!
        </BrowserMockup.Content>
      </BrowserMockup>
    );
  },
};

export const WithBackgroundColor: Story = {
  args: {
    className: "bg-base-300 w-full",
  },
  render: (args) => {
    return (
      <BrowserMockup {...args}>
        <BrowserMockup.Toolbar>https://daisyui.com</BrowserMockup.Toolbar>
        <BrowserMockup.Content className="bg-base-200">
          Hello!
        </BrowserMockup.Content>
      </BrowserMockup>
    );
  },
};
