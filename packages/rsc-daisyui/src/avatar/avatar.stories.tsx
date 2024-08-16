import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Mask } from "..";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  argTypes: toArgTypes(getVariantConfig(Avatar)),
};

export default meta;
type Story = StoryObj<typeof Avatar>;
export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <div className="w-24 rounded">
        <img
          alt="avatar"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </Avatar>
  ),
};

export const CustomSizes: Story = {
  render: (args) => (
    <>
      <Avatar {...args}>
        <div className="w-24 rounded">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-16 rounded">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-12 rounded">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-8 rounded">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
    </>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <>
      <Avatar {...args}>
        <div className="w-24 rounded-xl">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-24 rounded-full">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
    </>
  ),
};

export const WithMask: Story = {
  render: (args) => (
    <>
      <Avatar {...args}>
        <Mask as="div" className="w-24" shape="squircle">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </Mask>
      </Avatar>
      <Avatar {...args}>
        <Mask as="div" className="w-24" shape="hexagon">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </Mask>
      </Avatar>
      <Avatar {...args}>
        <Mask as="div" className="w-24" shape="triangle">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </Mask>
      </Avatar>
    </>
  ),
};

export const Group: Story = {
  render: (args) => (
    <Avatar.Group>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args} placeholder>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
    </Avatar.Group>
  ),
};

export const GroupWithCounter: Story = {
  parameters: {
    controls: {
      exclude: ["as", "placeholder"],
    },
  },
  render: (args) => (
    <Avatar.Group>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args}>
        <div className="w-12">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args} placeholder>
        <div className="w-12 bg-neutral text-neutral-content">
          <span>99+</span>
        </div>
      </Avatar>
    </Avatar.Group>
  ),
};
export const WithRing: Story = {
  render: (args) => (
    <Avatar {...args}>
      <div
        className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2
      "
      >
        <img
          alt="avatar"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </Avatar>
  ),
};

export const PresenceIndicator: Story = {
  parameters: {
    controls: {
      exclude: ["as", "indicator"],
    },
  },
  render: (args) => (
    <>
      <Avatar {...args} indicator="online">
        <div className="w-24 rounded-full">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
      <Avatar {...args} indicator="offline">
        <div className="w-24 rounded-full">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Avatar>
    </>
  ),
};
export const Placeholder: Story = {
  parameters: {
    controls: {
      exclude: ["as", "placeholder"],
    },
  },
  render: (args) => (
    <>
      <Avatar {...args} placeholder>
        <div className="bg-neutral text-neutral-content rounded-full w-24">
          <span className="text-3xl">D</span>
        </div>
      </Avatar>
      <Avatar {...args} indicator="online" placeholder>
        <div className="bg-neutral text-neutral-content rounded-full w-16">
          <span className="text-xl">AI</span>
        </div>
      </Avatar>
      <Avatar {...args} placeholder>
        <div className="bg-neutral text-neutral-content rounded-full w-12">
          <span>SY</span>
        </div>
      </Avatar>

      <Avatar {...args} placeholder>
        <div className="bg-neutral text-neutral-content rounded-full w-8">
          <span className="text-xs">UI</span>
        </div>
      </Avatar>
    </>
  ),
};
