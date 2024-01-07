import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { activeVariant, disabledVariant } from "../config";

export const MenuLi = classed("li", { variants: disabledVariant });
export const MenuAnchor = classed("a", { variants: activeVariant });

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
