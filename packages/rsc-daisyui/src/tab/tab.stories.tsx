import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tab",
  component: Tabs,
  argTypes: toArgTypes(getVariantConfig(Tabs)),
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab active>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs>
    );
  },
};

export const Bordered: Story = {
  ...Default,
  args: {
    decorate: "bordered",
  },
};

export const Lifted: Story = {
  ...Default,
  args: {
    decorate: "lifted",
  },
};

export const Boxed: Story = {
  ...Default,
  args: {
    decorate: "boxed",
  },
};

export const Sizes: Story = {
  args: {
    decorate: "lifted",
  },
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-6">
        <Tabs {...args} size="xs">
          <Tabs.Tab>Tiny</Tabs.Tab>
          <Tabs.Tab active>Tiny</Tabs.Tab>
          <Tabs.Tab>Tiny</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="sm">
          <Tabs.Tab>Small</Tabs.Tab>
          <Tabs.Tab active>Small</Tabs.Tab>
          <Tabs.Tab>Small</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="md">
          <Tabs.Tab>Normal</Tabs.Tab>
          <Tabs.Tab active>Normal</Tabs.Tab>
          <Tabs.Tab>Normal</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="lg">
          <Tabs.Tab>Large</Tabs.Tab>
          <Tabs.Tab active>Large</Tabs.Tab>
          <Tabs.Tab>Large</Tabs.Tab>
        </Tabs>
      </div>
    );
  },
};

export const RadioTabBorderedTabContent: Story = {
  args: {
    decorate: "bordered",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_1" type="radio" />
        <Tabs.Content className="p-10">Tab content 1</Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_1"
          type="radio"
        />
        <Tabs.Content className="p-10">Tab content 2</Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_1" type="radio" />
        <Tabs.Content className="p-10">Tab content 3</Tabs.Content>
      </Tabs>
    );
  },
};

export const RadioTabLiftedTabContent: Story = {
  args: {
    decorate: "lifted",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_2" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 rounded-box p-6">
          Tab content 1
        </Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_2"
          type="radio"
        />
        <Tabs.Content className="bg-base-100 border-base-300 rounded-box p-6">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_2" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 rounded-box p-6">
          Tab content 3
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const CustomColor: Story = {
  args: {
    decorate: "lifted",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab
          active
          className="[--tab-bg:yellow] [--tab-border-color:orange] text-primary"
        >
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs>
    );
  },
};
