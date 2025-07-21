import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

/*
 * ESLint configuration for Next.js web app
 * Using ESLint 9 flat config format
 */

export default [
  // Ignore patterns (should be first)
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "**/*.css",
      ".eslintrc.js",
    ],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript and React files configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
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
        React: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React recommended rules
      ...react.configs.recommended.rules,

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // TypeScript recommended rules (basic subset)
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      // Next.js rules (manually added since the plugin may not have flat config support yet)
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-unwanted-polyfillio": "error",
      "@next/next/no-page-custom-font": "error",

      // Custom rules to match previous configuration
      "import/no-default-export": "off",
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off",

      // Allow console for development
      "no-console": "warn",

      // Disable some problematic rules
      "no-undef": "off", // TypeScript handles this
    },
  },
];
