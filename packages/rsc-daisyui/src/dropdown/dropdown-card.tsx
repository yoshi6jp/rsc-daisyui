import { classed } from "../classed.config";
import { Card } from "../card/card";
import { VanillaDefaultVariants } from "../config";

export const DropdownCard = classed("div", "dropdown-content z-[1]", Card, {
  variants: {
    vanilla: {
      false: "bg-base-100 shadow",
    },
  },
  ...VanillaDefaultVariants,
  defaultProps: {
    tabIndex: 0,
  },
});
DropdownCard.displayName = "DropdownCard";
