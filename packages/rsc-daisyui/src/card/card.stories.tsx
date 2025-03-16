import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Badge, Button } from "..";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  argTypes: toArgTypes(getVariantConfig(Card)),
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </figure>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button className="btn btn-primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const Pricing: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Badge size="xs" color="warning">
            Most Popular
          </Badge>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">$29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">Seamless cloud integration</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                Real-time collaboration tools
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <Button color="primary" block>
              Subscribe
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  },
};
export const Sizes: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  parameters: {
    controls: {
      exclude: ["as", "children", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="grid gap-6">
        <Card {...args} size="xs">
          <Card.Body>
            <Card.Title>Xsmall Card</Card.Title>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card {...args} size="sm">
          <Card.Body>
            <Card.Title>Small Card</Card.Title>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card {...args} size="md">
          <Card.Body>
            <Card.Title>Medium Card</Card.Title>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card {...args} size="lg">
          <Card.Body>
            <Card.Title>Large Card</Card.Title>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Card {...args} size="xl">
          <Card.Body>
            <Card.Title>Xlarge Card</Card.Title>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    );
  },
};
export const WithBorder: Story = {
  args: {
    className: "w-96",
    border: true,
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title as="h2">Card Title</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};
export const WithDashBorder: Story = {
  ...WithBorder,
  args: {
    className: "w-96",
    dash: true,
  },
};
export const WithBadge: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </figure>
        <Card.Body>
          <Card.Title>
            Card Title
            <Badge color="secondary">NEW</Badge>
          </Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Badge outline>Fashion</Badge>
            <Badge outline>Products</Badge>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const WithBottomImage: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </Card.Body>
        <figure>
          <img
            alt="Shoes"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </figure>
      </Card>
    );
  },
};

export const CenteredContentAndPaddings: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure className="px-10 pt-10">
          <img
            alt="Shoes"
            className="rounded-xl"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </figure>
        <Card.Body className="items-center text-center">
          <Card.Title>Card Title</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const ImageOverlay: Story = {
  args: {
    className: "w-96 image-full shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </figure>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const NoImage: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title>Card title!</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const CustomColor: Story = {
  args: {
    className: "w-96 bg-primary text-primary-content",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title>Card title!</Card.Title>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Card.Actions>
            <Button>Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const CenteredWithNeutralColor: Story = {
  args: {
    className: "w-96 bg-neutral text-neutral-content",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body className="items-center text-center">
          <Card.Title>Cookies!</Card.Title>
          <p>We are using cookies for no reason.</p>
          <Card.Actions>
            <Button color="primary">Accept</Button>
            <Button ghost={true}>Deny</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const ActionOnTop: Story = {
  args: {
    className: "w-96 shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Actions>
            <Button shape="square" size="sm">
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
          </Card.Actions>
          <p>We are using cookies for no reason.</p>
        </Card.Body>
      </Card>
    );
  },
};

export const ImageOnSide: Story = {
  args: {
    side: true,
    className: "shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Movie"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          />
        </figure>
        <Card.Body>
          <Card.Title>New movie is released!</Card.Title>
          <p>Click the button to watch on Jetflix app.</p>
          <Card.Actions>
            <Button color="primary">Watch</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const Responsive: Story = {
  args: {
    className: "lg:card-side shadow-sm",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Album"
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
        </figure>
        <Card.Body>
          <Card.Title>New album is released!</Card.Title>
          <p>Click the button to listen on Spotiwhy app.</p>
          <Card.Actions>
            <Button color="primary">Listen</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};
