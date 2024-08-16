import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { FormControl, Label, Kbd, Badge } from "..";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Data Input/Input",
  component: Input,
  argTypes: toArgTypes(getVariantConfig(Input)),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
    bordered: false,
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const Border: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
  },
};

export const IconInside: StoryObj<typeof Input.Inside> = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <Input.Inside
          {...args}
          end={
            <svg
              className="h-4 w-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                fillRule="evenodd"
              />
            </svg>
          }
          placeholder="Search"
          type="search"
        />
        <Input.Inside
          {...args}
          placeholder="Email"
          start={
            <svg
              className="h-4 w-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          }
          type="email"
        />
        <Input.Inside
          {...args}
          placeholder="Username"
          start={
            <svg
              className="h-4 w-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          }
        />
        <Input.Inside
          {...args}
          defaultValue="password"
          placeholder="Password"
          start={
            <svg
              className="h-4 w-4 opacity-70"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                fillRule="evenodd"
              />
            </svg>
          }
          type="password"
        />
      </div>
    );
  },
};

export const TextLabelInside: StoryObj<typeof Input.Inside> = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <Input.Inside start="Name" {...args} placeholder="Daisy" />
        <Input.Inside
          {...args}
          placeholder="daisy@site.com"
          start="Email"
          type="email"
        />
        <Input.Inside
          {...args}
          end={
            <>
              <Kbd size="sm">⌘</Kbd>
              <Kbd size="sm">K</Kbd>
            </>
          }
          placeholder="Search"
          type="search"
        />
        <Input.Inside
          {...args}
          end={<Badge color="info">Optional</Badge>}
          placeholder="Search"
          type="search"
        />
      </div>
    );
  },
};

export const Ghost: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "ghost",
    bordered: false,
  },
};

export const FormControlAndLabels: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return (
      <FormControl className="w-full max-w-xs">
        <Label>
          <Label.Text>What is your name?</Label.Text>
          <Label.TextAlt>Top Right label</Label.TextAlt>
        </Label>
        <Input {...args} />
        <Label>
          <Label.TextAlt>Bottom Left label</Label.TextAlt>
          <Label.TextAlt>Bottom Right label</Label.TextAlt>
        </Label>
      </FormControl>
    );
  },
};
export const PrimaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "primary",
  },
};
export const SecondaryColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "secondary",
  },
};
export const AccentColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "accent",
  },
};
export const InfoColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "info",
  },
};
export const SuccessColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "success",
  },
};
export const WarningColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "warning",
  },
};
export const ErrorColor: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    color: "error",
  },
};

export const Sizes: Story = {
  args: {
    placeholder: "Type here",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <Input {...args} size="xs" />
        <Input {...args} size="sm" />
        <Input {...args} size="md" />
        <Input {...args} size="lg" />
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
