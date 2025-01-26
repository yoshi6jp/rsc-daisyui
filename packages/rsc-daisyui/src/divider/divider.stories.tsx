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
      <div className="flex w-full flex-col">
        <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
          content
        </Card>
        <Divider {...args} />
        <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
          content
        </Card>
      </div>
    );
  },
};

export const Horizontal: Story = {
  args: {
    children: "OR",
    direction: "horizontal",
  },
  render: (args) => {
    return (
      <div className="flex w-full">
        <Card className="grid h-20 grow bg-base-300 rounded-box place-items-center">
          content
        </Card>
        <Divider {...args} />
        <Card className="grid h-20 grow bg-base-300 rounded-box place-items-center">
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
        <Card className="grid h-32 grow bg-base-300 rounded-box place-items-center">
          content
        </Card>
        <Divider {...args} />
        <Card className="grid h-32 grow bg-base-300 rounded-box place-items-center">
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
      exclude: ["as", "placement"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col w-full">
        <Divider {...args} placement="start">
          Start
        </Divider>
        <Divider {...args}>Default</Divider>
        <Divider {...args} placement="end">
          End
        </Divider>
      </div>
    );
  },
};

export const DifferentPositionsHorizontal: Story = {
  args: {
    direction: "horizontal",
  },
  parameters: {
    controls: {
      exclude: ["as", "placement"],
    },
  },
  render: (args) => {
    return (
      <div className="flex w-full justify-center h-52">
        <Divider {...args} placement="start">
          Start
        </Divider>
        <Divider {...args}>Default</Divider>
        <Divider {...args} placement="end">
          End
        </Divider>
      </div>
    );
  },
};
