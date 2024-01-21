import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { Kbd } from ".";
import { toArgTypes } from "../storybook-helpers";

const meta: Meta<typeof Kbd> = {
  title: "Data Display/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Kbd)),
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: (args) => <Kbd {...args}>A</Kbd>,
};

export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => (
    <>
      <Kbd {...args} size="lg">
        Shift
      </Kbd>
      <Kbd {...args} size="md">
        Shift
      </Kbd>
      <Kbd {...args} size="sm">
        Shift
      </Kbd>
      <Kbd {...args} size="xs">
        Shift
      </Kbd>
    </>
  ),
};

export const InText: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <>
      Press <Kbd {...args}>F</Kbd> to pay respects.
    </>
  ),
};

export const KeyCombination: Story = {
  render: (args) => (
    <>
      <Kbd {...args}>ctrl</Kbd>+<Kbd {...args}>shift</Kbd>+
      <Kbd {...args}>del</Kbd>
    </>
  ),
};

export const FunctionKeys: Story = {
  render: (args) => (
    <>
      <Kbd {...args}>⌘</Kbd>
      <Kbd {...args}>⌥</Kbd>
      <Kbd {...args}>⇧</Kbd>
      <Kbd {...args}>⌃</Kbd>
    </>
  ),
};

export const AFullKeyboard: Story = {
  render: (args) => (
    <div className="overflow-x-auto">
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>q</Kbd>
        <Kbd {...args}>w</Kbd>
        <Kbd {...args}>e</Kbd>
        <Kbd {...args}>r</Kbd>
        <Kbd {...args}>t</Kbd>
        <Kbd {...args}>y</Kbd>
        <Kbd {...args}>u</Kbd>
        <Kbd {...args}>i</Kbd>
        <Kbd {...args}>o</Kbd>
        <Kbd {...args}>p</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>a</Kbd>
        <Kbd {...args}>s</Kbd>
        <Kbd {...args}>d</Kbd>
        <Kbd {...args}>f</Kbd>
        <Kbd {...args}>g</Kbd>
        <Kbd {...args}>h</Kbd>
        <Kbd {...args}>j</Kbd>
        <Kbd {...args}>k</Kbd>
        <Kbd {...args}>l</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>z</Kbd>
        <Kbd {...args}>x</Kbd>
        <Kbd {...args}>c</Kbd>
        <Kbd {...args}>v</Kbd>
        <Kbd {...args}>b</Kbd>
        <Kbd {...args}>n</Kbd>
        <Kbd {...args}>m</Kbd>
        <Kbd {...args}>/</Kbd>
      </div>
    </div>
  ),
};

export const ArrowKeys: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <div className="flex justify-center w-full">
        <Kbd {...args}>▲</Kbd>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <Kbd {...args}>◀︎</Kbd>
        <Kbd {...args}>▶︎</Kbd>
      </div>
      <div className="flex justify-center w-full">
        <Kbd {...args}>▼</Kbd>
      </div>
    </div>
  ),
};
