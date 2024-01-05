import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Badge)),
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
  render: ({ children, ...args }) => {
    return <Badge {...args}>{children}</Badge>;
  },
};

export const BrandColors: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <>
        <Badge {...args}>default</Badge>
        <Badge {...args} color="neutral">
          neutral
        </Badge>
        <Badge {...args} color="primary">
          primary
        </Badge>
        <Badge {...args} color="secondary">
          secondary
        </Badge>
        <Badge {...args} color="accent">
          accent
        </Badge>
        <Badge {...args} color="ghost">
          accent
        </Badge>
      </>
    );
  },
};

export const Outline: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  args: {
    outline: true,
  },
  render: (args) => {
    return (
      <>
        <Badge {...args}>default</Badge>
        <Badge {...args} color="primary">
          primary
        </Badge>
        <Badge {...args} color="secondary">
          secondary
        </Badge>
        <Badge {...args} color="accent">
          accent
        </Badge>
      </>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  args: {
    children: "987,654",
  },
  render: ({ children, ...args }) => {
    return (
      <>
        <Badge {...args} size="lg">
          {children}
        </Badge>
        <Badge {...args} size="md">
          {children}
        </Badge>
        <Badge {...args} size="sm">
          {children}
        </Badge>
        <Badge {...args} size="xs">
          {children}
        </Badge>
      </>
    );
  },
};

export const Empty: Story = {
  ...Sizes,
  args: {
    children: "",
    color: "primary",
  },
};

export const StateColors: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  args: {
    className: "gap-2",
  },
  render: (args) => {
    return (
      <>
        <Badge {...args} color="info">
          <svg
            className="inline-block w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          info
        </Badge>
        <Badge {...args} color="success">
          <svg
            className="inline-block w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          success
        </Badge>
        <Badge {...args} color="warning">
          <svg
            className="inline-block w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          warning
        </Badge>
        <Badge {...args} color="error">
          <svg
            className="inline-block w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          error
        </Badge>
      </>
    );
  },
};

export const InAText: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  args: {
    children: "NEW",
  },
  render: ({ children, ...args }) => {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-xl">
          Heading
          <Badge {...args} size="lg">
            {children}
          </Badge>
        </h2>
        <h3 className="text-lg">
          Heading
          <Badge {...args} size="md">
            {children}
          </Badge>
        </h3>
        <h4 className="text-base">
          Heading
          <Badge {...args} size="sm">
            {children}
          </Badge>
        </h4>
        <h5 className="text-sm">
          Heading
          <Badge {...args} size="xs">
            {children}
          </Badge>
        </h5>
      </div>
    );
  },
};

export const InAButton: Story = {
  args: {
    children: "+99",
  },
  render: ({ children, ...args }) => {
    return (
      <div className="flex gap-2">
        <Button>
          Inbox
          <Badge {...args}>{children}</Badge>
        </Button>
        <Button>
          Inbox
          <Badge {...args} color="secondary">
            {children}
          </Badge>
        </Button>
      </div>
    );
  },
};
