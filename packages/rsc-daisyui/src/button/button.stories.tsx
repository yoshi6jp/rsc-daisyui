import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Loading } from "../loading";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
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
      <Button {...args} color="link">
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
    outline: true,
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
    outline: true,
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
      className="no-container w-full h-full min-h-[6rem] p-4 flex items-center justify-center rounded-box"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Button {...args}>{children}</Button>
    </div>
  ),
};

export const DifferentHTMLTags: Story = {
  render: (args) => (
    <>
      {/* @ts-expect-error: as */}
      <Button {...args} as="a">
        Link
      </Button>
      <Button {...args} type="submit">
        Button
      </Button>
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="button" value="Input" />
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="submit" value="Submit" />
      {/* @ts-expect-error: as */}
      <Button {...args} aria-label="Radio" as="input" type="radio" />
      {/* @ts-expect-error: as */}
      <Button {...args} aria-label="Checkbox" as="input" type="checkbox" />
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="reset" value="Reset" />
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
      <Button {...args} disabled>
        Disabled using attributes
      </Button>
      <Button
        {...args}
        aria-disabled="true"
        className="btn-disabled"
        role="button"
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
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Button>
      <Button {...args} outline>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
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
      Button
    </Button>
  ),
};

export const IconAtEnd: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      Button
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
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
      <Loading />
    </Button>
  ),
  args: {
    shape: "square",
  },
};

export const LoadingSpinnerAndText: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      <Loading />
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
