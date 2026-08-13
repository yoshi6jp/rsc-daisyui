import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { DrawerOverlay } from "./drawer-overlay";

export const DrawerSideBase = classed("div", "drawer-side");
export type DrawerSideProps = ComponentProps<typeof DrawerSideBase> & {
  drawerId: string;
};

export const DrawerSide = forwardRef<HTMLDivElement, DrawerSideProps>(
  ({ children, drawerId, ...rest }, ref) => {
    return (
      <DrawerSideBase {...rest} ref={ref}>
        <DrawerOverlay htmlFor={drawerId} />
        {children}
      </DrawerSideBase>
    );
  },
);
DrawerSide.displayName = "DrawerSide";
