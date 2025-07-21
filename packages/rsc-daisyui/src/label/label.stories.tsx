import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";
import { Input, Select } from "..";
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Data Input/Label",
  component: Label,
  argTypes: toArgTypes(getVariantConfig(Label)),
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => (
    <Input as="label">
      <Label {...args}>https://</Label>
      <input type="text" placeholder="URL" />
    </Input>
  ),
};

export const InputAndTheEnd: Story = {
  render: (args) => (
    <Input as="label">
      <input type="text" placeholder="domain name" />
      <Label {...args}>.com</Label>
    </Input>
  ),
};
export const LabelForSelect: Story = {
  render: (args) => (
    <Select as="label">
      <Label {...args}>Type</Label>
      <select>
        <option>Personal</option>
        <option>Business</option>
      </select>
    </Select>
  ),
};
export const DateInput: Story = {
  render: (args) => (
    <Input as="label">
      <Label {...args}>Publish date</Label>
      <input type="date" />
    </Input>
  ),
};
export const FloatingLabel: StoryObj<typeof Label.Floating> = {
  args: {
    className: "w-full max-w-xs",
  },
  render: (args) => (
    <Label.Floating {...args}>
      <span>Your Email</span>
      <Input placeholder="mail@site.com" size="md" />
    </Label.Floating>
  ),
};

export const DifferentSizes: StoryObj<typeof Label.Floating> = {
  args: {
    className: "w-full max-w-xs",
  },
  render: (args) => (
    <div className="grid gap-4 w-xs">
      <Label.Floating {...args}>
        <span>Extra Small</span>
        <Input placeholder="Extra Small" size="xs" />
      </Label.Floating>

      <Label.Floating {...args}>
        <span>Small</span>
        <Input placeholder="Small" size="sm" />
      </Label.Floating>

      <Label.Floating {...args}>
        <span>Medium</span>
        <Input placeholder="Medium" size="md" />
      </Label.Floating>

      <Label.Floating {...args}>
        <span>Large</span>
        <Input placeholder="Large" size="lg" />
      </Label.Floating>

      <Label.Floating {...args}>
        <span>Extra Large</span>
        <Input placeholder="Extra Large" size="xl" />
      </Label.Floating>
    </div>
  ),
};
