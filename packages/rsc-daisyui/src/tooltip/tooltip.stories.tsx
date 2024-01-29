import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Tooltip, TooltipBase } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  argTypes: toArgTypes(getVariantConfig(TooltipBase)),
  args: {
    tip: "hello",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const ForceOpen: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <div className="my-6">
      <Tooltip {...args}>
        <Button>Force open</Button>
      </Tooltip>
    </div>
  ),
};
export const Top: Story = {
  args: {
    open: true,
    position: "top",
  },
  render: (args) => (
    <div className="my-6">
      <Tooltip {...args}>
        <Button className="capitalize">{args.position}</Button>
      </Tooltip>
    </div>
  ),
};
export const Bottom: Story = {
  ...Top,
  args: {
    open: true,
    position: "bottom",
  },
};
export const Left: Story = {
  ...Top,
  args: {
    open: true,
    position: "left",
  },
};

export const Right: Story = {
  ...Top,
  args: {
    open: true,
    position: "right",
  },
};

export const PrimaryColor: Story = {
  args: {
    open: true,
    color: "primary",
    tip: "primary",
  },
  render: (args) => (
    <div className="my-6">
      <Tooltip {...args}>
        <Button color={args.color}>{args.tip}</Button>
      </Tooltip>
    </div>
  ),
};
export const SecondaryColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "secondary",
    tip: "secondary",
  },
};
export const AccentColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "accent",
    tip: "accent",
  },
};
export const InfoColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "info",
    tip: "info",
  },
};
export const SuccessColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "success",
    tip: "success",
  },
};
export const WarningColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "warning",
    tip: "warning",
  },
};

export const ErrorColor: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "error",
    tip: "error",
  },
};

export const Responsive: Story = {
  ...PrimaryColor,
  args: {
    open: true,
    color: "error",
    tip: "error",
  },
};
