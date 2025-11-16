import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Hover3D, Hover3DBase } from "./hover-3d";

const meta: Meta<typeof Hover3D> = {
  title: "Data Display/Hover 3D Card",
  component: Hover3D,
  argTypes: toArgTypes(getVariantConfig(Hover3DBase)),
};
export default meta;
type Story = StoryObj<typeof Hover3D>;

export const Default: Story = {
  name: "3D image hover effect",
  render: (args) => (
    <Hover3D {...args}>
      <figure className="max-w-100 rounded-2xl">
        <img
          src="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="3D card"
        />
      </figure>
    </Hover3D>
  ),
};

export const Card: Story = {
  name: "3D card hover effect",
  args: {
    className: "my-12 mx-2 cursor-pointer",
  },
  render: (args) => (
    <Hover3D {...args}>
      <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
        <div className="card-body">
          <div className="flex justify-between mb-10">
            <div className="font-bold">BANK OF LATVERIA</div>
            <div className="text-5xl opacity-10">❁</div>
          </div>
          <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs opacity-20">CARD HOLDER</div>
              <div>VICTOR VON D.</div>
            </div>
            <div>
              <div className="text-xs opacity-20">EXPIRES</div>
              <div>29/08</div>
            </div>
          </div>
        </div>
      </div>
    </Hover3D>
  ),
};
export const ImageGallery: Story = {
  name: "3D hover effect for image gallery",
  render: (args) => (
    <div className="flex max-sm:flex-col gap-10 p-10 max-sm:w-70">
      <Hover3D {...args}>
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-1.webp?x"
            alt="Tailwind CSS 3D card"
          />
        </figure>
      </Hover3D>

      <Hover3D {...args}>
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-2.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>

      <Hover3D {...args}>
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-3.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>
    </div>
  ),
};
