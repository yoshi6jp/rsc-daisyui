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
  }),
  defaultProps: {
    role: "alert",
  },
});
