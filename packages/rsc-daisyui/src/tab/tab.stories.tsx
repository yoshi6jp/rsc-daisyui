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

export const Border: Story = {
  ...Default,
  args: {
    decorate: "border",
  },
};

export const Lift: Story = {
  ...Default,
  args: {
    decorate: "lift",
  },
};

export const Box: Story = {
  ...Default,
  args: {
    decorate: "box",
  },
};
export const BoxUsingRadioInputs: Story = {
  args: {
    decorate: "box",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_1" type="radio" />
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_1"
          type="radio"
        />
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_1" type="radio" />
      </Tabs>
    );
  },
};
export const Sizes: Story = {
  args: {
    decorate: "lift",
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
          <Tabs.Tab>Xsmall</Tabs.Tab>
          <Tabs.Tab active>Xsmall</Tabs.Tab>
          <Tabs.Tab>Xsmall</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="sm">
          <Tabs.Tab>Small</Tabs.Tab>
          <Tabs.Tab active>Small</Tabs.Tab>
          <Tabs.Tab>Small</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="md">
          <Tabs.Tab>Medium</Tabs.Tab>
          <Tabs.Tab active>Medium</Tabs.Tab>
          <Tabs.Tab>Medium</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="lg">
          <Tabs.Tab>Large</Tabs.Tab>
          <Tabs.Tab active>Large</Tabs.Tab>
          <Tabs.Tab>Large</Tabs.Tab>
        </Tabs>

        <Tabs {...args} size="xl">
          <Tabs.Tab>Xlarge</Tabs.Tab>
          <Tabs.Tab active>Xlarge</Tabs.Tab>
          <Tabs.Tab>Xlarge</Tabs.Tab>
        </Tabs>
      </div>
    );
  },
};

export const RadioTabBorderTabContent: Story = {
  args: {
    decorate: "border",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_2" type="radio" />
        <Tabs.Content className="p-10 border-base-300 bg-base-100">
          Tab content 1
        </Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_2"
          type="radio"
        />
        <Tabs.Content className="p-10 border-base-300 bg-base-100">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_2" type="radio" />
        <Tabs.Content className="p-10 border-base-300 bg-base-100">
          Tab content 3
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const RadioTabLiftTabContent: Story = {
  args: {
    decorate: "lift",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_3" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 1
        </Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_3"
          type="radio"
        />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_3" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 3
        </Tabs.Content>
      </Tabs>
    );
  },
};
export const RadioTabLiftTabContentOnBottom: Story = {
  ...RadioTabLiftTabContent,
  args: {
    ...RadioTabLiftTabContent.args,
    placement: "bottom",
  },
};
export const RadioTabBoxTabContent: Story = {
  args: {
    decorate: "box",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_3" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 1
        </Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_3"
          type="radio"
        />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_3" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 3
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const CustomColor: Story = {
  args: {
    decorate: "lift",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab
          active
          className="[--tab-bg:orange] [--tab-border-color:red] text-primary"
        >
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs>
    );
  },
};
