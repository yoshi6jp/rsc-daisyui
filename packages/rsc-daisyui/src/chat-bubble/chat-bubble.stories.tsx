import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Chat } from ".";

const meta: Meta<typeof Chat.Bubble> = {
  title: "Data Display/Chat bubble",
  component: Chat.Bubble,
  argTypes: toArgTypes(getVariantConfig(Chat.Bubble)),
};

export default meta;
type Story = StoryObj<typeof Chat.Bubble>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full">
      <Chat>
        <Chat.Bubble {...args}>
          It&apos;s over Anakin, <br />I have the high ground.
        </Chat.Bubble>
      </Chat>
      <Chat align="end">
        <Chat.Bubble {...args}>You underestimate my power!</Chat.Bubble>
      </Chat>
    </div>
  ),
};

export const WithImage: StoryObj<typeof Chat> = {
  parameters: {
    controls: {
      exclude: ["as", "color"],
    },
  },
  argTypes: toArgTypes(getVariantConfig(Chat)),
  render: (args) => (
    <div className="w-full">
      <Chat {...args}>
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Bubble>
          It was said that you would, destroy the Sith, not join them.
        </Chat.Bubble>
      </Chat>
      <Chat {...args}>
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Bubble>
          It was you who would bring balance to the Force
        </Chat.Bubble>
      </Chat>
      <Chat {...args}>
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Bubble>Not leave it in Darkness</Chat.Bubble>
      </Chat>
    </div>
  ),
};

export const ImageHeaderAndFooter: Story = {
  render: (args) => (
    <div className="w-full">
      <Chat>
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Header time="12:45">Obi-Wan Kenobi</Chat.Header>
        <Chat.Bubble {...args}>You were the Chosen One!</Chat.Bubble>
        <Chat.Footer>Delivered</Chat.Footer>
      </Chat>
      <Chat align="end">
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Header time="12:46">Anakin</Chat.Header>
        <Chat.Bubble {...args}>I hate you!</Chat.Bubble>
        <Chat.Footer>Seen at 12:46</Chat.Footer>
      </Chat>
    </div>
  ),
};
export const HeaderAndFooter: Story = {
  render: (args) => (
    <div className="w-full">
      <Chat>
        <Chat.Header time="2 hours ago">Obi-Wan Kenobi</Chat.Header>
        <Chat.Bubble {...args} className="chat-bubble">
          You were the Chosen One!
        </Chat.Bubble>
        <Chat.Footer>Seen</Chat.Footer>
      </Chat>
      <Chat>
        <Chat.Header className="chat-header" time="2 hour ago">
          Obi-Wan Kenobi
        </Chat.Header>
        <Chat.Bubble {...args}>I loved you.</Chat.Bubble>
        <Chat.Footer>Delivered</Chat.Footer>
      </Chat>
    </div>
  ),
};

export const Colors: StoryObj<typeof Chat> = {
  parameters: {
    controls: {
      exclude: ["as", "align", "color"],
    },
  },
  argTypes: toArgTypes(getVariantConfig(Chat)),

  render: (args) => (
    <div className="w-full">
      <Chat {...args}>
        <Chat.Bubble color="primary">What kind of nonsense is this</Chat.Bubble>
      </Chat>
      <Chat {...args}>
        <Chat.Bubble color="secondary">
          Put me on the Council and not make me a Master!??
        </Chat.Bubble>
      </Chat>
      <Chat {...args}>
        <Chat.Bubble className="chat-bubble chat-bubble-accent">
          That&apos;s never been done in the history of the Jedi. It&apos;s
          insulting!
        </Chat.Bubble>
      </Chat>
      <Chat align="end">
        <Chat.Bubble color="info">Calm down, Anakin.</Chat.Bubble>
      </Chat>
      <Chat align="end">
        <Chat.Bubble className="chat-bubble chat-bubble-success">
          You have been given a great honor.
        </Chat.Bubble>
      </Chat>
      <Chat align="end">
        <Chat.Bubble color="warning">
          To be on the Council at your age.
        </Chat.Bubble>
      </Chat>
      <Chat align="end">
        <Chat.Bubble color="error">
          It&apos;s never happened before.
        </Chat.Bubble>
      </Chat>
    </div>
  ),
};
