import React from "react";
import type { Preview } from "@storybook/react-vite";
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
    controls: {
      exclude: ["as"],
      matchers: {
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          "Welcome",
          "Actions",
          "Data Display",
          "Navigation",
          "Feedback",
          "Data Input",
          "Layout",
          "Mockup",
        ],
      },
    },

    docs: {
      codePanel: true
    }
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

  tags: ["autodocs"],
};

export default preview;
