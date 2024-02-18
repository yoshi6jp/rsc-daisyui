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

export const Default: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Badge)),
  args: {
    color: "secondary",
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

export const BadgeAsIndicator: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    color: "primary",
    children: "new",
  },
};

export const ForButton: StoryObj<typeof Indicator.Badge> = {
  argTypes: toArgTypes(getVariantConfig(Indicator.Badge)),
  args: {
    color: "secondary",
    children: "99+",
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
      <Tabs decorate="lifted">
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
        <Indicator.Badge color="secondary">typing…</Indicator.Badge>
        <div className="w-20 h-20 rounded-lg">
          <img
            alt="Tailwind CSS examples"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
        <Input placeholder="Your email address" type="email" vanilla />
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
        <Card className="border" vanilla>
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
    color: "secondary",
    vertical: "middle",
    horizontal: "center",
  },
  render: (args) => {
    return (
      <Indicator>
        <Indicator.Badge {...args}>Uploading Image...</Indicator.Badge>
        <img
          alt="Tailwind CSS examples"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        />
      </Indicator>
    );
  },
};

export const TopStart: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    horizontal: "start",
    color: "secondary",
  },
};
export const TopCenter: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    horizontal: "center",
    color: "secondary",
  },
};
export const TopEnd: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    color: "secondary",
  },
};
export const MiddleStart: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "middle",
    horizontal: "start",
    color: "secondary",
  },
};
export const MiddleCenter: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "middle",
    horizontal: "center",
    color: "secondary",
  },
};
export const MiddleEnd: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "middle",
    color: "secondary",
  },
};
export const BottomStart: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "bottom",
    horizontal: "start",
    color: "secondary",
  },
};
export const BottomCenter: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "bottom",
    horizontal: "center",
    color: "secondary",
  },
};
export const BottomEnd: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    vertical: "bottom",
    color: "secondary",
  },
};

export const Multiple: Story = {
  render: (args) => {
    return (
      <Indicator {...args}>
        <Indicator.Badge color="secondary" horizontal="start" vertical="top">
          top+start
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="center" vertical="top">
          top+center
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="end" vertical="top">
          top+end
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="start" vertical="middle">
          middle+start
        </Indicator.Badge>
        <Indicator.Badge
          color="secondary"
          horizontal="center"
          vertical="middle"
        >
          middle+center
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="end" vertical="middle">
          middle+end
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="start" vertical="bottom">
          bottom+start
        </Indicator.Badge>
        <Indicator.Badge
          color="secondary"
          horizontal="center"
          vertical="bottom"
        >
          bottom+center
        </Indicator.Badge>
        <Indicator.Badge color="secondary" horizontal="end" vertical="bottom">
          bottom+end
        </Indicator.Badge>
        <div className="grid w-60 h-32 bg-base-300 place-items-center">
          content
        </div>
      </Indicator>
    );
  },
};
export const Responsive: StoryObj<typeof Indicator.Badge> = {
  ...Default,
  args: {
    color: "secondary",
    horizontal: "start",
    className:
      "sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end",
  },
};
