import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
          <Button as="label" color="primary" htmlFor={args.id}>
            Open drawer
          </Button>
        </Drawer.Content>
        <Drawer.Side
          className={
            args.end && !args.open
              ? "h-full absolute ms-[-54rem] w-[stretch]"
              : "h-full absolute"
          }
          drawerId={args.id}
        >
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
export const Responsive: Story = {
  args: {
    id: "my-drawer-2",
    className: "lg:drawer-open",
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <Drawer.Content className="flex flex-col items-center justify-center">
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

export const ResponsiveNavbarMenuAndSidebarDrawer: Story = {
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
              <Button as="label" color="ghost" htmlFor={args.id} shape="square">
                <svg
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
export const OpensFromRightSidePage: Story = {
  ...Default,
  args: {
    id: "my-drawer-4",
    className: "h-56 relative overflow-hidden",
    end: true,
  },
};
