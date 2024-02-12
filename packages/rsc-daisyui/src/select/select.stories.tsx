import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label } from "..";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Data Input/Select",
  component: Select,
  argTypes: toArgTypes(getVariantConfig(Select)),
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    bordered: false,
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </Select>
    );
  },
};
export const Border: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </Select>
    );
  },
};
export const Ghost: Story = {
  args: {
    color: "ghost",
    bordered: false,
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick the best JS framework
        </option>
        <option>Svelte</option>
        <option>Vue</option>
        <option>React</option>
      </Select>
    );
  },
};

export const FormControlAndLabels: Story = {
  render: (args) => {
    return (
      <FormControl>
        <Label>
          <Label.Text>Pick the best fantasy franchise</Label.Text>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>

        <Select {...args}>
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </Select>

        <Label>
          <Label.TextAlt>Alt label</Label.TextAlt>
          <Label.TextAlt>Alt label</Label.TextAlt>
        </Label>
      </FormControl>
    );
  },
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          What is the best TV show?
        </option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </Select>
    );
  },
};

export const SecondaryColor: Story = {
  args: {
    color: "secondary",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick your favorite language
        </option>
        <option>Java</option>
        <option>Go</option>
        <option>C</option>
        <option>C#</option>
        <option>C++</option>
        <option>Rust</option>
        <option>JavaScript</option>
        <option>Python</option>
      </Select>
    );
  },
};

export const AccentColor: Story = {
  args: {
    color: "accent",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Dark mode or light mode?
        </option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </Select>
    );
  },
};
export const InfoColor: Story = {
  args: {
    color: "info",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Select language
        </option>
        <option>English</option>
        <option>Japanese</option>
        <option>Italian</option>
      </Select>
    );
  },
};
export const SuccessColor: Story = {
  args: {
    color: "success",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick your favorite anime
        </option>
        <option>One Piece</option>
        <option>Naruto</option>
        <option>Death Note</option>
        <option>Attack on Titan</option>
        <option>Bleach</option>
        <option>Fullmetal Alchemist</option>
        <option>Jojo&apos;s Bizarre Adventure</option>
      </Select>
    );
  },
};
export const WarningColor: Story = {
  args: {
    color: "warning",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          Pick a pizza
        </option>
        <option>Cheese</option>
        <option>Veggie</option>
        <option>Pepperoni</option>
        <option>Margherita</option>
        <option>Hawaiian</option>
      </Select>
    );
  },
};
export const ErrorColor: Story = {
  args: {
    color: "error",
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option disabled selected>
          What is the best headless CMS
        </option>
        <option>Strapi</option>
        <option>Ghost</option>
        <option>Netlify CMS</option>
        <option>Sanity</option>
      </Select>
    );
  },
};
export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <Select {...args} size="lg">
          <option disabled selected>
            Large
          </option>
          <option>Large Apple</option>
          <option>Large Orange</option>
          <option>Large Tomato</option>
        </Select>
        <Select {...args} size="md">
          <option disabled selected>
            Normal
          </option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </Select>
        <Select {...args} size="sm">
          <option disabled selected>
            Small
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </Select>
        <Select {...args} size="xs">
          <option disabled selected>
            Tiny
          </option>
          <option>Tiny Apple</option>
          <option>Tiny Orange</option>
          <option>Tiny Tomato</option>
        </Select>
      </div>
    );
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    bordered: false,
  },
  render: (args) => {
    return (
      <Select {...args}>
        <option>You can&apos;t touch this</option>
      </Select>
    );
  },
};
