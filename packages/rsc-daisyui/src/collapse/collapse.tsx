import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const Collapse = classed("div", "collapse", {
  ...configWithThemeFn({
    icon: {
      arrow: "collapse-arrow",
      plus: "collapse-plus",
    },
    open: {
      true: "collapse-open",
      false: "collapse-close",
    },
    vanilla: {
      false: "bg-base-200",
    },
  }),
  defaultProps: { tabIndex: 0 },
  ...VanillaDefaultVariants,
});
Collapse.displayName = "Collapse";
const CollapseTitle = classed("div", "collapse-title", {
  variants: {
    vanilla: {
      false: "text-xl font-medium",
    },
  },
  ...VanillaDefaultVariants,
});
CollapseTitle.displayName = "CollapseTitle";
const CollapseContent = classed("div", "collapse-content");
CollapseContent.displayName = "CollapseContent";

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
