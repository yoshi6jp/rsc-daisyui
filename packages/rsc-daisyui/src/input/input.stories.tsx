import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Kbd, Badge, Fieldset, Join, Validator } from "..";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Data Input/Input field",
  component: Input,
  argTypes: toArgTypes(getVariantConfig(Input)),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const TextLabelInside: Story = {
  render: (args) => {
    return (
      <div className="grid gap-4 w-xs">
        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          <svg
            role="img"
            aria-label="icon"
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input type="search" placeholder="Search" />
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="sm">K</Kbd>
        </Input>

        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          <svg
            role="img"
            aria-label="icon"
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </g>
          </svg>
          <input type="text" placeholder="index.php" />
        </Input>
        {/* @ts-expect-error: as */}
        <Input {...args} as={"label"}>
          Path
          <input type="text" placeholder="src/app/" />
          <Badge color="neutral" size="xs">
            Optional
          </Badge>
        </Input>
      </div>
    );
  },
};
export const Ghost: Story = {
  ...Default,
  args: {
    placeholder: "Type here",
    ghost: true,
  },
};

export const FieldsetAndLegend: Story = {
  args: {
    placeholder: "Type here",
  },
  render: (args) => {
    return (
      <Fieldset className="w-xs">
        <Fieldset.Legend>What is your name?</Fieldset.Legend>
        <Input {...args} />
        <Fieldset.Label as="p">Optional</Fieldset.Label>
      </Fieldset>
    );
  },
};
export const Colors: Story = {
  parameters: {
    controls: {
      exclude: ["color"],
    },
  },
  render: (args) => {
    return (
      <div className="grid gap-4 w-xs">
        <Input {...args} color="neutral" placeholder="Neutral" />
        <Input {...args} color="primary" placeholder="Primary" />
        <Input {...args} color="secondary" placeholder="Secondary" />
        <Input {...args} color="accent" placeholder="Accent" />
        <Input {...args} color="info" placeholder="Info" />
        <Input {...args} color="success" placeholder="Success" />
        <Input {...args} color="warning" placeholder="Warning" />
        <Input {...args} color="error" placeholder="Error" />
      </div>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    controls: {
      exclude: ["as", "size"],
    },
  },
  render: (args) => {
    return (
      <div className="grid w-xs gap-4">
        <Input {...args} size="xs" placeholder="Xsmall" />
        <Input {...args} size="sm" placeholder="Small" />
        <Input {...args} size="md" placeholder="Medium" />
        <Input {...args} size="lg" placeholder="Large" />
        <Input {...args} size="xl" placeholder="Xlarge" />
      </div>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    placeholder: "You can't touch this",
    disabled: true,
  },
};

export const DataListSuggestion: Story = {
  args: {
    list: "browsers",
    placeholder: "Which browser do you use",
  },
  render: (args) => {
    return (
      <>
        <Input {...args} />
        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Safari" />
          <option value="Opera" />
          <option value="Edge" />
        </datalist>
      </>
    );
  },
};

export const DateInput: Story = {
  ...Default,
  args: {
    type: "date",
  },
};
export const TimeInput: Story = {
  ...Default,
  args: {
    type: "time",
  },
};
export const DatetimeLocalInput: Story = {
  ...Default,
  args: {
    type: "datetime-local",
  },
};
export const UsernameTextWithIconAndValidator: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-20">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="input"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength={3}
            maxLength={30}
            title="Only letters, numbers or dash"
          />
        </Input>
        <Validator.Hint as="p">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </Validator.Hint>
      </form>
    );
  },
};

export const SearchInputWithIcon: Story = {
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-20">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </Input>
      </form>
    );
  },
};

export const EmailInputWithIconAndValidator: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-20">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </Input>
        <Validator.Hint>Enter valid email address</Validator.Hint>
      </form>
    );
  },
};

export const EmailInputWithIconAndValidatorButtonJoin: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-20">
        <Join>
          <div>
            {/* @ts-expect-error: as */}
            <Join.Input {...args} as="label">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </Join.Input>
            <Validator.Hint>Enter valid email address</Validator.Hint>
          </div>
          <Join.Button color="neutral">Join</Join.Button>
        </Join>
      </form>
    );
  },
};

export const PasswordInputWithIconAndValidator: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
            </g>
          </svg>
          <input
            type="password"
            required
            placeholder="Password"
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </Input>

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
export const NumberInputWithValidator: Story = {
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
      <form className="w-full max-w-xs h-20">
        <Input {...args} />
        <Validator.Hint as="p">Must be between be 1 to 10</Validator.Hint>
      </form>
    );
  },
};

export const TelephoneNumberAndValidator: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <input
            type="tel"
            className="tabular-nums"
            required
            placeholder="Phone"
            pattern="[0-9]*"
            maxLength={10}
            minLength={10}
            title="Must be 10 digits"
          />
        </Input>
        <Validator.Hint as="p">Must be 10 digits</Validator.Hint>
      </form>
    );
  },
};

export const UrlWithIconAndValidator: Story = {
  args: {
    validator: true,
  },
  render: (args) => {
    return (
      <form className="w-full max-w-xs h-36">
        {/* @ts-expect-error: as */}
        <Input {...args} as="label">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </g>
          </svg>
          <input
            type="url"
            required
            placeholder="https://"
            defaultValue="https://"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            title="Must be valid URL"
          />
        </Input>
        <Validator.Hint as="p">Must be valid URL</Validator.Hint>
      </form>
    );
  },
};
