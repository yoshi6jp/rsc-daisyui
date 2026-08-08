import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Otp, OtpBase } from "./otp";

const meta: Meta<typeof Otp> = {
  title: "Data Input/OTP",
  component: Otp,
  argTypes: toArgTypes(getVariantConfig(OtpBase)),
};

export default meta;
type Story = StoryObj<typeof Otp>;

export const Default: Story = {
  name: "OTP",
  args: {},
  render: (args) => (
    <Otp {...args}>
      <input
        type="text"
        autoComplete="one-time-code"
        inputMode="numeric"
        maxLength={4}
        pattern="[0-9]{4}"
        required
      />
    </Otp>
  ),
};
export const With6Digits: Story = {
  name: "OTP with 6 digits",
  args: {
    maxLength: 6,
  },
  render: (args) => (
    <Otp {...args}>
      <input
        type="text"
        autoComplete="one-time-code"
        inputMode="numeric"
        maxLength={6}
        pattern="[0-9]{6}"
        required
      />
    </Otp>
  ),
};
export const Joined: Story = {
  ...Default,
  name: "OTP joined",
  args: {
    joined: true,
  },
};
export const Sizes: Story = {
  name: "OTP with different sizes",
  args: {},
  render: (args) => (
    <div className="flex items-center flex-col gap-2">
      <Otp {...args} size="xs">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} size="sm">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} size="md">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} size="lg">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} size="xl">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>
    </div>
  ),
};

export const Colors: Story = {
  name: "OTP with different colors",
  args: {},
  render: (args) => (
    <div className="flex items-center flex-col gap-4">
      <Otp {...args}>
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="primary">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="secondary">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="accent">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="info">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="success">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="warning">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>

      <Otp {...args} color="error">
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
      </Otp>
    </div>
  ),
};
