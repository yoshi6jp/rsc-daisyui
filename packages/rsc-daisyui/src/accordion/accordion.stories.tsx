import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Join } from "..";
import { default as Accordion, AccordionBase } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  argTypes: toArgTypes(getVariantConfig(AccordionBase)),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    name: "my-accordion-1",
  },
  parameters: {
    controls: {
      exclude: ["as", "type", "open"],
    },
  },
  render: (args) => (
    <div className="flex gap-2 flex-wrap">
      <Accordion {...args} defaultChecked>
        <Accordion.Title>How do I create an account?</Accordion.Title>
        <Accordion.Content>
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          I forgot my password. What should I do?
        </Accordion.Title>
        <Accordion.Content>
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          How do I update my profile information?
        </Accordion.Title>
        <Accordion.Content>
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </Accordion.Content>
      </Accordion>
    </div>
  ),
};

export const ArrowIcon: Story = {
  ...Default,
  args: {
    name: "my-accordion-2",
    icon: "arrow",
  },
};

export const PlusMinusIcon: Story = {
  ...Default,
  args: {
    name: "my-accordion-3",
    icon: "plus",
  },
};

export const JoinTogether: Story = {
  args: {
    name: "my-accordion-4",
    className: "border border-base-300 join-item",
    icon: "arrow",
    vanilla: true,
  },
  parameters: {
    controls: {
      exclude: ["as", "type", "open"],
    },
  },
  render: (args) => (
    <Join vertical>
      <Accordion {...args} defaultChecked>
        <Accordion.Title>How do I create an account?</Accordion.Title>
        <Accordion.Content>
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          I forgot my password. What should I do?
        </Accordion.Title>
        <Accordion.Content>
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title>
          How do I update my profile information?
        </Accordion.Title>
        <Accordion.Content>
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </Accordion.Content>
      </Accordion>
    </Join>
  ),
};
