import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Alert = classed("div", "alert", {
  ...configWithThemeFn({
    color: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    outline: {
      true: "alert-outline",
    },
    dash: {
      true: "alert-dash",
    },
    soft: {
      true: "alert-soft",
    },
    direction: {
      vertical: "alert-vertical",
      horizontal: "alert-horizontal",
    },
  }),
  defaultProps: {
    role: "alert",
  },
});
Alert.displayName = "Alert";
