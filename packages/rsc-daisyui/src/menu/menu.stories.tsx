import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";
import { Badge, Tooltip } from "..";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Navigation/Menu",
  component: Menu,
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
export const IconOnlyWithTooltip: Story = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Li>
        <Tooltip as="a" position="right" tip="Home">
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
        </Tooltip>
      </Menu.Li>
      <Menu.Li>
        <Tooltip as="a" position="right" tip="Details">
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
        </Tooltip>
      </Menu.Li>
      <Menu.Li>
        <Tooltip as="a" position="right" tip="Stats">
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
        </Tooltip>
      </Menu.Li>
    </Menu>
  ),
};
export const IconOnlyHorizontalWithTooltip: Story = {
  args: {
    horizontal: true,
    className: "mt-6",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Li>
        <Tooltip as="a" tip="Home">
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
        </Tooltip>
      </Menu.Li>
      <Menu.Li>
        <Tooltip as="a" tip="Details">
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
        </Tooltip>
      </Menu.Li>
      <Menu.Li>
        <Tooltip as="a" tip="Stats">
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
        </Tooltip>
      </Menu.Li>
    </Menu>
  ),
};

export const Sizes: Story = {
  args: {
    className: "w-56",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Menu {...args} size="xs">
        <Menu.Item>xs Item 1</Menu.Item>
        <Menu.Item>xs Item 2</Menu.Item>
      </Menu>

      <Menu {...args} size="sm">
        <Menu.Item>sm Item 1</Menu.Item>
        <Menu.Item>sm Item 2</Menu.Item>
      </Menu>

      <Menu {...args} size="md">
        <Menu.Item>md Item 1</Menu.Item>
        <Menu.Item>md Item 2</Menu.Item>
      </Menu>

      <Menu {...args} size="lg">
        <Menu.Item>lg Item 1</Menu.Item>
        <Menu.Item>lg Item 2</Menu.Item>
      </Menu>
    </div>
  ),
};

export const DisabledItems: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Enabled item</Menu.Item>
      <Menu.Item disabled>disabled item</Menu.Item>
      <Menu.Item disabled>disabled item</Menu.Item>
    </Menu>
  ),
};

export const WithIcons: Story = {
  args: {
    className: "w-56",
  },
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
        Item 2
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
        Item 1
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
        Item 3
      </Menu.Item>
    </Menu>
  ),
};

export const IconsAndBadgeResponsive: Story = {
  args: {
    className: "lg:menu-horizontal",
  },
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
        Inbox
        <Badge size="sm">99+</Badge>
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
        Updates
        <Badge color="warning" size="sm">
          NEW
        </Badge>
      </Menu.Item>
      <Menu.Item>
        Stats
        <Badge color="info" size="xs" />
      </Menu.Item>
    </Menu>
  ),
};

export const WithoutPaddingAndBorderRadius: Story = {
  ...Default,
  args: {
    className: "bg-base-200 w-56 p-0 [&_li>*]:rounded-none",
    vanilla: true,
  },
};

export const WithTitle: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Title>Title</Menu.Title>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};

export const TitleAsParent: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Li>
        <Menu.Title as="h2">Title</Menu.Title>
        <ul>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </ul>
      </Menu.Li>
    </Menu>
  ),
};

export const Submenu: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Submenu label="Parent">
        <Menu.Item>Submenu 1</Menu.Item>
        <Menu.Item>Submenu 2</Menu.Item>
        <Menu.Submenu label="Parent">
          <Menu.Item>Submenu 1</Menu.Item>
          <Menu.Item>Submenu 2</Menu.Item>
        </Menu.Submenu>
      </Menu.Submenu>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};

export const CollapsibleSubmenu: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Collapse label="Parent" open>
        <Menu.Item>Submenu 1</Menu.Item>
        <Menu.Item>Submenu 2</Menu.Item>
        <Menu.Collapse label="Parent" open>
          <Menu.Item>Submenu 1</Menu.Item>
          <Menu.Item>Submenu 2</Menu.Item>
        </Menu.Collapse>
      </Menu.Collapse>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};
