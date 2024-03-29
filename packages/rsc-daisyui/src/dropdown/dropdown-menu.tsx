import { classed } from "../classed.config";
import { Menu } from "../menu/menu";
import { VanillaDefaultVariants } from "../config";

export const DropdownMenu = classed("ul", "dropdown-content z-[1]", Menu, {
  variants: {
    vanilla: {
      false: "p-2 shadow bg-base-100 rounded-box",
    },
  },
  ...VanillaDefaultVariants,
});
DropdownMenu.displayName = "DropdownMenu";
