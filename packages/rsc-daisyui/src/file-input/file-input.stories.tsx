import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from "..";
import { FileInput } from ".";

const meta: Meta<typeof FileInput> = {
  title: "Data Input/File Input",
  component: FileInput,
  argTypes: toArgTypes(getVariantConfig(FileInput)),
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  render: (args) => {
    return <FileInput {...args} />;
  },
};

export const Ghost: Story = {
  ...Default,
  args: {
    ghost: true,
  },
};
export const FieldsetAntLabel: Story = {
  render: (args) => {
    return (
      <Fieldset>
        <Fieldset.Legend>Pick a file</Fieldset.Legend>
        <FileInput {...args} />
        <Fieldset.Label>Max size 2MB</Fieldset.Label>
      </Fieldset>
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
      <div className="flex flex-col gap-4 w-full items-center">
        <FileInput {...args} size="xs" />
        <FileInput {...args} size="sm" />
        <FileInput {...args} size="md" />
        <FileInput {...args} size="lg" />
        <FileInput {...args} size="xl" />
      </div>
    );
  },
};
export const Colors: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 w-full items-center">
        <FileInput {...args} color="primary" />
        <FileInput {...args} color="secondary" />
        <FileInput {...args} color="accent" />
        <FileInput {...args} color="neutral" />
        <FileInput {...args} color="info" />
        <FileInput {...args} color="success" />
        <FileInput {...args} color="warning" />
        <FileInput {...args} color="error" />
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
