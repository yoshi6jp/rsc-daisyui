import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { Button, Card, Navbar } from "..";
import { toArgTypes } from "../storybook-helpers";
import { default as Dropdown, DropdownBase } from "./dropdown";

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
        <Dropdown.Button as="div">Hover</Dropdown.Button>
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

export const CardAsDropdown: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>open or close</Dropdown.Button>
      <Dropdown.Card
        className="w-64 p-2 bg-primary text-primary-content"
        compact
      >
        <Card.Body>
          <Card.Title as="h3">Card title!</Card.Title>
          <p>you can use any element as a dropdown.</p>
        </Card.Body>
      </Dropdown.Card>
    </Dropdown>
  ),
};

export const InNavbar: Story = {
  args: {
    end: true,
  },
  render: (args) => (
    <Navbar className="bg-base-300 shadow-none mb-40">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <Button as="a" color="ghost">
            Button
          </Button>
          <Dropdown {...args}>
            <Dropdown.Button className="m-0" color="ghost">
              Dropdown
            </Dropdown.Button>
            <Dropdown.Menu className="w-52 mt-4">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  ),
};

export const Helper: Story = {
  args: {
    end: true,
  },
  render: (args) => (
    <div className="mb-28 mt-6 flex gap-1 items-center">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Dropdown.Button
          className="text-info"
          color="ghost"
          shape="circle"
          size="xs"
        >
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            tabIndex={0}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Dropdown.Button>
        <Dropdown.Card className="w-64" compact>
          <Card.Body>
            <Card.Title>You needed more info?</Card.Title>
            <p>Here is a description!</p>
          </Card.Body>
        </Dropdown.Card>
      </Dropdown>
    </div>
  ),
};
