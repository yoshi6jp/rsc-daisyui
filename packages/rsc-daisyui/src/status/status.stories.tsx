import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Status } from ".";

const meta: Meta<typeof Status> = {
  title: "Data Display/Status",
  component: Status,
  argTypes: toArgTypes(getVariantConfig(Status)),
};
export default meta;
type Story = StoryObj<typeof Status>;

export const Default: Story = {
  render: (args) => <Status {...args} />,
};

export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => (
    <>
      <Status {...args} size="xs" />
      <Status {...args} size="sm" />
      <Status {...args} size="md" />
      <Status {...args} size="lg" />
      <Status {...args} size="xl" />
    </>
  ),
};

export const Colors: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => (
    <>
      <Status {...args} color="primary" />
      <Status {...args} color="secondary" />
      <Status {...args} color="accent" />
      <Status {...args} color="neutral" />
      <Status {...args} color="info" />
      <Status {...args} color="success" />
      <Status {...args} color="warning" />
      <Status {...args} color="error" />
    </>
  ),
};

export const PingAnimation: Story = {
  args: {
    color: "error",
  },
  render: (args) => (
    <>
      <div className="inline-grid *:[grid-area:1/1]">
        <Status {...args} className="animate-ping"></Status>
        <Status {...args}></Status>
      </div>
      Server is down
    </>
  ),
};

export const BounceAnimation: Story = {
  args: {
    color: "info",
    className: "animate-bounce",
  },
  render: (args) => (
    <>
      <Status {...args}></Status>
      Unread messages
    </>
  ),
};
