import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Data Input/Radio",
  component: Radio,
  argTypes: toArgTypes(getVariantConfig(Radio)),
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "radio-1",
  },
  render: (args) => {
    return (
      <>
        <Radio {...args} defaultChecked />
        <Radio {...args} />
      </>
    );
  },
};

export const PrimaryColor: Story = {
  ...Default,
  args: {
    name: "radio-2",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  ...Default,
  args: {
    name: "radio-3",
    color: "secondary",
  },
};

export const AccentColor: Story = {
  ...Default,
  args: {
    name: "radio-4",
    color: "accent",
  },
};

export const SuccessColor: Story = {
  ...Default,
  args: {
    name: "radio-5",
    color: "success",
  },
};

export const WarningColor: Story = {
  ...Default,
  args: {
    name: "radio-6",
    color: "warning",
  },
};

export const InfoColor: Story = {
  ...Default,
  args: {
    name: "radio-7",
    color: "info",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    name: "radio-8",
    color: "error",
  },
};
export const Disabled: Story = {
  ...Default,
  args: {
    name: "radio-9",
    disabled: true,
  },
  // render: (args) => {
  //   return (
  //     <>
  //       <Radio {...args} checked />
  //       <Radio {...args} />
  //     </>
  //   );
  // },
};
export const LabelAndFormControlAndCustomColors: Story = {
  args: {
    checked: true,
    name: "radio-10",
  },
  render: (args) => {
    return (
      <div className="flex flex-col">
        <FormControl className="w-52">
          <Label>
            <Label.Text>Red pill</Label.Text>
            <Radio {...args} className="checked:bg-red-500" />
          </Label>
        </FormControl>
        <FormControl className="w-52">
          <Label>
            <Label.Text>Blue pill</Label.Text>
            <Radio {...args} className="checked:bg-blue-500" defaultChecked />
          </Label>
        </FormControl>
      </div>
    );
  },
};
