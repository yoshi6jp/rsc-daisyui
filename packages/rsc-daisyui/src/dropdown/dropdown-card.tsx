import { classed } from "../classed.config";
import { cardConfig } from "../card/card";

export const DropdownCard = classed("div", {
  ...cardConfig,
  base: "card dropdown-content z-[1] shadow bg-base-100",
});
