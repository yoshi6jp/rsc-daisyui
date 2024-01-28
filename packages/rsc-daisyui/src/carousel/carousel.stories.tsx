import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "Data Display/Carousel",
  component: Carousel,
  argTypes: toArgTypes(getVariantConfig(Carousel)),
};
export default meta;
type Story = StoryObj<typeof Carousel>;
export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        />
      </Carousel.Item>
    </Carousel>
  ),
};
export const SnapToCenter: Story = {
  ...Default,
  args: {
    snap: "center",
  },
};

export const SnapToEnd: Story = {
  ...Default,
  args: {
    snap: "end",
  },
};

export const FullWidthItems: Story = {
  args: {
    className: "w-64",
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        />
      </Carousel.Item>
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
    className: "h-96",
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <img
          alt="Burger"
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        />
      </Carousel.Item>
    </Carousel>
  ),
};

export const HalfWidthItems: Story = {
  args: {
    className: "w-96",
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="w-1/2">
        <img
          alt="Burger"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        />
      </Carousel.Item>
    </Carousel>
  ),
};

export const FullBleed: Story = {
  args: {
    className: "max-w-md p-4 space-x-4 bg-neutral",
    snap: "center",
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Burger"
          className="rounded-box"
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        />
      </Carousel.Item>
    </Carousel>
  ),
};

export const IndicatorButtons: Story = {
  args: {
    className: "w-full",
    vanilla: true,
  },
  render: (args) => (
    <div>
      <Carousel {...args}>
        <Carousel.Item className="w-full" id="item1">
          <img
            alt="item1"
            className="w-full"
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          />
        </Carousel.Item>
        <Carousel.Item className="w-full" id="item2">
          <img
            alt="item2"
            className="w-full"
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          />
        </Carousel.Item>
        <Carousel.Item className="w-full" id="item3">
          <img
            alt="item3"
            className="w-full"
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          />
        </Carousel.Item>
        <Carousel.Item className="w-full" id="item4">
          <img
            alt="item4"
            className="w-full"
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <div className="flex justify-center w-full py-2 gap-2">
        <Button as="a" href="#item1" size="xs">
          1
        </Button>
        <Button as="a" href="#item2" size="xs">
          2
        </Button>
        <Button as="a" href="#item3" size="xs">
          3
        </Button>
        <Button as="a" href="#item4" size="xs">
          4
        </Button>
      </div>
    </div>
  ),
};

export const NextPrevButtons: Story = {
  args: {
    className: "w-full",
    vanilla: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Item className="relative w-full" id="slide1">
        <img
          alt="slide1"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Button as="a" href="#slide4" shape="circle">
            ❮
          </Button>
          <Button as="a" href="#slide2" shape="circle">
            ❯
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="relative w-full" id="slide2">
        <img
          alt="slide2"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Button as="a" href="#slide1" shape="circle">
            ❮
          </Button>
          <Button as="a" href="#slide3" shape="circle">
            ❯
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="relative w-full" id="slide3">
        <img
          alt="slide3"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Button as="a" href="#slide2" shape="circle">
            ❮
          </Button>
          <Button as="a" href="#slide4" shape="circle">
            ❯
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="relative w-full" id="slide4">
        <img
          alt="slide4"
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Button as="a" href="#slide3" shape="circle">
            ❮
          </Button>
          <Button as="a" href="#slide1" shape="circle">
            ❯
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  ),
};
