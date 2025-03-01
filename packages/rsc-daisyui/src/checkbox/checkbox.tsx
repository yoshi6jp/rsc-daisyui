import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const Checkbox = classed("input", "checkbox", {
  ...configWithThemeFn({
    color: {
      primary: "checkbox-primary",
      neutral: "checkbox-neutral",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      success: "checkbox-success",
      warning: "checkbox-warning",
      info: "checkbox-info",
      error: "checkbox-error",
    },
    size: {
      xl: "checkbox-xl",
      lg: "checkbox-lg",
      md: "checkbox-md",
      sm: "checkbox-sm",
      xs: "checkbox-xs",
    },
    ...validatorVariant,
  }),
  defaultProps: {
    type: "checkbox",
  },
});
Checkbox.displayName = "Checkbox";
