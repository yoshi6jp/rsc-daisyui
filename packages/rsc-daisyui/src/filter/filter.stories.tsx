import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/core";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { Filter } from ".";

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
