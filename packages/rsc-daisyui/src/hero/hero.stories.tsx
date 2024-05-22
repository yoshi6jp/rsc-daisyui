import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button, Input, Label, FormControl, Card } from "..";
import { Hero } from ".";

const meta: Meta<typeof Hero> = {
  title: "Layout/Hero",
  component: Hero,
  argTypes: toArgTypes(getVariantConfig(Hero)),
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    className: "min-h-[30rem] bg-base-200 rounded",
  },
  render: (args) => {
    return (
      <Hero {...args}>
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    );
  },
};

export const WithFigure: Story = {
  args: {
    className: "min-h-[30rem] bg-base-200 rounded",
  },
  render: (args) => {
    return (
      <Hero {...args}>
        <Hero.Content className="flex-col lg:flex-row">
          <img
            alt="logo"
            className="max-w-sm rounded-lg shadow-2xl"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    );
  },
};

export const FigureButReverseOrder: Story = {
  args: {
    className: "min-h-[30rem] bg-base-200 rounded",
  },
  render: (args) => {
    return (
      <Hero {...args}>
        <Hero.Content className="flex-col lg:flex-row-reverse">
          <img
            alt="logo"
            className="max-w-sm rounded-lg shadow-2xl"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    );
  },
};
export const WithForm: Story = {
  args: {
    className: "min-h-[30rem] bg-base-200 rounded",
  },
  render: (args) => {
    return (
      <Hero {...args}>
        <Hero.Content className="flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <Card
            className="shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            vanilla
          >
            <Card.Body>
              <FormControl>
                <Label>
                  <Label.Text>Email</Label.Text>
                </Label>
                <Input placeholder="email" required type="email" />
              </FormControl>
              <FormControl>
                <Label>
                  <Label.Text>Password</Label.Text>
                </Label>
                <Input placeholder="password" required type="password" />
                <Label className="label">
                  <Label.TextAlt as="a" className="link link-hover" href="#">
                    Forgot password?
                  </Label.TextAlt>
                </Label>
              </FormControl>
              <FormControl className="mt-6">
                <Button color="primary">Login</Button>
              </FormControl>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    );
  },
};

export const WithOverlayImage: Story = {
  args: {
    className: "min-h-[30rem] rounded",
    style: {
      backgroundImage:
        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
    },
  },
  render: (args) => {
    return (
      <Hero {...args}>
        <Hero.Overlay className="bg-opacity-60 rounded" />
        <Hero.Content className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    );
  },
};
