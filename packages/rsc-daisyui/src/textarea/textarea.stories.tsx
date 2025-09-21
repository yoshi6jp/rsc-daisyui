import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from "..";
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
    placeholder: "Bio",
  },
  render: (args) => {
    return <Textarea {...args} />;
  },
};

export const Ghost: Story = {
  ...Default,
  args: {
    ...Default.args,
    ghost: true,
  },
};

export const FieldsetAndLabels: Story = {
  args: {
    placeholder: "Bio",
    className: "h-24",
  },
  render: (args) => {
    return (
      <Fieldset className="w-xs">
        <Fieldset.Legend>Your bio</Fieldset.Legend>
        <Textarea {...args} />
        <Fieldset.Label as="div">Optional</Fieldset.Label>
      </Fieldset>
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
      <div className="grid gap-4 w-xs">
        <Textarea {...args} color="primary" placeholder="Primary" />
        <Textarea {...args} color="secondary" placeholder="Secondary" />
        <Textarea {...args} color="accent" placeholder="Accent" />
        <Textarea {...args} color="neutral" placeholder="Neutral" />
        <Textarea {...args} color="info" placeholder="Info" />
        <Textarea {...args} color="success" placeholder="Success" />
        <Textarea {...args} color="warning" placeholder="Warning" />
        <Textarea {...args} color="error" placeholder="Error" />
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    placeholder: "Bio",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="grid gap-4 w-xs">
        <Textarea {...args} size="xs" placeholder="Xsmall" />
        <Textarea {...args} size="sm" placeholder="Small" />
        <Textarea {...args} size="md" placeholder="Medium" />
        <Textarea {...args} size="lg" placeholder="Large" />
        <Textarea {...args} size="xl" placeholder="Xlarge" />
      </div>
    );
  },
};
export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: "Bio",
    disabled: true,
  },
};
