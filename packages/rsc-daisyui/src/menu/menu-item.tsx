import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { activeVariant, disabledVariant } from "../config";

export const MenuLi = classed("li", { variants: disabledVariant });
MenuLi.displayName = "MenuLi";
export const MenuAnchor = classed("a", { variants: activeVariant });
MenuAnchor.displayName = "MenuAnchor";

export type MenuItemProps = ComponentProps<typeof MenuAnchor> & {
  disabled?: boolean;
};

export const MenuItem = deriveClassed<typeof MenuAnchor, MenuItemProps>(
  ({ children, disabled, ...rest }, ref) => {
    return (
      <MenuLi disabled={disabled}>
        <MenuAnchor {...rest} ref={ref}>
          {children}
        </MenuAnchor>
      </MenuLi>
    );
  }
);
MenuItem.displayName = "MenuItem";
