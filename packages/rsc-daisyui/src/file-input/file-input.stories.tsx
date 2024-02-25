import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { FileInput } from ".";

const meta: Meta<typeof FileInput> = {
  title: "Data Input/FileInput",
  component: FileInput,
  argTypes: toArgTypes(getVariantConfig(FileInput)),
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    bordered: false,
    className: "w-full max-w-xs",
  },
  render: (args) => {
    return <FileInput {...args} />;
  },
};
export const Border: Story = {
  args: {
    className: "w-full max-w-xs",
  },
  render: (args) => {
    return <FileInput {...args} />;
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    color: "ghost",
    bordered: false,
    className: "w-full max-w-xs",
  },
};
export const FormControlAndLabels: Story = {
  render: (args) => {
    return (
      <FormControl className="w-full max-w-xs">
        <Label>
          <Label.Text>Pick a file</Label.Text>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>

        <FileInput {...args} />
        <Label>
          <Label.TextAlt>Alt label</Label.TextAlt>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>
      </FormControl>
    );
  },
};

export const Primary: Story = {
  ...Default,
  args: {
    color: "primary",
    className: "w-full max-w-xs",
  },
};
export const Secondary: Story = {
  ...Default,
  args: {
    color: "secondary",
    className: "w-full max-w-xs",
  },
};

export const Accent: Story = {
  ...Default,
  args: {
    color: "accent",
    className: "w-full max-w-xs",
  },
};

export const Info: Story = {
  ...Default,
  args: {
    color: "info",
    className: "w-full max-w-xs",
  },
};

export const Success: Story = {
  ...Default,
  args: {
    color: "success",
    className: "w-full max-w-xs",
  },
};

export const Warning: Story = {
  ...Default,
  args: {
    color: "warning",
    className: "w-full max-w-xs",
  },
};

export const Error: Story = {
  ...Default,
  args: {
    color: "error",
    className: "w-full max-w-xs",
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
      <div className="flex flex-col gap-4 w-full items-center">
        <FileInput {...args} className="w-full max-w-xs" size="xs" />
        <FileInput {...args} className="w-full max-w-xs" size="sm" />
        <FileInput {...args} className="w-full max-w-xs" size="md" />
        <FileInput {...args} className="w-full max-w-xs" size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
    placeholder: "You can't touch this",
    className: "w-full max-w-xs",
  },
};
