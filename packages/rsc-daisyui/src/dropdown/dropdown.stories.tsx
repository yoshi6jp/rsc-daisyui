import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { Button, Card, Navbar } from "..";
import { toArgTypes } from "../storybook-helpers";
import { default as Dropdown, DropdownBase } from "./dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Actions/Dropdown",
  component: Dropdown,
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
export const PopoverAPIAndAnchorPositioning: StoryObj<typeof Dropdown.Popover> =
  {
    render: (args) => (
      <div className="mb-32">
        <Button
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        >
          Button
        </Button>
        <Dropdown.Popover
          {...args}
          className="w-52"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
        >
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Popover>
      </div>
    ),
    parameters: {
      controls: {
        exclude: ["as", "hover", "open", "theme", "className"],
      },
    },
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
        <Dropdown.Button as="div" tabIndex={0}>
          Click to open
        </Dropdown.Button>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
};

export const AlignsToStartHorizontally: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>Click ⬇️</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
export const AlignsToEndHorizontally: Story = {
  ...AlignsToStartHorizontally,
  args: {
    ...AlignsToStartHorizontally.args,
    align: "end",
  },
};
export const PlacementTop: Story = {
  args: {
    className: "mt-32",
    placement: "top",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>Click ⬆️️</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
export const PlacementTopAlignsToCenterHorizontally: Story = {
  ...PlacementTop,
  args: {
    ...PlacementTop.args,
    align: "center",
  },
};
export const PlacementTopAlignsToEndHorizontally: Story = {
  ...PlacementTop,
  args: {
    ...PlacementTop.args,
    align: "end",
  },
};
export const PlacementBottom: Story = {
  args: {
    className: "mb-32",
    placement: "bottom",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>Click ⬇️️</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
export const PlacementBottomAlignsToCenterHorizontally: Story = {
  ...PlacementBottom,
  args: {
    ...PlacementBottom.args,
    align: "center",
  },
};
export const PlacementBottomAlignsToEndHorizontally: Story = {
  ...PlacementBottom,
  args: {
    ...PlacementBottom.args,
    align: "end",
  },
};
export const PlacementLeft: Story = {
  args: {
    className: "mb-32",
    placement: "left",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>Click ⬅️️️</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
export const PlacementLeftAlignsToCenterVertically: Story = {
  ...PlacementLeft,
  args: {
    ...PlacementLeft.args,
    className: "my-16",
    align: "center",
  },
};
export const PlacementBottomAlignsToEndVertically: Story = {
  ...PlacementLeft,
  args: {
    ...PlacementLeft.args,
    className: "mt-32",
    align: "end",
  },
};
export const PlacementRight: Story = {
  args: {
    className: "mb-32",
    placement: "right",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Button>Click ️➡️️️</Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
export const PlacementRightAlignsToCenterVertically: Story = {
  ...PlacementRight,
  args: {
    ...PlacementRight.args,
    className: "my-16",
    align: "center",
  },
};
export const PlacementRightAlignsToEndVertically: Story = {
  ...PlacementRight,
  args: {
    ...PlacementRight.args,
    className: "mt-32",
    align: "end",
  },
};

export const OnHover: Story = {
  args: {
    className: "mb-32",
    /* @ts-expect-error: as */
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
      <Dropdown.Button>Click</Dropdown.Button>
      <Dropdown.Card size="sm" className="w-64 bg-base-100 z-1 shadow-md">
        <Card.Body>
          <p>This is a card. You can use any element as a dropdown.</p>
        </Card.Body>
      </Dropdown.Card>
    </Dropdown>
  ),
};

export const InNavbar: Story = {
  args: {
    align: "end",
  },
  render: (args) => (
    <Navbar className="bg-base-200 mb-40" vanilla>
      <div className="ps-4">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch">
          <Button as="a" ghost={true} className="rounded-field">
            Button
          </Button>
          <Dropdown {...args}>
            <Dropdown.Button ghost={true} vanilla className="rounded-field">
              Dropdown
            </Dropdown.Button>
            <Dropdown.Menu className="w-52 mt-4 bg-base-200">
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
    align: "end",
  },
  render: (args) => (
    <div className="mb-28 mt-6 flex gap-1 items-center">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Dropdown.Button
          className="text-info"
          ghost={true}
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
        <Dropdown.Card className="w-64 card-sm shadow-sm">
          <Card.Body>
            <Card.Title>You needed more info?</Card.Title>
            <p>Here is a description!</p>
          </Card.Body>
        </Dropdown.Card>
      </Dropdown>
    </div>
  ),
};
