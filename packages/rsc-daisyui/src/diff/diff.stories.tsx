import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { DiffBase } from "./diff";
import { Diff } from ".";

const meta: Meta<typeof Diff> = {
  title: "Data Display/Diff",
  component: Diff,
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
          src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
        />
      }
    >
      <img
        alt="daisy"
        src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
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

export const CustomBorder: Story = {
  render: (args) => (
    <Diff
      {...args}
      secondChild={
        <Diff.Item2 className="border-primary">
          <img
            alt="daisy"
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
          />
        </Diff.Item2>
      }
    >
      <Diff.Item1>
        <img
          alt="daisy"
          src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
        />
      </Diff.Item1>
    </Diff>
  ),
};
