import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
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

export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: ({ children, ...args }) => {
    return (
      <div className="flex gap-2 xl:py-10 flex-wrap items-center justify-center">
        <Badge {...args} size="xs">
          Xsmall
        </Badge>
        <Badge {...args} size="sm">
          Small
        </Badge>
        <Badge {...args} size="md">
          Medium
        </Badge>
        <Badge {...args} size="lg">
          Large
        </Badge>
        <Badge {...args} size="xl">
          Xlarge
        </Badge>
      </div>
    );
  },
};
export const Colors: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <div className="flex gap-2 xl:py-10 flex-wrap items-center justify-center">
        <Badge {...args} color="primary">
          Primary
        </Badge>
        <Badge {...args} color="secondary">
          Secondary
        </Badge>
        <Badge {...args} color="accent">
          Accent
        </Badge>

        <Badge {...args} color="neutral">
          Neutral
        </Badge>
        <Badge {...args} color="info">
          Info
        </Badge>
        <Badge {...args} color="success">
          Success
        </Badge>
        <Badge {...args} color="warning">
          Warning
        </Badge>
        <Badge {...args} color="error">
          Error
        </Badge>
      </div>
    );
  },
};

export const Soft: Story = {
  ...Colors,
  args: {
    soft: true,
  },
};
export const Outline: Story = {
  ...Colors,
  args: {
    outline: true,
  },
};
export const Dash: Story = {
  ...Colors,
  args: {
    dash: true,
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    children: "ghost",
    ghost: true,
  },
};

export const Empty: Story = {
  args: {
    children: "",
    color: "primary",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: ({ children, ...args }) => {
    return (
      <div className="flex gap-2 xl:py-10 flex-wrap items-center justify-center">
        <Badge {...args} size="xs">
          {children}
        </Badge>
        <Badge {...args} size="sm">
          {children}
        </Badge>
        <Badge {...args} size="md">
          {children}
        </Badge>
        <Badge {...args} size="lg">
          {children}
        </Badge>
        <Badge {...args} size="xl">
          {children}
        </Badge>
      </div>
    );
  },
};

export const WithIcon: Story = {
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
      <div className="flex gap-2 xl:py-10 flex-wrap items-center justify-center">
        <Badge {...args} color="info">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
              <circle
                cx="12"
                cy="7.25"
                r="1.25"
                fill="currentColor"
                strokeWidth="2"
              ></circle>
            </g>
          </svg>
          Info
        </Badge>
        <Badge {...args} color="success">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <polyline
                points="7 13 10 16 17 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
            </g>
          </svg>
          Success
        </Badge>
        <Badge {...args} color="warning">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g fill="currentColor">
              <path
                d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <line
                x1="9"
                y1="6.5"
                x2="9"
                y2="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></line>
            </g>
          </svg>
          Warning
        </Badge>
        <Badge {...args} color="error">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <rect
                x="1.972"
                y="11"
                width="20.056"
                height="2"
                transform="translate(-4.971 12) rotate(-45)"
                fill="currentColor"
                strokeWidth={0}
              ></rect>
              <path
                d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                strokeWidth={0}
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Error
        </Badge>
      </div>
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
      <div className="grid">
        <h1 className="text-xl font-semibold">
          Heading 1{" "}
          <Badge {...args} size="xl">
            Badge
          </Badge>
        </h1>

        <h2 className="text-lg font-semibold">
          Heading 2{" "}
          <Badge {...args} size="lg">
            Badge
          </Badge>
        </h2>

        <h3 className="text-base font-semibold">
          Heading 3{" "}
          <Badge {...args} size="md">
            Badge
          </Badge>
        </h3>

        <h4 className="text-sm font-semibold">
          Heading 4{" "}
          <Badge {...args} size="sm">
            Badge
          </Badge>
        </h4>

        <h5 className="text-xs font-semibold">
          Heading 5{" "}
          <Badge {...args} size="xs">
            Badge
          </Badge>
        </h5>

        <p className="text-xs">
          Paragraph{" "}
          <Badge {...args} size="xs">
            Badge
          </Badge>
        </p>
      </div>
    );
  },
};

export const InAButton: Story = {
  args: {
    children: "+99",
    size: "sm",
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
