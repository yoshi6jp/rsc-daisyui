import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Card } from "..";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  argTypes: toArgTypes(getVariantConfig(Divider)),
};

export default meta;
type Story = StoryObj<typeof Divider>;
export const Default: Story = {
  args: {
    children: "OR",
  },
  render: (args) => {
    return (
      <div className="flex flex-col w-full">
        <Card
          className="grid h-20 bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
        <Divider {...args} />
        <Card
          className="grid h-20 bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
      </div>
    );
  },
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    children: "OR",
  },
  render: (args) => {
    return (
      <div className="flex w-full">
        <Card
          className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
        <Divider {...args} />
        <Card
          className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
      </div>
    );
  },
};

export const NoText: Story = {
  ...Default,
  args: {},
};

export const Responsive: Story = {
  args: {
    children: "OR",
    className: "lg:divider-horizontal",
  },
  render: (args) => {
    return (
      <div className="flex flex-col w-full lg:flex-row">
        <Card
          className="grid h-32 flex-grow bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
        <Divider {...args} />
        <Card
          className="grid h-32 flex-grow bg-base-300 rounded-box place-items-center"
          vanilla
        >
          content
        </Card>
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
      <div className="flex flex-col w-full">
        <Divider {...args}>Default</Divider>
        <Divider {...args} color="neutral">
          Neutral
        </Divider>
        <Divider {...args} color="primary">
          Primary
        </Divider>
        <Divider {...args} color="secondary">
          Secondary
        </Divider>
        <Divider {...args} color="accent">
          Accent
        </Divider>
        <Divider {...args} color="success">
          Success
        </Divider>
        <Divider {...args} color="warning">
          Warning
        </Divider>
        <Divider {...args} color="info">
          Info
        </Divider>
        <Divider {...args} color="error">
          Error
        </Divider>
      </div>
    );
  },
};

export const DifferentPositions: Story = {
  parameters: {
    controls: {
      exclude: ["as", "position"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col w-full">
        <Divider {...args} position="start">
          Start
        </Divider>
        <Divider {...args}>Default</Divider>
        <Divider {...args} position="end">
          End
        </Divider>
      </div>
    );
  },
};

export const DifferentPositionsHorizontal: Story = {
  args: {
    horizontal: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "position"],
    },
  },
  render: (args) => {
    return (
      <div className="flex w-full justify-center h-52">
        <Divider {...args} position="start">
          Start
        </Divider>
        <Divider {...args}>Default</Divider>
        <Divider {...args} position="end">
          End
        </Divider>
      </div>
    );
  },
};
