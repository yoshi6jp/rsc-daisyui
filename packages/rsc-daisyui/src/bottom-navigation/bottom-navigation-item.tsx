import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { activeVariant } from "../config";

export const BottomNavigationLabel = classed("span", "btm-nav-label");
BottomNavigationLabel.displayName = "BottomNavigationLabel";
export const BottomNavigationItemBase = classed("button", {
  variants: {
    ...activeVariant,
  },
});

export type BottomNavigationItemProps = ComponentProps<
  typeof BottomNavigationItemBase
> & {
  label?: ReactNode;
};

export const BottomNavigationItem = deriveClassed<
  typeof BottomNavigationItemBase,
  BottomNavigationItemProps
>(({ children, label, ...rest }, ref) => (
  <BottomNavigationItemBase {...rest} ref={ref}>
    {children}
    {label ? <BottomNavigationLabel>{label}</BottomNavigationLabel> : null}
  </BottomNavigationItemBase>
));
BottomNavigationItem.displayName = "BottomNavigationItem";
