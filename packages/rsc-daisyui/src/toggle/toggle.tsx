import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Toggle = classed("input", "toggle", {
  ...configWithThemeFn({
    color: {
      primary: "toggle-primary",
      secondary: "toggle-secondary",
      accent: "toggle-accent",
      success: "toggle-success",
      warning: "toggle-warning",
      info: "toggle-info",
      error: "toggle-error",
    },
    size: {
      lg: "toggle-lg",
      md: "toggle-md",
      sm: "toggle-sm",
      xs: "toggle-xs",
    },
  }),
  defaultProps: {
    type: "checkbox",
  },
});
