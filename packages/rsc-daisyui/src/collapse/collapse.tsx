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
      false: "bg-base-100 border-base-300 border",
    },
  }),
  defaultProps: { tabIndex: 0 },
  ...VanillaDefaultVariants,
});
Collapse.displayName = "Collapse";
const CollapseTitle = classed("div", "collapse-title", {
  variants: {
    vanilla: {
      false: "font-semibold",
    },
  },
  ...VanillaDefaultVariants,
});
CollapseTitle.displayName = "CollapseTitle";
const CollapseContent = classed("div", "collapse-content", {
  variants: {
    vanilla: {
      false: "text-sm",
    },
  },
  ...VanillaDefaultVariants,
});
CollapseContent.displayName = "CollapseContent";

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
