import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const DockLabel = classed("span", "dock-label");
DockLabel.displayName = "DockLabel";
export const DockItemBase = classed("button", {
  variants: {
    active: {
      true: "dock-active",
    },
  },
});

export type DockItemProps = ComponentProps<typeof DockItemBase> & {
  label?: ReactNode;
};

export const DockItem = deriveClassed<typeof DockItemBase, DockItemProps>(
  ({ children, label, ...rest }, ref) => (
    <DockItemBase {...rest} ref={ref}>
      {children}
      {label ? <DockLabel>{label}</DockLabel> : null}
    </DockItemBase>
  )
);
DockItem.displayName = "DockItem";
