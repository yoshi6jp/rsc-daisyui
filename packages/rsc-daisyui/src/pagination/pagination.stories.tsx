import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Join } from "../join";

const meta: Meta<typeof Join> = {
  title: "Navigation/Pagination",
  component: Join,
  argTypes: toArgTypes(getVariantConfig(Join)),
};

export default meta;
type Story = StoryObj<typeof Join>;

export const Default: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button>1</Join.Button>
        <Join.Button active>2</Join.Button>
        <Join.Button>3</Join.Button>
        <Join.Button>4</Join.Button>
      </Join>
    );
  },
};
export const Sizes: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-2 items-center">
        <Join {...args}>
          <Join.Button size="xs">1</Join.Button>
          <Join.Button active size="xs">
            2
          </Join.Button>
          <Join.Button size="xs">3</Join.Button>
          <Join.Button size="xs">4</Join.Button>
        </Join>

        <Join {...args}>
          <Join.Button size="sm">1</Join.Button>
          <Join.Button active size="sm">
            2
          </Join.Button>
          <Join.Button size="sm">3</Join.Button>
          <Join.Button size="sm">4</Join.Button>
        </Join>

        <Join {...args}>
          <Join.Button size="md">1</Join.Button>
          <Join.Button active size="md">
            2
          </Join.Button>
          <Join.Button size="md">3</Join.Button>
          <Join.Button size="md">4</Join.Button>
        </Join>

        <Join {...args}>
          <Join.Button size="lg">1</Join.Button>
          <Join.Button active size="lg">
            2
          </Join.Button>
          <Join.Button size="lg">3</Join.Button>
          <Join.Button size="lg">4</Join.Button>
        </Join>
      </div>
    );
  },
};

export const DisabledButton: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button>1</Join.Button>
        <Join.Button>2</Join.Button>
        <Join.Button disabled>...</Join.Button>
        <Join.Button>99</Join.Button>
        <Join.Button>100</Join.Button>
      </Join>
    );
  },
};
export const ExtraSmallButtons: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button>«</Join.Button>
        <Join.Button>Page 22</Join.Button>
        <Join.Button>»</Join.Button>
      </Join>
    );
  },
};

export const OutlineButtonsWithEqualWidth: Story = {
  args: {
    className: "grid grid-cols-2",
  },
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button outline>Previous page</Join.Button>
        <Join.Button outline>Next</Join.Button>
      </Join>
    );
  },
};

export const UsingRadioInputs: Story = {
  render: (args) => {
    return (
      <Join {...args}>
        <Join.Button
          aria-label="1"
          as="input"
          defaultChecked
          name="options"
          shape="square"
          type="radio"
        />
        <Join.Button
          aria-label="2"
          as="input"
          name="options"
          shape="square"
          type="radio"
        />
        <Join.Button
          aria-label="3"
          as="input"
          name="options"
          shape="square"
          type="radio"
        />
        <Join.Button
          aria-label="4"
          as="input"
          name="options"
          shape="square"
          type="radio"
        />
      </Join>
    );
  },
};
