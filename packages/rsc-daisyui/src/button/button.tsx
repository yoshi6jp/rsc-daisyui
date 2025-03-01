import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Button = classed(
  "button",
  "btn",
  configWithThemeFn({
    color: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    outline: {
      true: "btn-outline",
    },
    soft: {
      true: "btn-soft",
    },
    dash: {
      true: "btn-dash",
    },
    ghost: {
      true: "btn-ghost",
    },
    link: {
      true: "btn-link",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
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
  })
);
Button.displayName = "Button";
