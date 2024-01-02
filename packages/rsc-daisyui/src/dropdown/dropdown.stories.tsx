import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import Dropdown, { DropdownBase } from "./dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Actions/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(DropdownBase)),
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DetailsAndSummary: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>open or close</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

export const CssFocus: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => (
    <div>
      <div className="text-sm text-center mb-4">Click outside to close</div>
      {/* @ts-expect-error: as */}
      <Dropdown {...args} as="div">
        <Dropdown.Button as="div">Click to open</Dropdown.Button>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

export const AlignsToEnd: Story = {
  ...DetailsAndSummary,
  args: {
    ...DetailsAndSummary.args,
    end: true,
  },
};

export const PositionTop: Story = {
  ...DetailsAndSummary,
  args: {
    className: "mt-32",
    vertical: "top",
  },
};

export const PositionTopAlignsToEnd: Story = {
  ...PositionTop,
  args: {
    ...PositionTop.args,
    end: true,
  },
};

export const PositionBottom: Story = {
  ...DetailsAndSummary,
  args: {
    ...DetailsAndSummary.args,
    vertical: "bottom",
  },
};

export const PositionBottomAlignsToEnd: Story = {
  ...PositionBottom,
  args: {
    ...PositionBottom.args,
    end: true,
  },
};
export const PositionLeft: Story = {
  ...DetailsAndSummary,
  args: {
    ...DetailsAndSummary.args,
    horizontal: "left",
  },
};

export const PositionLeftAlignsToEnd: Story = {
  ...AlignsToEnd,
  args: {
    ...AlignsToEnd.args,
    className: "mt-32",
    horizontal: "left",
  },
};

export const PositionRight: Story = {
  ...DetailsAndSummary,
  args: {
    ...DetailsAndSummary.args,
    horizontal: "right",
  },
};

export const PositionRightAlignsToEnd: Story = {
  ...AlignsToEnd,
  args: {
    ...AlignsToEnd.args,
    className: "mt-32",
    horizontal: "right",
  },
};

export const OnHover: Story = {
  args: {
    className: "mb-32",
    hover: true,
  },
  render: (args) => (
    <>
      {/* @ts-expect-error: as */}
      <Dropdown {...args} as="div">
        <Dropdown.Button as="div">Click to open</Dropdown.Button>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  ),
};

export const ForceOpen: Story = {
  ...DetailsAndSummary,
  args: {
    ...DetailsAndSummary.args,
    open: true,
  },
};
