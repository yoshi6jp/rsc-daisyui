import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Join } from "..";
import { default as Accordion, AccordionBase } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(AccordionBase)),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    name: "my-accordion-1",
  },
  parameters: {
    controls: {
      exclude: ["as", "type", "open"],
    },
  },
  render: (args) => (
    <div className="flex gap-2 flex-wrap">
      <Accordion {...args} defaultChecked>
        <Accordion.Title>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>
  ),
};

export const ArrowIcon: Story = {
  ...Default,
  args: {
    name: "my-accordion-2",
    icon: "arrow",
  },
};

export const PlusMinusIcon: Story = {
  ...Default,
  args: {
    name: "my-accordion-3",
    icon: "plus",
  },
};

export const JoinTogether: Story = {
  args: {
    name: "my-accordion-4",
    className: "border border-base-300 join-item",
    icon: "arrow",
    vanilla: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "type", "open"],
    },
  },
  render: (args) => (
    <Join className="w-full" vertical>
      <Accordion {...args} defaultChecked>
        <Accordion.Title vanilla>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title vanilla>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title vanilla>
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </Join>
  ),
};
