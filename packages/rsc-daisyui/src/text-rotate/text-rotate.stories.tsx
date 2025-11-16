import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { Card } from "..";
import { toArgTypes } from "../storybook-helpers";
import { TextRotate } from "./text-rotate";

const meta: Meta<typeof TextRotate> = {
  title: "Data Display/Text Rotate",
  component: TextRotate,
  argTypes: toArgTypes(getVariantConfig(TextRotate)),
};

export default meta;
type Story = StoryObj<typeof TextRotate>;
export const Default: Story = {
  name: "Text Rotate",
  render: (args) => (
    <TextRotate {...args}>
      <span>
        <span>ONE</span>
        <span>TWO</span>
        <span>THREE</span>
      </span>
    </TextRotate>
  ),
};

export const Rotating6Words: Story = {
  name: "Rotating 6 Words",
  args: {
    className: "text-7xl",
  },
  render: (args) => (
    <TextRotate {...args}>
      <span className="justify-items-center">
        <span>DESIGN</span>
        <span>DEVELOP</span>
        <span>DEPLOY</span>
        <span>SCALE</span>
        <span>MAINTAIN</span>
        <span>REPEAT</span>
      </span>
    </TextRotate>
  ),
};
export const InASentence: Story = {
  name: "Rotating words in a sentence",
  render: (args) => (
    <span>
      Providing AI Agents for
      <TextRotate {...args}>
        <span>
          <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
          <span className="bg-red-400 text-red-800 px-2">Developers</span>
          <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
        </span>
      </TextRotate>
    </span>
  ),
};

export const WithCustomDuration: Story = {
  name: "Rotating 3 words with custom duration",
  args: {
    className: "text-7xl duration-6000",
  },
  render: (args) => (
    <TextRotate {...args}>
      <span className="justify-items-center">
        <span>BLAZING</span>
        <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
      </span>
    </TextRotate>
  ),
};
export const CustomLineHeight: Story = {
  name: "Custom line height",
  args: {
    className: "text-7xl leading-[2]",
  },
  render: (args) => (
    <TextRotate {...args}>
      <span className="justify-items-center">
        <span>📐 DESIGN</span>
        <span>⌨️ DEVELOP</span>
        <span>🌎 DEPLOY</span>
        <span>🌱 SCALE</span>
        <span>🔧 MAINTAIN</span>
        <span>♻️ REPEAT</span>
      </span>
    </TextRotate>
  ),
};
