import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import {
  Badge,
  Button,
  Card,
  Menu,
  FormControl,
  Input,
  Dropdown,
  Indicator,
} from "..";
import { Navbar } from ".";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  argTypes: toArgTypes(getVariantConfig(Navbar)),
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => {
    return (
      <Navbar {...args}>
        <Button as="a" className="text-xl" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    );
  },
};

export const TitleAndIcon: Story = {
  render: (args) => {
    return (
      <Navbar {...args}>
        <div className="flex-1">
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Button color="ghost" shape="square">
            <svg
              className="inline-block w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </div>
      </Navbar>
    );
  },
};

export const IconAtStartAndEnd: Story = {
  render: (args) => {
    return (
      <Navbar {...args}>
        <div className="flex-none">
          <Button color="ghost" shape="square">
            <svg
              className="inline-block w-5 h-5 stroke-current"
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
        <div className="flex-1">
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Button color="ghost" shape="square">
            <svg
              className="inline-block w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </div>
      </Navbar>
    );
  },
};

export const MenuAndSubmenu: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => {
    return (
      <Navbar {...args}>
        <div className="flex-1">
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Menu className="bg-base-100 px-1" horizontal>
            <Menu.Item>Link</Menu.Item>
            <Menu.Collapse
              label="Parent"
              ulClassName="p-2 bg-base-100 rounded-t-none"
            >
              <Menu.Item>Link 1</Menu.Item>
              <Menu.Item>Link 2</Menu.Item>
            </Menu.Collapse>
          </Menu>
        </div>
      </Navbar>
    );
  },
};

export const SearchInputAndDropdown: Story = {
  args: {
    className: "mb-32",
  },
  render: (args) => {
    return (
      <Navbar {...args}>
        <div className="flex-1">
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none gap-2">
          <FormControl className="form-control">
            <Input className="w-24 md:w-auto" placeholder="Search" />
          </FormControl>
          <Dropdown end>
            <Dropdown.Avatar color="ghost" shape="circle">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Dropdown.Avatar>
            <Dropdown.Menu
              className="mt-3 rounded-box w-52"
              size="sm"
              tabIndex={0}
            >
              <Menu.Item className="justify-between">
                Profile
                <Badge>New</Badge>
              </Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    );
  },
};
export const IconIndicatorAndDropdown: Story = {
  args: {
    className: "mb-40",
  },
  render: (args) => {
    return (
      <Navbar {...args}>
        <div className="flex-1">
          <Button as="a" className="btn text-xl" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Dropdown as="div" className="dropdown" end>
            <Dropdown.Button as="div" color="ghost" shape="circle" vanilla>
              <Indicator>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <Indicator.Badge size="sm">8</Indicator.Badge>
              </Indicator>
            </Dropdown.Button>
            <Dropdown.Card className="mt-3 w-52" compact>
              <Card.Body>
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <Card.Actions>
                  <Button block color="primary">
                    View cart
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Dropdown.Card>
          </Dropdown>
          <Dropdown as="div" end>
            <Dropdown.Avatar as="div" color="ghost" shape="circle">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Dropdown.Avatar>
            <Dropdown.Menu className="mt-3 w-52" size="sm">
              <Menu.Item className="justify-between">
                Profile
                <Badge>New</Badge>
              </Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    );
  },
};
export const DropdownCenterLogoAndIcon: Story = {
  args: {
    className: "mb-40",
  },
  render: (args) => {
    return (
      <Navbar {...args}>
        <Navbar.Start>
          <Dropdown>
            <Dropdown.Button color="ghost" shape="circle">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Dropdown.Button>
            <Dropdown.Menu className="mt-3 p-2 w-52" size="sm">
              <Menu.Item>Homepage</Menu.Item>
              <Menu.Item>Portfolio</Menu.Item>
              <Menu.Item>About</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center>
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </Navbar.Center>
        <Navbar.End>
          <Button color="ghost" shape="circle">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
          <Button color="ghost" shape="circle">
            <div className="indicator">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <Indicator.Badge color="primary" size="xs" />
            </div>
          </Button>
        </Navbar.End>
      </Navbar>
    );
  },
};

export const Responsive: Story = {
  args: {
    className: "mb-40",
  },
  render: (args) => {
    return (
      <Navbar {...args}>
        <Navbar.Start>
          <Dropdown className="dropdown">
            <Dropdown.Button className="lg:hidden" color="ghost">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h8m-8 6h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Dropdown.Button>
            <Dropdown.Menu className="mt-3 p-2 w-52" size="sm">
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Submenu label="Parent">
                <Menu.Item>Submenu 1</Menu.Item>
                <Menu.Item>Submenu 2</Menu.Item>
              </Menu.Submenu>
              <Menu.Item>Item 3</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button as="a" className="text-xl" color="ghost">
            daisyUI
          </Button>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu className="px-1" horizontal>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Collapse label="Parent" ulClassName="p-2 w-40">
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
            </Menu.Collapse>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button as="a">Button</Button>
        </Navbar.End>
      </Navbar>
    );
  },
};
export const Colors: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap w-full gap-2">
        <Navbar {...args} className="bg-neutral text-neutral-content">
          <Button className="text-xl" color="ghost">
            daisyUI
          </Button>
        </Navbar>
        <Navbar {...args} className="bg-base-300">
          <Button className="text-xl" color="ghost">
            daisyUI
          </Button>
        </Navbar>
        <Navbar {...args} className="bg-primary text-primary-content">
          <Button className="text-xl" color="ghost">
            daisyUI
          </Button>
        </Navbar>
      </div>
    );
  },
};
