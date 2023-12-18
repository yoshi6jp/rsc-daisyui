import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: toArgTypes(getVariantConfig(Button)),
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const BrandColors: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args}>Button</Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "color"],
    },
  },
};

export const ActiveButtons: Story = {
  ...BrandColors,
  args: {
    active: true,
  },
};

export const StateColors: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "color"],
    },
  },
};

export const OutlineButtons: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
    </>
  ),
  args: {
    variant: "outline",
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "color"],
    },
  },
};

export const OutlineButtonsWithStateColors: Story = {
  ...StateColors,
  args: {
    variant: "outline",
  },
};

export const ButtonSizes: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args}>Normal</Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="xs">
        Tiny
      </Button>
    </>
  ),

  parameters: {
    controls: {
      exclude: ["as", "children", "size"],
    },
  },
};

export const ResponsiveButton: Story = {
  args: {
    children: "Responsive",
    size: "xs",
    className: "sm:btn-sm md:btn-md lg:btn-lg",
  },
};

export const WideButton: Story = {
  args: {
    children: "Wide",
    wide: true,
  },
};

export const GlassButton: Story = {
  args: {
    children: "Glass button",
    glass: true,
  },
  render: ({ children, ...args }) => (
    <div
      className="w-full h-full min-h-[6rem] -my-6 p-4 flex items-center justify-center rounded-box"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Button {...args}>{children}</Button>
    </div>
  ),
};

export const DifferentHTMLTags: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args} as="a">
        Link
      </Button>
      <Button {...args} type="submit">
        Button
      </Button>
      <Button {...args} as="input" value="Input" type="button" />
      <Button {...args} as="input" value="Submit" type="submit" />
      <Button {...args} as="input" aria-label="Radio" type="radio" />
      <Button {...args} as="input" aria-label="Checkbox" type="checkbox" />
      <Button {...args} as="input" value="Reset" type="reset" />
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children"],
    },
  },
};

export const DisabledButtons: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args} disabled={true}>
        Disabled using attributes
      </Button>
      <Button
        {...args}
        className="btn-disabled"
        role="button"
        aria-disabled="true"
      >
        Disabled using class name
      </Button>
    </>
  ),

  parameters: {
    controls: {
      exclude: ["as", "children", "disabled", "className"],
    },
  },
};

export const SquareButton: Story = {
  render: ({ ...args }) => (
    <>
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button {...args} variant="outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </>
  ),
  args: {
    shape: "square",
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "variant"],
    },
  },
};

export const CircleButton: Story = {
  ...SquareButton,
  args: {
    shape: "circle",
  },
};
export const IconAtStart: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      Button
    </Button>
  ),
};

export const IconAtEnd: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      Button
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  ),
};

export const ButtonBlock: Story = {
  args: {
    children: "block",
    block: true,
  },
};

export const LoadingSpinner: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      <span className="loading loading-spinner" />
    </Button>
  ),
  args: {
    shape: "square",
  },
};

export const LoadingSpinnerAndText: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      <span className="loading loading-spinner" />
      loading
    </Button>
  ),
};

export const WithoutClickAnimation: Story = {
  args: {
    children: "I don't have click animation",
    animation: false,
  },
};
