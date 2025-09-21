import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";
import { Filter } from ".";
import { Button } from "../";

const meta: Meta<typeof Filter> = {
  title: "Data Input/Filter",
  component: Filter,
  argTypes: toArgTypes(getVariantConfig(Filter)),
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: (args) => (
    <Filter {...args}>
      <Filter.ResetButton shape="square" value="x" />
      <Filter.Button name="frameworks" aria-label="Svelte" />
      <Filter.Button name="frameworks" aria-label="Vue" />
      <Filter.Button name="frameworks" aria-label="React" />
    </Filter>
  ),
};

export const WithoutHtmlForm: Story = {
  render: (args) => (
    <>
      {/* @ts-expect-error: as */}
      <Filter {...args} as={"div"}>
        <Filter.ResetRadio name="metaframeworks" />
        <Filter.Button name="metaframeworks" aria-label="Sveltekit" />
        <Filter.Button name="metaframeworks" aria-label="Nuxt" />
        <Filter.Button name="metaframeworks" aria-label="Next.js" />
      </Filter>
    </>
  ),
};

export const ResetButton: Story = {
  render: (args) => (
    <form>
      <Button
        as="input"
        type="checkbox"
        name="frameworks"
        aria-label="Svelte"
      />{" "}
      <Button as="input" type="checkbox" name="frameworks" aria-label="Vue" />{" "}
      <Button as="input" type="checkbox" name="frameworks" aria-label="React" />{" "}
      <Button as="input" shape="square" type="reset" value="×" />
    </form>
  ),
};
