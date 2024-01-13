import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Radio = classed("input", "radio", {
  ...configWithThemeFn({
    color: {
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      success: "radio-success",
      warning: "radio-warning",
      info: "radio-info",
      error: "radio-error",
    },
    size: {
      lg: "radio-lg",
      md: "radio-md",
      sm: "radio-sm",
      xs: "radio-xs",
    },
  }),
  defaultProps: {
    type: "radio",
  },
});
