import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { default as Countdown } from "./countdown";

const meta: Meta<typeof Countdown> = {
  title: "Data Display/Countdown",
  component: Countdown,
  argTypes: toArgTypes(getVariantConfig(Countdown)),
};

export default meta;
type Story = StoryObj<typeof Countdown>;

function useTimer(startValue: number): number {
  const [value, setValue] = useState(startValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((v) => (v > 0 ? v - 1 : 59));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [setValue]);
  return value;
}

export const Default: Story = {
  render: (args) => {
    const value = useTimer(59);
    return (
      <Countdown {...args}>
        <Countdown.Item value={value} />
      </Countdown>
    );
  },
};

export const MaxValue: Story = {
  ...Default,
  args: {
    className: "font-mono text-6xl",
  },
  render: (args) => {
    return (
      <Countdown {...args}>
        <Countdown.Item value={999} />
      </Countdown>
    );
  },
};
export const LargeText: Story = {
  ...Default,
  args: {
    className: "font-mono text-6xl",
  },
};

export const Clock: Story = {
  args: {
    className: "font-mono text-2xl",
  },
  render: (args) => {
    const value = useTimer(59);
    return (
      <Countdown {...args}>
        <Countdown.Item value={10} />h
        <Countdown.Item value={24} />m
        <Countdown.Item value={value} />s
      </Countdown>
    );
  },
};

export const ClockWithColons: Story = {
  args: {
    className: "font-mono text-2xl",
  },
  render: (args) => {
    const value = useTimer(59);
    return (
      <Countdown {...args}>
        <Countdown.Item value={10} />:
        <Countdown.Item value={24} />:
        <Countdown.Item value={value} />
      </Countdown>
    );
  },
};

export const LargeTextWithLabels: Story = {
  args: {
    className: "font-mono text-4xl",
  },
  render: (args) => {
    const value = useTimer(59);
    return (
      <div className="flex gap-5">
        <div>
          <Countdown {...args}>
            <Countdown.Item value={15} />
          </Countdown>
          days
        </div>
        <div>
          <Countdown {...args}>
            <Countdown.Item value={10} />
          </Countdown>
          hours
        </div>
        <div>
          <Countdown {...args}>
            <Countdown.Item value={24} />
          </Countdown>
          minutes
        </div>
        <div>
          <Countdown {...args}>
            <Countdown.Item value={value} />
          </Countdown>
          sec
        </div>
      </div>
    );
  },
};

export const LargeTextWithLabelsUnder: Story = {
  args: {
    className: "font-mono text-5xl",
  },
  render: (args) => {
    const value = useTimer(59);
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <Countdown {...args}>
            <Countdown.Item value={15} />
          </Countdown>
          days
        </div>
        <div className="flex flex-col">
          <Countdown {...args}>
            <Countdown.Item value={10} />
          </Countdown>
          hours
        </div>
        <div className="flex flex-col">
          <Countdown {...args}>
            <Countdown.Item value={24} />
          </Countdown>
          min
        </div>
        <div className="flex flex-col">
          <Countdown {...args}>
            <Countdown.Item value={value} />
          </Countdown>
          sec
        </div>
      </div>
    );
  },
};

export const InBoxes: Story = {
  args: {
    className: "font-mono text-5xl",
  },
  render: (args) => {
    const value = useTimer(59);
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <Countdown {...args}>
            <Countdown.Item value={15} />
          </Countdown>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <Countdown {...args}>
            <Countdown.Item value={10} />
          </Countdown>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <Countdown {...args}>
            <Countdown.Item value={24} />
          </Countdown>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <Countdown {...args}>
            <Countdown.Item value={value} />
          </Countdown>
          sec
        </div>
      </div>
    );
  },
};
