import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Avatar, Button } from "..";
import { Stats } from ".";

const meta: Meta<typeof Stats> = {
  title: "Data Display/Stat",
  component: Stats,
  argTypes: toArgTypes(getVariantConfig(Stats)),
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: StoryObj<typeof Stats.Stat> = {
  args: {
    title: "Total Page Views",
    value: "89,400",
    desc: "21% more than last month",
  },
  parameters: {
    controls: {
      exclude: ["as", "variant", "horizontal", "vanilla", "theme"],
    },
  },
  render: (args) => (
    <Stats>
      <Stats.Stat {...args} />
    </Stats>
  ),
};

export const IconsOrImage: Story = {
  render: (args) => (
    <Stats {...args}>
      <Stats.Stat>
        <Stats.Figure className="text-primary">
          <svg
            className="inline-block w-8 h-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Stats.Figure>
        <Stats.Title>Total Likes</Stats.Title>
        <Stats.Value className="text-primary">25.6K</Stats.Value>
        <Stats.Desc>21% more than last month</Stats.Desc>
      </Stats.Stat>
      <Stats.Stat className="stat">
        <Stats.Figure className="text-secondary">
          <svg
            className="inline-block w-8 h-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Stats.Figure>
        <Stats.Title>Page Views</Stats.Title>
        <Stats.Value className="text-secondary">2.6M</Stats.Value>
        <Stats.Desc>21% more than last month</Stats.Desc>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Figure className="text-secondary">
          <Avatar indicator="online">
            <div className="w-16 rounded-full">
              <img
                alt="avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </Avatar>
        </Stats.Figure>
        <Stats.Value className="stat-value">86%</Stats.Value>
        <Stats.Title className="stat-title">Tasks done</Stats.Title>
        <Stats.Desc className="stat-desc text-secondary">
          31 tasks remaining
        </Stats.Desc>
      </Stats.Stat>
    </Stats>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <Stats {...args}>
      <Stats.Stat>
        <Stats.Figure className="text-secondary">
          <svg
            className="inline-block w-8 h-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Stats.Figure>
        <Stats.Title>Downloads</Stats.Title>
        <Stats.Value>31K</Stats.Value>
        <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Figure className="text-secondary">
          <svg
            className="inline-block w-8 h-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Stats.Figure>
        <Stats.Title>New Users</Stats.Title>
        <Stats.Value>4,200</Stats.Value>
        <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Figure className="text-secondary">
          <svg
            className="inline-block w-8 h-8 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Stats.Figure>
        <Stats.Title>New Registers</Stats.Title>
        <Stats.Value>1,200</Stats.Value>
        <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
      </Stats.Stat>
    </Stats>
  ),
};

export const CenteredItems: Story = {
  render: (args) => (
    <Stats {...args}>
      <Stats.Stat className="place-items-center">
        <Stats.Title>Downloads</Stats.Title>
        <Stats.Value>31K</Stats.Value>
        <Stats.Desc>From January 1st to February 1st</Stats.Desc>
      </Stats.Stat>
      <Stats.Stat className="place-items-center">
        <Stats.Title>Users</Stats.Title>
        <Stats.Value className="text-secondary">4,200</Stats.Value>
        <Stats.Desc className="text-secondary">↗︎ 40 (2%)</Stats.Desc>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Title>New Registers</Stats.Title>
        <Stats.Value>1,200</Stats.Value>
        <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
      </Stats.Stat>
    </Stats>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <Stats {...args}>
      <Stats.Stat desc="an 1st - Feb 1st" title="Downloads" value="31K" />
      <Stats.Stat desc="↗︎ 400 (22%)" title="New Users" value="4,200" />
      <Stats.Stat desc="↘︎ 90 (14%)" title="New Registers" value="1,200" />
    </Stats>
  ),
};

export const Responsive: Story = {
  ...Vertical,
  args: {
    vertical: true,
    className: "lg:stats-horizontal",
  },
};

export const CustomColorsAndButton: Story = {
  args: {
    className: "bg-primary text-primary-content",
    vanilla: true,
  },
  render: (args) => (
    <Stats {...args}>
      <Stats.Stat
        actions={
          <Button color="success" size="sm">
            Add funds
          </Button>
        }
        title="Account balance"
        value="$89,400"
      />
      <Stats.Stat
        actions={
          <>
            <Button size="sm">Withdrawal</Button>{" "}
            <Button size="sm">deposit</Button>
          </>
        }
        title="Current balance"
        value="$89,400"
      />
    </Stats>
  ),
};

export const ZeroValue: StoryObj<typeof Stats.Stat> = {
  ...Default,
  args: {
    title: "Total Page Views",
    value: 0,
    desc: "21% more than last month",
  },
};
