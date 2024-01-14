import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Input = classed("input", "input", {
  ...configWithThemeFn({
    bordered: {
      true: "input-bordered",
    },
    color: {
      ghost: "input-ghost",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xs: "input-xs",
    },
  }),
  defaultVariants: {
    bordered: true,
  },
});
Input.displayName = "Input";
