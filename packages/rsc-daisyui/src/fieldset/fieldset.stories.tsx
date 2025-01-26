import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Fieldset } from ".";
import { Input, Button } from "..";

const meta: Meta<typeof Fieldset> = {
  title: "Data Input/Fieldset",
  component: Fieldset,
  argTypes: toArgTypes(getVariantConfig(Fieldset)),
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: { className: "w-xs" },
  render: (args) => {
    return (
      <Fieldset {...args}>
        <Fieldset.Legend>Page title</Fieldset.Legend>
        <Input placeholder="My awesome page" />
        <Fieldset.Label as={"p"}>
          You can edit page title later on from settings
        </Fieldset.Label>
      </Fieldset>
    );
  },
};

export const BackgroundAndBorder: Story = {
  ...Default,
  args: {
    className: "w-xs bg-base-200 border border-base-300 p-4 rounded-box",
  },
};

export const MultipleInputs: Story = {
  args: {
    className: " w-xs bg-base-200 border border-base-300 p-4 rounded-box",
  },
  render: (args) => {
    return (
      <Fieldset {...args}>
        <Fieldset.Legend>Page details</Fieldset.Legend>

        <Fieldset.Label className="fieldset-label">Title</Fieldset.Label>
        <Input placeholder="My awesome page" />

        <Fieldset.Label>Slug</Fieldset.Label>
        <Input placeholder="my-awesome-page" />

        <Fieldset.Label>Author</Fieldset.Label>
        <Input placeholder="Name" />
      </Fieldset>
    );
  },
};

export const LoginForm: Story = {
  args: {
    className: "w-xs bg-base-200 border border-base-300 p-4 rounded-box",
  },
  render: (args) => {
    return (
      <Fieldset {...args}>
        <Fieldset.Legend>Login</Fieldset.Legend>

        <Fieldset.Label>Email</Fieldset.Label>
        <Input type="email" placeholder="Email" />

        <Fieldset.Label>Password</Fieldset.Label>
        <Input type="password" placeholder="Password" />

        <Button color="neutral" className="mt-4">
          Login
        </Button>
      </Fieldset>
    );
  },
};
