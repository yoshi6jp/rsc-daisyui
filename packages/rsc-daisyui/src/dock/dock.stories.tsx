import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Dock } from ".";

const meta: Meta<typeof Dock> = {
  title: "Navigation/Dock",
  component: Dock,
  argTypes: toArgTypes(getVariantConfig(Dock)),
};
export default meta;
type Story = StoryObj<typeof Dock>;

export const Default: Story = {
  args: {
    className: "relative border border-base-300",
  },
  render: (args) => (
    <div className="rounded-box bg-base-300 w-96">
      <div className="w-full mt-32">
        <Dock {...args}>
          <Dock.Item label={"Home"}>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="1 11 12 2 23 11"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <path
                  d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></path>
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></line>
              </g>
            </svg>
          </Dock.Item>

          <Dock.Item label={"Inbox"} active={true}>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="3 14 9 14 9 17 15 17 15 14 21 14"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></rect>
              </g>
            </svg>
          </Dock.Item>

          <Dock.Item label={"Settings"}>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></circle>
                <path
                  d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
          </Dock.Item>
        </Dock>
      </div>
    </div>
  ),
};
export const ExtraSmall: Story = {
  args: {
    ...Default.args,
    size: "xs",
  },
  render: (args) => (
    <div className="rounded-box bg-base-300 w-96">
      <div className="w-full mt-32">
        <Dock {...args}>
          <Dock.Item>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="1 11 12 2 23 11"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <path
                  d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></path>
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></line>
              </g>
            </svg>
          </Dock.Item>

          <Dock.Item active={true}>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="3 14 9 14 9 17 15 17 15 14 21 14"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></rect>
              </g>
            </svg>
          </Dock.Item>

          <Dock.Item>
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></circle>
                <path
                  d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
          </Dock.Item>
        </Dock>
      </div>
    </div>
  ),
};

export const Small: Story = {
  ...ExtraSmall,
  args: {
    ...ExtraSmall.args,
    size: "sm",
  },
};

export const Medium: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "md",
  },
};

export const Large: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "xl",
  },
};
export const CustomColors: Story = {
  ...Default,
  args: {
    className: "relative bg-neutral text-neutral-content",
  },
};
