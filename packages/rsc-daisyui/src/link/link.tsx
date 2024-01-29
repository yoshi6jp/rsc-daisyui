import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Link = classed(
  "a",
  "link",
  configWithThemeFn({
    hover: {
      true: "link-hover",
    },
    color: {
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      accent: "link-accent",
      success: "link-success",
      info: "link-info",
      warning: "link-warning",
      error: "link-error",
    },
  })
);
Link.displayName = "Link";
