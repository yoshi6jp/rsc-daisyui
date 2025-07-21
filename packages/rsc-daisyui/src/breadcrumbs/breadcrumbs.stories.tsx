import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { BreadcrumbsBase, Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: toArgTypes(getVariantConfig(BreadcrumbsBase)),
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Document</a>
      </li>
      <li>Add Document</li>
    </Breadcrumbs>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <li>
        <a className="gap-2" href="#">
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Home
        </a>
      </li>
      <li>
        <a className="gap-2">
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Documents
        </a>
      </li>
      <li>
        <span className="inline-flex gap-2 items-center">
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Add Document
        </span>
      </li>
    </Breadcrumbs>
  ),
};

export const MaxWidth: Story = {
  args: {
    className: "max-w-xs",
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <li>Long text 1</li>
      <li>Long text 2</li>
      <li>Long text 3</li>
      <li>Long text 4</li>
      <li>Long text 5</li>
    </Breadcrumbs>
  ),
};
