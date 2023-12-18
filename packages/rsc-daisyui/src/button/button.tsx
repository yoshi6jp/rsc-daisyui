import { classed } from "@tw-classed/react";
import { ThemeVariants } from "../theme";

export const Button = classed("button", "btn", {
  variants: {
    color: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    variant: {
      outline: "btn-outline",
      link: "btn-link",
    },
    size: {
      lg: "btn-lg",
      md: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
    },
    wide: {
      true: "btn-wide",
    },
    glass: {
      true: "glass",
    },
    disabled: {
      true: "btn-disabled",
    },
    shape: {
      square: "btn-square",
      circle: "btn-circle",
    },
    block: {
      true: "btn-block",
    },
    animation: {
      false: "no-animation",
    },
    active: {
      true: "btn-active",
    },
    theme: ThemeVariants,
  },
  dataAttributes: ["theme"],
});
