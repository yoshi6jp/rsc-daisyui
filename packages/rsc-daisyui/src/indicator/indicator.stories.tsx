import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button, Card, Tabs, Input } from "..";
import { Indicator } from ".";

const meta: Meta<typeof Indicator> = {
  title: "Layout/Indicator",
  component: Indicator,
  argTypes: toArgTypes(getVariantConfig(Indicator)),
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: StoryObj<typeof Indicator.Status> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Status)),
  args: {
    color: "success",
  },
  render: (args) => {
    return (
      <Indicator>
        <Indicator.Status {...args} />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">
          content
        </div>
      </Indicator>
    );
  },
};

export const BadgeAsIndicator: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Status)),
  args: {
    color: "primary",
    children: "New",
  },
  render: (args) => {
    return (
      <Indicator>
        <Indicator.Badge {...args} />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">
          content
        </div>
      </Indicator>
    );
  },
};

export const ForButton: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Badge)),
  args: {
    color: "secondary",
    children: "12",
  },
  render: (args) => {
    return (
      <Indicator>
        <Indicator.Badge {...args} />
        <Button>inbox</Button>
      </Indicator>
    );
  },
};

export const ForTab: StoryObj<typeof Indicator.Tab> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Tab)),
  args: {
    active: true,
  },
  render: (args) => {
    return (
      <Tabs decorate="lift">
        <Tabs.Tab>Messages</Tabs.Tab>
        <Indicator.Tab {...args}>
          Notifications
          <Indicator.Badge>8</Indicator.Badge>
        </Indicator.Tab>
        <Tabs.Tab>Requests</Tabs.Tab>
      </Tabs>
    );
  },
};

export const ForAvatar: StoryObj<typeof Indicator.Avatar> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Avatar)),
  render: (args) => {
    return (
      <Indicator.Avatar {...args}>
        <Indicator.Badge color="secondary">Online</Indicator.Badge>
        <div className="w-20 h-20 rounded-lg">
          <img
            alt="Tailwind CSS examples"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </Indicator.Avatar>
    );
  },
};
export const ForInput: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Badge)),
  args: {
    children: "Required",
  },
  render: (args) => {
    return (
      <Indicator>
        <Indicator.Badge {...args}>Required</Indicator.Badge>
        <Input placeholder="Your email address" type="email" />
      </Indicator>
    );
  },
};

export const ButtonAsIndicatorForCard: StoryObj<typeof Indicator.Item> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Item)),
  args: {
    vertical: "bottom",
  },
  render: (args) => {
    return (
      <Indicator className="my-6 mx-10">
        <Indicator.Item {...args}>
          <Button color="primary">Apply</Button>
        </Indicator.Item>
        <Card className="border border-base-300 shadow-sm">
          <Card.Body>
            <Card.Title>Job Title</Card.Title>
            <p>Rerum reiciendis beatae tenetur excepturi</p>
          </Card.Body>
        </Card>
      </Indicator>
    );
  },
};

export const InCenterOfImage: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Badge)),
  args: {
    vertical: "middle",
    horizontal: "center",
    children: "Only available for Pro users",
  },
  render: (args) => {
    return (
      <Indicator className="max-w-xs">
        <Indicator.Badge {...args} />
        <img
          alt="Tailwind CSS examples"
          className="rounded"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        />
      </Indicator>
    );
  },
};

export const TopStart: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    horizontal: "start",
    color: "secondary",
  },
};
export const TopCenter: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    horizontal: "center",
    color: "secondary",
  },
};
export const TopEnd: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    color: "secondary",
  },
};
export const MiddleStart: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "middle",
    horizontal: "start",
    color: "secondary",
  },
};
export const MiddleCenter: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "middle",
    horizontal: "center",
    color: "secondary",
  },
};
export const MiddleEnd: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "middle",
    color: "secondary",
  },
};
export const BottomStart: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "bottom",
    horizontal: "start",
    color: "secondary",
  },
};
export const BottomCenter: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "bottom",
    horizontal: "center",
    color: "secondary",
  },
};
export const BottomEnd: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    vertical: "bottom",
    color: "secondary",
  },
};

export const Multiple: Story = {
  render: (args) => {
    return (
      <Indicator {...args}>
        <Indicator.Badge horizontal="start" vertical="top">
          ↖︎
        </Indicator.Badge>
        <Indicator.Badge horizontal="center" vertical="top">
          ↑
        </Indicator.Badge>
        <Indicator.Badge horizontal="end" vertical="top">
          ↗︎
        </Indicator.Badge>
        <Indicator.Badge horizontal="start" vertical="middle">
          ←
        </Indicator.Badge>
        <Indicator.Badge horizontal="center" vertical="middle">
          ●
        </Indicator.Badge>
        <Indicator.Badge horizontal="end" vertical="middle">
          →
        </Indicator.Badge>
        <Indicator.Badge horizontal="start" vertical="bottom">
          ↙︎
        </Indicator.Badge>
        <Indicator.Badge horizontal="center" vertical="bottom">
          ↓ ︎
        </Indicator.Badge>
        <Indicator.Badge horizontal="end" vertical="bottom">
          ↘︎
        </Indicator.Badge>
        <div className="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
      </Indicator>
    );
  },
};
export const Responsive: StoryObj<typeof Indicator.Badge> = {
  ...BadgeAsIndicator,
  args: {
    color: "secondary",
    horizontal: "start",
    className:
      "sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end",
  },
};
