import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Input, Checkbox, Toggle, Select, Textarea } from "..";
import { Validator } from ".";

const meta: Meta<typeof Input> = {
  title: "Data Input/Validator",
  component: Validator.Hint,
  args: {
    validator: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    validator: true,
    type: "email",
    required: true,
    placeholder: "main@site.com",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
export const ValidatorHint: Story = {
  args: {
    validator: true,
    type: "email",
    required: true,
    placeholder: "main@site.com",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint as="p">Enter valid email address</Validator.Hint>
      </form>
    );
  },
};
export const PasswordRequirement: Story = {
  args: {
    validator: true,
    type: "password",
    required: true,
    placeholder: "Password",
    minLength: 8,
    pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    title:
      "Must be more than 8 characters, including number, lowercase letter, uppercase letter",
  },

  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint as="p">
          Must be more than 8 characters, including
          <br />
          At least one number
          <br />
          At least one lowercase letter
          <br />
          At least one uppercase letter
        </Validator.Hint>
      </form>
    );
  },
};
export const UsernameRequirement: Story = {
  args: {
    validator: true,
    required: true,
    placeholder: "Username",
    pattern: "[A-Za-z][A-Za-z0-9\-]*",
    minLength: 3,
    maxLength: 30,
    title: "Only letters, numbers or dash",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint as="p">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </Validator.Hint>
      </form>
    );
  },
};

export const PhoneNumberRequirement: Story = {
  args: {
    validator: true,
    type: "tel",
    required: true,
    placeholder: "Phone",
    pattern: "[0-9]*",
    minLength: 10,
    maxLength: 10,
    title: "Must be 10 digits",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint as="p" className="validator-hint">
          Must be 10 digits
        </Validator.Hint>
      </form>
    );
  },
};

export const URLInputRequirement: Story = {
  args: {
    validator: true,
    type: "url",
    required: true,
    placeholder: "https://",
    defaultValue: "https://",
    pattern:
      "^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$",
    title: "Must be valid URL",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint as="p">Must be valid URL</Validator.Hint>
      </form>
    );
  },
};

export const DateInputRequirement: Story = {
  args: {
    validator: true,
    type: "date",
    required: true,
    placeholder: "Pick a date in 2025",
    min: "2025-01-01",
    max: "2025-12-31",
    title: "Must be 2025",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint className="validator-hint">Must be 2025</Validator.Hint>
      </form>
    );
  },
};

export const NumberInputRequirement: Story = {
  args: {
    validator: true,
    type: "number",
    required: true,
    placeholder: "Type a number between 1 to 10",
    min: 1,
    max: 10,
    title: "Must be between be 1 to 10",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Input {...args} />
        <Validator.Hint>Must be between be 1 to 10</Validator.Hint>
      </form>
    );
  },
};
export const TextareaRequirement: StoryObj<typeof Textarea> = {
  args: {
    validator: true,
    required: true,
    placeholder: "Bio",
    title: "Required",
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        <Textarea {...args} />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};
export const CheckboxRequirement: StoryObj<typeof Checkbox> = {
  args: {
    validator: true,
    required: true,
    title: "Required",
  },
  render: (args) => {
    return (
      <form>
        <Checkbox {...args} />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};
export const ToggleRequirement: StoryObj<typeof Toggle> = {
  args: {
    validator: true,
    required: true,
    title: "Required",
  },
  render: (args) => {
    return (
      <form>
        <Toggle {...args} />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};

export const SelectRequirement: StoryObj<typeof Select> = {
  args: {
    validator: true,
    required: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs">
        <Select {...args}>
          <option disabled selected value="">
            Choose:
          </option>
          <option>Tabs</option>
          <option>Spaces</option>
        </Select>
        <Validator.Hint as="p">Required</Validator.Hint>
        <Button type="submit">Submit form</Button>
      </form>
    );
  },
};
