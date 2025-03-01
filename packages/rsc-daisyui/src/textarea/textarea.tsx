import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const Textarea = classed("textarea", "textarea", {
  ...configWithThemeFn({
    ghost: {
      true: "textarea-ghost",
    },
    color: {
      neutral: "textarea-neutral",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      xl: "textarea-xl",
      lg: "textarea-lg",
      md: "textarea-md",
      sm: "textarea-sm",
      xs: "textarea-xs",
    },
    ...validatorVariant,
  }),
});
