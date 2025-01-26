import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const Input = classed("input", "input", {
  ...configWithThemeFn({
    ghost: { true: "input-ghost" },
    color: {
      neutral: "input-neutral",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      xl: "input-xl",
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xs: "input-xs",
    },
    ...validatorVariant,
  }),
});
Input.displayName = "Input";

export default Input;
