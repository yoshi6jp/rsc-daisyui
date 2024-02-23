import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const FileInput = classed("input", "file-input", {
  ...configWithThemeFn({
    bordered: {
      true: "file-input-bordered",
    },
    color: {
      ghost: "file-input-ghost",
      primary: "file-input-primary",
      secondary: "file-input-secondary",
      accent: "file-input-accent",
      info: "file-input-info",
      success: "file-input-success",
      warning: "file-input-warning",
      error: "file-input-error",
    },
    size: {
      lg: "file-input-lg",
      md: "file-input-md",
      sm: "file-input-sm",
      xs: "file-input-xs",
    },
  }),
  defaultVariants: {
    bordered: true,
  },
  defaultProps: {
    type: "file",
  },
});

FileInput.displayName = "FileInput";
