import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from "..";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Data Input/Select",
  component: Select,
  argTypes: toArgTypes(getVariantConfig(Select)),
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a color
        </option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </Select>
    );
  },
};
export const Ghost: Story = {
  args: {
    ghost: true,
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a font
        </option>
        <option>Inter</option>
        <option>Poppins</option>
        <option>Raleway</option>
      </Select>
    );
  },
};

export const FieldsetAndLabels: Story = {
  render: (args) => {
    return (
      <Fieldset className="w-xs">
        <Fieldset.Legend>Browsers</Fieldset.Legend>
        <Select {...args}>
          <option disabled={true} selected>
            Pick a browser
          </option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </Select>
        <Fieldset.Label>Optional</Fieldset.Label>
      </Fieldset>
    );
  },
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a text editor
        </option>
        <option>VScode</option>
        <option>VScode fork</option>
        <option>Another VScode fork</option>
      </Select>
    );
  },
};

export const SecondaryColor: Story = {
  args: {
    color: "secondary",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a language
        </option>
        <option>Zig</option>
        <option>Go</option>
        <option>Rust</option>
      </Select>
    );
  },
};

export const AccentColor: Story = {
  args: {
    color: "accent",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Color scheme
        </option>
        <option>Light mode</option>
        <option>Dark mode</option>
        <option>System</option>
      </Select>
    );
  },
};

export const NeutralColor: Story = {
  args: {
    color: "neutral",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Server location
        </option>
        <option>North America</option>
        <option>EU west</option>
        <option>South Ease Asia</option>
      </Select>
    );
  },
};
export const InfoColor: Story = {
  args: {
    color: "info",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a Framework
        </option>
        <option>React</option>
        <option>Vue</option>
        <option>Angular</option>
      </Select>
    );
  },
};
export const SuccessColor: Story = {
  args: {
    color: "success",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a Runtime
        </option>
        <option>npm Piece</option>
        <option>Bun</option>
        <option>yarn</option>
      </Select>
    );
  },
};
export const WarningColor: Story = {
  args: {
    color: "warning",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a OS
        </option>
        <option>Windows</option>
        <option>MacOS</option>
        <option>Linux</option>
      </Select>
    );
  },
};
export const ErrorColor: Story = {
  args: {
    color: "error",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick an AI Model
        </option>
        <option>GPT-4</option>
        <option>Claude</option>
        <option>Llama</option>
      </Select>
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
      <div className="flex flex-col items-center gap-4 w-full">
        <Select {...args} size="xs">
          <option disabled selected>
            Xsmall
          </option>
          <option>Xsmall Apple</option>
          <option>Xsmall Orange</option>
          <option>Xsmall Tomato</option>
        </Select>

        <Select {...args} size="sm">
          <option disabled selected>
            Small
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </Select>

        <Select {...args} size="md">
          <option disabled selected>
            Medium
          </option>
          <option>Medium Apple</option>
          <option>Medium Orange</option>
          <option>Medium Tomato</option>
        </Select>

        <Select {...args} size="lg">
          <option disabled selected>
            Large
          </option>
          <option>Large Apple</option>
          <option>Large Orange</option>
          <option>Large Tomato</option>
        </Select>

        <Select {...args} size="xl">
          <option disabled selected>
            Xlarge
          </option>
          <option>Xlarge Apple</option>
          <option>Xlarge Orange</option>
          <option>Xlarge Tomato</option>
        </Select>
      </div>
    );
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option>You can&apos;t touch this</option>
      </Select>
    );
  },
};
