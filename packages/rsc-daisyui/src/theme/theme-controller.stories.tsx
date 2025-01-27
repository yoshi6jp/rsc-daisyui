import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { Fieldset, Join, Dropdown, Swap } from "..";
import { toArgTypes } from "../storybook-helpers";
import {
  type ThemeControllerProps,
  default as ThemeController,
  ThemeControllerBase,
} from "./theme-controller";
import {
  type ThemeControllerCheckboxProps,
  ThemeControllerCheckboxBase,
} from "./theme-controller-checkbox";
import { ThemeControllerRadioBase } from "./theme-controller-radio";
import { ThemeControllerButtonBase } from "./theme-controller-button";

const meta: Meta<typeof ThemeController> = {
  title: "Actions/Theme Controller",
  component: ThemeController,
  tags: ["autodocs"],
  argTypes: toArgTypes<ThemeControllerProps>(
    getVariantConfig(ThemeControllerBase),
    {
      value: "theme",
    }
  ),
};

export default meta;
type Story = StoryObj<typeof ThemeController>;

export const Default: Story = {
  args: {
    value: "synthwave",
  },
  render: (args) => <ThemeController {...args} />,
};

export const UsingCheckbox: StoryObj<typeof ThemeController.Checkbox> = {
  argTypes: toArgTypes<ThemeControllerCheckboxProps>(
    getVariantConfig(ThemeControllerCheckboxBase),
    {
      value: "theme",
    }
  ),
  args: {
    value: "synthwave",
  },
  render: (args) => <ThemeController.Checkbox {...args} />,
};

export const UsingSwap: StoryObj<typeof ThemeController.Swap> = {
  argTypes: toArgTypes<ThemeControllerCheckboxProps>(getVariantConfig(Swap), {
    value: "theme",
  }),
  args: {
    value: "synthwave",
    effect: "rotate",
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "active"],
    },
  },
  render: (args) => (
    <ThemeController.Swap {...args}>
      <Swap.On
        as="svg"
        className="fill-current w-10 h-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </Swap.On>
      <Swap.Off
        as="svg"
        className="fill-current w-10 h-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </Swap.Off>
    </ThemeController.Swap>
  ),
};

export const ToggleWithText: Story = {
  args: {
    value: "synthwave",
  },
  render: (args) => (
    <label className="flex cursor-pointer gap-2">
      <span>Default</span>
      <ThemeController {...args} />
      <span className="capitalize">{args.value}</span>
    </label>
  ),
};

export const ToggleWithIcons: Story = {
  args: {
    value: "synthwave",
  },
  render: (args) => (
    <label className="flex cursor-pointer gap-2">
      <svg
        fill="none"
        height="20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <ThemeController {...args} />
      <svg
        fill="none"
        height="20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  ),
};

export const ToggleWithIconsInside: Story = {
  args: {
    value: "synthwave",
  },
  render: (args) => (
    <label className="toggle text-base-content">
      <input type="checkbox" value={args.value} className="theme-controller" />
      <svg
        aria-label="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </g>
      </svg>

      <svg
        aria-label="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </g>
      </svg>
    </label>
  ),
};

export const ToggleWithCustomColors: Story = {
  args: {
    value: "synthwave",
    className:
      "bg-blue-600 text-blue-200 border-blue-700 checked:bg-yellow-100 checked:text-yellow-600 checked:border-yellow-400",
  },
  render: (args) => <ThemeController {...args} />,
};

export const UsingRadioInput: StoryObj<typeof ThemeController.Radio> = {
  argTypes: toArgTypes(getVariantConfig(ThemeControllerRadioBase)),
  parameters: {
    controls: {
      exclude: ["as", "children", "value"],
    },
  },
  render: (args) => (
    <Fieldset>
      <label className="flex gap-2 cursor-pointer items-center">
        <ThemeController.Radio size="sm" value="default" defaultChecked />
        Default
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <ThemeController.Radio size="sm" value="retro" />
        Retro
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <ThemeController.Radio size="sm" value="cyberpunk" />
        Cyberpunk
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <ThemeController.Radio size="sm" value="valentine" />
        Valentine
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <ThemeController.Radio size="sm" value="aqua" />
        Aqua
      </label>
    </Fieldset>
  ),
};

export const UsingRadioButton: StoryObj<typeof ThemeController.Button> = {
  args: {
    className: "join-item",
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "value"],
    },
  },
  argTypes: toArgTypes(getVariantConfig(ThemeControllerButtonBase)),
  render: (args) => (
    <Join direction="vertical">
      <ThemeController.Button
        type="radio"
        name="theme-buttons"
        className="join-item"
        aria-label="Default"
        value="default"
        defaultChecked
      />
      <ThemeController.Button
        type="radio"
        name="theme-buttons"
        className="join-item"
        aria-label="Retro"
        value="retro"
      />
      <ThemeController.Button
        type="radio"
        name="theme-buttons"
        className="join-item"
        aria-label="Cyberpunk"
        value="cyberpunk"
      />
      <ThemeController.Button
        type="radio"
        name="theme-buttons"
        className="join-item"
        aria-label="Valentine"
        value="valentine"
      />
      <ThemeController.Button
        type="radio"
        name="theme-buttons"
        className="join-item"
        aria-label="Aqua"
        value="aqua"
      />
    </Join>
  ),
};

export const UsingDropdown: StoryObj<typeof ThemeController.Button> = {
  args: {
    className: " justify-start",
    size: "sm",
    block: true,
    ghost: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "value"],
    },
  },
  argTypes: toArgTypes(getVariantConfig(ThemeControllerButtonBase)),
  render: (args) => (
    <Dropdown className="mb-72">
      <Dropdown.Button>
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </Dropdown.Button>
      <Dropdown.Menu className="w-52">
        <li>
          <ThemeController.Button
            type="radio"
            name="theme-dropdown"
            size="sm"
            block
            ghost
            className="w-full justify-start"
            aria-label="Default"
            value="default"
            defaultChecked
          />
        </li>
        <li>
          <ThemeController.Button
            type="radio"
            name="theme-dropdown"
            size="sm"
            block
            ghost
            className="w-full justify-start"
            aria-label="Retro"
            value="retro"
          />
        </li>
        <li>
          <ThemeController.Button
            type="radio"
            name="theme-dropdown"
            size="sm"
            block
            ghost
            className="w-full justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
          />
        </li>
        <li>
          <ThemeController.Button
            type="radio"
            name="theme-dropdown"
            size="sm"
            block
            ghost
            className="w-full justify-start"
            aria-label="Valentine"
            value="valentine"
          />
        </li>
        <li>
          <ThemeController.Button
            type="radio"
            name="theme-dropdown"
            size="sm"
            block
            ghost
            className="w-full justify-start"
            aria-label="Aqua"
            value="aqua"
          />
        </li>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
