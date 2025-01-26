import React, { useRef, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from "..";
import { Toggle } from ".";

const meta: Meta<typeof Toggle> = {
  title: "Data Input/Toggle",
  component: Toggle,
  argTypes: toArgTypes(getVariantConfig(Toggle)),
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
};

export const FieldsetAndLabel: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => {
    return (
      <Fieldset className="p-4 bg-base-100 border border-base-300 rounded-box w-64">
        <Fieldset.Legend>Login options</Fieldset.Legend>
        <Fieldset.Label>
          <Toggle {...args} />
          Remember me
        </Fieldset.Label>
      </Fieldset>
    );
  },
};
export const Sizes: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <>
        <Toggle {...args} size="xs" />
        <Toggle {...args} size="sm" />
        <Toggle {...args} size="md" />
        <Toggle {...args} size="lg" />
        <Toggle {...args} size="xl" />
      </>
    );
  },
};

export const Colors: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  render: (args) => {
    return (
      <>
        <Toggle {...args} color="primary" />
        <Toggle {...args} color="secondary" />
        <Toggle {...args} color="accent" />
        <Toggle {...args} color="neutral" />

        <Toggle {...args} color="info" />
        <Toggle {...args} color="success" />
        <Toggle {...args} color="warning" />
        <Toggle {...args} color="error" />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <>
        <Toggle {...args} />
        <Toggle {...args} defaultChecked />
      </>
    );
  },
};

export const Indeterminate: Story = {
  render: (args) => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref.current) {
        ref.current.indeterminate = true;
      }
    }, [ref]);
    return <Toggle {...args} ref={ref} />;
  },
};

export const IconInside: Story = {
  args: {
    className: "text-base-content",
  },
  render: (args) => {
    return (
      <>
        {/* @ts-expect-error: as */}
        <Toggle {...args} as="label">
          <input type="checkbox" />
          <svg
            role="img"
            aria-label="enabled"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              stroke="currentColor"
            >
              <path d="M20 6 9 17l-5-5" />
            </g>
          </svg>
          <svg
            role="img"
            aria-label="disabled"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Toggle>
      </>
    );
  },
};
export const CustomColors: Story = {
  ...Default,
  args: {
    defaultChecked: true,
    className:
      "toggle border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500",
  },
};
