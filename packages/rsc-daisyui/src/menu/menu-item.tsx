import type { ComponentProps } from "react";
import { classed, deriveClassed } from "@tw-classed/react";
import type { IVarConfWithoutDataAttributes } from "../config";

export const menuItemConfig: IVarConfWithoutDataAttributes = {
  variants: {
    disabled: {
      true: "disabled",
    },
    active: {
      true: "active",
    },
  },
};

export const MenuLi = classed("li", menuItemConfig);

export type MenuItemProps = ComponentProps<typeof MenuLi>;
export const MenuItem = deriveClassed<typeof MenuLi, MenuItemProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MenuLi {...rest} ref={ref}>
        <a>{children}</a>
      </MenuLi>
    );
  }
);
