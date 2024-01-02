import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Menu)),
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};

export const Responsive: Story = {
  ...Default,
  args: {
    vertical: true,
    className: "lg:menu-horizontal",
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Menu.Item>
      <Menu.Item>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
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
      </Menu.Item>
      <Menu.Item>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Menu.Item>
    </Menu>
  ),
};

export const IconOnlyHorizontal: Story = {
  ...IconOnly,
  args: {
    horizontal: true,
  },
};
