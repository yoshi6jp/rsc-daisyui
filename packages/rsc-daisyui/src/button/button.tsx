import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const buttonConfig = {
  base: "btn",
  ...configWithThemeFn({
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
  }),
};

export const Button = classed("button", buttonConfig);
