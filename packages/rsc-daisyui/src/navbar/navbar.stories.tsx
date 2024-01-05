import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button, Menu } from "..";
import { Navbar } from ".";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
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
            <Menu.Li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <Menu.Item>Link 1</Menu.Item>
                  <Menu.Item>Link 2</Menu.Item>
                </ul>
              </details>
            </Menu.Li>
          </Menu>
        </div>
      </Navbar>
    );
  },
};
