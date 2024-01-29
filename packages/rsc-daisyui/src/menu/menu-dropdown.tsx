import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { MenuLi } from "./menu-item";

export const MenuDropdownToggle = classed("span", "menu-dropdown-toggle", {
  variants: {
    open: {
      true: "menu-dropdown-show",
    },
  },
});
MenuDropdownToggle.displayName = "MenuDropdownToggle";
export const MenuDropdownBase = classed("ul", "menu-dropdown", {
  variants: {
    open: {
      true: "menu-dropdown-show",
    },
  },
});
MenuDropdownBase.displayName = "MenuDropdownBase";

export type MenuDropdownProps = ComponentProps<typeof MenuDropdownToggle> & {
  label: ReactNode;
};

export const MenuDropdown = deriveClassed<
  typeof MenuDropdownToggle,
  MenuDropdownProps
>(({ children, open, label, ...rest }, ref) => (
  <MenuLi>
    <MenuDropdownToggle {...rest} open={open} ref={ref}>
      {label}
    </MenuDropdownToggle>
    <MenuDropdownBase open={open}>{children}</MenuDropdownBase>
  </MenuLi>
));
MenuDropdown.displayName = "MenuDropdown";
