import { classed } from "../classed.config";
import { configWithThemeFn, validatorVariant } from "../config";

export const FileInput = classed("input", "file-input", {
  ...configWithThemeFn({
    ghost: {
      true: "file-input-ghost",
    },
    color: {
      neutral: "file-input-neutral",
      primary: "file-input-primary",
      secondary: "file-input-secondary",
      accent: "file-input-accent",
      info: "file-input-info",
      success: "file-input-success",
      warning: "file-input-warning",
      error: "file-input-error",
    },
    size: {
      xl: "file-input-xl",
      lg: "file-input-lg",
      md: "file-input-md",
      sm: "file-input-sm",
      xs: "file-input-xs",
    },
    ...validatorVariant,
  }),
  defaultProps: {
    type: "file",
  },
});

FileInput.displayName = "FileInput";
