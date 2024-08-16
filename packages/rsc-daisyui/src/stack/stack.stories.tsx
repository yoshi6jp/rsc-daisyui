import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "..";
import { Stack } from ".";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const WithoutStack: Story = {
  render: () => {
    return (
      <div>
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </div>
    );
  },
};
export const Default: Story = {
  args: {
    className: "mb-4",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </Stack>
    );
  },
};
export const StackedImages: Story = {
  args: {
    className: "mb-4",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <img
          alt="stack 1"
          className="rounded w-28"
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        />
        <img
          alt="stack 2"
          className="rounded w-28"
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        />
        <img
          alt="stack 3"
          className="rounded w-28"
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        />
      </Stack>
    );
  },
};
export const StackedCards: Story = {
  args: {
    className: "mb-4",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <Card
          className="text-center border border-base-content w-36 bg-base-100"
          vanilla
        >
          <Card.Body>A</Card.Body>
        </Card>
        <Card
          className="text-center border border-base-content w-36 bg-base-100"
          vanilla
        >
          <Card.Body>B</Card.Body>
        </Card>

        <Card
          className="text-center border border-base-content w-36 bg-base-100"
          vanilla
        >
          <Card.Body>C</Card.Body>
        </Card>
      </Stack>
    );
  },
};

export const StackedCardsWithShadow: Story = {
  args: {
    className: "mb-4",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <Card className="text-center shadow-md w-36 bg-base-200" vanilla>
          <Card.Body>A</Card.Body>
        </Card>
        <Card className="text-center shadow-md w-36 bg-base-200" vanilla>
          <Card.Body>B</Card.Body>
        </Card>
        <Card className="text-center shadow-md w-36 bg-base-200" vanilla>
          <Card.Body>C</Card.Body>
        </Card>
      </Stack>
    );
  },
};

export const StackedColorfulCards: Story = {
  args: {
    className: "mb-4",
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <Card className="shadow-md bg-primary text-primary-content" vanilla>
          <Card.Body>
            <Card.Title>Notification 1</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>
        <Card className="shadow-md bg-primary text-primary-content" vanilla>
          <Card.Body>
            <Card.Title>Notification 2</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>

        <Card className="shadow-md bg-primary text-primary-content" vanilla>
          <Card.Body>
            <Card.Title>Notification 3</Card.Title>
            <p>You have 3 unread messages. Tap here to see.</p>
          </Card.Body>
        </Card>
      </Stack>
    );
  },
};
