import { classed } from "../classed.config";

export const TabContent = classed("div", "tab-content", {
  defaultProps: {
    role: "tabpanel",
  },
});
TabContent.displayName = "TabContent";
