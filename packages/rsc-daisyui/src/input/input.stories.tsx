import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Kbd, Badge, Fieldset } from "..";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Data Input/Input Field",
  component: Input,
  argTypes: toArgTypes(getVariantConfig(Input)),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const TextLabelInside: Story = {
  render: (args) => {
    return (
      <div className="grid gap-4 w-xs">
        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          <svg
            role="img"
            aria-label="icon"
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input type="search" placeholder="Search" />
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="sm">K</Kbd>
        </Input>

        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          <svg
            role="img"
            aria-label="icon"
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </g>
          </svg>
          <input type="text" placeholder="index.php" />
        </Input>
        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          Path
          <input type="text" placeholder="src/app/" />
          <Badge color="neutral" size="xs">
            Optional
          </Badge>
        </Input>
      </div>
    );
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    ghost: true,
  },
};

export const FieldsetAndLegend: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return (
      <Fieldset className="w-xs">
        <Fieldset.Legend>What is your name?</Fieldset.Legend>
        <Input {...args} />
        <Fieldset.Label as="p">Optional</Fieldset.Label>
      </Fieldset>
    );
  },
};
export const Colors: Story = {
  parameters: {
    controls: {
      exclude: ["color"],
    },
  },
  render: (args) => {
    return (
      <div className="grid gap-4 w-xs">
        <Input {...args} color="neutral" placeholder="Neutral" />
        <Input {...args} color="primary" placeholder="Primary" />
        <Input {...args} color="secondary" placeholder="Secondary" />
        <Input {...args} color="accent" placeholder="Accent" />
        <Input {...args} color="info" placeholder="Info" />
        <Input {...args} color="success" placeholder="Success" />
        <Input {...args} color="warning" placeholder="Warning" />
        <Input {...args} color="error" placeholder="Error" />
      </div>
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
      <div className="grid w-xs gap-4">
        <Input {...args} size="xs" placeholder="Xsmall" />
        <Input {...args} size="sm" placeholder="Small" />
        <Input {...args} size="md" placeholder="Medium" />
        <Input {...args} size="lg" placeholder="Large" />
        <Input {...args} size="xl" placeholder="Xlarge" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: "You can't touch this",
    disabled: true,
  },
};
