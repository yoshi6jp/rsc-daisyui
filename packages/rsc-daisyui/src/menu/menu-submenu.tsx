import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { MenuLi, MenuAnchor } from "./menu-item";

export type MenuSubmenuProps = ComponentProps<typeof MenuAnchor> & {
  label: ReactNode;
  ulClassName?: string;
};

export const MenuSubmenu = deriveClassed<typeof MenuAnchor, MenuSubmenuProps>(
  ({ children, label, ulClassName, ...rest }, ref) => (
    <MenuLi>
      <MenuAnchor {...rest} ref={ref}>
        {label}
      </MenuAnchor>
      <ul className={ulClassName}>{children}</ul>
    </MenuLi>
  )
);
MenuSubmenu.displayName = "MenuSubmenu";

export const MenuDetails = classed("details");
MenuDetails.displayName = "MenuDetails";
export type MenuCollapseProps = ComponentProps<typeof MenuDetails> & {
  label: ReactNode;
  ulClassName?: string;
};
export const MenuCollapse = deriveClassed<
  typeof MenuDetails,
  MenuCollapseProps
>(({ children, label, ulClassName, ...rest }, ref) => (
  <MenuLi>
    <MenuDetails {...rest} ref={ref}>
      <summary>{label}</summary>
      <ul className={ulClassName}>{children}</ul>
    </MenuDetails>
  </MenuLi>
));
MenuCollapse.displayName = "MenuCollapse";