export const CollapsibleSubmenuForceOpen: StoryObj<typeof Menu.Dropdown> = {
  args: {
    open: true,
    label: "Parent",
  },
  render: (args) => (
    <Menu className="w-56">
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Dropdown {...args}>
        <Menu.Item>Submenu 1</Menu.Item>
        <Menu.Item>Submenu 2</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
};

export const FileTree: Story = {
  args: {
    className: "rounded-lg max-w-xs w-full",
    size: "xs",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        resume.pdf
      </Menu.Item>
      <Menu.Collapse
        label={
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            My Files
          </>
        }
        open
      >
        <Menu.Item>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Project-final.psd
        </Menu.Item>
        <Menu.Item>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Project-final-2.psd
        </Menu.Item>
        <Menu.Collapse
          label={
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Images
            </>
          }
          open
        >
          <Menu.Item>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Screenshot1.png
          </Menu.Item>
          <Menu.Item>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Screenshot2.png
          </Menu.Item>
          <Menu.Collapse
            label={
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Others
              </>
            }
            open
          >
            <Menu.Item>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Screenshot3.png
            </Menu.Item>
          </Menu.Collapse>
        </Menu.Collapse>
      </Menu.Collapse>
      <Menu.Item>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        reports-final-2.pdf
      </Menu.Item>
    </Menu>
  ),
};

export const ActiveItem: Story = {
  args: {
    className: "w-56",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item active>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};

export const Horizontal: Story = {
  ...Default,
  args: {
    horizontal: true,
  },
};

export const HorizontalSubmenu: Story = {
  args: {
    horizontal: true,
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Submenu label="Parent">
        <Menu.Item>Submenu 1</Menu.Item>
        <Menu.Item>Submenu 2</Menu.Item>
      </Menu.Submenu>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};

export const MegaMenuWithSubmenu: Story = {
  args: {
    className: "xl:menu-horizontal lg:min-w-max",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Submenu label="Solutions">
        <Menu.Item>Design</Menu.Item>
        <Menu.Item>Development</Menu.Item>
        <Menu.Item>Hosting</Menu.Item>
        <Menu.Item>Domain register</Menu.Item>
      </Menu.Submenu>
      <Menu.Submenu label="Enterprise">
        <Menu.Item>CRM software</Menu.Item>
        <Menu.Item>Marketing management</Menu.Item>
        <Menu.Item>Security</Menu.Item>
        <Menu.Item>Consulting</Menu.Item>
      </Menu.Submenu>
      <Menu.Submenu label="Products">
        <Menu.Item>Wordpress themes</Menu.Item>
        <Menu.Item>Wordpress plugins</Menu.Item>
        <Menu.Submenu label="Open source">
          <Menu.Item>Auth management system</Menu.Item>
          <Menu.Item>VScode theme</Menu.Item>
          <Menu.Item>Color picker app</Menu.Item>
        </Menu.Submenu>
      </Menu.Submenu>
      <Menu.Submenu label="Company">
        <Menu.Item>About us</Menu.Item>
        <Menu.Item>Contact us</Menu.Item>
        <Menu.Item>Privacy policy</Menu.Item>
        <Menu.Item>Press kit</Menu.Item>
      </Menu.Submenu>
    </Menu>
  ),
};

export const CollapsibleWithSubmenuResponsible: Story = {
  args: {
    className: "lg:menu-horizontal lg:mb-64",
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Collapse label="Parent item" open>
        <Menu.Item>Submenu 1</Menu.Item>
        <Menu.Item>Submenu 2</Menu.Item>
        <Menu.Collapse label="Parent" open>
          <Menu.Item>item 1</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
        </Menu.Collapse>
      </Menu.Collapse>
      <Menu.Item>Item 3</Menu.Item>
    </Menu>
  ),
};
