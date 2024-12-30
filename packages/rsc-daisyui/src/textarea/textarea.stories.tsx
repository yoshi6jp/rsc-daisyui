import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Data Input/Textarea",
  component: Textarea,
  argTypes: toArgTypes(getVariantConfig(Textarea)),
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    bordered: false,
    placeholder: "Bio",
  },
  render: (args) => {
    return <Textarea {...args} />;
  },
};

export const Border: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    bordered: false,
    placeholder: "Bio",
    color: "ghost",
  },
};

export const FormControlAndLabels: Story = {
  args: {
    placeholder: "Bio",
    className: "h-24",
  },
  render: (args) => {
    return (
      <FormControl>
        <Label>
          <Label.Text>Your bio</Label.Text>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>
        <Textarea {...args} />
        <Label>
          <Label.TextAlt>Your bio</Label.TextAlt>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>
      </FormControl>
    );
  },
};

export const PrimaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "primary",
  },
};
export const SecondaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "secondary",
  },
};
export const AccentColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "accent",
  },
};
export const InfoColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "info",
  },
};
export const SuccessColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "success",
  },
};
export const WarningColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "warning",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    color: "error",
  },
};

export const Sizes: Story = {
  args: {
    placeholder: "Bio",
    className: "w-full max-w-xs",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <Textarea {...args} size="xs" />
        <Textarea {...args} size="sm" />
        <Textarea {...args} size="md" />
        <Textarea {...args} size="lg" />
      </div>
    );
  },
};
export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    bordered: false,
    disabled: true,
  },
};
