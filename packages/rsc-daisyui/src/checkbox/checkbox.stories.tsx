import React, { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from "..";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Data Input/Checkbox",
  component: Checkbox,
  argTypes: toArgTypes(getVariantConfig(Checkbox)),
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return <Checkbox {...args} />;
  },
};
export const FieldsetAndLabel: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return (
      <Fieldset className="p-4 bg-base-100 border border-base-300 rounded-box w-64">
        <Fieldset.Legend>Login options</Fieldset.Legend>
        <Fieldset.Label>
          <Checkbox {...args} />
          Remember me
        </Fieldset.Label>
      </Fieldset>
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
      <>
        <Checkbox {...args} size="xs" />
        <Checkbox {...args} size="sm" />
        <Checkbox {...args} size="md" />
        <Checkbox {...args} size="lg" />
        <Checkbox {...args} size="xl" />
      </>
    );
  },
};

export const Colors: Story = {
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
      <>
        <Checkbox {...args} color="primary" />
        <Checkbox {...args} color="secondary" />
        <Checkbox {...args} color="accent" />
        <Checkbox {...args} color="neutral" />

        <Checkbox {...args} color="info" />
        <Checkbox {...args} color="success" />
        <Checkbox {...args} color="warning" />
        <Checkbox {...args} color="error" />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <>
        <Checkbox {...args} />
        <Checkbox {...args} defaultChecked />
      </>
    );
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
    return <Checkbox {...args} ref={ref} />;
  },
};
export const CustomColors: Story = {
  args: {
    defaultChecked: true,
    className:
      "border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500",
  },
  render: (args) => {
    return <Checkbox {...args} />;
  },
};
