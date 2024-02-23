import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { WindowMockup } from ".";

const meta: Meta<typeof WindowMockup> = {
  title: "Mockup/Window",
  component: WindowMockup,
  argTypes: toArgTypes(getVariantConfig(WindowMockup)),
};

export default meta;
type Story = StoryObj<typeof WindowMockup>;

export const Default: Story = {
  args: {
    className: "border-base-300 w-full",
  },
  render: (args) => {
    return (
      <WindowMockup {...args}>
        <WindowMockup.Content className="border-t border-base-300">
          Hello!
        </WindowMockup.Content>
      </WindowMockup>
    );
  },
};

export const WithBackgroundColor: Story = {
  args: {
    className: "bg-base-300 w-full",
  },
  render: (args) => {
    return (
      <WindowMockup {...args}>
        <WindowMockup.Content className="bg-base-200">
          Hello!
        </WindowMockup.Content>
      </WindowMockup>
    );
  },
};
