import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { default as Collapse } from "./collapse";

const meta: Meta<typeof Collapse> = {
  title: "Data Display/Collapse",
  component: Collapse,
  argTypes: toArgTypes(getVariantConfig(Collapse)),
};
export default meta;
type Story = StoryObj<typeof Collapse>;
export const Default: Story = {
  render: (args) => (
    <Collapse {...args}>
      <Collapse.Title>How do I create an account?</Collapse.Title>
      <Collapse.Content>
        Click the "Sign Up" button in the top right corner and follow the
        registration process.
      </Collapse.Content>
    </Collapse>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <Collapse {...args}>
      <input type="checkbox" />
      <Collapse.Title>How do I create an account?</Collapse.Title>
      <Collapse.Content>
        Click the "Sign Up" button in the top right corner and follow the
        registration process.
      </Collapse.Content>
    </Collapse>
  ),
};

export const DetailsAndSummary: Story = {
  render: (args) => (
    <>
      {/* @ts-expect-error: as*/}
      <Collapse {...args} as="details">
        <Collapse.Title as="summary">
          How do I create an account?
        </Collapse.Title>
        <Collapse.Content>
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </Collapse.Content>
      </Collapse>
    </>
  ),
};

export const BorderAndBackgroundColor: Story = {
  ...Default,
  args: {
    className: "border border-base-100 bg-base-300",
  },
};

export const ArrowIcon: Story = {
  ...Default,
  args: {
    className: "border border-base-300",
    icon: "arrow",
  },
};

export const PlusMinusIcon: Story = {
  ...Default,
  args: {
    className: "border border-base-300",
    icon: "plus",
  },
};

export const ForceOpen: Story = {
  ...Default,
  args: {
    className: "border border-base-300",
    open: true,
  },
};
export const ForceClose: Story = {
  ...Default,
  args: {
    className: "border border-base-300",
    open: false,
  },
};

export const CustomColorWithFocus: Story = {
  ...Default,
  args: {
    className:
      "bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content",
  },
};

export const CustomColorWithCheckbox: Story = {
  render: (args) => (
    <Collapse {...args}>
      <input className="peer" type="checkbox" />
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        How do I create an account?
      </Collapse.Title>
      <Collapse.Content className="text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click the "Sign Up" button in the top right corner and follow the
        registration process.
      </Collapse.Content>
    </Collapse>
  ),
};
