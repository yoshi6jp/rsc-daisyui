import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Aura } from "./aura";
import { Card } from "../card";
import { Button } from "../button";

const meta: Meta<typeof Aura> = {
  title: "Data Display/Aura",
  component: Aura,
  argTypes: toArgTypes(getVariantConfig(Aura)),
};

export default meta;
type Story = StoryObj<typeof Aura>;

export const Default: Story = {
  name: "Aura",
  render: (args) => (
    <Aura {...args}>
      <Card>
        <Card.Body>
          <p>This card has {args.decorate} aura</p>
        </Card.Body>
      </Card>
    </Aura>
  ),
};

export const AroundButton: Story = {
  name: "Aura around a button",
  render: (args) => (
    <Aura {...args}>
      <Button>button with aura</Button>
    </Aura>
  ),
};

export const Dual: Story = {
  ...Default,
  name: "Aura dual",
  args: {
    decorate: "dual",
  },
};

export const Rainbow: Story = {
  ...Default,
  name: "Aura rainbow",
  args: {
    decorate: "rainbow",
  },
};
export const Holo: Story = {
  ...Default,
  name: "Aura holo",
  args: {
    decorate: "holo",
  },
};
export const Glow: Story = {
  ...Default,
  name: "Aura glow",
  args: {
    decorate: "glow",
  },
};

export const Gold: Story = {
  ...Default,
  name: "Aura gold",
  args: {
    decorate: "gold",
  },
};

export const Silver: Story = {
  ...Default,
  name: "Aura silver",
  args: {
    decorate: "silver",
  },
};

export const CustomColor: Story = {
  name: "Aura with custom color",
  args: {
    className: "text-orange-600",
  },
  render: (args) => (
    <Aura {...args}>
      <Card className="text-base-content">
        <Card.Body>
          <p>This card has custom color aura</p>
        </Card.Body>
      </Card>
    </Aura>
  ),
};
export const CustomColorAndBgColor: Story = {
  name: "Aura with custom color and custom background color",
  args: {
    className: "text-orange-600 bg-yellow-200",
  },
  render: (args) => (
    <Aura {...args}>
      <Card className="text-base-content">
        <Card.Body>
          <p>This card has custom color and background color aura</p>
        </Card.Body>
      </Card>
    </Aura>
  ),
};

export const RainbowAroundPricingCard: Story = {
  name: "Aura rainbow around a pricing card",
  args: {
    decorate: "rainbow",
  },
  render: (args) => (
    <Aura {...args}>
      <Card className="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">$29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">Seamless cloud integration</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                Real-time collaboration tools
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <Button color="primary" block>
              Subscribe
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Aura>
  ),
};

export const Sizes: Story = {
  name: "Aura sizes",
  args: {},
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Aura {...args} size="xs">
        <Button>XS</Button>
      </Aura>
      <Aura {...args} size="sm">
        <Button>SM</Button>
      </Aura>
      <Aura {...args} size="md">
        <Button>MD</Button>
      </Aura>
      <Aura {...args} size="lg">
        <Button>LG</Button>
      </Aura>
      <Aura {...args} size="xl">
        <Button>XL</Button>
      </Aura>
    </div>
  ),
};

export const CustomAnimationDuration: Story = {
  name: "Aura with custom animation duration",
  args: {
    decorate: "rainbow",
    className: "duration-2000",
  },
  render: (args) => (
    <Aura {...args} size="xs">
      <Card>
        <Card.Body>
          <p>2000ms duration aura</p>
        </Card.Body>
      </Card>
    </Aura>
  ),
};
