import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Megamenu, MegamenuBase } from "./megamenu";
import { Menu } from "../menu";
import { Button } from "../button";
import { Navbar } from "../navbar";

const meta: Meta<typeof Megamenu> = {
  title: "Navigation/Megamenu",
  component: Megamenu,
  argTypes: toArgTypes(getVariantConfig(MegamenuBase)),
};

export default meta;
type Story = StoryObj<typeof Megamenu>;

export const Default: Story = {
  name: "Responsive megamenu with small vertical menus",
  args: {
    className: "max-sm:megamenu-vertical p-2 border border-base-300",
  },
  render: (args) => (
    <div className="w-full">
      <Button className="sm:hidden" popoverTarget="my-megamenu-1">
        Menu
      </Button>

      <Megamenu {...args} id="my-megamenu-1" popover={"auto"}>
        <button popoverTarget="a1">Services</button>
        <div id="a1" popover={"auto"}>
          <Menu>
            <Menu.Item>Enterprise</Menu.Item>
            <Menu.Item>CRM software</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Consulting</Menu.Item>
          </Menu>
        </div>
        <button popoverTarget="a2">AI</button>
        <div id="a2" popover="auto">
          <Menu>
            <Menu.Item>AI infrastructure</Menu.Item>
            <Menu.Item>Image generation</Menu.Item>
            <Menu.Item>MCP servers</Menu.Item>
          </Menu>
        </div>
        <button popoverTarget="a3">Cloud Solutions</button>
        <div id="a3" popover="auto">
          <Menu>
            <Menu.Item>Cloud computing</Menu.Item>
            <Menu.Item>Storage solutions</Menu.Item>
            <Menu.Item>Database services</Menu.Item>
          </Menu>
        </div>
      </Megamenu>
    </div>
  ),
};
export const HorizontalMenu: Story = {
  name: "Responsive megamenu with small vertical menus",
  args: {
    className: "max-sm:megamenu-vertical p-2 border border-base-300",
  },
  render: (args) => (
    <div className="w-full">
      <Button className="sm:hidden" popoverTarget="my-megamenu-1">
        Menu
      </Button>
      <Megamenu {...args} id="my-megamenu-1" popover={"auto"}>
        <button popoverTarget="a1">Services</button>
        <div id="a1" popover={"auto"}>
          <Menu horizontal>
            <Menu.Item>Enterprise</Menu.Item>
            <Menu.Item>CRM software</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Consulting</Menu.Item>
          </Menu>
        </div>
        <button popoverTarget="a2">AI</button>
        <div id="a2" popover="auto">
          <Menu horizontal>
            <Menu.Item>AI infrastructure</Menu.Item>
            <Menu.Item>Image generation</Menu.Item>
            <Menu.Item>MCP servers</Menu.Item>
          </Menu>
        </div>
        <button popoverTarget="a3">Cloud Solutions</button>
        <div id="a3" popover="auto">
          <Menu horizontal>
            <Menu.Item>Cloud computing</Menu.Item>
            <Menu.Item>Storage solutions</Menu.Item>
            <Menu.Item>Database services</Menu.Item>
          </Menu>
        </div>
      </Megamenu>
    </div>
  ),
};
export const LotLink: Story = {
  name: "Megamenu with a menus and lots of links",
  args: {
    className:
      "max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300",
  },
  render: (args) => (
    <div className="w-full">
      <Button className="sm:hidden" popoverTarget="my-megamenu-3">
        Menu
      </Button>
      <Megamenu {...args} id="my-megamenu-3" popover={"auto"}>
        <button popoverTarget="c1">One</button>
        <div id="c1" popover="auto">
          <div className="flex max-sm:flex-col items-start">
            <Menu className="w-full md:menu-horizontal">
              <Menu.Li>
                <a>Enterprise</a>
                <ul>
                  <li>
                    <a>CRM software</a>
                  </li>
                  <li>
                    <a>Marketing management</a>
                  </li>
                  <li>
                    <a>Security</a>
                  </li>
                  <li>
                    <a>Consulting</a>
                  </li>
                </ul>
              </Menu.Li>
              <Menu.Li>
                <a>Company</a>
                <ul>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Press kit</a>
                  </li>
                </ul>
              </Menu.Li>
            </Menu>
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="md:max-w-sm max-md:w-auto"
              alt="Tailwind CSS megamenu"
            />
          </div>
        </div>

        <button popoverTarget="c2">Two</button>
        <div id="c2" popover="auto">
          <div className="flex max-sm:flex-col items-start">
            <Menu className="w-full md:menu-horizontal">
              <Menu.Li>
                <a>Enterprise</a>
                <ul>
                  <li>
                    <a>CRM software</a>
                  </li>
                  <li>
                    <a>Marketing management</a>
                  </li>
                  <li>
                    <a>Security</a>
                  </li>
                  <li>
                    <a>Consulting</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Press kit</a>
                  </li>
                </ul>
              </Menu.Li>
              <Menu.Li>
                <a>Products</a>
                <ul>
                  <li>
                    <a>UI Kit</a>
                  </li>
                  <li>
                    <a>WordPress themes</a>
                  </li>
                  <li>
                    <a>WordPress plugins</a>
                  </li>
                  <li>
                    <a>Color picker app</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                </ul>
              </Menu.Li>
            </Menu>
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="md:max-w-sm max-md:w-auto"
              alt="Tailwind CSS megamenu component"
            />
          </div>
        </div>

        <button popoverTarget="c3">Three</button>
        <div id="c3" popover="auto">
          <div className="flex max-sm:flex-col items-start">
            <Menu className="w-full md:menu-horizontal">
              <Menu.Li>
                <ul>
                  <li className="menu-title">Solutions</li>
                  <li>
                    <a>Design</a>
                  </li>
                  <li>
                    <a>Development</a>
                  </li>
                  <li>
                    <a>Hosting</a>
                  </li>
                  <li>
                    <a>Domain register</a>
                  </li>
                </ul>
              </Menu.Li>
              <Menu.Li>
                <ul>
                  <li className="menu-title">Products</li>
                  <li>
                    <a>UI Kit</a>
                  </li>
                  <li>
                    <a>Cloud Platform</a>
                  </li>
                  <li>
                    <a>Open source</a>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a>Auth management system</a>
                      </li>
                      <li>
                        <a>VScode theme</a>
                      </li>
                      <li>
                        <a>Color picker app</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Menu.Li>
              <Menu.Li>
                <ul>
                  <li className="menu-title">Enterprise</li>
                  <li>
                    <a>CRM software</a>
                  </li>
                  <li>
                    <a>Marketing management</a>
                  </li>
                  <li>
                    <a>Security</a>
                  </li>
                  <li>
                    <a>Consulting</a>
                  </li>
                </ul>
              </Menu.Li>
              <Menu.Li>
                <ul>
                  <li className="menu-title">Company</li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Press kit</a>
                  </li>
                </ul>
              </Menu.Li>
            </Menu>
          </div>
        </div>
      </Megamenu>
    </div>
  ),
};
export const InNavbar: Story = {
  name: "Megamenu in a navbar",
  args: {
    className: "max-sm:megamenu-vertical",
    full: true,
  },
  render: (args) => (
    <div className="w-full">
      <Navbar>
        <Navbar.Start>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </Navbar.Start>
        <Navbar.Center>
          <Megamenu
            {...args}
            className="megamenu max-sm:megamenu-vertical megamenu-full"
            id="my-megamenu-4"
            popover="auto"
          >
            <button popoverTarget="d1">One</button>
            <div id="d1" popover="auto">
              <div className="flex max-sm:flex-col items-start">
                <Menu className="w-full md:menu-horizontal">
                  <Menu.Li>
                    <a>Enterprise</a>
                    <ul>
                      <li>
                        <a>CRM software</a>
                      </li>
                      <li>
                        <a>Marketing management</a>
                      </li>
                      <li>
                        <a>Security</a>
                      </li>
                      <li>
                        <a>Consulting</a>
                      </li>
                    </ul>
                  </Menu.Li>
                  <Menu.Li>
                    <a>Company</a>
                    <ul>
                      <li>
                        <a>About us</a>
                      </li>
                      <li>
                        <a>Contact us</a>
                      </li>
                      <li>
                        <a>Privacy policy</a>
                      </li>
                      <li>
                        <a>Press kit</a>
                      </li>
                    </ul>
                  </Menu.Li>
                </Menu>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                  className="md:max-w-sm max-md:hidden"
                  alt="Tailwind CSS megamenu"
                />
              </div>
            </div>
            <button popoverTarget="d2">Two</button>
            <div id="d2" popover="auto">
              <div className="flex max-sm:flex-col items-start">
                <Menu className="menu w-full md:menu-horizontal">
                  <Menu.Li>
                    <a>Enterprise</a>
                    <ul>
                      <li>
                        <a>CRM software</a>
                      </li>
                      <li>
                        <a>Marketing management</a>
                      </li>
                      <li>
                        <a>Security</a>
                      </li>
                      <li>
                        <a>Consulting</a>
                      </li>
                      <li>
                        <a>Privacy policy</a>
                      </li>
                      <li>
                        <a>Press kit</a>
                      </li>
                    </ul>
                  </Menu.Li>
                  <Menu.Li>
                    <a>Products</a>
                    <ul>
                      <li>
                        <a>UI Kit</a>
                      </li>
                      <li>
                        <a>WordPress themes</a>
                      </li>
                      <li>
                        <a>WordPress plugins</a>
                      </li>
                      <li>
                        <a>Color picker app</a>
                      </li>
                      <li>
                        <a>About us</a>
                      </li>
                      <li>
                        <a>Contact us</a>
                      </li>
                    </ul>
                  </Menu.Li>
                </Menu>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                  className="md:max-w-sm max-md:hidden"
                  alt="Tailwind CSS megamenu component"
                />
              </div>
            </div>
            <button popoverTarget="d3">Three</button>
            <div id="d3" popover="auto">
              <div className="flex max-sm:flex-col items-start">
                <Menu className="w-full md:menu-horizontal">
                  <Menu.Li>
                    <a>Solutions</a>
                    <ul>
                      <li>
                        <a>Design</a>
                      </li>
                      <li>
                        <a>Development</a>
                      </li>
                      <li>
                        <a>Hosting</a>
                      </li>
                      <li>
                        <a>Domain register</a>
                      </li>
                    </ul>
                  </Menu.Li>
                  <Menu.Li>
                    <a>Products</a>
                    <ul>
                      <li>
                        <a>UI Kit</a>
                      </li>
                      <li>
                        <a>Open source</a>
                        <ul>
                          <li>
                            <a>Auth management system</a>
                          </li>
                          <li>
                            <a>VScode theme</a>
                          </li>
                          <li>
                            <a>Color picker app</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Menu.Li>
                  <Menu.Li>
                    <a>Company</a>
                    <ul>
                      <li>
                        <a>About us</a>
                      </li>
                      <li>
                        <a>Contact us</a>
                      </li>
                      <li>
                        <a>Privacy policy</a>
                      </li>
                      <li>
                        <a>Press kit</a>
                      </li>
                    </ul>
                  </Menu.Li>
                </Menu>
              </div>
            </div>
          </Megamenu>
        </Navbar.Center>
        <Navbar.End>
          <Button as="a">Login</Button>
          <Button className="sm:hidden" popoverTarget="my-megamenu-4">
            Menu
          </Button>
        </Navbar.End>
      </Navbar>
    </div>
  ),
};
export const WithoutArrows: Story = {
  name: "Megamenu without arrows",
  args: {
    className: "p-2 border border-base-300",
  },
  render: (args) => (
    <div className="w-full">
      <Megamenu {...args}>
        <button className="after:content-none" popoverTarget="e1">
          One
        </button>
        <div id="e1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button className="after:content-none" popoverTarget="e2">
          Two
        </button>
        <div id="e2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
      </Megamenu>
    </div>
  ),
};
export const Sizes: Story = {
  name: "Megamenu in different sizes",
  args: {
    className: "p-2 border border-base-300",
  },
  render: (args) => (
    <div className="w-full flex flex-col gap-2">
      <Megamenu {...args} size="xs">
        <button popoverTarget="f1">One</button>
        <div id="f1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button popoverTarget="f2">Two</button>
        <div id="f2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
        <button popoverTarget="f3">Three</button>
        <div id="f3" popover="auto">
          <div className="p-4">Content for the third item</div>
        </div>
      </Megamenu>

      <Megamenu {...args} size="sm">
        <button popoverTarget="f1">One</button>
        <div id="f1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button popoverTarget="f2">Two</button>
        <div id="f2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
        <button popoverTarget="f3">Three</button>
        <div id="f3" popover="auto">
          <div className="p-4">Content for the third item</div>
        </div>
      </Megamenu>

      <Megamenu {...args} size="md">
        <button popoverTarget="f1">One</button>
        <div id="f1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button popoverTarget="f2">Two</button>
        <div id="f2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
        <button popoverTarget="f3">Three</button>
        <div id="f3" popover="auto">
          <div className="p-4">Content for the third item</div>
        </div>
      </Megamenu>

      <Megamenu {...args} size="lg">
        <button popoverTarget="f1">One</button>
        <div id="f1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button popoverTarget="f2">Two</button>
        <div id="f2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
        <button popoverTarget="f3">Three</button>
        <div id="f3" popover="auto">
          <div className="p-4">Content for the third item</div>
        </div>
      </Megamenu>

      <Megamenu {...args} size="xl">
        <button popoverTarget="f1">One</button>
        <div id="f1" popover="auto">
          <div className="p-4">Content for the first item</div>
        </div>
        <button popoverTarget="f2">Two</button>
        <div id="f2" popover="auto">
          <div className="p-4">Content for the second item</div>
        </div>
        <button popoverTarget="f3">Three</button>
        <div id="f3" popover="auto">
          <div className="p-4">Content for the third item</div>
        </div>
      </Megamenu>
    </div>
  ),
};
