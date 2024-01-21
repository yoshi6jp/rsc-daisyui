import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { default as Collapse } from "./collapse";

const meta: Meta<typeof Collapse> = {
  title: "Data Display/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Collapse)),
};
export default meta;
type Story = StoryObj<typeof Collapse>;
export const Default: Story = {
  render: (args) => (
    <Collapse {...args}>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <Collapse {...args}>
      <input type="checkbox" />
      <Collapse.Title>Click me to show/hide content</Collapse.Title>
      <Collapse.Content className="collapse-content">
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};

export const DetailsAndSummary: Story = {
  render: (args) => (
    <>
      {/* @ts-expect-error: as*/}
      <Collapse {...args} as="details">
        <Collapse.Title as="summary">Click to open/close</Collapse.Title>
        <Collapse.Content className="collapse-content">
          <p>content</p>
        </Collapse.Content>
      </Collapse>
    </>
  ),
};

export const BorderAndBackgroundColor: Story = {
  args: {
    className: "border border-base-300",
  },
  render: (args) => (
    <Collapse {...args}>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};

export const ArrowIcon: Story = {
  ...BorderAndBackgroundColor,
  args: {
    className: "border border-base-300",
    icon: "arrow",
  },
};

export const PlusMinusIcon: Story = {
  ...BorderAndBackgroundColor,
  args: {
    className: "border border-base-300",
    icon: "plus",
  },
};

export const ForceOpen: Story = {
  args: {
    className: "border border-base-300",
    open: true,
  },
  render: (args) => (
    <Collapse {...args}>
      <Collapse.Title>
        I have open={args.open ? "true" : "false"} props
      </Collapse.Title>
      <Collapse.Content>
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};
export const ForceClose: Story = {
  ...ForceOpen,
  args: {
    className: "border border-base-300",
    open: false,
  },
};

export const CustomColorWithFocus: Story = {
  args: {
    className:
      "bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content",
  },
  render: (args) => (
    <Collapse {...args}>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};

export const CustomColorWithCheckbox: Story = {
  render: (args) => (
    <Collapse {...args}>
      <input className="peer" type="checkbox" />
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>hello</p>
      </Collapse.Content>
    </Collapse>
  ),
};
