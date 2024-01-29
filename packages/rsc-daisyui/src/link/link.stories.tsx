import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  argTypes: toArgTypes(getVariantConfig(Link)),
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (args) => <Link {...args}>I&apos;m a simple link</Link>,
};

export const Paragraph: Story = {
  render: (args) => (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add &quot;link&quot; class to make it look like a{" "}
      <Link {...args}>normal link</Link> again.
    </p>
  ),
};

export const PrimaryColor: Story = {
  ...Default,
  args: {
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  ...Default,
  args: {
    color: "secondary",
  },
};

export const AccentColor: Story = {
  ...Default,
  args: {
    color: "accent",
  },
};

export const NeutralColor: Story = {
  ...Default,
  args: {
    color: "neutral",
  },
};
export const Success: Story = {
  ...Default,
  args: {
    color: "success",
  },
};
export const InfoColor: Story = {
  ...Default,
  args: {
    color: "info",
  },
};
export const WarningColor: Story = {
  ...Default,
  args: {
    color: "warning",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    color: "error",
  },
};
export const ShowUnderlineOnlyOnHover: Story = {
  ...Default,
  args: {
    hover: true,
  },
};
