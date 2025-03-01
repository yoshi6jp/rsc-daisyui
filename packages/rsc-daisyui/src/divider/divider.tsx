import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Divider = classed(
  "div",
  "divider",
  configWithThemeFn({
    color: {
      neutral: "divider-neutral",
      primary: "divider-primary",
      secondary: "divider-secondary",
      accent: "divider-accent",
      success: "divider-success",
      warning: "divider-warning",
      info: "divider-info",
      error: "divider-error",
    },
    direction: {
      vertical: "divider-vertical",
      horizontal: "divider-horizontal",
    },
    placement: {
      start: "divider-start",
      end: "divider-end",
    },
  })
);

Divider.displayName = "Divider";
