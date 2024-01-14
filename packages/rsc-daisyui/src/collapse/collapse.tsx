import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Collapse = classed(
  "div",
  "collapse bg-base-200",
  configWithThemeFn({
    icon: {
      arrow: "collapse-arrow",
      plus: "collapse-plus",
    },
    open: {
      true: "collapse-open",
      false: "collapse-close",
    },
  })
);
Collapse.displayName = "Collapse";
const CollapseTitle = classed("div", "collapse-title text-xl font-medium");
CollapseTitle.displayName = "CollapseTitle";
const CollapseContent = classed("div", "collapse-content");
CollapseContent.displayName = "CollapseContent";

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
