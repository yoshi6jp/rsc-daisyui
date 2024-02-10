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
  },
  render: (args) => {
    return <FileInput {...args} />;
  },
};
export const Border: Story = {
  render: (args) => {
    return <FileInput {...args} />;
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    color: "ghost",
    bordered: false,
  },
};
export const FormControlAndLabels: Story = {
  render: (args) => {
    return (
      <FormControl>
        <FormControl>
          <Label>
            <Label.Text>Pick a file</Label.Text>
            <Label.TextAlt>Alt label</Label.TextAlt>
          </Label>

          <FileInput {...args} />
          <Label>
            <Label.Text>Alt label</Label.Text>
            <Label.TextAlt>Alt label</Label.TextAlt>
          </Label>
        </FormControl>
      </FormControl>
    );
  },
};

export const Primary: Story = {
  ...Default,
  args: {
    color: "primary",
  },
};
export const Secondary: Story = {
  ...Default,
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  ...Default,
  args: {
    color: "accent",
  },
};

export const Info: Story = {
  ...Default,
  args: {
    color: "info",
  },
};

export const Success: Story = {
  ...Default,
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  ...Default,
  args: {
    color: "warning",
  },
};

export const Error: Story = {
  ...Default,
  args: {
    color: "error",
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
        <FileInput {...args} size="xs" />
        <FileInput {...args} size="sm" />
        <FileInput {...args} size="md" />
        <FileInput {...args} size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
    placeholder: "You can't touch this",
  },
};
