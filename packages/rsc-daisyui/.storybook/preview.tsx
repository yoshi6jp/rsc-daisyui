import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeList } from "../src";
import { PreviewLayout } from "../src/storybook-helpers";
import "../src/styles.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components.",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ThemeList,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      exclude: ["as"],
      matchers: {
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <PreviewLayout theme={context.globals.theme}>
          <Story />
        </PreviewLayout>
      );
    },
  ],
};

export default preview;
