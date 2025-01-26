import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  argTypes: toArgTypes(getVariantConfig(Progress)),
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    className: "w-56",
    max: 100,
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-2">
        <Progress {...args} value={0} />
        <Progress {...args} value={10} />
        <Progress {...args} value={40} />
        <Progress {...args} value={70} />
        <Progress {...args} value={100} />
      </div>
    );
  },
};

export const PrimaryColor: Story = {
  ...Default,
  args: {
    color: "primary",
    className: "w-56",
    max: 100,
  },
};

export const SecondaryColor: Story = {
  ...Default,
  args: {
    color: "secondary",
    className: "w-56",
    max: 100,
  },
};

export const AccentColor: Story = {
  ...Default,
  args: {
    color: "accent",
    className: "w-56",
    max: 100,
  },
};

export const NeutralColor: Story = {
  ...Default,
  args: {
    color: "neutral",
    className: "w-56",
    max: 100,
  },
};

export const InfoColor: Story = {
  ...Default,
  args: {
    color: "info",
    className: "w-56",
    max: 100,
  },
};

export const SuccessColor: Story = {
  ...Default,
  args: {
    color: "success",
    className: "w-56",
    max: 100,
  },
};

export const WarningColor: Story = {
  ...Default,
  args: {
    color: "warning",
    className: "w-56",
    max: 100,
  },
};

export const ErrorColor: Story = {
  ...Default,
  args: {
    color: "error",
    className: "w-56",
    max: 100,
  },
};

export const Indeterminate: Story = {
  args: {
    className: "w-56",
    max: 100,
  },
  render: (args) => {
    return <Progress {...args} />;
  },
};
