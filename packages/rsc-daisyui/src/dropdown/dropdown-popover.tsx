import { classed } from "../classed.config";
import { Menu } from "../menu/menu";
import { VanillaDefaultVariants } from "../config";

export const commonVariants = {
  align: {
    start: "dropdown-start",
    center: "dropdown-center",
    end: "dropdown-end",
  },
  placement: {
    top: "dropdown-top",
    right: "dropdown-right",
    bottom: "dropdown-bottom",
    left: "dropdown-left",
  },
};
export const DropdownPopover = classed(
  "ul",
  "dropdown dropdown-content z-1",
  Menu,
  {
    variants: {
      ...commonVariants,
      vanilla: {
        false: "p-2 shadow bg-base-100 rounded-box",
      },
    },
    ...VanillaDefaultVariants,
    defaultProps: {
      popover: "auto",
    },
  }
);
DropdownPopover.displayName = "DropdownPopover";
