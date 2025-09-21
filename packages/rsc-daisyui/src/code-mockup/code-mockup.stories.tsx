import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { CodeMockup } from ".";

const meta: Meta<typeof CodeMockup> = {
  title: "Mockup/Code",
  component: CodeMockup,
  args: {
    className: "w-full",
  },
  argTypes: toArgTypes(getVariantConfig(CodeMockup)),
};
export default meta;
type Story = StoryObj<typeof CodeMockup>;

export const Default: Story = {
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line prefix="$">pnpm add rsc-daisyui</CodeMockup.Line>
      </CodeMockup>
    );
  },
};

export const MultiLine: Story = {
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line prefix="$">pnpm add rsc-daisyui</CodeMockup.Line>
        <CodeMockup.Line className="text-warning" prefix=">">
          installing...
        </CodeMockup.Line>
        <CodeMockup.Line className="text-success" prefix=">">
          Done!
        </CodeMockup.Line>
      </CodeMockup>
    );
  },
};
export const HighlightedLine: Story = {
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line prefix="1">pnpm add rsc-daisyui</CodeMockup.Line>
        <CodeMockup.Line prefix="2">installing...</CodeMockup.Line>
        <CodeMockup.Line className="bg-warning text-warning-content" prefix="3">
          Error!
        </CodeMockup.Line>
      </CodeMockup>
    );
  },
};
export const LongLineWillScroll: Story = {
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line prefix="~">
          Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae
          qui et et dolore ratione.
        </CodeMockup.Line>
      </CodeMockup>
    );
  },
};
export const WithoutPrefix: Story = {
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line>without prefix</CodeMockup.Line>
      </CodeMockup>
    );
  },
};
export const WithColor: Story = {
  args: {
    className: "bg-primary text-primary-content w-full",
  },
  render: (args) => {
    return (
      <CodeMockup {...args}>
        <CodeMockup.Line>can be any color!</CodeMockup.Line>
      </CodeMockup>
    );
  },
};
