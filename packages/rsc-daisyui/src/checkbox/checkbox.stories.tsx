import React, { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
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
    checked: true,
  },
  render: (args) => {
    return <Checkbox {...args} />;
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
          <Checkbox {...args} />
        </Label>
      </FormControl>
    );
  },
};

export const PrimaryColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "secondary",
  },
};

export const AccentColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "accent",
  },
};

export const SuccessColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "success",
  },
};
export const WarningColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "warning",
  },
};

export const InfoColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "info",
  },
};

export const ErrorColor: Story = {
  ...LabelAndFormControl,
  args: {
    defaultChecked: true,
    color: "error",
  },
};

export const Sizes: Story = {
  args: {
    checked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <Checkbox {...args} size="xs" />
        <Checkbox {...args} size="sm" />
        <Checkbox {...args} size="md" />
        <Checkbox {...args} size="lg" />
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
    checked: true,
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
  },
  render: (args) => {
    return (
      <>
        <Checkbox
          {...args}
          className="border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
        />
        <Checkbox
          {...args}
          className="[--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        />
      </>
    );
  },
};
