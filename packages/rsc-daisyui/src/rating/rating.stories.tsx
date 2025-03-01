import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Rating } from ".";

const meta: Meta<typeof Rating> = {
  title: "Data Input/Rating",
  component: Rating,
  argTypes: toArgTypes(getVariantConfig(Rating)),
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Items
          defaultValue={2}
          half={args.half === true}
          name="rating-1"
        />
      </Rating>
    );
  },
};

export const Readonly: Story = {
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Readonly.Items value={3} half={args.half === true} />
      </Rating>
    );
  },
};

export const MaskStar2WithWarningColor: Story = {
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Items
          className="bg-warning"
          defaultValue={2}
          half={args.half === true}
          name="rating-2"
          shape="star-2"
        />
      </Rating>
    );
  },
};

export const MaskHeartWithMultipleColors: Story = {
  args: {
    className: "gap-1",
  },
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Item className="bg-red-400" name="rating-3" shape="heart" />
        <Rating.Item
          className="bg-orange-400"
          defaultChecked
          name="rating-3"
          shape="heart"
        />

        <Rating.Item className="bg-yellow-400" name="rating-3" shape="heart" />
        <Rating.Item className="bg-lime-400" name="rating-3" shape="heart" />
        <Rating.Item className="bg-green-400" name="rating-3" shape="heart" />
      </Rating>
    );
  },
};

export const MaskStar2WithGreen500Color: Story = {
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Items
          className="bg-green-500"
          defaultValue={2}
          half={args.half === true}
          name="rating-4"
          shape="star-2"
        />
      </Rating>
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
      <div className="flex flex-col items-center gap-2">
        <Rating {...args} size="xs">
          <Rating.Items
            className="bg-orange-400"
            defaultValue={2}
            half={args.half === true}
            name="rating-5"
            shape="star-2"
          />
        </Rating>

        <Rating {...args} size="sm">
          <Rating.Items
            className="bg-orange-400"
            defaultValue={2}
            half={args.half === true}
            name="rating-6"
            shape="star-2"
          />
        </Rating>

        <Rating {...args} size="md">
          <Rating.Items
            className="bg-orange-400"
            defaultValue={2}
            half={args.half === true}
            name="rating-7"
            shape="star-2"
          />
        </Rating>

        <Rating {...args} size="lg">
          <Rating.Items
            className="bg-orange-400"
            defaultValue={2}
            half={args.half === true}
            name="rating-8"
            shape="star-2"
          />
        </Rating>

        <Rating {...args} size="xl">
          <Rating.Items
            className="bg-orange-400"
            defaultValue={2}
            half={args.half === true}
            name="rating-9"
            shape="star-2"
          />
        </Rating>
      </div>
    );
  },
};

export const Hidden: Story = {
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Items
          defaultValue={2}
          half={args.half === true}
          hidden
          name="rating-10"
          shape="star-2"
        />
      </Rating>
    );
  },
};

export const Half: Story = {
  args: {
    half: true,
  },
  render: (args) => {
    return (
      <Rating {...args}>
        <Rating.Items
          className="bg-green-500"
          defaultValue={1.5}
          half={args.half === true}
          hidden
          name="rating-10"
          shape="star-2"
        />
      </Rating>
    );
  },
};
