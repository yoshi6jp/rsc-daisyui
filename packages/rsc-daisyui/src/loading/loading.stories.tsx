import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Loading } from ".";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Loading)),
};

export default meta;
type Story = StoryObj<typeof Loading>;
export const Spinner: Story = {
  render: (args) => (
    <>
      <Loading {...args} size="xs" />
      <Loading {...args} size="sm" />
      <Loading {...args} size="md" />
      <Loading {...args} size="lg" />
    </>
  ),
  args: {
    variant: "spinner",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
};

export const Dots: Story = {
  ...Spinner,
  args: {
    variant: "dots",
  },
};

export const Ring: Story = {
  ...Spinner,
  args: {
    variant: "ring",
  },
};

export const Ball: Story = {
  ...Spinner,
  args: {
    variant: "ball",
  },
};

export const Bars: Story = {
  ...Spinner,
  args: {
    variant: "bars",
  },
};

export const LoadingInfinity: Story = {
  ...Spinner,
  args: {
    variant: "infinity",
  },
};

export const Colors: Story = {
  render: (args) => (
    <>
      <Loading {...args} color="primary" />
      <Loading {...args} color="secondary" />
      <Loading {...args} color="accent" />
      <Loading {...args} color="neutral" />
      <Loading {...args} color="info" />
      <Loading {...args} color="success" />
      <Loading {...args} color="warning" />
      <Loading {...args} color="error" />
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
};
