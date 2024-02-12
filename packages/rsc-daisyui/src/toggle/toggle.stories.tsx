import React, { useRef, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Toggle } from ".";

const meta: Meta<typeof Toggle> = {
  title: "Data Input/Toggle",
  component: Toggle,
  argTypes: toArgTypes(getVariantConfig(Toggle)),
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
};

export const LabelAndFormControl: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return (
      <FormControl className="w-52">
        <Label>
          <Label.Text>Remember me</Label.Text>
          <Toggle {...args} />
        </Label>
      </FormControl>
    );
  },
};

export const BrandColors: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col">
        <FormControl className="w-52">
          <Label>
            <Label.Text>Remember me</Label.Text>
            <Toggle {...args} color="primary" />
          </Label>
        </FormControl>

        <FormControl className="w-52">
          <Label>
            <Label.Text>Remember me</Label.Text>
            <Toggle {...args} color="secondary" />
          </Label>
        </FormControl>

        <FormControl className="w-52">
          <Label>
            <Label.Text>Remember me</Label.Text>
            <Toggle {...args} color="accent" />
          </Label>
        </FormControl>
      </div>
    );
  },
};

export const StateColors: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <Toggle {...args} color="success" />
        <Toggle {...args} color="warning" />
        <Toggle {...args} color="info" />
        <Toggle {...args} color="error" />
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <Toggle {...args} size="xs" />
        <Toggle {...args} size="sm" />
        <Toggle {...args} size="md" />
        <Toggle {...args} size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const DisabledAndChecked: Story = {
  ...Default,
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
export const Indeterminate: Story = {
  render: (args) => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref.current) {
        ref.current.indeterminate = true;
      }
    }, [ref]);
    return <Toggle {...args} ref={ref} />;
  },
};
export const CustomColors: Story = {
  ...Default,
  args: {
    defaultChecked: true,
    className: "[--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500",
  },
};
