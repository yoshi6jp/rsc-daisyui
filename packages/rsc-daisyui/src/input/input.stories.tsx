import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Data Input/Input",
  component: Input,
  argTypes: toArgTypes(getVariantConfig(Input)),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
    bordered: false,
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const Border: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
  },
};

export const Ghost: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "ghost",
    bordered: false,
  },
};

export const FormControlAndLabels: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return (
      <FormControl>
        <Label>
          <Label.Text>What is your name?</Label.Text>
          <Label.TextAlt>Top Right label</Label.TextAlt>
        </Label>
        <Input {...args} />
        <Label>
          <Label.TextAlt>Bottom Left label</Label.TextAlt>
          <Label.TextAlt>Bottom Right label</Label.TextAlt>
        </Label>
      </FormControl>
    );
  },
};
export const PrimaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "primary",
  },
};
export const SecondaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "secondary",
  },
};
export const AccentColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "accent",
  },
};
export const InfoColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "info",
  },
};
export const SuccessColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "success",
  },
};
export const WarningColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "warning",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "error",
  },
};

export const Sizes: Story = {
  args: {
    placeholder: "Type here",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <Input {...args} size="xs" />
        <Input {...args} size="sm" />
        <Input {...args} size="md" />
        <Input {...args} size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: "You can't touch this",
    disabled: true,
  },
};
