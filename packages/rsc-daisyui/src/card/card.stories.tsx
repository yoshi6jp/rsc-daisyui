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
    className: "w-96",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <Card.Body>
          <Card.Title>Shoes!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Card.Actions>
            <Button className="btn btn-primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const Compact: Story = {
  ...Default,
  args: {
    className: "w-96",
    compact: true,
  },
};

export const WithBadge: Story = {
  args: {
    className: "w-96",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <Card.Body>
          <Card.Title>
            Shoes!
            <Badge color="secondary">NEW</Badge>
          </Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Card.Actions>
            <Badge outline>Fashion</Badge>
            <Badge outline>Products</Badge>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const CenteredContentAndPaddings: Story = {
  args: {
    className: "w-96",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure className="px-10 pt-10">
          <img
            alt="Shoes"
            className="rounded-xl"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <Card.Body className="items-center text-center">
          <Card.Title>Shoes!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
    className: "w-96 image-full",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Shoes"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <Card.Body>
          <Card.Title>Shoes!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
    className: "w-96",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title>Card title!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
    vanilla: true,
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body>
          <Card.Title>Card title!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
    vanilla: true,
  },
  render: (args) => {
    return (
      <Card {...args}>
        <Card.Body className="items-center text-center">
          <Card.Title>Cookies!</Card.Title>
          <p>We are using cookies for no reason.</p>
          <Card.Actions>
            <Button color="primary">Accept</Button>
            <Button color="ghost">Deny</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    );
  },
};

export const ActionOnTop: Story = {
  args: {
    className: "w-96",
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

export const Glass: Story = {
  args: {
    className: "w-96 glass bg-inherit",
  },
  render: (args) => {
    return (
      <div
        className="no-container w-full h-full flex min-h-[6rem] p-4 item-center justify-center rounded-box"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1481026469463-66327c86e544.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Card {...args}>
          <figure>
            <img
              alt="car!"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            />
          </figure>
          <Card.Body>
            <Card.Title>Life hack</Card.Title>
            <p>How to park your car at your garage?</p>
            <Card.Actions>
              <Button color="primary">Learn now!</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    );
  },
};

export const ImageOnSide: Story = {
  args: {
    side: true,
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Movie"
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
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
    className: "lg:card-side",
  },
  render: (args) => {
    return (
      <Card {...args}>
        <figure>
          <img
            alt="Album"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
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
