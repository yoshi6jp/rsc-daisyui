import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
  render: ({ validator }) => {
    return (
      <Input
        validator={validator}
        type="email"
        required
        placeholder="main@site.com"
      />
    );
  },
};
export const ValidatorHint: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="email"
          required
          placeholder="main@site.com"
        />
        <Validator.Hint>Enter valid email address</Validator.Hint>
      </form>
    );
  },
};
export const PasswordRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="password"
          required
          placeholder="Password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
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
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="input"
          className="input validator"
          required
          placeholder="Username"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minLength={3}
          maxLength={30}
          title="Only letters, numbers or dash"
        />
        <Validator.Hint>
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </Validator.Hint>
      </form>
    );
  },
};

export const PhoneNumberRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="tel"
          required
          placeholder="Phone"
          pattern="[0-9]*"
          minLength={10}
          maxLength={10}
          title="Must be 10 digits"
        />
        <Validator.Hint as="p" className="validator-hint">
          Must be 10 digits
        </Validator.Hint>
      </form>
    );
  },
};

export const URLInputRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="url"
          required
          placeholder="https://"
          value="https://"
          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
          title="Must be valid URL"
        />
        <Validator.Hint as="p">Must be valid URL</Validator.Hint>
      </form>
    );
  },
};

export const DateInputRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="date"
          required
          placeholder="Pick a date in 2025"
          min="2025-01-01"
          max="2025-12-31"
          title="Must be 2025"
        />
        <Validator.Hint className="validator-hint">Must be 2025</Validator.Hint>
      </form>
    );
  },
};

export const NumberInputRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Input
          validator={validator}
          type="number"
          required
          placeholder="Type a number between 1 to 10"
          min="1"
          max="10"
          title="Must be between be 1 to 10"
        />
        <Validator.Hint>Must be between be 1 to 10</Validator.Hint>
      </form>
    );
  },
};
export const TextareaRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Textarea
          validator={validator}
          required
          placeholder="Bio"
          title="Required"
        />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};
export const CheckboxRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form>
        <Checkbox validator={validator} required title="Required" />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};
export const ToggleRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form>
        <Toggle validator={validator} required title="Required" />
        <Validator.Hint as="p">Required</Validator.Hint>
      </form>
    );
  },
};

export const SelectRequirement: Story = {
  render: ({ validator }) => {
    return (
      <form className="w-full max-w-xs">
        <Select validator={validator} required>
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
