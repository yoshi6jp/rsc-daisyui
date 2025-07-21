import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

/*
 * ESLint configuration for rsc-daisyui package
 * Using ESLint 9 flat config format
 */

export default [
  // Ignore patterns (should be first)
  {
    ignores: [
      "node_modules/",
      "dist/",
      "storybook-static/",
      "**/*.css",
      ".eslintrc.js",
    ],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript and React files configuration
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: true,
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Custom rules to match previous configuration
      "import/no-default-export": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "react-hooks/rules-of-hooks": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "react/no-array-index-key": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off", // Not needed in React 17+

      // Disable some rules that might cause issues
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "no-useless-escape": "warn",

      // Allow console for development
      "no-console": "warn",
    },
  },

  // Storybook files configuration
  {
    files: ["src/**/*.stories.{js,jsx,ts,tsx}"],
    plugins: {
      storybook,
    },
    rules: {
      // Allow any for stories
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
