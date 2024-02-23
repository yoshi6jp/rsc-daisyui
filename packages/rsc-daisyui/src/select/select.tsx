import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Select = classed("select", "select", {
  ...configWithThemeFn({
    bordered: {
      true: "select-bordered",
    },
    color: {
      ghost: "select-ghost",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
    },
    size: {
      lg: "select-lg",
      md: "select-md",
      sm: "select-sm",
      xs: "select-xs",
    },
  }),
  defaultVariants: {
    bordered: true,
  },
});
Select.displayName = "Select";
