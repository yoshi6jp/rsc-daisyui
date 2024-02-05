import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { RadialProgress, RadialProgressBase } from "./radial-progress";

const meta: Meta<typeof RadialProgress> = {
  title: "Feedback/Radial Progress",
  component: RadialProgress,
  argTypes: toArgTypes(getVariantConfig(RadialProgressBase)),
};

export default meta;
type Story = StoryObj<typeof RadialProgress>;

export const Default: Story = {
  args: {
    children: "70%",
    value: 70,
  },
  render: (args) => {
    return <RadialProgress {...args} />;
  },
};

export const DifferentValues: Story = {
  render: (args) => {
    return (
      <>
        <RadialProgress {...args} value={0}>
          0%
        </RadialProgress>
        <RadialProgress {...args} value={20}>
          20%
        </RadialProgress>
        <RadialProgress {...args} value={40}>
          40%
        </RadialProgress>
        <RadialProgress {...args} value={60}>
          60%
        </RadialProgress>
        <RadialProgress {...args} value={80}>
          80%
        </RadialProgress>
        <RadialProgress {...args} value={100}>
          100%
        </RadialProgress>
      </>
    );
  },
};

export const CustomColor: Story = {
  ...Default,
  args: {
    children: "70%",
    value: 70,
    className: "text-primary",
  },
};

export const BackgroundColorAndBorder: Story = {
  ...Default,
  args: {
    children: "70%",
    value: 70,
    className: "bg-primary text-primary-content border-4 border-primary",
  },
};

export const CustomSizeAndCustomThickness: Story = {
  args: {
    children: "70%",
    value: 70,
    size: "12rem",
  },
  render: (args) => {
    return (
      <>
        <RadialProgress {...args} thickness="2px" />
        <RadialProgress {...args} thickness="2rem" />
      </>
    );
  },
};
