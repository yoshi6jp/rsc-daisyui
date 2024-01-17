import { classed } from "../classed.config";
import { Card } from "../card/card";
import { VanillaDefaultVariants } from "../config";

export const DropdownCard = classed("div", Card, "dropdown-content z-[1]", {
  variants: {
    vanilla: {
      false: "shadow",
    },
  },
  ...VanillaDefaultVariants,
});
DropdownCard.displayName = "DropdownCard";
