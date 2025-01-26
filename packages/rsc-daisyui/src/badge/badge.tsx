import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Badge = classed(
  "span",
  "badge",
  configWithThemeFn({
    outline: {
      true: "badge-outline",
    },
    soft: {
      true: "badge-soft",
    },
    dash: {
      true: "badge-dash",
    },
    ghost: {
      true: "badge-ghost",
    },
    size: {
      xl: "badge-xl",
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
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
  })
);
Badge.displayName = "Badge";
