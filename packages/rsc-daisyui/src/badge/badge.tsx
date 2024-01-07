import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Badge = classed(
  "span",
  "badge",
  configWithThemeFn({
    outline: {
      true: "badge-outline",
    },
    size: {
      lg: "badge-lg",
      md: "badge-md",
      sm: "badge-sm",
      xs: "badge-xs",
    },
    color: {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      ghost: "badge-ghost",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
  })
);
