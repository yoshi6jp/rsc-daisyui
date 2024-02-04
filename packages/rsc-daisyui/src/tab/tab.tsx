import { classed } from "../classed.config";

export const Tab = classed("a", "tab", {
  variants: {
    active: {
      true: "tab-active",
    },
    disabled: {
      true: "tab-disabled",
    },
  },
  defaultProps: {
    role: "tab",
  },
});
Tab.displayName = "Tab";
