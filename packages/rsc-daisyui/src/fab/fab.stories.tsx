import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { Button, Tooltip } from "..";
import { toArgTypes } from "../storybook-helpers";
import { default as Fab } from "./fab";

const meta: Meta<typeof Fab> = {
  title: "Actions/FAB Speed Dial",
  component: Fab,
  argTypes: toArgTypes(getVariantConfig(Fab)),
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  name: "FAB and Speed Dial (vertical)",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="primary">
          F
        </Fab.Button>
        <Button size="lg" shape="circle">
          A
        </Button>
        <Button size="lg" shape="circle">
          B
        </Button>
        <Button size="lg" shape="circle">
          C
        </Button>
      </Fab>
    </div>
  ),
};
export const WithSVGIcons: Story = {
  name: "FAB and Speed Dial with SVG icons",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="secondary">
          <svg
            aria-label="New"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Fab.Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="Camera"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="Gallery"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="Voice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </Button>
      </Fab>
    </div>
  ),
};

export const WithLabels: Story = {
  name: "FAB and Speed Dial with labels",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="success">
          F
        </Fab.Button>
        <div>
          Label B{" "}
          <Button size="lg" shape="circle">
            A
          </Button>
        </div>
        <div>
          Label C{" "}
          <Button size="lg" shape="circle">
            B
          </Button>
        </div>
        <div>
          Label D{" "}
          <Button size="lg" shape="circle">
            C
          </Button>
        </div>
      </Fab>
    </div>
  ),
};

export const WithRectangleButtons: Story = {
  name: "FAB and Speed Dial with rectangle buttons",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="success">
          F
        </Fab.Button>
        <Button size="lg">Button A</Button>
        <Button size="lg">Button B</Button>
        <Button size="lg">Button C</Button>
      </Fab>
    </div>
  ),
};

export const WithCloseButton: Story = {
  name: "FAB and Speed Dial with labels and close button",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="info">
          F
        </Fab.Button>
        <Fab.Close>
          Close{" "}
          <Button as="span" shape="circle" size="lg" color="error">
            ✕
          </Button>
        </Fab.Close>
        <div>
          Label A{" "}
          <Button size="lg" shape="circle">
            A
          </Button>
        </div>
        <div>
          Label B{" "}
          <Button size="lg" shape="circle">
            B
          </Button>
        </div>
        <div>
          Label C{" "}
          <Button size="lg" shape="circle">
            C
          </Button>
        </div>
      </Fab>
    </div>
  ),
};

export const WithMainActionButton: Story = {
  name: "FAB and Speed Dial with labels and main action button",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="primary">
          F
        </Fab.Button>
        <Fab.MainAction>
          Main Action{" "}
          <Button shape="circle" size="lg" color="secondary">
            M
          </Button>
        </Fab.MainAction>
        <div>
          Label A{" "}
          <Button size="lg" shape="circle">
            A
          </Button>
        </div>
        <div>
          Label B{" "}
          <Button size="lg" shape="circle">
            B
          </Button>
        </div>
        <div>
          Label C{" "}
          <Button size="lg" shape="circle">
            C
          </Button>
        </div>
      </Fab>
    </div>
  ),
};

export const SingleFAB: Story = {
  name: "A single FAB (Floating Action Button)",
  args: {
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Button size="lg" shape="circle" color="primary">
          F
        </Button>
      </Fab>
    </div>
  ),
};

export const FlowerAndSpeedDial: Story = {
  name: "FAB Flower and Speed Dial",
  args: {
    flower: true,
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="success">
          F
        </Fab.Button>

        <Fab.MainActionButton size="lg">M</Fab.MainActionButton>

        <Button size="lg" shape="circle">
          A
        </Button>
        <Button size="lg" shape="circle">
          B
        </Button>
        <Button size="lg" shape="circle">
          C
        </Button>
        <Button size="lg" shape="circle">
          D
        </Button>
      </Fab>
    </div>
  ),
};

export const FlowerSpeedDialWithSVGIcons: Story = {
  name: "FAB Flower Speed Dial with SVG icons",
  args: {
    flower: true,
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg">
          <svg
            aria-label="New"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        </Fab.Button>

        <Fab.MainActionButton size="lg" color="primary">
          <svg
            aria-label="New post"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
              clipRule="evenodd"
            />
          </svg>
        </Fab.MainActionButton>

        <Button size="lg" shape="circle">
          <svg
            aria-label="New camera photo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path d="M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            <path
              fillRule="evenodd"
              d="M2.5 5A1.5 1.5 0 0 0 1 6.5v5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 5h-.879a1.5 1.5 0 0 1-1.06-.44l-1.122-1.12A1.5 1.5 0 0 0 9.38 3H6.62a1.5 1.5 0 0 0-1.06.44L4.439 4.56A1.5 1.5 0 0 1 3.38 5H2.5ZM11 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="New poll"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </svg>
        </Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="New gallery photo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button size="lg" shape="circle">
          <svg
            aria-label="New voice"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path d="M8 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Z" />
            <path d="M4.5 7A.75.75 0 0 0 3 7a5.001 5.001 0 0 0 4.25 4.944V13.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.556A5.001 5.001 0 0 0 13 7a.75.75 0 0 0-1.5 0 3.5 3.5 0 1 1-7 0Z" />
          </svg>
        </Button>
      </Fab>
    </div>
  ),
};

export const FlowerSpeedDialWithTooltip: Story = {
  name: "FAB and Flower Speed Dial with tooltip",
  args: {
    flower: true,
    className: "absolute z-1",
  },
  render: (args) => (
    <div className="h-60 w-full relative">
      <Fab {...args}>
        <Fab.Button size="lg" color="success">
          F
        </Fab.Button>

        <Fab.MainActionButton color="success" size="lg">
          M
        </Fab.MainActionButton>
        <Tooltip position="left" tip="Label A">
          <Button shape="circle" size="lg">
            A
          </Button>
        </Tooltip>
        <Tooltip position="left" tip="Label B">
          <Button shape="circle" size="lg">
            B
          </Button>
        </Tooltip>
        <Tooltip position="left" tip="Label C">
          <Button shape="circle" size="lg">
            C
          </Button>
        </Tooltip>
        <Tooltip position="left" tip="Label D">
          <Button shape="circle" size="lg">
            D
          </Button>
        </Tooltip>
      </Fab>
    </div>
  ),
};
