import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const Select = classed("select", "select", {
  ...configWithThemeFn({
    ghost: {
      true: "select-ghost",
    },
    color: {
      neutral: "select-neutral",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
    },
    size: {
      xl: "select-xl",
      lg: "select-lg",
      md: "select-md",
      sm: "select-sm",
      xs: "select-xs",
    },
    ...validatorVariant,
  }),
});
Select.displayName = "Select";
