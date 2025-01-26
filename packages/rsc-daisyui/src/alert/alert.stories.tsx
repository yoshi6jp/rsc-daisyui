import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Alert } from ".";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: toArgTypes(getVariantConfig(Alert)),
};

export default meta;
type Story = StoryObj<typeof Alert>;
export const Default: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-info shrink-0 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>12 unread messages. Tap to see.</span>
      </Alert>
    );
  },
};

export const InfoColor: Story = {
  args: {
    color: "info",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-current shrink-0 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>New software update available.</span>
      </Alert>
    );
  },
};

export const SuccessColor: Story = {
  args: {
    color: "success",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </Alert>
    );
  },
};

export const WarningColor: Story = {
  args: {
    color: "warning",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Warning: Invalid email address!</span>
      </Alert>
    );
  },
};

export const ErrorColor: Story = {
  args: {
    color: "error",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </Alert>
    );
  },
};

export const SoftStyle: Story = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  args: {
    soft: true,
  },
  render: (args) => {
    return (
      <div className="flex gap-2 flex-wrap">
        <Alert {...args} color="info">
          <span>12 unread messages. Tap to see.</span>
        </Alert>
        <Alert {...args} color="success">
          <span>Your purchase has been confirmed!</span>
        </Alert>
        <Alert {...args} color="warning">
          <span>Warning: Invalid email address!</span>
        </Alert>
        <Alert {...args} color="error">
          <span>Error! Task failed successfully.</span>
        </Alert>
      </div>
    );
  },
};
export const OutlineStyle: Story = {
  ...SoftStyle,
  args: {
    outline: true,
  },
};
export const DashStyle: Story = {
  ...SoftStyle,
  args: {
    dash: true,
  },
};

export const ButtonsResponsive: Story = {
  args: {
    className: "sm:alert-horizontal",
    direction: "vertical",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-info shrink-0 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>we use cookies for no reason.</span>
        <div>
          <Button size="sm">Deny</Button>
          <Button color="primary" size="sm">
            Accept
          </Button>
        </div>
      </Alert>
    );
  },
};

export const TitleAndDescription: Story = {
  args: {
    className: "sm:alert-horizontal",
    direction: "vertical",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <svg
          role="img"
          aria-label="icon"
          className="stroke-info shrink-0 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
        <Button size="sm">See</Button>
      </Alert>
    );
  },
};
