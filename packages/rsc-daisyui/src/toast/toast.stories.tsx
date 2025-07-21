import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Alert } from "..";
import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: toArgTypes(getVariantConfig(Toast)),
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    className: "absolute",
  },
  render: (args) => {
    return (
      <div className="w-full h-64 relative">
        <Toast {...args}>
          <Alert color="info">
            <span>New message arrived.</span>
          </Alert>
        </Toast>
      </div>
    );
  },
};

export const TopStart: Story = {
  args: {
    className: "absolute",
    vertical: "top",
    horizontal: "start",
  },
  render: (args) => {
    return (
      <div className="w-full h-64 relative">
        <Toast {...args}>
          <Alert color="info">
            <span>New mail arrived.</span>
          </Alert>
          <Alert color="success">
            <span>Message sent successfully.</span>
          </Alert>
        </Toast>
      </div>
    );
  },
};
export const TopCenter: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    vertical: "top",
    horizontal: "center",
  },
};

export const TopEnd: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    vertical: "top",
    horizontal: "end",
  },
};
export const StartMiddle: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    vertical: "middle",
    horizontal: "start",
  },
};

export const CenterMiddle: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    vertical: "middle",
    horizontal: "center",
  },
};
export const EndMiddle: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    vertical: "middle",
    horizontal: "end",
  },
};
export const StartBottom: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    horizontal: "start",
  },
};
export const CenterBottom: Story = {
  ...TopStart,
  args: {
    className: "absolute",
    horizontal: "center",
  },
};
export const EndBottom: Story = {
  ...TopStart,
  args: {
    className: "absolute",
  },
};
