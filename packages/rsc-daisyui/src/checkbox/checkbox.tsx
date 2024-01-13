import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Checkbox = classed("input", "checkbox", {
  ...configWithThemeFn({
    color: {
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      success: "checkbox-success",
      warning: "checkbox-warning",
      info: "checkbox-info",
      error: "checkbox-error",
    },
    size: {
      lg: "checkbox-lg",
      md: "checkbox-md",
      sm: "checkbox-sm",
      xs: "checkbox-xs",
    },
  }),
  defaultProps: {
    type: "checkbox",
  },
});
