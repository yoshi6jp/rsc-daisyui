import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Indicator } from "..";
import { Join } from ".";

const meta: Meta<typeof Join> = {
  title: "Layout/Join (group items)",
  component: Join,
  argTypes: toArgTypes(getVariantConfig(Join)),
};

export default meta;
type Story = StoryObj<typeof Join>;

export const Default: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button>Button</Join.Button>
        <Join.Button>Button</Join.Button>
        <Join.Button>Button</Join.Button>
      </Join>
    );
  },
};

export const Vertically: Story = {
  ...Default,
  args: {
    direction: "vertical",
  },
};
export const Responsive: Story = {
  ...Default,
  args: {
    direction: "vertical",
    className: "lg:join-horizontal",
  },
};

export const ExtraElementsInTheGroup: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Input placeholder="Search" />
        <Join.Select>
          <option disabled selected>
            Filter
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </Join.Select>
        <Indicator>
          <Indicator.Badge color="secondary">new</Indicator.Badge>
          <Join.Button>Search</Join.Button>
        </Indicator>
      </Join>
    );
  },
};

export const CustomBorderRadius: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Input placeholder="Email" />
        <Join.Button className="rounded-r-full">Subscribe</Join.Button>
      </Join>
    );
  },
};

export const RadioButtons: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button
          aria-label="Radio 1"
          as="input"
          name="options"
          type="radio"
        />
        <Join.Button
          aria-label="Radio 2"
          as="input"
          name="options"
          type="radio"
        />
        <Join.Button
          aria-label="Radio 3"
          as="input"
          name="options"
          type="radio"
        />
      </Join>
    );
  },
};
