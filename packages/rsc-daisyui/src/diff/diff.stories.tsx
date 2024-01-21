import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Diff, DiffBase } from "./diff";

const meta: Meta<typeof Diff> = {
  title: "Data Display/Diff",
  component: Diff,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(DiffBase)),
  parameters: {
    controls: {
      exclude: ["as", "secondItem"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Diff>;
export const Default: Story = {
  render: (args) => (
    <Diff
      {...args}
      secondItem={
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg"
        />
      }
    >
      <img
        alt="daisy"
        src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
      />
    </Diff>
  ),
};

export const DiffText: Story = {
  render: (args) => (
    <Diff
      {...args}
      secondItem={
        <div className="bg-base-200 text-9xl font-black grid place-content-center">
          DAISY
        </div>
      }
    >
      <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
        DAISY
      </div>
    </Diff>
  ),
};
