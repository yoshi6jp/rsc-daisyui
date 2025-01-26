import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Data Input/Radio",
  component: Radio,
  argTypes: toArgTypes(getVariantConfig(Radio)),
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "radio-1",
  },
  render: (args) => {
    return (
      <>
        <Radio {...args} defaultChecked />
        <Radio {...args} />
      </>
    );
  },
};
export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <>
        <Radio {...args} defaultChecked size="xs" />
        <Radio {...args} defaultChecked size="sm" />
        <Radio {...args} defaultChecked size="md" />
        <Radio {...args} defaultChecked size="lg" />
        <Radio {...args} defaultChecked size="xl" />
      </>
    );
  },
};
export const NeutralColor: Story = {
  ...Default,
  args: {
    name: "radio-neutral",
    color: "neutral",
  },
};
export const PrimaryColor: Story = {
  ...Default,
  args: {
    name: "radio-2",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  ...Default,
  args: {
    name: "radio-3",
    color: "secondary",
  },
};

export const AccentColor: Story = {
  ...Default,
  args: {
    name: "radio-4",
    color: "accent",
  },
};

export const SuccessColor: Story = {
  ...Default,
  args: {
    name: "radio-5",
    color: "success",
  },
};

export const WarningColor: Story = {
  ...Default,
  args: {
    name: "radio-6",
    color: "warning",
  },
};

export const InfoColor: Story = {
  ...Default,
  args: {
    name: "radio-7",
    color: "info",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    name: "radio-8",
    color: "error",
  },
};
export const Disabled: Story = {
  ...Default,
  args: {
    name: "radio-9",
    disabled: true,
  },
};
export const CustomColors: Story = {
  args: {
    name: "radio-11",
  },
  render: (args) => {
    return (
      <>
        <Radio
          {...args}
          defaultChecked
          className="bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600"
        />
        <Radio
          {...args}
          className="bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
        />
      </>
    );
  },
};
