import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Artboard = classed("div", "artboard", {
  ...configWithThemeFn({
    demo: {
      true: "artboard-demo",
    },
    size: {
      "1": "phone-1",
      "2": "phone-2",
      "3": "phone-3",
      "4": "phone-4",
      "5": "phone-5",
      "6": "phone-6",
    },
    horizontal: {
      true: "artboard-horizontal",
    },
  }),
  defaultVariants: {
    demo: true,
    size: "1",
  },
});
Artboard.displayName = "Artboard";
