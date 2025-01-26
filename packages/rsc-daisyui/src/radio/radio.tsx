import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Radio = classed("input", "radio", {
  ...configWithThemeFn({
    color: {
      neutral: "radio-neutral",
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      success: "radio-success",
      warning: "radio-warning",
      info: "radio-info",
      error: "radio-error",
    },
    size: {
      xl: "radio-xl",
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
Radio.displayName = "Radio";
