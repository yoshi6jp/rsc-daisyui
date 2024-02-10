import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Range } from ".";

const meta: Meta<typeof Range> = {
  title: "Data Input/Range",
  component: Range,
  argTypes: toArgTypes(getVariantConfig(Range)),
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 40,
    className: "max-w-xs",
  },
  render: (args) => {
    return <Range {...args} />;
  },
};

export const StepAndMeasure: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 25,
    step: 25,
  },
  render: (args) => {
    return (
      <div className="w-full max-w-xs">
        <Range {...args} />
        <Range.Measure count={5} />
      </div>
    );
  },
};

export const PrimaryColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "secondary",
  },
};
export const AccentColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "accent",
  },
};
export const SuccessColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "success",
  },
};
export const WarningColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "warning",
  },
};
export const InfoColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "info",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: "error",
  },
};

export const Sizes: Story = {
  args: {
    min: 0,
    max: 100,
    className: "max-w-xs",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },

  render: (args) => {
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <Range {...args} defaultValue={40} size="xs" />
        <Range {...args} defaultValue={50} size="sm" />
        <Range {...args} defaultValue={60} size="md" />
        <Range {...args} defaultValue={70} size="lg" />
      </div>
    );
  },
};
