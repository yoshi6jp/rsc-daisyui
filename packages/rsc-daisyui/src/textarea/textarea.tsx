import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Textarea = classed("textarea", "textarea", {
  ...configWithThemeFn({
    bordered: {
      true: "textarea-bordered",
    },
    color: {
      ghost: "textarea-ghost",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      lg: "textarea-lg",
      md: "textarea-md",
      sm: "textarea-sm",
      xs: "textarea-xs",
    },
  }),
  defaultVariants: {
    bordered: true,
  },
});
