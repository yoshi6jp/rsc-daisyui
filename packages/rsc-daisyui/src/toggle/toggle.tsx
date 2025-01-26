import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const Toggle = classed("input", "toggle", {
  ...configWithThemeFn({
    color: {
      neutral: "toggle-neutral",
      primary: "toggle-primary",
      secondary: "toggle-secondary",
      accent: "toggle-accent",
      success: "toggle-success",
      warning: "toggle-warning",
      info: "toggle-info",
      error: "toggle-error",
    },
    size: {
      xl: "toggle-xl",
      lg: "toggle-lg",
      md: "toggle-md",
      sm: "toggle-sm",
      xs: "toggle-xs",
    },
    ...validatorVariant,
  }),
  defaultProps: {
    type: "checkbox",
  },
});
Toggle.displayName = "Toggle";
