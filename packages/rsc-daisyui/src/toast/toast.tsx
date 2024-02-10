import { classed } from "../classed.config";

export const Toast = classed("div", "toast", {
  variants: {
    horizontal: {
      start: "toast-start",
      center: "toast-center",
      end: "toast-end",
    },
    vertical: {
      top: "toast-top",
      middle: "toast-middle",
      bottom: "toast-bottom",
    },
  },
});
Toast.displayName = "Toast";
