import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { Button, Menu, Navbar } from "..";
import { toArgTypes } from "../storybook-helpers";
import { default as Drawer, DrawerBase } from "./drawer";

const meta: Meta<typeof Drawer> = {
  title: "Layout/Drawer",
  component: Drawer,
  argTypes: toArgTypes(getVariantConfig(DrawerBase)),
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    id: "my-drawer",
    className: "h-56 relative overflow-hidden",
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <Drawer.Content className="flex flex-col items-center justify-center">
          <Button as="label" htmlFor={args.id}>
            Open drawer
          </Button>
        </Drawer.Content>
        <Drawer.Side drawerId={args.id}>
          <Menu
            className="p-4 w-80 min-h-full bg-base-200 text-base-content"
            vanilla
          >
            <Menu.Item>Sidebar Item 1</Menu.Item>
            <Menu.Item>Sidebar Item 2</Menu.Item>
          </Menu>
        </Drawer.Side>
      </Drawer>
    );
  },
};
export const NavbarMenuForDesktopSidebarDrawerForMobile: Story = {
  args: {
    id: "my-drawer-3",
    className: "h-56 rounded overflow-hidden",
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <Drawer.Content className="flex flex-col">
          <Navbar className="w-full bg-base-300" vanilla>
            <div className="flex-none lg:hidden">
              <Button as="label" ghost htmlFor={args.id} shape="square">
                <svg
                  role="img"
                  aria-label="icon"
                  className="inline-block w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <Menu horizontal vanilla>
                <Menu.Item>Navbar Item 1</Menu.Item>
                <Menu.Item>Navbar Item 2</Menu.Item>
              </Menu>
            </div>
          </Navbar>
          <div className="flex justify-center items-center flex-grow">
            Content
          </div>
        </Drawer.Content>
        <Drawer.Side className="h-full absolute" drawerId={args.id}>
          <Menu className="p-4 w-80 min-h-full bg-base-200" vanilla>
            <Menu.Item>Sidebar Item 1</Menu.Item>
            <Menu.Item>Sidebar Item 2</Menu.Item>
          </Menu>
        </Drawer.Side>
      </Drawer>
    );
  },
};
export const Responsive: Story = {
  args: {
    id: "my-drawer-2",
    className: "lg:drawer-open h-56 overflow-hidden",
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <Drawer.Content className="flex flex-col items-center justify-center h-56 overflow-hidden">
          <Button
            as="label"
            className="lg:hidden"
            color="primary"
            htmlFor={args.id}
          >
            Open drawer
          </Button>
        </Drawer.Content>
        <Drawer.Side drawerId={args.id}>
          <Menu
            className="p-4 w-80 min-h-full bg-base-200 text-base-content"
            vanilla
          >
            <Menu.Item>Sidebar Item 1</Menu.Item>
            <Menu.Item>Sidebar Item 2</Menu.Item>
          </Menu>
        </Drawer.Side>
      </Drawer>
    );
  },
};
export const IconOnly: Story = {
  args: {
    id: "my-drawer-6",
    open: true,
    className: "h-56 overflow-hidden",
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <Drawer.Content className="h-56">
          {/* Page content here */}
        </Drawer.Content>

        <Drawer.Side
          drawerId={args.id}
          className="is-drawer-close:overflow-visible h-full"
        >
          <div className="is-drawer-close:w-17 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full">
            {/* Sidebar content here */}
            <Menu className="w-full grow p-4">
              {/* list item */}
              <Menu.Li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="inline-block size-4 my-1.5"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </Menu.Li>

              {/* list item */}
              <Menu.Li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="inline-block size-4 my-1.5"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <span className="is-drawer-close:hidden">Settings</span>
                </button>
              </Menu.Li>
            </Menu>

            {/* button to open/close drawer */}
            <div
              className="m-3.5 is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Open"
            >
              <Drawer.Button
                ghost
                shape="circle"
                drawerId={args.id}
                className="is-drawer-open:rotate-y-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="inline-block size-4 my-1.5"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </Drawer.Button>
            </div>
          </div>
        </Drawer.Side>
      </Drawer>
    );
  },
};

export const OpensFromRightSidePage: Story = {
  ...Default,
  args: {
    id: "my-drawer-4",
    className: "h-56 relative overflow-hidden",
    end: true,
  },
};
