import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Steps } from ".";

const meta: Meta<typeof Steps> = {
  title: "Navigation/Steps",
  component: Steps,
  argTypes: toArgTypes(getVariantConfig(Steps)),
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: (args) => {
    return (
      <Steps {...args}>
        <Steps.Step color="primary">Register</Steps.Step>
        <Steps.Step color="primary">Choose plan</Steps.Step>
        <Steps.Step>Purchase</Steps.Step>
        <Steps.Step>Receive Product</Steps.Step>
      </Steps>
    );
  },
};

export const Vertical: Story = {
  ...Default,
  args: {
    vertical: true,
  },
};

export const Responsive: Story = {
  ...Default,
  args: {
    vertical: true,
    className: "lg:steps-horizontal",
  },
};

export const CustomContentInStepIcon: Story = {
  render: (args) => {
    return (
      <Steps {...args}>
        <Steps.Step color="neutral">
          <Steps.Icon>😕</Steps.Icon>Step 1
        </Steps.Step>
        <Steps.Step color="neutral">
          <Steps.Icon>😃</Steps.Icon>Step 2
        </Steps.Step>
        <Steps.Step className="step">
          <Steps.Icon>😍</Steps.Icon>Step 3
        </Steps.Step>
      </Steps>
    );
  },
};
export const DataContent: Story = {
  render: (args) => {
    return (
      <Steps {...args}>
        <Steps.Step color="neutral" data-content="?">
          Step 1
        </Steps.Step>
        <Steps.Step color="neutral" data-content="!">
          Step 2
        </Steps.Step>
        <Steps.Step color="neutral" data-content="✓">
          Step 3
        </Steps.Step>
        <Steps.Step color="neutral" data-content="✕">
          Step 4
        </Steps.Step>
        <Steps.Step color="neutral" data-content="★">
          Step 5
        </Steps.Step>
        <Steps.Step color="neutral" data-content="">
          Step 6
        </Steps.Step>
        <Steps.Step color="neutral" data-content="●">
          Step 7
        </Steps.Step>
      </Steps>
    );
  },
};

export const CustomColors: Story = {
  render: (args) => {
    return (
      <Steps {...args}>
        <Steps.Step color="info">Fly to moon</Steps.Step>
        <Steps.Step color="info">Shrink the moon</Steps.Step>
        <Steps.Step color="info">Grab the moon</Steps.Step>
        <Steps.Step color="error" data-content="?">
          Sit on toilet
        </Steps.Step>
      </Steps>
    );
  },
};

export const ScrollableWrapper: Story = {
  render: (args) => {
    return (
      <div className="overflow-x-auto">
        <Steps {...args}>
          <Steps.Step>start</Steps.Step>
          <Steps.Step color="secondary">2</Steps.Step>
          <Steps.Step color="secondary">3</Steps.Step>
          <Steps.Step color="secondary">4</Steps.Step>
          <Steps.Step>5</Steps.Step>
          <Steps.Step color="accent">6</Steps.Step>
          <Steps.Step color="accent">7</Steps.Step>
          <Steps.Step>8</Steps.Step>
          <Steps.Step color="error">9</Steps.Step>
          <Steps.Step color="error">10</Steps.Step>
          <Steps.Step>11</Steps.Step>
          <Steps.Step>12</Steps.Step>
          <Steps.Step color="warning">13</Steps.Step>
          <Steps.Step color="warning">14</Steps.Step>
          <Steps.Step>15</Steps.Step>
          <Steps.Step color="neutral">16</Steps.Step>
          <Steps.Step color="neutral">17</Steps.Step>
          <Steps.Step color="neutral">18</Steps.Step>
          <Steps.Step color="neutral">19</Steps.Step>
          <Steps.Step color="neutral">20</Steps.Step>
          <Steps.Step color="neutral">21</Steps.Step>
          <Steps.Step color="neutral">22</Steps.Step>
          <Steps.Step color="neutral">23</Steps.Step>
          <Steps.Step color="neutral">end</Steps.Step>
        </Steps>
      </div>
    );
  },
};
