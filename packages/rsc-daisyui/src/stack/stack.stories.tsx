import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Card } from "..";
import { Stack } from ".";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  argTypes: toArgTypes(getVariantConfig(Stack)),
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    className: "h-20 w-32",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <div className="bg-primary text-primary-content grid place-content-center rounded-box">
          1
        </div>
        <div className="bg-accent text-accent-content grid place-content-center rounded-box">
          2
        </div>
        <div className="bg-secondary text-secondary-content grid place-content-center rounded-box">
          3
        </div>
      </Stack>
    );
  },
};
export const StackedImages: Story = {
  args: {
    className: "w-48",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <img
          alt="img"
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          className="rounded-box"
        />
        <img
          alt="img"
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          className="rounded-box"
        />
        <img
          alt="img"
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          className="rounded-box"
        />
      </Stack>
    );
  },
};
export const StackedCards: Story = {
  args: {
    className: "size-28",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <Card className="border text-center">
          <Card.Body>A</Card.Body>
        </Card>
        <Card className="border text-center">
          <Card.Body>B</Card.Body>
        </Card>
        <Card className="border text-center">
          <Card.Body>C</Card.Body>
        </Card>
      </Stack>
    );
  },
};
export const TopDirection: Story = {
  ...StackedCards,
  args: {
    ...StackedCards.args,
    direction: "top",
  },
};
export const StartDirection: Story = {
  ...StackedCards,
  args: {
    ...StackedCards.args,
    direction: "start",
  },
};
export const EndDirection: Story = {
  ...StackedCards,
  args: {
    ...StackedCards.args,
    direction: "end",
  },
};

export const StackedCardsWithShadow: Story = {
  render: (args) => {
    return (
      <Stack {...args}>
        <Card className="bg-base-200 text-center shadow-md">
          <Card.Body>A</Card.Body>
        </Card>
        <Card className="bg-base-200 text-center shadow-md">
          <Card.Body>B</Card.Body>
        </Card>
        <Card className="bg-base-200 text-center shadow-md">
          <Card.Body>C</Card.Body>
        </Card>
      </Stack>
    );
  },
};

export const StackedWideCards: Story = {
  render: (args) => {
    return (
      <Stack {...args}>
        <Card className="shadow-md">
          <Card.Body>
            <Card.Title>Notification 1</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>
        <Card className="shadow-md">
          <Card.Body>
            <Card.Title>Notification 2</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>
        <Card className="shadow-md">
          <Card.Body>
            <Card.Title>Notification 3</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>
      </Stack>
    );
  },
};
