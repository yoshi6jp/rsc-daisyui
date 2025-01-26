import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { Tab } from "./tab";
import { TabContent } from "./tab-content";

export const Tabs = classed("div", "tabs", {
  ...configWithThemeFn({
    decorate: {
      box: "tabs-box",
      border: "tabs-border",
      lift: "tabs-lift",
    },
    placement: {
      top: "tabs-top",
      bottom: "tabs-bottom",
    },
    size: {
      xl: "tabs-xl",
      lg: "tabs-lg",
      md: "tabs-md",
      sm: "tabs-sm",
      xs: "tabs-xs",
    },
  }),
  defaultProps: {
    role: "tablist",
  },
});
Tabs.displayName = "Tabs";

export default Object.assign(Tabs, {
  Tab,
  Content: TabContent,
});
