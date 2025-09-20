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
export const RadioTabLiftTabWithIcons: Story = {
  args: {
    decorate: "lift",
    className: "w-full my-10 lg:mx-10",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab as="label">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Live
        </Tabs.Tab>
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 1
        </Tabs.Content>

        <Tabs.Tab as="label">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          Laugh
        </Tabs.Tab>
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab as="label">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          Love
        </Tabs.Tab>
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
        <Tabs.Tab aria-label="Tab 1" as="input" name="my_tabs_5" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 1
        </Tabs.Content>
        <Tabs.Tab
          aria-label="Tab 2"
          as="input"
          defaultChecked
          name="my_tabs_5"
          type="radio"
        />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 2
        </Tabs.Content>
        <Tabs.Tab aria-label="Tab 3" as="input" name="my_tabs_5" type="radio" />
        <Tabs.Content className="bg-base-100 border-base-300 p-6">
          Tab content 3
        </Tabs.Content>
      </Tabs>
    );
  },
};
export const HorizontalScrollWhenTheresNoSpace: Story = {
  args: {
    decorate: "lift",
    className: "min-w-max",
  },
  render: (args) => {
    return (
      <div className="overflow-x-auto max-w-60">
        <Tabs {...args}>
          <Tabs.Tab
            as="input"
            type="radio"
            name="my_tabs_7"
            className="z-1"
            aria-label="Tab title 1"
          />
          <Tabs.Content className="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">
            Tab content 1
          </Tabs.Content>
          <Tabs.Tab
            as="input"
            type="radio"
            name="my_tabs_7"
            className="z-1"
            aria-label="Tab title 2"
            defaultChecked
          />
          <Tabs.Content className="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">
            Tab content 2
          </Tabs.Content>
          <Tabs.Tab
            as="input"
            type="radio"
            name="my_tabs_7"
            className="z-1"
            aria-label="Tab title 3"
          />
          <Tabs.Content className="sticky start-0  max-w-60 border-base-300 bg-base-100 p-6">
            Tab content 3
          </Tabs.Content>
          <Tabs.Tab
            as="input"
            type="radio"
            name="my_tabs_7"
            className="z-1"
            aria-label="Tab title 4"
          />
          <Tabs.Content className="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">
            Tab content 4
          </Tabs.Content>
        </Tabs>
      </div>
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
